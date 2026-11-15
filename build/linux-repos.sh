#!/bin/sh
# Signed Linux repositories for the site image (Containerfile stages "apt" and "rpm").
#
#   linux-repos.sh apt     <dir with the .deb>      <out>   -> <out>/linux/apt/dists/...
#   linux-repos.sh rpm     <dir with the .rpm>      <out>   -> <out>/linux/rpm/repodata/...
#   linux-repos.sh flatpak <dir with the .flatpak>  <out>   -> <out>/linux/flatpak/ (OSTree repo)
#
# The package files themselves are not copied: nginx serves /linux/apt/pool/<deb> and
# /linux/rpm/<rpm> from /download/, so the image holds one copy of each. Each repository
# holds only the release pinned in content/site.data.json.
#
# Signing key: the build secret "gpg" (/run/secrets/gpg), the armored secret key of
# DentalCraft Releases. It must match the public key keys/dentalcraft.gpg. A release
# without a package of this kind is skipped, and then the secret is not needed.
set -eu

mode=$1 in=$2 out=$3
pubkey=${PUBKEY:-/src/keys/dentalcraft.gpg}
secret=/run/secrets/gpg
mkdir -p "$out"

case $mode in
  apt) ext=deb ;;
  rpm) ext=rpm ;;
  flatpak) ext=flatpak ;;
  *) echo "usage: linux-repos.sh apt|rpm|flatpak <in> <out>" >&2; exit 2 ;;
esac
set -- "$in"/*."$ext"
if [ ! -e "$1" ]; then
  echo "linux-repos: no .$ext in this release, no $mode repository"
  exit 0
fi
[ $# -eq 1 ] || { echo "linux-repos: more than one .$ext: $*" >&2; exit 1; }
pkg=$1
[ -s "$secret" ] || { echo "linux-repos: build secret 'gpg' is missing (DENTALCRAFT_GPG_KEY): it signs the $mode repository" >&2; exit 1; }

GNUPGHOME=$(mktemp -d)
export GNUPGHOME
work=$(mktemp -d)
trap 'gpgconf --kill all 2>/dev/null || true; rm -rf "$GNUPGHOME" "$work"' EXIT
gpg --batch --quiet --import "$secret"
fpr=$(gpg --batch --with-colons --show-keys "$pubkey" | awk -F: '$1 == "fpr" { print $10; exit }')
gpg --batch --list-secret-keys "$fpr" >/dev/null 2>&1 \
  || { echo "linux-repos: the gpg secret is not the key of keys/dentalcraft.gpg ($fpr)" >&2; exit 1; }
sign() { gpg --batch --yes --local-user "$fpr" --digest-algo SHA512 "$@"; }

case $mode in
  apt)
    [ "$(dpkg-deb -f "$pkg" Package)" = dentalcraft ] || { echo "linux-repos: $pkg is not the dentalcraft package" >&2; exit 1; }
    mkdir -p "$work/pool" "$work/dists/stable/main/binary-amd64"
    cp "$pkg" "$work/pool/"
    cd "$work"
    apt-ftparchive packages pool >dists/stable/main/binary-amd64/Packages
    gzip -9nk dists/stable/main/binary-amd64/Packages
    apt-ftparchive \
      -o APT::FTPArchive::Release::Origin=DentalCraft \
      -o APT::FTPArchive::Release::Label=DentalCraft \
      -o APT::FTPArchive::Release::Suite=stable \
      -o APT::FTPArchive::Release::Codename=stable \
      -o APT::FTPArchive::Release::Architectures=amd64 \
      -o APT::FTPArchive::Release::Components=main \
      -o "APT::FTPArchive::Release::Description=DentalCraft releases" \
      release dists/stable >Release
    mv Release dists/stable/Release
    sign --clearsign -o dists/stable/InRelease dists/stable/Release
    sign --armor --detach-sign -o dists/stable/Release.gpg dists/stable/Release
    mkdir -p "$out/linux/apt"
    cp -r dists "$out/linux/apt/"
    cat dists/stable/main/binary-amd64/Packages
    ;;
  rpm)
    # The package must carry a valid signature by the release key (signed by the app's release job).
    rpmkeys --import "$pubkey"
    rpmkeys --checksig "$pkg" | grep -q 'digests signatures OK' \
      || { rpmkeys --checksig -v "$pkg" >&2; echo "linux-repos: $pkg is not signed by the release key" >&2; exit 1; }
    cp "$pkg" "$work/"
    createrepo_c --no-database "$work"
    sign --armor --detach-sign -o "$work/repodata/repomd.xml.asc" "$work/repodata/repomd.xml"
    mkdir -p "$out/linux/rpm"
    cp -r "$work/repodata" "$out/linux/rpm/"
    ;;
  flatpak)
    repo=$out/linux/flatpak
    ostree --repo="$repo" init --mode=archive-z2
    flatpak build-import-bundle --gpg-sign="$fpr" --gpg-homedir="$GNUPGHOME" "$repo" "$pkg"
    ref=$(ostree --repo="$repo" refs | grep '^app/')
    case $ref in
      app/com.dentalcraft.DentalCraft/x86_64/stable) ;;
      *) echo "linux-repos: unexpected ref in the bundle: $ref" >&2; exit 1 ;;
    esac
    flatpak build-update-repo --gpg-sign="$fpr" --gpg-homedir="$GNUPGHOME" \
      --title=DentalCraft --default-branch=stable --prune "$repo"
    rm -rf "$repo/tmp" "$repo/.lock"
    ostree --repo="$repo" refs
    du -sh "$repo"
    ;;
esac
echo "linux-repos: $mode repository signed with $fpr"

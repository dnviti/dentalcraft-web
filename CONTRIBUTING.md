# Contributing to dentalcraft-web

Thank you for your interest. This is a small project with one maintainer, so please keep changes focused and talk before you do something big.

Before you start, read the [README](README.md), the [Code of Conduct](CODE_OF_CONDUCT.md) and the [licence](LICENSE.md).

## Before you write

- Open an issue first for anything larger than a small fix, so the direction is agreed before you spend time.
- Do not add dependencies. The site is plain HTML, CSS and JavaScript built by a dependency-free Node script.
- The site sets no cookies, loads nothing from third parties and has no analytics. Do not add any.
- Statuses on the site (exists, in progress, planned) must be true. Never show a function as working when the application does not have it, and never announce dates.
- Nothing on the site is a clinical claim. DentalCraft is not a certified medical device.
- Do not add secrets, host names or other details of private infrastructure to any file. Never commit the release secret keys.
- **Never commit patient data.** Screenshots must come from synthetic data.

## Licence of your contribution

This project is source-available under the [PolyForm Noncommercial License 1.0.0](LICENSE.md). By sending a contribution (a pull request, a patch, or any other code, text or data) you agree to the following:

1. You wrote it, or you have the right to submit it under these terms (see the sign-off below).
2. You keep the copyright in your contribution.
3. You grant Daniele Viti a perpetual, worldwide, non-exclusive, royalty-free, irrevocable licence to use, copy, modify, distribute and sublicense your contribution, as part of this project or on its own, **under any licence terms, including commercial ones**. This lets the author relicense the project, for example to offer commercial licences.
4. Your contribution is also available to everyone under the PolyForm Noncommercial License 1.0.0, like the rest of the project.

This text is a plain-language agreement, not legal advice, and it has not been reviewed by a lawyer. If you cannot agree to it, do not send a contribution.

## Sign-off (Developer Certificate of Origin)

Every commit needs a `Signed-off-by` line with your real name and email. It says you accept the [Developer Certificate of Origin 1.1](https://developercertificate.org/). Git adds it for you:

```sh
git commit -s -m "fix: describe the change"
```

A pull request with unsigned commits is not merged.

## Development loop

You need Node.js 18 or later.

```sh
node build/build.mjs       # builds dist/ and checks every link
npm run serve              # builds and serves dist/ on http://127.0.0.1:8080
```

The build also needs the release files of the application named in `content/site.data.json` (see "Downloads" in the README). Without them it stops with the command to fetch them. If you only change copy or styles, ask in the issue for the files.

## Rules every change follows

- **English and Italian.** Edit `content/site.en.json` and `content/site.it.json` together. The build fails if their keys differ. Keep `content/site-copy.*.md` in step.
- **One place for statuses.** `content/site.data.json` feeds both languages.
- **Accessible.** Keep the contrast, the focus order, the captions and the reduced-motion behaviour that the pages already have.
- **Fonts.** A font file added under `src/assets/fonts/` needs its licence text next to it, and a link from the About page.

## Branches, commits and pull requests

- Work on a branch named `feat/...` or `fix/...`, and open a pull request against `main`.
- Use [Conventional Commits](https://www.conventionalcommits.org/): `feat:`, `fix:`, `docs:`, `chore:`. The pull request is squash-merged and its title becomes the commit message, so the title must follow the same format.
- Release pins, downloads and the "What's new" block are updated by the maintainer with every application release. Do not change them in a pull request.
- Do not change `.github/workflows/*` unless an issue asks for it.

## Reporting problems

- Bugs and ideas: open an issue. Describe what you did, what you expected and what happened.
- Security problems: do not open a public issue. Follow [`SECURITY.md`](SECURITY.md).

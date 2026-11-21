# Security policy

## Reporting a vulnerability

Please report security problems **privately**. Do not open a public issue or pull request.

1. Use GitHub private vulnerability reporting: open <https://github.com/dnviti/dentalcraft-web/security/advisories/new> (Security tab, "Report a vulnerability"). Or
2. Send an email to hello@dentalcraft.app with the subject `Security: dentalcraft-web`.

Please include what you found, the URL or file, steps to reproduce, and what you think the impact is. **Never send real patient data, scans or project files.**

This is a one-person project. Reports are handled on a best-effort basis, with no guaranteed response time. Please give a reasonable time to fix a problem before you disclose it in public. You will be credited in the fix unless you prefer not to be.

## Scope

In scope: the site at https://dentalcraft.app and its source in this repository, including the build scripts, the nginx configuration, the Linux package repositories (`/linux/`), the download files and checksums, and the signed update feed (`/update/stable.json`) that the application trusts.

Of particular interest: anything that could make the application download or install a file that was not signed by the DentalCraft release keys, a wrong or missing signature, and anything that leaks a secret key.

Out of scope: the closed DentalCraft account server, the application itself (report it in [`dentalcraft-app`](https://github.com/dnviti/dentalcraft-app/security/advisories/new)), and third-party software and services.

## Supported versions

Only the live site and the latest release receive fixes.

## Medical-device disclaimer

DentalCraft is **not a certified medical device**. It has no regulatory clearance and has not been validated for clinical use. The software is provided as is, without warranty, as the [licence](LICENSE.md) says.

Configure these GitHub Actions secrets before using the deploy workflow:

- `CPANEL_HOST`: FTP/FTPS host from your cPanel provider.
- `CPANEL_PORT`: Optional. Usually `21` for FTP/FTPS.
- `CPANEL_USER`: cPanel/FTP username.
- `CPANEL_PASSWORD`: cPanel/FTP password.
- `CPANEL_REMOTE_DIR`: Optional. Defaults to `public_html`.

Recommended values for this project:

- Branch: `master`
- Remote directory: `public_html`

Notes:

- The workflow builds the site and uploads the generated `out/` folder.
- Do not commit real credentials into the repository. Store them only in GitHub Secrets.
- The cPanel login URL is not always the same as the FTP host. If `cwbpartners.com.br` does not work as the host, ask the hosting provider for the FTP or FTPS server name.

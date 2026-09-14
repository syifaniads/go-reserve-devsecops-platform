# Security and Sanitization Policy

This repository is a public portfolio mirror of a collaborative university project.

## Intentionally excluded

The repository should not contain:

- private deployment IP addresses;
- SSH private keys or credentials;
- production/local `.env` files;
- database passwords;
- session secrets;
- access tokens or API keys;
- private user data;
- generated database dumps.

## Historical source

The original organization repositories may contain environment-specific values from the lab/deployment environment. Those values are not intentionally reproduced here.

## Reporting a problem

If you notice a secret or sensitive environment value in this mirror, open an issue without reposting the secret itself and identify only the affected file/path.
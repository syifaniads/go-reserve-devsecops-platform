# CI/CD Workflow

The original team repository includes a Jenkins pipeline that packages and deploys Go Reserve as a Docker container to a remote VM.

## Pipeline stages

1. **Checkout** — Jenkins checks out the repository.
2. **Build Image** — the application image is built from `app-web/`.
3. **Transfer Image** — the image is exported with `docker save`, compressed, and transferred to the deployment VM through SSH/SCP.
4. **Deploy** — the VM loads the image, stops/removes the previous container, and starts the new application container.
5. **Database setup** — Prisma database setup and seed commands run inside the new container.
6. **Verify** — Jenkins performs an HTTP request against the deployed service and fails the build if the endpoint is unreachable.

```mermaid
flowchart LR
    A[Checkout] --> B[Docker Build]
    B --> C[Export Image]
    C --> D[SCP to VM]
    D --> E[Docker Load]
    E --> F[Replace Container]
    F --> G[Prisma Setup]
    G --> H[Seed]
    H --> I[HTTP Verify]
```

## Why the portfolio pipeline is sanitized

The historical `Jenkinsfile` contains an internal VM address, deployment account names and environment-specific identifiers. `Jenkinsfile.example` preserves the engineering flow but replaces those values with variables/placeholders.

## Operational strengths

- `disableConcurrentBuilds()` avoids overlapping deployment jobs.
- Jenkins SSH credentials are referenced through a credential identifier instead of embedding a private key in the pipeline.
- the running container is configured with a restart policy;
- deployment has an explicit verification stage;
- database initialization is part of the deployment flow rather than an undocumented manual step.

## Production improvements

A production-grade evolution would improve this flow by:

- publishing immutable images to a registry instead of transferring tarballs;
- using health checks rather than a fixed sleep before verification;
- using `prisma migrate deploy` rather than schema-push semantics for controlled production migrations;
- separating one-time database seeding from every deployment;
- avoiding `StrictHostKeyChecking=no` and managing trusted SSH host keys;
- adding rollback to the previous image if health verification fails;
- deploying with a non-root runtime image and explicit resource limits;
- adding SAST, dependency scanning, image scanning and automated tests before the deploy stage.

The purpose of preserving the pipeline here is to show the original delivery workflow while also documenting how it could be hardened for production.
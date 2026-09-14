# Source Evidence

This personal repository is curated from collaborative work in the `dso-1` GitHub organization.

## Original repositories

### Broader DevSecOps repository

https://github.com/dso-1/project

Relevant original artifacts include:

- `Jenkinsfile` — Docker build, image transfer, remote VM deployment, Prisma setup and verification;
- `app-web/` — Go Reserve application source;
- `Multi_Project_CI_CD_Architecture.pptx.pdf` — architecture/presentation material.

### Go Reserve application repository

https://github.com/dso-1/kelompok1_website

This repository contains another collaborative copy/history of the room-reservation application.

## Direct portfolio-owner evidence

A commit associated with the `syifaniads` GitHub account adds the multi-project CI/CD architecture presentation to the broader project repository:

https://github.com/dso-1/project/commit/961df611d3c6fa2b708e93c054148c19379d5098

## Representative source mapping

| Portfolio file | Original source |
|---|---|
| `prisma/schema.prisma` | `dso-1/project/app-web/prisma/schema.prisma` |
| `src/features/auth/api/auth.server.ts` | `dso-1/project/app-web/src/features/auth/api/auth.server.ts` |
| `src/features/reservations/api/reservations.api.ts` | `dso-1/project/app-web/src/features/reservations/api/reservations.api.ts` |
| `src/features/dashboard/api/dashboard.api.ts` | `dso-1/project/app-web/src/features/dashboard/api/dashboard.api.ts` |
| `Dockerfile` | `dso-1/project/app-web/Dockerfile` |
| `docker-compose.yml` | `dso-1/project/app-web/docker-compose.yml` |
| `Jenkinsfile.example` | sanitized from `dso-1/project/Jenkinsfile` |

## Attribution boundary

The application was team-built. This repository intentionally avoids claiming sole authorship of the codebase. It exists to make the collaborative engineering work inspectable from the portfolio owner's GitHub profile while preserving links to the original organization history.

Some team development was performed from shared laptops, meaning local Git author configuration is not necessarily a complete person-by-person contribution map. For that reason, team/project attribution is separated from direct individual GitHub evidence.
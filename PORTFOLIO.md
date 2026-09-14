# Portfolio Summary

## Go Reserve DevSecOps Platform

**Project type:** Collaborative full-stack + DevOps engineering project  
**Team context:** Kelompok 1 / `dso-1`  
**Stack:** TanStack Start, React, TypeScript, Prisma, PostgreSQL, Bun, Docker, Jenkins

### One-line summary

Collaboratively built and delivered a university room-reservation platform with role-based workflows, server-side reservation conflict checks, PostgreSQL persistence, Docker packaging, and Jenkins-based deployment to a remote VM.

### Portfolio description

Go Reserve is a collaborative reservation platform for university rooms. The application provides separate student/admin workflows, authentication, room management, reservation approval, user management, dashboard statistics, and booking-conflict validation. The engineering project also included containerization and a Jenkins CI/CD pipeline that built the application image, transferred it to a deployment VM, replaced the running container, initialized the Prisma database layer, and verified the deployed service.

This personal repository is a curated mirror of the team project rather than a sole-authorship claim. Original organization repositories and contribution context are documented in `SOURCE_EVIDENCE.md` and `TEAM_ATTRIBUTION.md`.

### Skills demonstrated

- Collaborative full-stack development
- TypeScript / React / TanStack Start
- Server-side business logic
- Authentication and password hashing
- Role-aware application flows
- Prisma ORM and PostgreSQL data modeling
- Reservation conflict detection
- Docker containerization
- Jenkins pipelines
- SSH-based deployment workflows
- Database migration/seed workflows
- Deployment verification
- Architecture documentation
- Git/GitHub team workflow

### CV-ready bullets

- Contributed to a collaborative room-reservation platform built with TanStack Start, TypeScript, Prisma and PostgreSQL, covering authentication, admin/student workflows, room management, reservations, and dashboard aggregation.
- Worked within a DevSecOps delivery workflow using Docker and Jenkins to build, transfer, deploy and verify application containers on a remote VM.
- Participated in the broader project as group lead, helping coordinate delivery and architecture/presentation work across the team while preserving shared authorship of the application codebase.

### Interview discussion points

A technical reviewer can ask about:

- how overlapping reservations are detected;
- why reservation validation belongs on the server side;
- how the Prisma model represents users, rooms and reservations;
- how role information is carried through authentication/session handling;
- how the Jenkins pipeline moves an image to a remote VM;
- risks of running DB seed/schema operations on every deployment;
- how the original pipeline could be upgraded to use an image registry, health checks and rollback;
- how collaborative authorship is represented transparently in a personal portfolio.
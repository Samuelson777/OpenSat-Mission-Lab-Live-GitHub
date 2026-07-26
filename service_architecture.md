# v2.0 Service Architecture

```text
Clients / STAC tools / notebooks
              |
              v
       FastAPI REST service
   /health /metrics /api /stac
        |                 |
        |                 +--> Indexed raster assets
        v
 SQLite developer DB or PostgreSQL/PostGIS
        |
        v
 Transactional service_jobs queue
        |
        v
 One or more background workers
        |
        +--> catalog exports
        +--> scene discovery/indexing
        +--> flood time-series processing
        +--> generated dashboards and reports
```

## Local mode

SQLite stores scene metadata, jobs, worker heartbeats, and event history. Raster pixels remain in GeoTIFF assets. One API process and one worker are sufficient for home-PC use.

## Service mode

PostgreSQL/PostGIS stores scene footprints and jobs. The worker claims queued jobs with `FOR UPDATE SKIP LOCKED`, allowing horizontal worker replicas without duplicate claims. Prometheus scrapes the API metrics endpoint.

## Public interfaces

- REST scene catalogue: `/api/v1/scenes`
- Processing jobs: `/api/v1/jobs`
- Worker status: `/api/v1/workers`
- STAC landing page: `/stac`
- STAC search: `/stac/search`
- OpenAPI schema: `/openapi.json`
- Interactive API documentation: `/docs`
- Health: `/health/live`, `/health/ready`
- Metrics: `/metrics`

## Boundaries

The STAC layer implements a documented 1.0.0-aligned subset and has not undergone external certification. The reference containers do not include object storage, TLS termination, centralized identity, log aggregation, or automated backups.

## v2.2 governance plane

The service plane now resolves each authenticated request into a principal, role, and tenant. Tenant context is applied to jobs and governance resources. API requests create append-only audit events linked through SHA-256 hashes. Secrets are encrypted before persistence. Published assets can be retained as immutable versions and evaluated by lifecycle policies. Recovery drills create and restore isolated database backups, compare governance counts, and verify the audit chain while measuring RPO/RTO proxies.

External OIDC deployments may validate asymmetric tokens through a JWKS URL. The reproducible local scenario uses HS256 only to avoid depending on an external identity service.

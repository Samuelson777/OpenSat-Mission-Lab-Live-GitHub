# Requirements Traceability

The authoritative v1.1 traceability product is generated at runtime:

```text
outputs/acceptance/requirements_traceability.csv
```

Each row contains:

- requirement identifier;
- subsystem;
- requirement statement;
- verification method;
- evidence file;
- PASS or FAIL status;
- measured result.

The generated HTML view is:

```text
outputs/acceptance/verification_report.html
```

Requirements are implemented as executable checks in `src/opensatlab/verification/system.py`, so the traceability matrix reflects the actual release run rather than a manually maintained claim.

The v2.0 service-specific smoke-test evidence is generated separately because it exercises HTTP, authentication, STAC, metrics, and a background worker rather than the seven-day spacecraft scenario:

```text
outputs/services/service_validation.csv
outputs/services/release_validation.json
outputs/services/service_validation_dashboard.html
```

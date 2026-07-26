# Engineering Requirements — v1.1

| ID | Requirement | Verification |
|---|---|---|
| MIS-001 | The simulator shall load a complete mission from YAML. | Automated test |
| ORB-001 | The simulator shall propagate two-body and first-order J2 dynamics. | Unit and regression tests |
| ENV-001 | The simulator shall provide a sampled sunlight/eclipse history. | Unit test |
| GND-001 | The simulator shall calculate ground-station elevation, range, and contact windows. | Unit and scenario test |
| PAY-001 | The simulator shall calculate target access and daylight imaging opportunities. | Unit and scenario test |
| PAY-002 | The simulator shall schedule image attempts and generate payload data. | Unit and scenario test |
| EPS-001 | The simulator shall calculate solar generation from sunlight and configured array parameters. | Unit test |
| EPS-002 | The simulator shall integrate battery energy and state of charge. | Unit test |
| EPS-003 | The simulator shall apply nominal, imaging, downlink, and safe-mode loads. | Unit test |
| EPS-004 | The simulator shall enter and recover from safe mode using configured SOC thresholds. | Unit and scenario test |
| EPS-005 | The simulator shall suppress imaging and downlink when safe mode is active. | Unit and scenario test |
| COM-001 | The simulator shall calculate free-space path loss from range and frequency. | Unit test |
| COM-002 | The simulator shall calculate C/N0 and Eb/N0 link margin. | Unit test |
| COM-003 | The simulator shall select the highest configured data rate meeting the minimum margin. | Unit and scenario test |
| COM-004 | The simulator shall require station visibility and a powered downlink mode before transmitting data. | Unit and scenario test |
| COM-005 | The simulator shall apply protocol efficiency to available transfer capacity. | Unit test |
| COM-006 | The simulator shall remove successfully transmitted data from onboard storage without producing negative storage. | Unit and scenario test |
| COM-007 | The simulator shall produce sample-level link, transfer, and pass-level communications reports. | Scenario output test |
| REP-001 | Generated reports shall use stable UTF-8 CSV schemas without pandas. | Automated test |
| DEV-001 | The project shall run on Python 3.10+ and include VS Code setup profiles. | Setup validation |

## v0.6 attitude requirements

| ID | Requirement | Verification |
|---|---|---|
| ADCS-001 | The simulator shall generate nadir, target, Sun, and ground-station attitude references. | Unit and scenario test |
| ADCS-002 | The simulator shall reduce deployment body rates below a configurable detumble threshold. | Unit and scenario test |
| ADCS-003 | The controller shall use noisy attitude and gyro measurements. | Scenario output review |
| ADCS-004 | Reaction-wheel torque and momentum shall not exceed configured limits. | Unit and scenario test |
| ADCS-005 | Momentum dumping shall be initiated before wheel saturation. | Scenario regression |
| ADCS-006 | Imaging shall be rejected when target-pointing error exceeds the configured requirement. | Unit test |
| ADCS-007 | The simulator shall report attitude state, pointing compliance, body rates, wheel momentum, and event windows. | Scenario output test |


## v0.7 flight-software requirements

| ID | Requirement | Verification |
|---|---|---|
| FSW-001 | The simulator shall execute a boot, initialization, operational, safe-mode, and reboot state machine. | Unit and scenario test |
| FSW-002 | Time-tagged commands shall be validated, authorized, acknowledged, or rejected with a reason. | Unit and scenario test |
| FSW-003 | A processor-heartbeat timeout shall trigger an autonomous watchdog reset. | Unit and scenario test |
| FSW-004 | Critical sensor faults shall request safe mode and a recovery hold. | Scenario regression |
| FSW-005 | The simulator shall generate periodic sequence-numbered telemetry packets with CRC-32. | Unit and scenario test |
| FSW-006 | Flight-software safe mode and payload-standby commands shall inhibit imaging and downlink. | Unit and scenario test |
| FSW-007 | The simulator shall write software history, command, event, telemetry, fault, reset, and state-machine reports. | Scenario output test |


## v0.8 mission-control requirements

| ID | Requirement | Verification |
|---|---|---|
| MOC-001 | The simulator shall consolidate operator alarms across power, ADCS, payload, communications, faults, and watchdog events. | Unit and scenario test |
| MOC-002 | The simulator shall assign ground-contact priorities and planned operator actions. | Unit and scenario test |
| MOC-003 | The simulator shall generate a chronological operations schedule covering contacts, payload activities, eclipses, faults, safe modes, and commands. | Unit test |
| MOC-004 | The simulator shall combine executed commands with recommended post-fault command opportunities. | Unit and scenario test |
| MOC-005 | The simulator shall generate a self-contained interactive HTML dashboard without pandas or a web framework. | Automated output test |
| MOC-006 | The dashboard command console shall be planning-only and shall export local JSON without transmitting commands. | Browser review |
| MOC-007 | The project shall provide a local dashboard server and VS Code launch profile. | Setup validation |

## Reliability requirements

- **REL-001:** The software shall generate an FMEA covering the principal spacecraft and operations subsystems.
- **REL-002:** The software shall distinguish initial risk scoring from residual risk after existing controls.
- **REL-003:** The software shall run a seeded Monte Carlo campaign with configurable trial count and success criteria.
- **REL-004:** The software shall report mission-success probability and mutually exclusive failure outcomes.
- **REL-005:** The software shall create a mission-objective fault tree and risk register.
- **REL-006:** The software shall detect and consolidate explainable anomaly windows from mission telemetry.
- **REL-007:** The software shall export reliability products in human-readable and machine-readable formats.


## v1.1 release-verification requirements

- **VER-001:** Every major subsystem requirement shall map to an executable verification check and evidence artifact.
- **VER-002:** The release shall compare selected equations with analytical reference values and explicit tolerances.
- **VER-003:** The release status shall be PASS only when every requirement and benchmark passes.
- **VER-004:** The acceptance command shall return a nonzero exit code when release verification fails.
- **VER-005:** Generated outputs shall be recorded in a SHA-256 artifact manifest.
- **VER-006:** The repository shall include repeatable Windows, Unix, VS Code, and CI acceptance workflows.

## v1.1 validation and HIL requirements

- **VAL-001:** The project shall compare the primary two-body integrator with an independently implemented universal-variable propagator.
- **VAL-002:** The project shall generate external-tool interchange requests, a compatible CSV template, and a reusable comparison command.
- **HIL-001:** The project shall replay sequence-numbered CRC-protected telemetry through localhost UDP with complete ordered delivery in the acceptance scenario.
- **HIL-002:** The project shall export a newline-delimited telemetry stream suitable for pipes and gateway software.


## v1.3 constellation requirements

- **CON-001:** The software shall generate unique Walker-style orbital slots and finite common-grid states for every configured spacecraft.
- **CON-002:** The software shall calculate per-satellite target opportunities and generate a coordinated schedule that suppresses near-duplicate and spacecraft-conflicting observations.
- **CON-003:** The software shall compare single-satellite and coordinated-constellation revisit metrics.
- **CON-004:** The software shall calculate pairwise range, Earth-occultation-aware line of sight, crosslink windows, and sampled network connectivity.
- **CON-005:** The software shall produce a conflict-free one-channel shared ground-station schedule.
- **CON-006:** The software shall export constellation states, access, schedules, crosslinks, network history, plots, summary, and an HTML dashboard.


## v1.4 conjunction-safety and autonomy requirements

- **SSA-001:** The software shall screen every protected constellation spacecraft against the configured deterministic object catalogue and report sampled time of closest approach, miss distance, relative speed, uncertainty proxy, and risk level.
- **SSA-002:** High and critical screening events shall produce an avoidance-maneuver trade study.
- **SSA-003:** Selected maneuver recommendations shall meet the configured post-maneuver miss-distance target in the educational displacement model.
- **SSA-004:** Recommended burns shall generate safety blackout windows for task planning.
- **OPS-001:** The constellation scheduler shall produce a conflict-checked safety-aware optimized imaging plan.
- **OPS-002:** The scheduler shall regenerate the plan after a simulated spacecraft outage and target-priority escalation.
- **OPS-003:** The software shall export screening, maneuver, optimization, replanning, summary, plot, and HTML dashboard products.

## v1.5 onboard-autonomy and edge-intelligence requirements

- **AUT-001:** The software shall generate deterministic scene assessments for coordinated imaging candidates.
- **AUT-002:** Every flood-event score shall include exported per-feature explainability contributions.
- **AUT-003:** The decision layer shall use battery SOC, storage occupancy, scene quality, and estimated downlink delay.
- **AUT-004:** The software shall support priority downlink, standard downlink, low-quality discard, low-power defer, and ground-review hold actions.
- **AUT-005:** Target-level evidence shall produce traceable priority updates.
- **AUT-006:** The autonomy layer shall produce a duplicate-suppressed, spacecraft-conflict-checked task plan.
- **AUT-007:** The software shall export edge-compute resource budgets, plots, summary, and a self-contained HTML dashboard.


## v1.6 Earth-observation requirements

- **EO-001:** The software shall ingest and calibrate a georeferenced multispectral raster containing visible, NIR, SWIR, and reference-class bands.
- **EO-002:** The software shall calculate finite NDWI, MNDWI, NDVI, and brightness products and statistics.
- **EO-003:** The bundled validation scene shall achieve F1 of at least 0.75 and IoU of at least 0.60 against its reference mask.
- **EO-004:** The software shall export overlapping tile metrics, confusion-matrix evidence, threshold sensitivity, figures, summary, and a self-contained HTML dashboard.

## v1.7 Temporal Earth-observation requirements

- **TMP-001:** Estimate the known multi-date correction shift and reduce registration error.
- **TMP-002:** Validate optical/SAR new-flood detection with F1 at least 0.75 and IoU at least 0.60.
- **TMP-003:** Produce a positive new-flood area and a two-date progression series.
- **TMP-004:** Generate registration, change, fusion, progression, and dashboard artifacts.

## v2.0 service-platform requirements

- **SVC-001:** The API shall expose liveness, readiness, scene-catalogue, job, worker, and Prometheus-metrics endpoints.
- **SVC-002:** The STAC layer shall expose a 1.0.0-aligned landing page, collections, items, and GET/POST item search.
- **SVC-003:** Processing-job submission shall support API-key enforcement when a key is configured.
- **SVC-004:** A database-backed worker shall claim and execute queued jobs without duplicate claims.
- **SVC-005:** Local mode shall operate with SQLite, while optional PostgreSQL/PostGIS mode shall provide spatial footprints and a GiST index.
- **SVC-006:** The repository shall include API and worker containers, Docker Compose, Prometheus, Kubernetes reference assets, and health checks.
- **SVC-007:** The service demonstration shall export OpenAPI, STAC, metrics, CSV evidence, summary, plot, and an interactive validation dashboard.

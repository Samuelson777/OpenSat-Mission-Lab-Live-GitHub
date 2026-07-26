# Architecture Overview — v1.1

```text
Mission YAML
    |
    v
Orbit and environment ----------> Ground and target geometry
    |                                  |
    |                                  +--> Contacts and imaging opportunities
    v
Payload scheduling ----------> Power mode requests
                                  |
                                  v
Battery and safe-mode simulation
                                  |
                                  v
Attitude guidance and control
    +--> Detumble
    +--> Nadir / target / station / Sun references
    +--> Sensor noise and wheel control
    +--> Pointing compliance and image gating
                                  |
                                  v
Flight-software supervision
    +--> Commands and acknowledgements
    +--> Limit monitoring and event log
    +--> Heartbeat, watchdog, reboot, recovery
    +--> Telemetry packets and operational inhibits
                                  |
                                  v
RF link budget <--------------- Station range and visibility
    +--> C/N0 and Eb/N0 margin
    +--> Adaptive data rate
    +--> Power-aware downlink
                                  |
                                  v
Payload data handling
    +--> Add accepted image data
    +--> Remove transmitted data
    +--> Storage history
                                  |
                                  v
Mission-control products
    +--> Consolidated alarms
    +--> Pass and command plans
    +--> Operations timeline
    +--> Interactive local dashboard
                                  |
                                  v
CSV reports, plots, and mission summary
```

## Module boundaries

- `mission`: typed configuration and validation.
- `orbit`: state initialization, dynamics, propagation, and coordinate transforms.
- `environment`: Sun direction and eclipse state.
- `ground`: WGS-84 station geometry and sampled windows.
- `payload`: target geometry, image scheduling, and data generation.
- `power`: mode requests, battery integration, and autonomous safe mode.
- `attitude`: quaternion references, detumbling, sensor noise, wheel control, and momentum dumping.
- `communications`: RF budget, adaptive data rate, pass analysis, and storage depletion.
- `flight_software`: state machine, commands, telemetry, fault injection, watchdog, and recovery.
- `mission_control`: alarms, pass scheduling, command planning, operations timeline, browser dashboard, and local server.
- `constellation`: Walker-style slots, coordinated imaging, crosslinks, network graphs, and shared ground resources.
- `safety`: seeded object screening, risk triage, maneuver trades, task optimization, and autonomous replanning.
- `reporting`: stable CSV schemas, figures, and summary products.

Each subsystem is intentionally replaceable. Higher-fidelity orbit, ADCS, power, radio, payload, or ground-system models can be introduced without changing the mission configuration and report orchestration pattern.

## v1.1 reliability-analysis layer

The deterministic mission results feed a separate reliability pipeline. This layer does not rerun high-fidelity orbital dynamics for every trial; instead, it uses a documented seeded surrogate uncertainty model around the verified baseline. The pipeline produces FMEA rows, Monte Carlo outcomes, a mission risk register, an OR-gate fault tree, anomaly events, plots, and a self-contained reliability dashboard.

## v1.1 validation and HIL layer

```text
Primary RK4 two-body propagation ──┐
                                  ├─> aligned error comparison ─> validation report
Universal-variable reference ─────┘

Telemetry packets ─> OSML-HIL/1 frame + CRC-32 ─> UDP / NDJSON ─> PC, Pi, or gateway
```

The universal-variable implementation does not call the primary RK4 stepper. The HIL layer uses a documented JSON datagram and remains independent of the browser mission-control dashboard.


## v1.3 constellation layer

```text
Baseline orbit and targets
        |
        v
Walker-style orbital slots -> Per-satellite propagation and access
        |                                  |
        |                                  +-> Coordinated target assignment
        v
Pairwise range + Earth occultation -> ISL windows -> Network graph
        |
        +-> Gateway availability
        +-> Shared ground-station channel schedule
        +-> Constellation dashboard and verification evidence
```

The constellation layer is deliberately separate from the detailed single-spacecraft subsystem simulation. It reuses the verified orbit, target, and station geometry, then adds distributed scheduling and network analysis without pretending that all four spacecraft have independently flight-qualified power, ADCS, and communications implementations.


## v1.4 conjunction-safety and autonomous-replanning layer

```text
Constellation state histories + seeded RTN object catalogue
        |
        v
Pairwise screening -> TCA / miss / relative speed / risk triage
        |
        +-> High-risk maneuver trade study -> safety blackout windows
        |
        v
Imaging candidates -> utility optimizer -> safety-aware task plan
        |
        +-> spacecraft outage + target escalation -> autonomous replan
        v
CSV evidence, figures, summary, dashboard, and verification checks
```

The catalogue and probability values are deterministic educational proxies. The module does not ingest authoritative conjunction data messages, propagate operational covariances, or issue spacecraft commands.

## v1.5 onboard-autonomy and edge-intelligence layer

```text
Safety-replanned constellation tasks
        |
        v
Synthetic scene features + image-quality checks
        |
        v
Explainable event score ----> operating-envelope check
        |                              |
        v                              +-> hold for ground review
Power / storage / next-link context
        |
        v
Resource-aware retain, discard, defer, or priority-downlink action
        |
        +-> target evidence aggregation -> priority update
        v
Conflict-checked autonomous task plan
        |
        v
CSV evidence, figures, summary, dashboard, and verification checks
```

The model is a deterministic engineering surrogate, not a trained neural network. It is intentionally lightweight and dependency-free so reviewers can inspect the complete decision path on a home PC.


## v1.6 calibrated Earth-observation layer

```text
Earth Search STAC or local GeoTIFF
        |
        v
Provenance + reflectance calibration
        |
        v
Common-grid resampling and overlapping tiling
        |
        +--> NDWI / MNDWI / NDVI / brightness
        |
        +--> explainable flood baseline
        |
        v
Reference-mask metrics, threshold study, CSV, plots, dashboard
```

The live Sentinel-2 path uses the SCL water class as a weak evaluation reference. It does not create independent event ground truth or an operational alert product.

## v1.7 temporal optical/SAR layer

The temporal layer consumes paired optical and SAR scenes. A transparent integer-shift search aligns the post-event scene to the pre-event grid. Optical water probability is calculated from calibrated spectral indices, SAR water probability is calculated from VV/VH backscatter, and a cloud-aware weighting function fuses both sensors. The resulting pre/post probabilities drive new-flood detection, validation, area estimation, and progression reports.

window.OSML_DATA = {
  releases: [
    {v:'0.1',era:'foundation',title:'Orbit foundations',summary:'Two-body orbit propagation and Earth ground-track visualisation.',features:['Circular and elliptical state propagation','Ground-track generation','CSV and plotting outputs'],tests:8,controls:3},
    {v:'0.2',era:'foundation',title:'Mission geometry',summary:'J2 perturbation, eclipse detection, station passes, and visibility.',features:['J2 secular effects','Sunlight and eclipse windows','Ground-station access'],tests:16,controls:5},
    {v:'0.3',era:'foundation',title:'Payload coverage',summary:'Target access, camera footprint, revisit analysis, and imaging events.',features:['Target coverage','Payload footprint geometry','Revisit metrics'],tests:23,controls:7},
    {v:'0.3.1',era:'foundation',title:'Performance maintenance',summary:'Dependency-light CSV processing and Python 3.13 performance fixes.',features:['Removed pandas dependency','Faster VS Code startup','Stable large-output handling'],tests:25,controls:7},
    {v:'0.4',era:'mission',title:'Electrical power system',summary:'Solar generation, battery state of charge, operating modes, and safe mode.',features:['Power balance','Battery SOC','Autonomous low-power protection'],tests:28,controls:8},
    {v:'0.5',era:'mission',title:'Communications',summary:'S-band link budget, adaptive data rates, payload storage, and downlink.',features:['RF link margin','Adaptive data rates','Storage/downlink coupling'],tests:33,controls:10},
    {v:'0.6',era:'mission',title:'Attitude control',summary:'Detumble, quaternion references, reaction-wheel control, and pointing.',features:['Quaternion attitude model','PD wheel control','Momentum unloading'],tests:38,controls:12},
    {v:'0.7',era:'mission',title:'Flight software',summary:'State machine, commands, telemetry, watchdog, faults, and autonomous recovery.',features:['Flight-software modes','CRC telemetry packets','Watchdog and fault injection'],tests:43,controls:14},
    {v:'0.8',era:'mission',title:'Mission control',summary:'Operator dashboard, alarms, pass scheduling, and planning console.',features:['Interactive mission dashboard','Alarm console','Command planning'],tests:48,controls:16},
    {v:'0.9',era:'mission',title:'Reliability engineering',summary:'FMEA, Monte Carlo risk, anomaly detection, and fault-tree analysis.',features:['12-row FMEA','Seeded Monte Carlo','Risk and anomaly dashboards'],tests:52,controls:18},
    {v:'1.0',era:'mission',title:'Verified portfolio release',summary:'Requirements traceability, analytical benchmarks, acceptance reports, and manifests.',features:['Machine-readable requirements','Six benchmark comparisons','Release verification report'],tests:56,controls:20},
    {v:'1.1',era:'mission',title:'Independent validation & HIL',summary:'Independent orbit cross-validation and UDP hardware-in-the-loop telemetry.',features:['Independent propagator','External comparison kit','UDP HIL telemetry'],tests:64,controls:22},
    {v:'1.1.1',era:'mission',title:'External comparison kit',summary:'Executable GMAT, Orekit, and custom reference workflows.',features:['GMAT batch workflow','Orekit adapter','Comparison reports'],tests:69,controls:23},
    {v:'1.1.2',era:'mission',title:'Orekit Windows fix',summary:'Project-local Maven wrapper and path-safe external comparison.',features:['Maven wrapper','Java 17 diagnostics','Path-safe execution'],tests:71,controls:23},
    {v:'1.2',era:'mission',title:'Home-lab hardware bridge',summary:'USB/UART command protocol, Raspberry Pi bridge, and ESP32 example.',features:['OSML-CMD/1 protocol','Serial telemetry bridge','ESP32 firmware example'],tests:76,controls:25},
    {v:'1.3',era:'mission',title:'Constellation operations',summary:'Walker-style constellation, coordinated imaging, crosslinks, and shared ground scheduling.',features:['Multi-satellite propagation','Crosslink network','Coordinated tasking'],tests:84,controls:28},
    {v:'1.4',era:'mission',title:'Conjunction safety',summary:'Resident-object screening, avoidance trades, blackout windows, and autonomous replanning.',features:['Conjunction screening','Avoidance trade study','Safety-aware replanning'],tests:90,controls:32},
    {v:'1.5',era:'mission',title:'Onboard autonomy',summary:'Explainable edge intelligence and resource-aware autonomous tasking.',features:['Scene scoring','Battery/storage/downlink awareness','Target reprioritisation'],tests:96,controls:36},
    {v:'1.6',era:'mission',title:'Earth-observation processing',summary:'GeoTIFF ingestion, spectral indices, tiling, and flood classification.',features:['NDWI/MNDWI/NDVI','Explainable classifier','Earth catalogue adapter'],tests:100,controls:40},
    {v:'1.7',era:'mission',title:'Optical/SAR fusion',summary:'Two-date co-registration, cloud-aware fusion, and flood progression.',features:['Integer-pixel registration','Optical/SAR probability fusion','Change detection'],tests:103,controls:43},
    {v:'1.8',era:'mission',title:'Flood time series',summary:'Six-date fusion, sub-pixel registration, persistence, and progression mapping.',features:['Sub-pixel registration','SAR filtering','Persistence mapping'],tests:106,controls:46},
    {v:'1.9',era:'platform',title:'Operational data cube',summary:'SQLite catalogue, integrity manifests, event processing, and STAC-like exports.',features:['Geospatial scene catalogue','Idempotent processing jobs','Operational dashboard'],tests:108,controls:48},
    {v:'2.0',era:'platform',title:'Mission services',summary:'FastAPI, STAC endpoints, worker queue, PostGIS, containers, and metrics.',features:['REST and OpenAPI','Background worker queue','Docker/Kubernetes assets'],tests:115,controls:52},
    {v:'2.1',era:'platform',title:'Operational platform controls',summary:'Object storage, COGs, leases, signed webhooks, RBAC, and recovery.',features:['S3-compatible storage','Expiring worker leases','Verified backup/restore'],tests:122,controls:58},
    {v:'2.2',era:'platform',title:'Identity and governance',summary:'OIDC/JWKS, tenant isolation, encrypted secrets, immutable versions, and audit chains.',features:['Federated identity patterns','Tenant isolation','Hash-chained audit'],tests:128,controls:64},
    {v:'2.3',era:'platform',title:'Security platform',summary:'PostgreSQL RLS, key rotation, service credentials, policy-as-code, and signed exports.',features:['Forced row-level security','Revocable service JWTs','Multi-region recovery'],tests:135,controls:72},
    {v:'2.4',era:'assurance',title:'Zero-trust security',summary:'External policy decisions, workload identity, managed-KMS adapters, and attack regression.',features:['OPA-compatible PDP','Ed25519 workload identity','11 attack cases blocked'],tests:142,controls:80},
    {v:'2.5',era:'assurance',title:'Supply-chain security',summary:'SBOM, provenance, signatures, deterministic builds, and policy gates.',features:['CycloneDX SBOM','in-toto/SLSA-shaped evidence','Reproducible archives'],tests:149,controls:89},
    {v:'2.6',era:'assurance',title:'Observability and resilience',summary:'SLOs, error budgets, structured telemetry, chaos experiments, and rollback.',features:['Runtime SLOs','Incident and MTTR evidence','Automated rollback'],tests:158,controls:103},
    {v:'2.7',era:'assurance',title:'Distributed operations',summary:'OpenTelemetry-shaped traces, autoscaling, capacity forecasting, and game days.',features:['Distributed trace correlation','Forecast-aware autoscaling','Four game-day exercises'],tests:167,controls:119},
    {v:'2.8',era:'assurance',title:'Active-active regions',summary:'Latency-aware steering, replicated state, failover, and cost/carbon placement.',features:['Three active regions','Cross-region replication','Sustainable scheduling'],tests:176,controls:137},
    {v:'2.9',era:'assurance',title:'Governed multi-region',summary:'Consistency policies, conflict resolution, fair quotas, sovereignty, and audited decisions.',features:['Strong/bounded/eventual consistency','CRDT conflict strategies','Residency-safe routing'],tests:185,controls:157},
    {v:'3.0',era:'assurance',title:'Mission orchestration',summary:'Replayable workflow DAGs, human approval, retries, compensation, and event history.',features:['Policy-governed DAG','Human approval gates','Deterministic replay'],tests:194,controls:179},
    {v:'3.1',era:'assurance',title:'Safety-assured orchestration',summary:'Signed approvals, separation of duties, command grants, migration, and invariant checking.',features:['Ed25519 approvals','Time-bounded command grants','256-state safety model'],tests:203,controls:207}
  ],
  capabilities: [
    ['Orbit & geometry','Propagation, ground tracks, eclipses and access'],
    ['Spacecraft systems','Power, ADCS, communications and flight software'],
    ['Mission operations','Dashboards, commands, alarms and HIL'],
    ['Constellations','Crosslinks, scheduling and conjunction safety'],
    ['Earth observation','Optical/SAR flood processing and data cube'],
    ['Mission services','STAC API, workers, databases and object storage'],
    ['Security','Identity, policy, KMS, RLS and audit evidence'],
    ['Reliability','SLOs, chaos, rollback and game-day recovery'],
    ['Governance','Residency, consistency, approvals and invariants']
  ],
  targets: [
    {name:'Bengaluru floodplain',lat:12.97,lon:77.59,priority:5},
    {name:'Brahmaputra basin',lat:26.15,lon:91.73,priority:4},
    {name:'Kerala coast',lat:10.15,lon:76.35,priority:3},
    {name:'Sundarbans',lat:21.95,lon:88.85,priority:4}
  ],
  evidence: [
    {kind:'mission',title:'Mission-control dashboard',src:'assets/images/mission-control.webp',caption:'Operator telemetry, alarms, schedules, and command-planning evidence.'},
    {kind:'mission',title:'Constellation ground tracks',src:'assets/images/constellation.webp',caption:'Multi-spacecraft propagation and coordinated coverage analysis.'},
    {kind:'eo',title:'Spectral flood products',src:'assets/images/earth-observation.webp',caption:'Optical/SAR spectral products and explainable flood classification.'},
    {kind:'platform',title:'Runtime resilience',src:'assets/images/observability.webp',caption:'Service health, deliberate faults, SLO detection, and recovery.'},
    {kind:'platform',title:'Active-active regions',src:'assets/images/multiregion.webp',caption:'Bengaluru, Singapore, and Frankfurt health and failover evidence.'},
    {kind:'safety',title:'Workflow DAG',src:'assets/images/workflow.webp',caption:'Policy-governed mission orchestration with approval gates.'},
    {kind:'safety',title:'Safety invariant model',src:'assets/images/safety-model.webp',caption:'Exhaustive command-gate state evaluation from v3.1.'}
  ],
  validationLedger: [
    ['v1.0','Portfolio acceptance',56,20,'PASS'],['v1.9','Operational data cube',108,48,'PASS'],['v2.1','Operational services',122,18,'PASS'],['v2.4','Zero-trust regression',142,60,'PASS'],['v2.5','Supply-chain gates',149,9,'PASS'],['v2.6','Resilience controls',158,14,'PASS'],['v2.7','Distributed operations',167,16,'PASS'],['v2.8','Active-active operations',176,18,'PASS'],['v2.9','Governed multi-region',185,20,'PASS'],['v3.0','Mission orchestration',194,22,'PASS'],['v3.1','Safety assurance',203,28,'PASS']
  ]
};

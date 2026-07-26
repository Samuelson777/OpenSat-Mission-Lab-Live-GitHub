# Validation Notes — v1.1

## Automated verification

The release includes tests for:

- configuration parsing and parameter validation;
- orbital state conversion and propagation;
- Earth rotation and vectorized ground geometry;
- eclipse and sampled event windows;
- target access, footprint, revisit, imaging, and storage;
- operating-mode priority, charging, discharge, and safe-mode behavior;
- free-space path-loss reference calculation;
- adaptive data-rate selection;
- storage depletion after data transfer;
- safe-mode suppression of downlink;
- deterministic CSV reporting.

## Bundled scenario regression indicators

The included seven-day India flood-monitoring scenario should produce approximately:

- 10,081 orbital samples;
- 106 eclipse windows;
- 17 Bengaluru contact windows;
- 18 imaging attempts;
- 9 captured images;
- 1 cloud-blocked attempt;
- 7 scheduling conflicts;
- 1 power-blocked image;
- 1 autonomous safe-mode interval;
- minimum battery SOC near 24.73%;
- 126.00 MB payload data generated;
- 29.44 MB payload data downlinked;
- 96.56 MB final onboard payload data;
- 14 passes transferring data;
- 1 pass entirely blocked by safe mode;
- maximum selected rate of 256 kbps;
- 33 passing tests.

Small floating-point differences may occur across platforms. Major differences indicate a configuration, dependency, or implementation change and should be reviewed.

## Interpretation limits

The communications tests validate formula implementation, adaptive-rate logic, and data accounting. They do not validate a radio, antenna, ground terminal, waveform, spectrum authorization, or end-to-end flight communications system. Hardware selection requires measured component data, antenna patterns, modulation and coding performance, Doppler analysis, link availability statistics, regulatory review, and test evidence.

## v0.6 attitude regression indicators

The baseline seven-day scenario should additionally produce approximately:

- detumble completion at 30 minutes;
- maximum initial body-rate magnitude near 1.562 deg/s;
- maximum reaction-wheel momentum near 18.02 mNms;
- no wheel-saturation samples;
- 130 sampled momentum-dump windows;
- one brief pointing-violation window after detumble transition;
- 9 captured images and 0 attitude-blocked captures;
- 38 passing automated tests.

Quaternion round trips, torque limits, detumble completion, state finiteness, and attitude-based image rejection are covered by automated tests. These tests verify implementation consistency, not flight-control stability margins or hardware performance.


## v0.7 flight-software regression indicators

The bundled seven-day case shall produce one watchdog reset, three accepted commands, two rejected commands, four injected faults, two software-blocked images, and less than 100% telemetry delivery because of the injected telemetry dropout. CRC determinism, watchdog recovery, command handling, and image inhibition are covered by automated tests.


## v0.8 mission-control regression indicators

Automated tests verify alarm consolidation, pass priority assignment, recommended post-reset command planning, chronological operations scheduling, and self-contained dashboard generation. The browser interface uses embedded JSON and standard HTML, CSS, canvas, and JavaScript; no network data service is required after generation.

The alarm thresholds and pass scores are transparent educational heuristics. Validation demonstrates deterministic implementation and output integrity, not operational certification, cybersecurity, human-factors approval, or suitability for controlling spacecraft hardware.

The bundled v0.8 scenario produces 11 consolidated alarms (5 critical and 6 warning), 17 pass-schedule rows, 8 command-plan rows, and 154 operations-schedule rows. The generated browser dashboard was executed in a headless Chromium session with no JavaScript page errors.

## v1.1 reliability validation

- Fixed random seeds reproduce identical Monte Carlo rows and summary statistics.
- Monte Carlo probabilities remain bounded between zero and one.
- Fault-tree top-event probability equals the sum of mutually exclusive simulated failure outcomes.
- FMEA residual RPN values do not exceed their corresponding initial RPN values in the supplied baseline.
- Synthetic telemetry tests confirm detection of low SOC, high pointing error, active faults, and missing telemetry.
- Generated CSV, JSON, PNG, TXT, and HTML products are checked by automated tests.


## v1.1 release acceptance

The v1.1 run generates executable requirement results, six analytical benchmarks, an HTML verification report, status figures, a verification badge, and a SHA-256 output manifest. The `accept` command exits nonzero on any failed requirement or benchmark. Acceptance remains software-level evidence and is not flight qualification or independent certification.

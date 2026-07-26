# Model Assumptions — v1.1

## Orbit and environment

- Fixed-step RK4 numerical integration.
- Point-mass gravity with optional first-order J2 acceleration.
- Approximate UTC-to-Earth-rotation conversion.
- Low-accuracy analytical Sun direction.
- Cylindrical Earth-shadow eclipse test.

## Ground and payload

- WGS-84 station position and local-up geometry.
- Spherical Earth for optical line of sight and footprint calculations.
- Camera GSD is a swath-per-pixel proxy, not a calibrated optical resolution.
- Target and station opportunities are sampled at the mission time step.
- Cloud blocking is deterministic pseudo-random simulation.
- A successful image generates one compressed payload-data product at its capture sample.

## Electrical power

- Solar generation is zero in eclipse.
- In sunlight, generation equals maximum array power multiplied by one constant incidence/derating factor.
- Battery capacity is represented as a single lumped energy state in watt-hours.
- Charge and discharge efficiencies are constant.
- Loads are fixed by effective spacecraft mode: nominal, imaging, downlink, or safe.
- Imaging overrides downlink when both are requested at the same sample.
- Safe mode is entered at or below the minimum SOC threshold and remains latched until recovery SOC.
- Safe mode suppresses imaging and downlink requests.
- Battery energy is clamped between zero and rated capacity.

## Communications and data handling

- The demonstration uses a simplified S-band downlink.
- Free-space path loss depends only on geometric slant range and configured carrier frequency.
- Spacecraft and ground antenna gains are constant and do not use directional radiation patterns.
- Transmit, atmospheric, and pointing losses are constant scalar values.
- Ground-system noise temperature is constant.
- Link viability is based on C/N0, Eb/N0, one required Eb/N0 value, and one minimum operating margin.
- The adaptive link selects the highest configured discrete data rate meeting the margin requirement.
- Protocol overhead and average transfer losses are represented by one constant efficiency factor.
- When multiple stations are visible, the station with the highest available rate is selected.
- Downlink is permitted only when the power system's effective mode is `downlink`.
- Captured data is added before transfer at a simulation sample and transmitted data is immediately removed from storage.
- Data transfer cannot exceed the available stored data, and storage cannot become negative.
- Contact boundaries and transfer capacity have the resolution of the configured mission time step.

## Not represented yet

- Antenna radiation patterns, spacecraft body blockage, polarization mismatch, cable-specific frequency response, or antenna tracking error histories.
- Doppler shift and rate, frequency acquisition, synchronization, modulation-specific coding curves, bit-error-rate curves, packet retransmission, and command uplink.
- Rain fading, scintillation, ionospheric losses, interference, spectrum coordination, licensing, and regulatory constraints.
- Detailed recorder partitions, file priorities, packetization, compression variability, or onboard file deletion policy.
- Battery voltage, current limits, thermal coupling, aging, and radiation degradation.

All outputs are preliminary-design estimates and must not be treated as flight-qualified predictions.

## Attitude determination and control — v0.6

- Attitude is represented by scalar-first quaternions and a three-axis small-angle error state.
- The spacecraft has fixed diagonal principal inertias and no flexible appendages.
- Guidance references place the body +Z boresight on nadir, a selected target, a ground station, or the Sun.
- Target and contact pre-pointing use perfect future mission knowledge.
- Sensor errors are zero-mean Gaussian noise without bias drift, scale-factor error, outages, or alignment error.
- Reaction wheels use a bounded PD controller with ideal torque response.
- Constant, weak periodic disturbance torque is used to exercise momentum storage.
- Momentum dumping reduces wheel momentum at a configured rate; a geomagnetic field and magnetorquer allocation are not explicitly solved.
- The reference for the next mission sample is available to the controller during the preceding integration interval.
- Imaging quality is accepted when sampled pointing error is within the configured angular requirement.


## Flight software — v0.7

- State transitions are evaluated on the mission sample grid.
- Commands and faults are deterministically time tagged.
- Authorization is a demonstrator token comparison, not cryptography.
- Telemetry is educational JSON with CRC-32, not a CCSDS packet implementation.
- Watchdog and recovery timing are sampled at the mission time step.
- Flight-software operational inhibition does not re-integrate the electrical-power history in v0.7.


## Mission control — v0.8

- Alarm rules use transparent fixed thresholds and sampled subsystem histories.
- Reaction-wheel threshold chatter is consolidated into one operator-level peak-momentum alarm.
- Pass priority is a deterministic educational score based on storage, geometry, power state, and actual simulated outcome.
- Recommended commands are planning suggestions placed at the first later contact; they are not executed automatically.
- Dashboard telemetry is downsampled for browser performance while CSV files retain full sampled histories.
- The command console modifies only browser memory and may export JSON; it does not alter YAML, simulation state, or hardware.
- The local server binds only to `127.0.0.1` and provides no authentication, encryption, multi-user control, or cybersecurity certification.

## Reliability assumptions

- FMEA occurrence, severity, and detectability scores are educational ordinal values, not supplier qualification data.
- The Monte Carlo campaign is a surrogate model around deterministic baseline KPIs; it does not re-propagate the full spacecraft dynamics for each trial.
- Sampled uncertainties are illustrative and seeded for reproducibility.
- Trial outcomes are classified into one primary failure category for fault-tree aggregation.
- Anomaly detection combines engineering limits with robust median/MAD statistics and consolidates recurring events.
- Outputs are preliminary design aids and are not safety, certification, or launch-approval evidence.

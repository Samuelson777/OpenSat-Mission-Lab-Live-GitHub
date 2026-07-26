# System Architecture

```text
Mission YAML
   |
   +--> Orbit and environment ----> ground track, eclipse, access
   |
   +--> Payload planning ---------> imaging events and generated data
   |
   +--> Power model --------------> modes, battery SOC, safe mode
   |
   +--> ADCS model ---------------> pointing, body rates, wheel momentum
   |
   +--> Flight software ----------> commands, telemetry, faults, recovery
   |
   +--> Communications -----------> link margin, rates, data downlink
   |
   +--> Mission control ----------> alarms, passes, timeline, dashboard
   |
   +--> Reliability --------------> FMEA, risk, Monte Carlo, anomalies
   |
   +--> Verification -------------> traceability, benchmarks, manifest
```

The architecture is configuration-driven and deliberately modular. Subsystem outputs are passed as explicit NumPy arrays or dictionaries, making assumptions inspectable and tests easy to isolate. Reporting remains dependency-light and uses the Python standard library, NumPy, Matplotlib, and PyYAML.

## Data contracts

- Time histories use one shared elapsed-seconds grid.
- Cartesian states use kilometres and kilometres per second.
- Attitude uses scalar-first unit quaternions.
- Power uses watts, watt-hours, and SOC percent.
- Communications uses dB, dB-Hz, bit/s, and megabytes.
- Human-readable timestamps are UTC ISO-8601 strings.

## Trust boundaries

The generated browser command console is planning-only. No function connects to spacecraft hardware, radio equipment, cloud command services, or privileged operating-system interfaces.

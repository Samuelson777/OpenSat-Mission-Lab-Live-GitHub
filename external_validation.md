# External Orbit Validation — v1.1

The primary OpenSat orbit engine uses fixed-step RK4 integration. v1.1 adds an independent universal-variable implementation using Lagrange f/g coefficients for two-body cross-validation.

The normal mission run creates:

- `independent_orbit_comparison.csv`
- `independent_reference_state_history.csv`
- `independent_validation_summary.csv`
- `independent_orbit_validation.png`
- `external_validation_report.html`
- `external_validation_request.json`
- `external_reference_template.csv`
- `gmat_two_body_validation.script`
- `orekit_validation_request.json`

The built-in comparison uses a six-hour point-mass Earth case. It isolates implementation differences without mixing the primary mission's J2 perturbation into the reference case.

## External CSV schema

Required columns:

```text
elapsed_seconds,x_eci_km,y_eci_km,z_eci_km,vx_eci_km_s,vy_eci_km_s,vz_eci_km_s
```

Optional columns, such as `timestamp_utc`, are allowed.

Run:

```bash
opensatlab compare-external primary.csv reference.csv --output outputs/external
```

Both files must have the same elapsed-time grid. Coordinate frames, epoch, units, force models, and numerical settings must be reviewed before interpreting differences.

## v1.1.1 ready-to-run adapters

### GMAT

The complete script is:

```text
external/gmat/opensat_two_body_validation.script
```

It uses a point-mass Earth force model, EarthMJ2000Eq Cartesian coordinates, the OpenSat initial state, a 60-second reporting grid, and a six-hour duration. Run it from the GMAT console and then normalize the numeric report:

```powershell
.\scripts\run_gmat_comparison.ps1 -GMATConsole "C:\path\to\GMATConsole.exe"
```

If the report is not in GMAT's standard output folder, pass its path explicitly:

```powershell
.\scripts\run_gmat_comparison.ps1 `
  -GMATConsole "C:\path\to\GMATConsole.exe" `
  -ReportPath "C:\path\to\gmat_state_report.csv"
```

The normalizer can also be used separately:

```powershell
opensatlab convert-gmat gmat_state_report.csv `
  --output outputs\external-comparison\gmat_reference.csv `
  --epoch-utc 2026-07-20T00:00:00Z
```

### Orekit

The Maven adapter is under:

```text
external/orekit/
```

It requires JDK 17+ and Apache Maven. Run the complete workflow with:

```powershell
.\scripts\run_orekit_comparison.ps1
```

This creates an Orekit reference CSV and then runs `compare-external` with the stricter 0.5 km and 0.001 km/s acceptance tolerances.

### Comparison outputs

Every comparison now creates:

- `external_tool_comparison.csv`
- `external_tool_comparison_summary.csv`
- `external_tool_comparison.png`
- `external_tool_comparison_report.html`
- `external_tool_comparison_summary.txt`

A passing result is meaningful only when both tools use the same epoch, frame, units, gravitational parameter, force model, and sample times.

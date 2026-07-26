# v1.1 Verification Plan

## Objectives

1. Confirm each major software requirement has an identified method and evidence file.
2. Verify deterministic scenario behavior and bounded engineering states.
3. Compare selected core equations with closed-form or exact analytical references.
4. Produce reproducible machine-readable and human-readable evidence.
5. Cause the acceptance command to fail when any verification item fails.

## Methods

- **Unit test:** focused mathematical or logical behavior.
- **Scenario test:** assertion based on the seven-day integrated mission.
- **Analysis:** numerical checks of generated arrays and summary values.
- **Output inspection:** existence and nonzero size of required artifacts.
- **Analytical benchmark:** comparison with an independently expressed closed-form reference.
- **Repository inspection:** validation of setup, VS Code, and CI files.

## Acceptance rule

The release status is `PASS` only when every requirement row and every analytical benchmark row passes. Warnings are not silently converted into passes. `opensatlab accept` exits with status code 1 when the overall result is not `PASS`.

## Limitations

Acceptance is software-level evidence. It does not establish flight worthiness, component qualification, numerical equivalence to a certified tool, electromagnetic compatibility, cybersecurity certification, human-factors approval, licensing, or regulatory compliance.

## v1.1 additions

- Validate universal-variable propagation against circular-orbit closure and compare it against RK4 on an aligned six-hour two-body case.
- Verify external CSV parsing, time-grid alignment, tolerance evaluation, and failure handling with unit tests.
- Verify HIL frame encoding, CRC rejection, NDJSON export, and UDP loopback delivery with unit and scenario tests.

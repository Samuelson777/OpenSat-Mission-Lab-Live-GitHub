# v1.1 Release Checklist

- [ ] Clean Python 3.10–3.13 environment installs the project.
- [ ] `python -m pytest -q` passes.
- [ ] `python -m ruff check src tests` passes.
- [ ] The seven-day acceptance scenario completes.
- [ ] `verification_summary.txt` reports `PASS`.
- [ ] All requirement rows pass.
- [ ] All analytical benchmarks pass.
- [ ] Mission-control, reliability, and verification HTML files open locally.
- [ ] `output_manifest.json` contains hashes for generated artifacts.
- [ ] README, release notes, citation, license, security, and contribution files are present.
- [ ] ZIP checksum is generated and independently rechecked.

## v1.1 additions

- [x] Independent validation report generated
- [x] GMAT and Orekit interchange products generated
- [x] External CSV comparison command exercised
- [x] HIL CRC tamper test passed
- [x] 50-packet localhost loopback passed
- [x] Separate listener/replay CLI workflow exercised

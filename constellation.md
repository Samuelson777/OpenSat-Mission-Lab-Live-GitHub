# Constellation analysis

OpenSat Mission Lab v1.3 creates a deterministic Walker-style constellation from the baseline orbit. Satellites are distributed across orbital planes by RAAN and within planes by true anomaly and phasing.

## Processing flow

1. Generate spacecraft orbital slots.
2. Propagate every spacecraft on one common UTC time grid.
3. Calculate station visibility and target access for each spacecraft.
4. Coordinate observations and suppress near-duplicate target acquisitions.
5. Calculate pairwise range and Earth-occultation-aware inter-satellite line of sight.
6. Build the sampled network graph and measure connected-component size.
7. Assign each shared station channel to the currently visible spacecraft with the highest elevation.
8. Export reports, plots, summary metrics, and an HTML dashboard.

## Important assumptions

- Every spacecraft uses the same mass, payload, and baseline orbit except RAAN and anomaly slot.
- The coordinated schedule uses deterministic greedy assignment, not mixed-integer optimization.
- Inter-satellite links require direct line of sight and range below the configured limit.
- Antenna patterns, crosslink pointing dynamics, Doppler, interference, spectrum rules, and routing latency are outside the current model.
- Shared ground scheduling uses one configured channel and highest-elevation selection.
- Revisit statistics are calculated from sampled opportunities and scheduled observations.

## Command

```bash
opensatlab constellation configs/india_flood_monitoring.yaml --output outputs/constellation
```

The main `run` and `accept` commands also include the constellation layer.

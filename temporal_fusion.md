# v1.7 Temporal Change and Optical/SAR Fusion

OpenSat Mission Lab v1.7 adds a reproducible two-date flood-progression workflow. The bundled dataset contains pre-event and post-event optical imagery, matching VV/VH SAR scenes, and a three-band temporal reference raster.

## Workflow

1. Load calibrated optical and SAR scenes.
2. Estimate the integer correction required to align the post-event optical scene to the pre-event reference.
3. Apply the same correction to all post-event optical and SAR bands.
4. Calculate optical water probability from NDWI, MNDWI, NDVI, and brightness.
5. Calculate SAR water probability from low VV/VH backscatter.
6. Reduce optical weight in cloud-covered pixels and fuse the sensor probabilities.
7. Detect new flooding where post-event water probability rises above the threshold while pre-event probability remains below it.
8. Compare optical-only, SAR-only, and fused masks with the temporal reference.
9. Report pre-event, post-event, new-flood, receded, and net-change areas.

## Bundled dataset

`examples/temporal_observation/` contains:

- `pre_event_optical.tif`
- `post_event_optical.tif`
- `pre_event_sar.tif`
- `post_event_sar.tif`
- `temporal_ground_truth.tif`
- `temporal_dataset_manifest.json`

The scenes use EPSG:32643 and 10 metre pixels. The post-event imagery is deliberately displaced by +3 rows and -4 columns; the expected correction is therefore -3 rows and +4 columns.

## Run

```powershell
opensatlab temporal-demo `
  --dataset examples\temporal_observation `
  --output outputs\temporal-fusion
```

For custom aligned-schema inputs:

```powershell
opensatlab temporal-fusion `
  --pre-optical pre_optical.tif `
  --post-optical post_optical.tif `
  --pre-sar pre_sar.tif `
  --post-sar post_sar.tif `
  --ground-truth temporal_ground_truth.tif `
  --output outputs\temporal-fusion
```

## Input conventions

Optical scenes use six bands: blue, green, red, NIR, SWIR1, and scene class. SAR scenes use VV and VH backscatter in dB. The temporal reference raster uses three binary bands: pre-event water, post-event water, and new flood.

## Limitations

The registration method is integer-pixel only. It does not estimate rotation, scale, terrain displacement, sub-pixel offsets, or non-rigid deformation. The optical and SAR probability models are explainable engineering surrogates, not trained operational classifiers. Real applications require radiometric normalization, terrain correction, speckle filtering, independent labels, uncertainty analysis, and local validation.

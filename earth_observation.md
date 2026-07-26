# v1.6 Earth-observation workflow

OpenSat Mission Lab v1.6 adds a reproducible calibrated multispectral pipeline. The bundled fixture is a small georeferenced six-band GeoTIFF with blue, green, red, near-infrared, short-wave infrared, and reference scene-class bands. Reflectance digital numbers are scaled by metadata before index or model calculations.

## Run the bundled validation

```powershell
opensatlab earth-observation-demo `
  --scene examples\earth_observation\demo_scene.tif `
  --output outputs\earth-observation
```

The workflow calculates NDWI, MNDWI, NDVI, brightness, overlapping tile metrics, an explainable logistic flood score, confusion-matrix metrics, threshold sensitivity, and an interactive dashboard.

## Analyse another six-band GeoTIFF

```powershell
opensatlab earth-observation path\to\scene.tif `
  --tile-size 128 `
  --overlap 16 `
  --threshold 0.55 `
  --output outputs\my-scene
```

Band descriptions should be `blue`, `green`, `red`, `nir`, `swir1`, and `scene_class`. When descriptions are absent, that order is assumed. The raster-level tags `reflectance_scale` and `reflectance_offset` control digital-number calibration.

## Find open Sentinel-2 candidates

The live adapter queries the public Earth Search STAC API and writes a candidate-asset manifest:

```powershell
opensatlab earth-search `
  --bbox 77.35 12.80 77.85 13.30 `
  --datetime 2026-01-01/2026-06-30 `
  --cloud-cover-max 15 `
  --limit 5 `
  --output outputs\earth-observation\stac_manifest.csv
```

Internet access is required. Asset URLs in the manifest can be used with raster-aware download tools. Confirm licensing, attribution, band scaling, scene classification, coordinate reference systems, and resampling before scientific use.

## Scope

The bundled fixture is synthetic and CC0. The live STAC adapter searches open Sentinel-2 Collection 1 Level-2A products, but OpenSat does not certify the resulting products. The lightweight classifier is an explainable engineering baseline, not an operational flood-alert model.

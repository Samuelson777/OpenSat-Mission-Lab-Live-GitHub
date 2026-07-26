# Open Earth-observation sources

The v1.6 live-data adapter uses the public Earth Search STAC API:

- API: `https://earth-search.aws.element84.com/v1`
- Search endpoint: `https://earth-search.aws.element84.com/v1/search`
- Collection: `sentinel-2-c1-l2a`

The adapter requests these common-name assets when available:

- `blue`
- `green`
- `red`
- `nir`
- `swir16`
- `scl`

Sentinel-2 Level-2A provides bottom-of-atmosphere surface-reflectance products. Native band resolutions differ, so OpenSat resamples the selected AOI to the green-band grid. Scale and offset values are read from STAC `raster:bands` metadata when present.

The SCL water class is converted to a weak water-reference mask. Cloud classes 8, 9, and 10 are marked separately. SCL is not independent flood-event ground truth, so live-scene evaluation must be interpreted as a processing check rather than validated emergency mapping.

Useful documentation:

- Earth Search API: `https://earth-search.aws.element84.com/v1/api.html`
- Earth Search project: `https://github.com/Element84/earth-search`
- Copernicus Sentinel-2 Level-2A: `https://documentation.dataspace.copernicus.eu/APIs/SentinelHub/Data/S2L2A.html`
- Copernicus Sentinel-2 mission data: `https://documentation.dataspace.copernicus.eu/Data/SentinelMissions/Sentinel2.html`

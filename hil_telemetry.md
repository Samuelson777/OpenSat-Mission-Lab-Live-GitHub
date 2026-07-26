# Home-Lab Telemetry Interface — v1.1

`OSML-HIL/1` is a compact educational UDP telemetry format. One JSON object is sent per datagram:

```json
{
  "protocol": "OSML-HIL/1",
  "sequence": 42,
  "apid": 100,
  "payload": {"sequence": 42, "battery_soc_percent": 67.2},
  "payload_crc32": "89ABCDEF"
}
```

The CRC is calculated over canonical JSON payload bytes with sorted keys and compact separators.

## Receive telemetry

```bash
opensatlab hil-listen --host 0.0.0.0 --port 5010 --output outputs/hil_capture.ndjson
```

## Replay telemetry

```bash
opensatlab hil-replay outputs/demo/telemetry_packets.csv --host 192.168.1.50 --port 5010 --rate-hz 20
```

The NDJSON stream can also be consumed by a serial bridge, Raspberry Pi program, microcontroller gateway, or test harness.

The built-in acceptance test uses localhost UDP. It does not demonstrate real-time guarantees, packet recovery, encryption, authentication, electrical interfaces, or hardware qualification.

# Changelog

## [Unreleased]

### Changed

- Clone and Releases URLs point at `bunnysi/monitor-theme-lone`.
- Renamed the repository from monitor-theme-ume. The installed directory stays `ume`.

### Fixed

- Despike no longer misses spikes on a flat line, and single-sample latency buckets no longer bridge into a wedge (port of upstream #3).
- Expiry and monthly usage use the hub's own `expires_in` / `month_used` when it sends them, instead of recomputing on the visitor's clock (port of upstream #2, #9).

## [0.1.0] - 2026-09-23

### Added

- Initial public theme, forked in structure from monitor-theme-default.

# Changelog

## [Unreleased]

### Changed

- Dusk skin: white paper, copper meters, self-hosted Jost. Unlimited monthly traffic keeps an empty track. Login and day/night are the same icon-and-label control.

### Fixed

- Despike no longer misses spikes on a flat line, and single-sample latency buckets no longer bridge into a wedge (port of upstream #3).
- Expiry and monthly usage use the hub's own `expires_in` / `month_used` when it sends them, instead of recomputing on the visitor's clock (port of upstream #2, #9).

## [0.1.0] - 2026-09-23

### Added

- Initial public theme, forked in structure from monitor-theme-default.

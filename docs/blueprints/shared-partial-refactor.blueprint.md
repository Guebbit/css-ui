# Shared Blueprint: Partial Refactor

Use this when a component already has an initial refactor and needs staged migration without breaking ongoing work.

## Goal

Incrementally adopt the modular architecture while preserving behavior and minimizing risk.

## Checklist

- [ ] Freeze public API first (do not rename root/modifier classes in this step).
- [ ] Extract only safe token slices to `_variables.scss` (spacing, duration, radius, sizes).
- [ ] Introduce thin `index.scss` assembly for migrated parts only.
- [ ] Move interaction behavior to shared interaction-state wrappers.
- [ ] Replace one theme branch at a time with semantic vars.
- [ ] Keep temporary compatibility selectors where required.
- [ ] Record remaining legacy blocks as explicit follow-up tasks.

## Exit criteria

- Build remains green.
- Migrated sections use shared generics.
- Remaining legacy sections are isolated and tracked for next pass.

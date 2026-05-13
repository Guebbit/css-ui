# Component Blueprint: Animations

Category: `animations`

Use this for animation atoms with keyframes, repeated spans, and activation classes.

## Apply from reference

- `raindrop-concentric` migration pattern is the baseline.

## Checklist

- [ ] Move scalar tokens (`size`, `duration`, `border-size`, counts/multipliers) into `_variables.scss`.
- [ ] Keep `index.scss` as assembler (`generate-vars`, `base-layout`, local animation rules).
- [ ] Map activation behavior to shared interaction-state helpers.
- [ ] Preserve unique keyframes/staggering logic locally.
- [ ] Replace hardcoded theme branches with semantic vars.

## Notes

Animation internals can stay custom, but state activation and variable generation should match shared patterns.

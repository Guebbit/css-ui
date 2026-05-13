# Component Blueprint: Buttons

Category: `buttons`

Use this for atom/molecule button-family components.

## Apply from reference

- `simple-button` migration pattern is the baseline.

## Checklist

- [ ] Extract button tokens to `_variables.scss` (padding, radius, border width, tonal opacity, timing).
- [ ] Use shared base/button layout mixins in `index.scss`.
- [ ] Generate size variants through shared generators (avoid repeated manual blocks).
- [ ] Normalize hover/active/disabled through shared interaction-state flow.
- [ ] Replace component-owned theme forks with semantic color vars.
- [ ] Keep only unique shape/effect rules local (e.g. custom pseudo-elements).

## Notes

If button states are currently spread across multiple selectors (`.active`, `.animate-on-hover`, etc.), consolidate via shared state wrappers first.

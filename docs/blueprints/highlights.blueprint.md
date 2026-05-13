# Component Blueprint: Highlights

Category: `highlights`

Use this for decorative/highlight components (ribbons, belts, borders, lines, popups, rollups).

## Checklist

- [ ] Move highlight tokens (`thickness`, offsets, durations, emphasis levels) into `_variables.scss`.
- [ ] Keep `index.scss` thin and driven by `generate-vars` + shared base helpers.
- [ ] Normalize trigger/activation states through shared interaction-state mixins.
- [ ] Replace component-owned color branching with semantic highlight vars.
- [ ] Keep only unique decorative geometry and pseudo-element choreography local.

## Notes

Highlight components usually have unique visuals; only extract what is reusable and keep signature effects local.

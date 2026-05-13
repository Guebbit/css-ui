# Component Blueprint: Cards

Category: `cards`

Use this for atom/molecule/organism card-like containers.

## Checklist

- [ ] Extract card tokens to `_variables.scss` (padding, gap, radius, elevation, media sizing).
- [ ] Build thin `index.scss` with shared base/layout/elevation helpers.
- [ ] Preserve slot API (`header`, `content`, `footer`, media blocks) and class names.
- [ ] Replace local theme trees with semantic vars (`main`, `surface`, `on-*`).
- [ ] Convert repeated style variants (outlined/elevated/flat, density levels) to map-driven generation.
- [ ] Keep only card-specific composition details local.

## Notes

Cards often carry many variants; prioritize generator-based variant conversion early to avoid selector duplication.

# Visual fixtures

Each component fixture lives at:

- `visual-fixtures/components/<tier>/<group>/<component>.fixtures.js`

Fixtures import shared scenarios by loading HTML from `docs/examples/**` and define CSS comparison targets for versions `1.3.0` and `2.0.0`.

`docs-derived.fixtures.js` is a barrel that exports all generated fixtures.

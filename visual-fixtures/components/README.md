# Visual Fixture Components

This directory mirrors the library source structure (`src/`) and contains
one fixture file per component.

Shared example HTML now lives under `docs/examples/` and should be treated as
the source of truth for reusable component markup. When a docs page needs a new
example, add/update the shared HTML asset first, then point both the docs page
and the fixture scenario at that shared file.

## Directory Structure

```
components/
  atoms/
    button-simple.fixtures.js           ← src/components/atoms/button-simple/
    card-calendar.fixtures.js           ← src/components/atoms/card-calendar/
    animation-gear-load.fixtures.js     ← src/components/atoms/animation-gear-load/
  molecules/
    button-expressive.fixtures.js       ← src/components/molecules/button-expressive/
    card-simple.fixtures.js             ← src/components/molecules/card-simple/
    panel-action.fixtures.js            ← src/components/molecules/panel-action/
  organisms/
    card-pricing.fixtures.js            ← src/components/organisms/card-pricing/
    panel-timeline-tree.fixtures.js     ← src/components/organisms/panel-timeline-tree/
```

## Adding a New Component

1. Create `<tier>/<category-singular>-<variant>.fixtures.js` with the appropriate scenarios.
2. Prefer exporting a `<camelCaseComponent>Scenarios` array using
   `createSharedExampleScenario` from `../../_helpers.js`, pointing at
   `docs/examples/<tier>/<group>/...`.
3. Fall back to `createDocsScenario` only for temporary inline markup that has
   not been extracted into a shared example asset yet.
4. Add the export to `docs-derived.fixtures.js`.
5. Register the component in `../manifest.js`.

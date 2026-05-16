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
    animations/      ← src/components/atoms/animations/<component>/
    buttons/         ← src/components/atoms/buttons/<component>/
    cards/           ← src/components/atoms/cards/<component>/
    generics/        ← src/components/atoms/generics/<component>/
    highlights/      ← src/components/atoms/highlights/<component>/
    inputs/          ← src/components/atoms/inputs/<component>/
    typography/      ← src/components/atoms/typography/<component>/
  molecules/
    buttons/         ← src/components/molecules/buttons/<component>/
    cards/           ← src/components/molecules/cards/<component>/
    lists/           ← src/components/molecules/lists/<component>/
    panels/          ← src/components/molecules/panels/<component>/
    progress/        ← src/components/molecules/progress/<component>/
  organisms/
    cards/           ← src/components/organisms/cards/<component>/
    panels/          ← src/components/organisms/panels/<component>/
```

## Adding a New Component

1. Create `<tier>/<group>/<component>.fixtures.js` with the appropriate scenarios.
2. Prefer exporting a `<camelCaseComponent>Scenarios` array using
   `createSharedExampleScenario` from `../../_helpers.js`, pointing at
   `docs/examples/<tier>/<group>/...`.
3. Fall back to `createDocsScenario` only for temporary inline markup that has
   not been extracted into a shared example asset yet.
4. Add the export to `docs-derived.fixtures.js`.
5. Register the component in `../manifest.js`.

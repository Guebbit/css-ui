# Visual Fixture Components

This directory mirrors the library source structure (`src/`) and contains
one fixture file per component.

## Directory Structure

```
components/
  atoms/
    animations/      ← src/atoms/animations/<component>/
    buttons/         ← src/atoms/buttons/<component>/
    cards/           ← src/atoms/cards/<component>/
    generics/        ← src/atoms/generics/<component>/
    highlights/      ← src/atoms/highlights/<component>/
    inputs/          ← src/atoms/inputs/<component>/
    typography/      ← src/atoms/typography/<component>/
  molecules/
    buttons/         ← src/molecules/buttons/<component>/
    cards/           ← src/molecules/cards/<component>/
    lists/           ← src/molecules/lists/<component>/
    panels/          ← src/molecules/panels/<component>/
    progress/        ← src/molecules/progress/<component>/
  organisms/
    cards/           ← src/organisms/cards/<component>/
    panels/          ← src/organisms/panels/<component>/
```

## Adding a New Component

1. Create `<tier>/<group>/<component>.fixtures.js` with the appropriate scenarios.
2. Export a `<camelCaseComponent>Scenarios` array using `createDocsScenario`
   (import it from `../../_helpers.js`).
3. Add the export to `docs-derived.fixtures.js`.
4. Register the component in `../manifest.js`.

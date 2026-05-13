# Component Blueprint: Panels

Category: `panels`

Use this for content wrappers, action panels, and typography panels.

## Checklist

- [ ] Extract panel layout tokens (`padding`, `spacing`, `border`, `radius`, section gaps).
- [ ] Assemble component with shared layout/interaction utilities in `index.scss`.
- [ ] Preserve structural section classes used in templates/docs.
- [ ] Migrate panel state styles (`active`, `disabled`, interactive sections) to shared state handling.
- [ ] Remove panel-local light/dark duplication in favor of semantic vars.
- [ ] Keep panel-specific composition logic local (e.g., split-area structure).

## Notes

Panels are frequently partially refactored first; pair this file with `shared-partial-refactor.blueprint.md` when needed.

# Refactor Blueprints

Reusable blueprint files for component migration from `old-src` to `src` modular architecture.

These templates are based on the validated migration pattern from:
- `simple-button`
- `raindrop-concentric`

## Blueprint files

- [`shared-full-refactor.blueprint.md`](./shared-full-refactor.blueprint.md): cross-cutting checklist for complete migrations.
- [`shared-partial-refactor.blueprint.md`](./shared-partial-refactor.blueprint.md): cross-cutting checklist for incremental/partial migrations.
- [`buttons.blueprint.md`](./buttons.blueprint.md): button-family component migrations.
- [`animations.blueprint.md`](./animations.blueprint.md): animation atom migrations.
- [`cards.blueprint.md`](./cards.blueprint.md): card component migrations.
- [`panels.blueprint.md`](./panels.blueprint.md): panel component migrations.
- [`highlights.blueprint.md`](./highlights.blueprint.md): highlight/decorative component migrations.

## How to use

1. Pick one category blueprint.
2. Pair it with either the full or partial shared blueprint.
3. Copy the checklist into the component PR/issue and mark each step during migration.

## Extending

Add new `*.blueprint.md` files in this directory and link them from this index.

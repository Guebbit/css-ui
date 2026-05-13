# Shared Blueprint: Full Refactor

Use this when a component is being fully moved from legacy monolithic SCSS to modular token-driven architecture.

## Goal

Preserve public API while moving implementation to shared generics and semantic variables.

## Checklist

- [ ] Keep public contract stable (root class, modifiers, child selectors).
- [ ] Create `_<variables>.scss` with component-local tokens only.
- [ ] Build thin `index.scss` that:
  - [ ] `@forward`s variables
  - [ ] defines a component token map
  - [ ] uses `generate-vars`
  - [ ] uses `base-layout` + relevant shared layout mixins
- [ ] Normalize interactions with shared interaction-state mixins.
- [ ] Replace component-owned light/dark branching with semantic vars.
- [ ] Convert repetitive variants into map/generator patterns.
- [ ] Keep only truly unique behavior local (e.g. unique keyframes/geometry).
- [ ] Verify default + key variant behavior against legacy output.

## Exit criteria

- Component compiles through existing build.
- Legacy API usage still works (or changes are explicitly documented).
- Theme behavior comes from semantic vars, not component-local dark/light forks.

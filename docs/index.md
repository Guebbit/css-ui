# Guebbit CSS UI

`@guebbit/css-ui` is a CSS/SCSS library of reusable UI pieces.

It is organized as a library, not a framework:

- components are mostly independent from each other
- some components extend lower-level ones
- shared patterns mainly exist around theming, utility classes, and package
  entrypoints

## What is in the library

The source is split into three component tiers:

- **Atoms**: the smallest reusable pieces such as buttons, inputs,
  typography, highlights, cards, and animation primitives
- **Molecules**: combinations of smaller parts such as richer buttons,
  lists, panels, cards, and progress components
- **Organisms**: larger composed UI pieces such as pricing, event, overflow,
  and timeline components

Alongside the components, the package also exposes global SCSS/CSS entrypoints
for core styles, utilities, settings, tools, and shared styles.

## Where to start

- **Library guide**: start at [/library/](/library/) for the global rules,
  styling patterns, theming model, testing strategy, fixture logic, CI, and
  release automation
- **Component docs**: use the sidebar to browse atoms, molecules, and organisms
- **Deferred work**: see
  [`TODO.md`](https://github.com/Guebbit/css-ui/blob/main/TODO.md) for roadmap
  items that are intentionally not part of the current package surface

## Main public entrypoints

Use the published package exports rather than internal repository paths:

```scss
@use '@guebbit/css-ui';
@use '@guebbit/css-ui/components';
@use '@guebbit/css-ui/atoms/button';
@use '@guebbit/css-ui/molecules/card';
@use '@guebbit/css-ui/organisms/card-pricing';
@use '@guebbit/css-ui/core';
@use '@guebbit/css-ui/utilities';
```

For the detailed rules behind imports, naming, theming, quality checks, and
visual parity, continue in the [Library guide](/library/).

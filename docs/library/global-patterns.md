# Global patterns

These are the shared rules that shape how the library is consumed and how
components are expected to fit together.

## Public import paths

Consumers should import from the package exports, not from internal repository
paths such as `src/...`.

Main entrypoints:

```scss
@use '@guebbit/css-ui';
@use '@guebbit/css-ui/components';
@use '@guebbit/css-ui/atoms/button';
@use '@guebbit/css-ui/atoms/card';
@use '@guebbit/css-ui/organisms/card-pricing';
@use '@guebbit/css-ui/core';
@use '@guebbit/css-ui/utilities';
@use '@guebbit/css-ui/settings';
@use '@guebbit/css-ui/tools';
@use '@guebbit/css-ui/styles';
```

Why this matters:

- the package surface is intentionally CSS/SCSS-focused
- consumers should not couple themselves to the internal `src/` structure
- package-surface tests enforce these boundaries so published entrypoints stay
  stable

## Cascade layers

CSS-UI declares its global layer order up front:

```css
@layer reset, tokens, helpers;
```

| Layer | Purpose | Typical contents | Priority |
|---|---|---|---|
| `reset` | Browser normalization and baseline defaults | resets, box-sizing, normalization rules | Lowest |
| `tokens` | Design-token custom properties | root CSS variables such as duration defaults | Medium |
| `helpers` | Utility/helper classes | spacing, display, text, visibility helpers | Highest layered |

Why this matters:

- reset/tokens/helpers keep predictable internal ordering
- component and composition rules stay unlayered so public defaults keep normal
  author-level precedence
- consumers can still override intentionally through specificity, not by
  accidentally being unlayered

## Naming grammar

The current naming style is intentionally lightweight and practical.

- **Component/root classes** use readable names such as
  `.button` or `.card`
- **Modifier classes** stay flat and companion-style, such as `.button-pill`
  or `.card-outlined`
- **Utility classes** are short helpers such as `.u-d-flex` or `.u-m-2`
- **Prefixing** is opt-in. By default css-ui ships without a class or CSS
  variable prefix.

Why this matters:

- the repo aims for consistency without forcing strict BEM everywhere
- consumers can add a namespace when they need one without paying for it by
  default
- flat modifiers remain easier to compose with the existing component docs and
  examples

### Prefix configuration

Use one global fallback or override classes and CSS variables separately:

```scss
@use '@guebbit/css-ui' with (
  $css-ui-prefix: 'guebbit-',
  $css-ui-class-prefix: 'guebbit-',
  $css-ui-var-prefix: 'guebbit-'
);
```

- `$css-ui-prefix` is the shared fallback
- `$css-ui-class-prefix` controls library-owned classes such as
  `.guebbit-button` and `.guebbit-button-pill`
- `$css-ui-var-prefix` controls generated CSS variables such as
  `--guebbit-main-color` and `--guebbit-button-padding`

## Color and theming

Color is applied through utility classes rather than per-component color SCSS
variables.

- `.bg-{role}` sets background plus matching on-color
- `.text-{role}` sets text color
- `.border-{role}` sets border color
- `.use-{role}` sets the main semantic color variables for a full single-class
  override

The default recommendation is to theme through these utility classes.

### Theme model

- **Theme source**: semantic tokens and SCSS values
- **Theme emission**: CSS variables and utility classes generated from those
  values
- **Theme application**: attaching the result through `.use-*` classes or, when
  needed, from a global scope such as `:root` or `body`

`docs/.vitepress/theme/theme.scss` is the reference example used in this
repository, and `generics.generate-theme-utilities(...)` is the helper used to
emit the utility classes.

Why this matters:

- most components stay easier to theme when color is driven from shared utility
  classes
- the docs theme shows the intended assembly pattern without exposing an
  undocumented shipped theme entrypoint
- component docs can stay focused on their local structure while relying on the
  same semantic color model

## Accessibility and responsive baseline

Across the library, the shared baseline is:

- prefer semantic HTML before custom wrappers
- use `:focus-visible` for keyboard-friendly focus states
- keep visual disabled states aligned with `[disabled]`, `.disabled`, and ARIA
  disabled patterns where relevant
- respect `prefers-reduced-motion` for non-essential animation
- prefer shared breakpoints and tokens over ad-hoc media thresholds

Why this matters:

- accessibility expectations stay consistent across unrelated components
- motion, disabled, and focus behavior do not have to be rediscovered per page
- responsive behavior remains easier to maintain when components share the same
  baseline assumptions

## Browser support policy

The library targets modern evergreen browsers through the repository
`browserslist` configuration.

- production target: `>0.5%`, last 2 versions, Firefox ESR, excluding dead
  browsers and Opera Mini
- development target: latest Chrome, Firefox, and Safari for fast local
  tooling feedback

Why this matters:

- build and docs tooling can rely on the same browser target contract
- fallback work for newer CSS features can be planned intentionally instead of
  guessed component by component

The default theme now styles the markdown content in the home page.
If you have custom styles that rely on the markdown content not being styled,
you may need to adjust your styles, or add markdownStyles: false to the frontmatter of your home page.


# Visual regression harness (v1.3.0 vs local)

This repository includes a manifest-driven Playwright visual parity harness.

## Setup

```bash
npm ci
npm run playwright:install
```

## Run visual parity tests

```bash
npm run test:visual
```

What it does:
- starts a dedicated Vite fixture server (`npm run visual:serve`)
- renders each fixture with `@guebbit/css-ui@1.3.0` (`/visual-fixtures/v1.html?...`)
- renders the same fixture with local 2.0 source (`/visual-fixtures/v2.html?...`)
- compares screenshots with a small pixel-diff tolerance

Current migration scope:
- `simple-button` (finished, parity enabled)
- `raindrop-concentric` (finished, parity enabled)
- all other v2 components are considered `draft` in this phase

To add more fixtures/components:
1. Add a per-component fixture module in `/visual-fixtures/components/`
2. Register metadata/scenarios in `/visual-fixtures/manifest.js`
3. Add matching component imports to `styles-v1.scss` and `styles-v2.scss`
4. Run `npm run test:visual`

See `/visual-fixtures/README.md` for architecture details.

# Migration note: component path convention (Option B)

Component source paths now use a single atomic-tier directory plus a flat
`{category-singular}-{variant}` component folder name.

Examples:
- `src/components/atoms/button-simple` → `src/components/atoms/button-simple`
- `src/components/molecules/card-book` → `src/components/molecules/card-book`
- `src/components/organisms/panel-timeline-tree` → `src/components/organisms/panel-timeline-tree`

# How to use

Import only what you need from Option B component paths:

```scss
@use '@guebbit/css-ui/src/components/atoms/button-simple';
@use '@guebbit/css-ui/src/components/molecules/card-simple';
```

## Quality, linting, and dependency automation

### SCSS + CSS linting

```bash
npm run lint:styles
```

- Uses Stylelint with SCSS support (`stylelint-scss`, `postcss-scss`).
- Includes a11y-oriented lint support (`@double-great/stylelint-a11y`).
- Lints SCSS/CSS in the active source tree (excluding `old-src`, docs output, and dependencies).

### Markdown linting

```bash
npm run lint:md
```

### JavaScript linting (ESLint)

```bash
npm run lint:js
```

### Full lint pass

```bash
npm run lint
```

- JS linting uses a flat ESLint config (`eslint.config.js`) with selected useful rules adapted from your Vue baseline (`@eslint/js`, `globals`, `eslint-plugin-unicorn`).
- Dependency update automation is configured via `.github/dependabot.yml`.

## Theming model (current state)

`src/theme.scss` is **not** currently shipped as a public entrypoint.
For now, theming helpers are exposed from `src/_generics/_utils.scss` via:

```scss
@use '@guebbit/css-ui/src/_generics' as generics;
```

`docs/.vitepress/theme/theme.scss` is the reference example showing how the theming layer is assembled for docs/demo purposes.

### Recommended default: utility/class theme application

Generate helper classes once (for example `.use-brand`, `.use-primary`, `.bg-primary`, `.text-primary`):

```scss
@use '@guebbit/css-ui/src/_generics' as generics;

@layer semantic-utils {
  @include generics.generate-theme-utilities((
    'brand': ('primary-500', 'on-primary-500', 'secondary-500', 'on-secondary-500'),
    'primary': ('primary-500', 'on-primary-500')
  ));
}
```

Then apply theme scope where needed:

```html
<section class="use-brand">
  <button class="simple-button">Scoped themed button</button>
</section>
```

### Supported alternative: root/global theme application

You can still apply semantic variables globally at `:root` (or `body`) to theme the whole page.

# Guebbit CSS UI

3.0 GNU Affero General Public License
If you find an uncredited component or graphic, please inform me and I will correct it right away.
It was created for personal use but I don't mind other's using it and I created this documentation as experiment.

This library plans to be a large container of very different SCSS components,
divided using the [Atomic Design Methodology](https://bradfrost.com/blog/post/atomic-web-design/).
You should NOT import the whole library, but only the required components.
To import the components you must go directly in the correct path and import the required component.

This library is a little messy. I tried my best to provide a clean and solid library, but it serves more as a personal project\experiment than a true full-fledged framework.
Maybe in the future it will be updated to resemble one.

## Theme terminology

- **Theme source**: token definitions and semantic values (SCSS variables/maps).
- **Theme emission**: CSS variable and utility generation (for example `generate-theme-utilities` output).
- **Theme application**: where theme values are applied (`.use-*` class scope, or root/global scope).

## Legenda

### Icons

- :x: NO var() _OR_ NO $var
- :zap: $active-varname for "on active" variantss
- :first_quarter_moon_with_face: Dark theme variant with $varname--dark

### Dependency system

- VARIANT Dependencies: Variant of item (extension). Items in list are imported (@use) together.
- INCLUDED Dependencies: Composition of listed items. Items in list are imported together (Not necessary but recommended. To be imported MANUALLY).

# Global variables

| Variable                 | Description                                                     | Accepted Values | Default                         |
| :----------------------- | :-------------------------------------------------------------- | :-------------- | :------------------------------ |
| `$css-ui-class-prefix`   | Prefix of library (classname only)                              | `text`          | ``                              |
| `$css-ui-component-name` | Classname of component                                          | `text`          | `{component-name} (kebab-case)` |
| `$css-ui-prefix`         | Prefix of component variables (vars only)                       | `text`          | ``                              |
| `$css-ui-base-prefix`    | Prefix of globals theme vars, for pure css global customization | `text`          | ``                              |

## Component variables

Generic rule:
We have _$color_ variable which is _null_, if user insert a value, it will be used in LIGHT and DARK theme.
If not, they'll have a standard value that will be stored in $color--light and $color--dark (the true variables that will be used).

In simple components (not many color variables) _$color_ will have it's _--color_ CSS var.
In complex components (many color variables) _$color_ will NOT have it's corresponding _--color_ CSS var. But it will be used on the various
color variables that will be present. It will still act as a "main" color to easily style the component, like a shortcut.

scss/dollar-variable-pattern lint accept double dashes, to achieve a cleaner way to tell variants (like themes) apart

TODO $background, $on-background, $title-color, $active-**\*, $\*\***--dark explanation

## How the Var system works

All components have their local SCSS variables which can be changed by @use, but they can also change through classic CSS vars specificity wars.
You can change CSS vars through parents adding _$css-ui-component-name_

This is the structure of the variables in the components:
A) --#{$css-ui-prefix}var-name: var(--#{$css-ui-prefix}#{$css-ui-component-name}-var-name, rgba(var(--#{$css-ui-prefix}#{$css-ui-base-prefix}var-name, #{guebbit.extract-colors($var-name--dark)})));
B) --#{$css-ui-prefix}shadow-color: var(--#{$css-ui-prefix}#{$css-ui-component-name}-shadow-color, var(--#{$css-ui-prefix}#{$css-ui-base-prefix}shadow-color, #{guebbit.extract-colors($shadow-color)}));

So you can use various ways to edit the same variable (order of priority)

- --var-name
- --component-name-var-name
- --global-var-name
- $var-name (--dark or --light)

A) Has integrated rgba() so they will arrive at the instruction as a color
B) It can be used with optional custom opacity, so it doesn't have rgba but it's only the digits in the "number" alpha-value-notation

## COMPONENT CREATION GUIDE:

- Create file scss: `/src/components/{atoms|molecules|organisms}/{category-singular}-{variant}/index.scss` (examples: `button-simple`, `card-event-long`, `panel-timeline-tree`)
- Create file md: /docs/{category-path}/{name}.md
- OPTIONALLY create shared example html: /docs/examples/{category-path}/{name}(-{variant}).html
- Reuse those shared examples from the docs page (`@include` / `<<<`) and from visual fixtures
- Insert in config.js
- Insert in the relative category index.scss ex: /{category}/index.scss

## TIPS

- In case of name conflict, use the variable $css-ui-class-prefix

## WARNING @import clause

The deprecation of @import created a vacuum of functionalities that, at the moment, are yet to be filled.
This brought to a choice: code repetition or a not-good-looking patch (that still use @import)
Extended components must use this patch to continue working. I hope to correct this kind of problem in the future.

- Modules are designed to be configured one time only. The with ( ... ) syntax is meant for one-time project-wide initial settings.
- Mixins are designed to be called many times with different settings.

## TODO

See `/TODO.md` for the current deferred roadmap and backlog.

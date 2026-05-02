The default theme now styles the markdown content in the home page.
If you have custom styles that rely on the markdown content not being styled,
you may need to adjust your styles, or add markdownStyles: false to the frontmatter of your home page.

# How to use

```scss
/**
 * Install the theme
 */
@use '@guebbit/css-ui/src/theme' as theme with (// your custom scss variables);

/**
 * Implement theme (insert in the css)
 */
:root {
    @include theme.theme-generic;
    @include theme.theme-dark-builder;
}
.#{theme.$css-ui-dark-theme-class} {
    :root {
        @include theme.theme-dark-builder;
    }
}
@media (prefers-color-scheme: dark) {
    :root {
        @include theme.theme-dark-builder;
    }
};;;;
```

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

## How to Use

```scss
@use '@guebbit/css-ui/src/theme' as theme;
@use '@guebbit/css-ui/src/path/to/component' with (
    $css-ui-base-prefix: theme.$css-ui-base-prefix
);
```

```scss
@use '@guebbit/css-ui/src/theme' as theme;
@use '@guebbit/css-ui/src/path/to/component' with (
    $color: rgba(theme.$primary-color, 0.5),
    $active-color: rgba(theme.$secondary-color, 0.5)
);
```

```scss
@use '@guebbit/css-ui/src/theme' as theme;
@use '@guebbit/css-ui/src/path/to/component' with (
    $color: (
        var(--primary-500) / 0.5
    ),
    $active-color: (
        var(--secondary-500) / 0.5
    )
);
```

## theme.scss

This (optional) file gives the opportunity to themify all components through global root vars.
More in the <a href="#how-the-var-system-works">How the Var system works</a> section

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

- Create file scss: /src/{category-path}/{name}.scss
- Create file md: /docs/{category-path}/{name}.md
- OPTIONALLY create file html: /docs/{category-path}/{name}(-{variant}).html
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

## Deployment (Docker)

The documentation site can be served as a standalone static site using the
provided `Dockerfile` and `nginx.conf`.

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed

### Build the image

```bash
docker build -t guebbit-css-ui-docs .
```

### Run the container

```bash
docker run -p 8080:80 guebbit-css-ui-docs
```

Then open `http://localhost:8080` in your browser.

The image performs a two-stage build:

1. **Build stage** – installs Node.js dependencies and runs `npm run docs:build`
   to compile the VitePress documentation site.
2. **Serve stage** – copies the compiled assets into a lightweight `nginx:alpine`
   image and serves them over HTTP/80 with gzip compression and long-term caching
   for static assets.

### Runtime configuration

The documentation site is fully static. If your deployment environment requires
a non-root URL base path, rebuild the image after setting the VitePress
[`base`](https://vitepress.dev/reference/site-config#base) option in
`docs/.vitepress/config.ts`.

---

## TODO

- Update vitepress to v2 when they are ready (now in alpha)
- Check on all dark and light themes of chrome, firefox, edge and safari
- REDO CircularProgressBarCss
- simplify "@use "@guebbit/css-ui/src/atoms/buttons/simple-button";", maybe remove the categories path? (es: buttons)

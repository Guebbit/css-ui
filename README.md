The default theme now styles the markdown content in the home page. 
If you have custom styles that rely on the markdown content not being styled, 
you may need to adjust your styles, or add markdownStyles: false to the frontmatter of your home page.


# How to use

```scss
/**
 * Install the theme
 */
@use "@guebbit/css-ui/src/theme" as theme with (
    // your custom scss variables
);

/**
 * Implement theme (insert in the css)
 */
:root{
  @include theme.theme-generic;
  @include theme.theme-dark-builder;
}
.#{theme.$css-ui-dark-theme-class}{
  :root{
    @include theme.theme-dark-builder;
  }
}
@media (prefers-color-scheme: dark) {
  :root{
    @include theme.theme-dark-builder;
  }
}
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
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/path/to/component" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/path/to/component" with (
    $color: rgba(theme.$primary-color, 0.5),
    $active-color: rgba(theme.$secondary-color, 0.5)
);
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/path/to/component" with (
    $color: (var(--primary-500) / .5),
    $active-color: (var(--secondary-500) / .5)
);
```

## theme.scss

This (optional) file gives the opportunity to themify all components through global root vars. 
More in the <a href="#how-the-var-system-works">How the Var system works</a> section

## Legenda

### Icons
- :x: NO var() *OR* NO $var
- :zap: $active-varname for "on active" variantss
- :first_quarter_moon_with_face: Dark theme variant with $varname--dark

### Dependency system
- VARIANT Dependencies:  Variant of item (extension). Items in list are imported (@use) together.
- INCLUDED Dependencies:  Composition of listed items. Items in list are imported together (Not necessary but recommended. To be imported MANUALLY).

# Global variables

| Variable                 | Description                                                     | Accepted Values | Default                         |
|:-------------------------|:----------------------------------------------------------------|:----------------|:--------------------------------|
| `$css-ui-class-prefix`   | Prefix of library (classname only)                              | `text`          | ``                              |
| `$css-ui-component-name` | Classname of component                                          | `text`          | `{component-name} (kebab-case)` |
| `$css-ui-var-prefix`     | Prefix of component variables (vars only)                       | `text`          | ``                              |
| `$css-ui-root-prefix`    | Prefix of globals theme vars, for pure css global customization | `text`          | ``                              |






## Component variables

Generic rule:
We have *$color* variable which is *null*, if user insert a value, it will be used in LIGHT and DARK theme.
If not, they'll have a standard value that will be stored in $color--light and $color--dark (the true variables that will be used).

In simple components (not many color variables) *$color* will have it's *--color* CSS var.
In complex components (many color variables) *$color* will NOT have it's corresponding *--color* CSS var. But it will be used on the various
color variables that will be present. It will still act as a "main" color to easily style the component, like a shortcut.

scss/dollar-variable-pattern lint accept double dashes, to achieve a cleaner way to tell variants (like themes) apart

TODO $background, $on-background, $title-color, $active-***, $****--dark explanation




## How the Var system works
All components have their local SCSS variables which can be changed by @use, but they can also change through classic CSS vars specificity wars.
You can change CSS vars through parents adding *$css-ui-component-name*

This is the structure of the variables in the components:
A) --#{$css-ui-var-prefix}var-name: var(--#{$css-ui-var-prefix}#{$css-ui-component-name}-var-name, rgba(var(--#{$css-ui-var-prefix}#{$css-ui-root-prefix}var-name, #{guebbit.extract-colors($var-name--dark)})));
B) --#{$css-ui-var-prefix}shadow-color: var(--#{$css-ui-var-prefix}#{$css-ui-component-name}-shadow-color, var(--#{$css-ui-var-prefix}#{$css-ui-root-prefix}shadow-color, #{guebbit.extract-colors($shadow-color)}));

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



## TODO
 - Check on all dark and light themes of chrome, firefox, edge and safari
 - REDO CircularProgressBarCss
 - simple-card header (and check others) transition is too fast and it seems a 
   glitch if there is a transition with background change on both card and header

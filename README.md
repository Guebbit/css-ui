The default theme now styles the markdown content in the home page. 
If you have custom styles that rely on the markdown content not being styled, 
you may need to adjust your styles, or add markdownStyles: false to the frontmatter of your home page.






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






# Component variables

Generic rule:
We have *$color* variable which is *null*, if user insert a value, it will be used in LIGHT and DARK theme.
If not, they'll have a standard value that will be stored in $color--light and $color--dark (the true variables that will be used).

In simple components (not many color variables) *$color* will have it's *--color* CSS var.
In complex components (many color variables) *$color* will NOT have it's corresponding *--color* CSS var. But it will be used on the various
color variables that will be present. It will still act as a "main" color to easily style the component, like a shortcut.

scss/dollar-variable-pattern lint accept double dashes, to achieve a cleaner way to tell variants (like themes) apart

TODO $background, $on-background, $title-color, $active-***, $****--dark explanation





# How the Var system works:
All components have their local SCSS variables which can be changed by @use, but they can also change through classic CSS vars specificity wars.
You can change CSS vars through parents adding *$css-ui-component-name*

Formula: --#{$css-ui-var-prefix}varname: var(--#{$css-ui-var-prefix}#{$css-ui-component-name}-varname, #{varname});
Example: --background: var(--simple-card-background, transparent);
So you can use $vbackground, or else --background on the local element, otherwise you can use --simple-card-background in a parent (ex: root)

## COMPONENT CREATION GUIDE:
- Create file scss: /src/{category-path}/{name}.scss
- Create file md: /docs/{category-path}/{name}.md
- Create file html: /docs/{category-path}/{name}(-{variant}).html
- Insert in config.js
- Insert in the relative category index.scss ex: /{category}/index.scss

## TIPS
- In case of name conflict, use the variable $css-ui-class-prefix




# WARNING @import clause
The deprecation of @import created a vacuum of functionalities that, at the moment, are yet to be filled.
This brought to a choice: code repetition or a not-good-looking patch (that still use @import)
Extended components must use this patch to continue working. I hope to correct this kind of problem in the future.
- Modules are designed to be configured one time only. The with ( ... ) syntax is meant for one-time project-wide initial settings.
- Mixins are designed to be called many times with different settings.



# TODO
- guardare tutti i componenti in light&dark theme + chrome, firefox & safari 
- ho dovuto mettere "ignoreDeadLinks: true" perché mis egnala dei dead link ma non dove si trovano
- SimpleCard-variants.md troppo caotico, da ordinare

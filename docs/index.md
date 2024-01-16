# Guebbit SCSS Library
3.0 GNU Affero General Public License
If you find an uncredited component or graphic, please inform me and I will correct it right away.
It was created for personal use but I don't mind other's using it and I created this documentation as experiment.

This library plans to be a large container of very different SCSS components,
divided using the [Atomic Design Methodology](https://bradfrost.com/blog/post/atomic-web-design/). 

The best approach is not import the whole library but carefully choose the components that we want from it.




## Legenda

### Icons
- :x: NO var() *OR* NO $var
- :zap: $active-varname for "on active" variantss
- :first_quarter_moon_with_face: Dark theme variant with $varname--dark

### Dependency system
- VARIANT Dependencies:  Variant of item (extension). Items in list are imported (@use) together.
- INCLUDED Dependencies:  Composition of listed items. Items in list are imported together (Not necessary but recommended. To be imported MANUALLY).






# Global variables

| Variable                        | Description                           | Accepted Values | Default                         |
|:--------------------------------|:--------------------------------------|:----------------|:--------------------------------|
| `$scss-library-class-prefix`          | Prefix of library (classname only)    | `text`          | ``                              |
| `$scss-library-component-name`  | Classname of component                | `text`          | `{component-name} (kebab-case)` |
| `$scss-library-var-prefix`      | Prefix of component variables (only)  | `text`          | ``                              |






# Component variables

Generic rule:
We have *$color* variable which is *null*, if user insert a value, it will be used in LIGHT and DARK theme. 
If not, they'll have a standard value that will be stored in $color--light and $color--dark (the true variables that will be used).

In simple components (not many color variables) *$color* will have it's *--color* CSS var.
In complex components (many color variables) *$color* will NOT have it's corresponding *--color* CSS var. But it will be used on the various 
color variables that will be present. It will still act as a "main" color to easily style the component, like a shortcut.

TODO $background, $on-background, $title-color, $active-***, $****--dark explanation

# How the Var system works:
All components have their local SCSS variables which can be changed by @use, but they can also change through classic CSS vars specificity wars.
You can change CSS vars through parents adding *$scss-library-component-name*

Formula: --#{$scss-library-var-prefix}varname: var(--#{$scss-library-var-prefix}#{$scss-library-component-name}-varname, #{varname});
Example: --background: var(--simple-card-background, transparent);
So you can use $vbackground, or else --background on the local element, otherwise you can use --simple-card-background in a parent (ex: root)





## COMPONENT CREATION GUIDE:
- Create file scss: /components/{category-path}/{name}.scss
- Create file md: /docs/{category-path}/{name}.md
- Create file html: /docs/{category-path}/{name}(-{variant}).html
- Insert in config.js
- Insert in the relative category index.scss ex: /{category}/index.scss




## TIPS
- In case of name conflict, use the variable $scss-library-class-prefix




## TODO
- guardare tutti i componenti in light&dark theme + chrome, firefox & safari
- buttonparallelogram extend simplebutton
- https://github.com/sass/sass/issues/2744#issuecomment-678813117
  - Modules are designed to be configured one time only. The with ( ... ) syntax is meant for one-time project-wide initial settings.
  - Mixins are designed to be called many times with different settings.

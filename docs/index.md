# Guebbit SCSS Library
MIT License, free to use
If you find an uncredited component or graphic, please inform me and I will correct it right away


## Legenda

::: tip
- :x: NO var() *OR* NO $var
- :zap: $active-varname for "on active" variants
- :first_quarter_moon_with_face: Dark theme variant with $varname--dark
:::


| Variable                        | Description                           | Accepted Values | Default                         |
|:--------------------------------|:--------------------------------------|:----------------|:--------------------------------|
| `$scss-library-prefix`          | Prefix of library (classname only)    | `text`          | ``                              |
| `$scss-library-component-name`  | Classname of component                | `text`          | `{component-name} (kebab-case)` |
| `$scss-library-var-prefix`      | Prefix of component variables (only)  | `text`          | ``                              |




For simple components: 
 - "$color" and "$on-color" will be direct variables with an equivalent CSS var on the element.
 - "$active-color" exist depending on the existence of an active state (like CSS activated by :hover)

For complex component: 
 - "$on-color" doesn't exist 
 - "$color" and "$active-color" *DON'T* exist as a CSS variable. They are shortcuts for more specific variables, like "$background" and "$on-background", that will exist as CSS vars.


## TODO
 - redo cards (and more?) hierarchy
 - card-shadow, card-boxshadow, card-overlay, etc fix

## WARNING
- In case of name conflict, use the variable $scss-library-prefix

## LEGENDA
- VARIANT Dependencies:  Variant of item (extension). Items in list are imported (@use) together.
- INCLUDED Dependencies:  Composition of listed items. Items in list are imported together (Not necessary but recommended. To be imported MANUALLY).

## COMPONENT CREATION GUIDE:
- Create file scss: /components/{category}/{name}.scss
- Create file md: /docs/components/{category}/{name}.md
- Create file html: /docs/components/{category}/{name}(-{variant}).html
- Insert in config.js
- Insert in the relative category index.scss ex: /{category}/index.scss

## Description
This library plans to be a large container of very different SCSS components, 
divided using the [Atomic Design Methodology](https://bradfrost.com/blog/post/atomic-web-design/)  

The best approach is not import the whole library but carefully choose the components that we want from it.
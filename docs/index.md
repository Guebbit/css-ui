# Guebbit SCSS Library
MIT License, free to use
If you find an uncredited component or graphic, please inform me and I will correct it right away

## TODO
 - redo cards (and more?) hierarchy
 - card-shadow, card-boxshadow, card-overlay, etc fix

## WARNING
- In case of name conflict, use the variable $scss-library-prefix

## LEGENDA
- VARIANT Dependencies: MUST import separately. Variant of listed items. Check for more variants, classes and SCSS variables
- ORGANISM Dependencies: MUST import separately. Evolution or composition of listed items, but more complex.

## COMPONENT CREATION GUIDE:
- Create file scss: /components/{category}/{name}.scss
- Create file md: /docs/components/{category}/{name}.md
- Create file html: /public/components-html/{category}/{name}.html
- Insert in config.js
- Insert in the relative category index.scss ex: /{category}/index.scss

## Description
This library plans to be a large container of very different SCSS components, 
divided using the [Atomic Design Methodology](https://bradfrost.com/blog/post/atomic-web-design/)  

The best approach is not import the whole library but carefully choose the components that we want from it.
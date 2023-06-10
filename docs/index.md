# Guebbit SCSS Library
MIT License, free to use

## WARNING
- In case of name conflict, use the variable $scss-library-prefix

## LEGENDA
 - Organism Dependencies: Check them for more variants, classes and SCSS variables

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
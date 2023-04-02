# Guebbit SCSS Library

MIT License, free to use

WARNING
 - In caso di conflitti nel nome delle classi, usare la variabile $scss-library-prefix


GUIDA CREAZIONE COMPONENTE:
 - Crea file scss: /components/molecules/{category}/{name}.scss
 - Crea file md: /docs/components/molecules/{category}/{name}.md
 - Crea file html: /public/components-html/molecules/{category}/{name}.html
 - Inserisci in config.js
 - Inserisci nel rispettivo index.scss, ex: /components/molecules/index.scss

This library plans to be a large container of very different SCSS components, 
divided using the [Atomic Design Methodology](https://bradfrost.com/blog/post/atomic-web-design/)  

The best approach is not import the whole library but carefully choose the components that we want from it.
# Book Front Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Progression</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/book-front-load/index";
```

Color is now always applied via utility classes (not SCSS color variables):

- `.bg-{role}` → background + on-color
- `.text-{role}` → text color
- `.border-{role}` → border color

```html
<div class="text-primary">...</div>
<button class="bg-primary">...</button>
<button class="border-primary text-primary">...</button>
```


## Default

::: raw
<div class="dev-section">
    <div class="book-front-load">
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>
:::

```html
<div class="book-front-load">
    <span></span>
    <span></span>
    <span></span>
</div>
```

## Component CSS

<<< @/../src/atoms/animations/book-front-load/index.scss

## CSS Custom Properties

| Property                          | Description                  | Default           |
|:----------------------------------|:-----------------------------|:------------------|
| `--book-front-load-border-color`  | Border color                 | `primary-500`     |
| `--book-front-load-background`    | Page/fill background         | `on-primary-500`  |
| `--book-front-load-shadow-color`  | Shadow during page flip      | `primary-700`     |
| `--book-front-load-size`          | Size of the animation        | `100px`           |
| `--book-front-load-duration`      | Animation duration           | `1s`              |

<style lang="scss">
@use "../src/atoms/animations/book-front-load/index";
</style>
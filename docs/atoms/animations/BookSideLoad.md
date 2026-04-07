# Book Side Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Progression</Badge>

::: danger
Can't change $size, must be 32px, need to be fixed
:::

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/book-side-load/index";
```

Color is now always applied via utility classes (not SCSS color variables):

- `.bg-{role}` → background + on-color
- `.text-{role}` → text color
- `.border-{role}` → border color
- `.use-{role}` → sets `--css-ui-main-color` for internal component color usage

```html
<div class="text-primary">...</div>
<button class="bg-primary">...</button>
<button class="border-primary text-primary">...</button>
<div class="use-primary">...</div>
```


## Default

::: raw
<div class="dev-section">
    <div class="book-side-load animate-active">
        <div class="book">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <ul class="pages">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</div>
:::

```html
<div class="book-side-load animate-active">
    <div class="book">
        <div></div>
        <div></div>
        <div></div>
    </div>
    <ul class="pages">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</div>
```

## Component CSS

<<< @/../src/atoms/animations/book-side-load/index.scss

## Classes

| Class               | Description          |
|:--------------------|:---------------------|
| `animate-active`    | Animation active     |
| `animate-on-active` | Animation on .active |
| `animate-on-hover`  | Animation on hover   | 

## CSS Custom Properties

Component color is inherited from utility classes (`.bg-{role}`, `.text-{role}`, `.border-{role}`, `.use-{role}`).

| Property | Default |
|:---------|:--------|
| `--book-side-load-size` | `32px` |
| `--book-side-load-duration` | `7s` |


<style lang="scss">
@use "../src/atoms/animations/book-side-load/index";
</style>
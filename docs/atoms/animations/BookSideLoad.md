# Book Side Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Progression</Badge>

::: danger
Can't change $size, must be 32px, need to be fixed
:::

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/animations/BookSideLoad" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/animations/BookSideLoad" with (
    $color: theme.$primary-color
);
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

<<< @/../src/atoms/animations/BookSideLoad.scss

## Classes

| Class               | Description          |
|:--------------------|:---------------------|
| `animate-active`    | Animation active     |
| `animate-on-active` | Animation on .active |
| `animate-on-hover`  | Animation on hover   | 

## SCSS variables

| Variable       | Description                                | Accepted Values | Default         |
|:---------------|:-------------------------------------------|:----------------|:----------------|
| `$color`       | :first_quarter_moon_with_face: Pages color | `color`         | `#000` / `#fff` |
| `$size`        | Pages size                                 | `time`          | `32px`          |
| `$duration`    | Animation duration                         | `time`          | `7s`            |
| `$multiplier`  | :x: Loop multiplier                        | `number`        | `1.2`           |
| `$number`      | :x: For optimization purposes              | `number`        | `18`            |

<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/animations/BookSideLoad" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
</style>
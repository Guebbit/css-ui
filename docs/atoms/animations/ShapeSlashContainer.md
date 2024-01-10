# Shape Slash Container
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge>

### Default
::: raw
<div class="dev-section without-restrictions">
    <div class="custom-css-container">
        <div class="shape-slash-container"></div>
    </div>
</div>
:::

```html
<div class="shape-slash-container"></div>
```

### Inverted
::: raw
<div class="dev-section without-restrictions">
    <div class="custom-css-container">
        <div class="shape-slash-container shape-slash-inverted"></div>
    </div>
</div>
:::

```html
<div class="shape-slash-container shape-slash-inverted"></div>
```

### Double
::: raw
<div class="dev-section without-restrictions">
    <div class="custom-css-container">
        <div class="shape-slash-container"></div>
        <div class="shape-slash-container" style="--size: 40%; --color: rgba(255,0,255,0.2);"></div>
    </div>
</div>
:::

```html
<div class="shape-slash-container"></div>
<div class="shape-slash-container" style="--size: 40%; --color: rgba(255,0,255,0.2)"></div>
```

## Component CSS

<<< @/../components/atoms/animations/ShapeSlashContainer.scss

## Documentation CSS

```scss
@use "docs/theme.scss" as theme;
@use "components/atoms/animations/ShapeSlashContainer.scss" as * with (
    $color: rgba(theme.$primary-color, 0.5),
);

.custom-css-container{
  position: relative;
  overflow: hidden;
  z-index: 1;
  height: 300px;
  background: black;
  margin-bottom: 2em;
}
```


## SCSS variables

| Variable     | Description                        | Accepted Values | Default    |
|:-------------|:-----------------------------------|:----------------|:-----------|
| `$color`     | Shape color                        | `color`         | `#000`     |
| `$size`      | Shape size (relative to container) | `size`          | `50%`      |
| `$degree`    | Inclination (skew) degree          | `degrees`       | `20deg`    |

## Classes

| Class                     | Description                     |
|:--------------------------|:--------------------------------|
| `shape-slash-inverted`    | Right direction instead of left |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/animations/ShapeSlashContainer.scss" as * with (
    $color: rgba(theme.$primary-color, 0.5),
);

.custom-css-container{
  position: relative;
  overflow: hidden;
  z-index: 1;
  height: 300px;
  background: black;
  margin-bottom: 2em;
}
</style>
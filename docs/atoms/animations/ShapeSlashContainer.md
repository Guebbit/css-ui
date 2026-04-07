# Shape Slash Container
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/shape-slash-container/index";
```

Colors and design tokens are controlled via CSS custom properties or `.color-*` utility classes:
```html
<div class="shape-slash-container color-primary">
<div class="shape-slash-container color-secondary">
```
Or override inline:
```html
<div class="shape-slash-container" style="--color-background: rgba(255, 107, 53, 0.7);">
```

### Default

::: raw
<div class="dev-section without-restrictions">
    <div class="custom-css-container shape-slash-container-animate-on-hover">
        <div class="shape-slash-container"></div>
    </div>
</div>
:::

```html
<div class="custom-css-container shape-slash-container-animate-on-hover">
    <div class="shape-slash-container"></div>
</div>
```

### Inverted
::: raw
<div class="dev-section without-restrictions">
    <div class="custom-css-container shape-slash-container-animate-on-hover">
        <div class="shape-slash-container shape-slash-inverted"></div>
    </div>
</div>
:::

```html
<div class="custom-css-container shape-slash-container-animate-on-hover">
    <div class="shape-slash-container shape-slash-inverted"></div>
</div>
```

### Double
::: raw
<div class="dev-section without-restrictions">
    <div class="custom-css-container shape-slash-container-animate-on-hover">
        <div class="shape-slash-container"></div>
        <div class="shape-slash-container" style="--size: 40%; --color: rgba(255,0,255,0.7);"></div>
    </div>
</div>
:::

```html
<div class="custom-css-container shape-slash-container-animate-on-hover">
    <div class="shape-slash-container"></div>
    <div class="shape-slash-container" style="--size: 40%; --color: rgba(255,0,255,0.2);"></div>
</div>
```

## Component CSS

<<< @/../src/atoms/animations/shape-slash-container/index.scss

## Documentation CSS

```scss
.custom-css-container {
  position: relative;
  overflow: hidden;
  z-index: 1;
  height: 300px;
  margin-bottom: 2em;
  background-image: url("https://placedog.net/1000/1000");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
```

## Classes

| Class                              | Description                                |
|:-----------------------------------|:-------------------------------------------|
| `animate-active`                   | Animation active                           |
| `animate-on-active`                | Animation active on .active                |
| `animate-on-hover`                 | Animation active on hover                  |
| `shape-slash-inverted`             | Right direction instead of left            |

## CSS Custom Properties

| Property                                   | Description                        | Default       |
|:-------------------------------------------|:-----------------------------------|:--------------|
| `--shape-slash-container-color`            | Shape color                        | `primary-500` |
| `--shape-slash-container-active-color`     | Active/hover shape color           | `primary-600` |
| `--shape-slash-container-size`             | Shape size (relative to container) | `50%`         |
| `--shape-slash-container-active-size`      | Active shape size                  | `50%`         |
| `--shape-slash-container-degree`           | Inclination (skew) degree          | `20deg`       |
| `--shape-slash-container-active-degree`    | Active inclination degree          | `20deg`       |
| `--shape-slash-container-duration`         | Transition duration                | `0.3s`        |
| `--shape-slash-container-opacity`          | Shape opacity                      | `0.5`         |

<style lang="scss">
@use "../src/atoms/animations/shape-slash-container/index";

.custom-css-container{
  position: relative;
  overflow: hidden;
  z-index: 1;
  height: 300px;
  margin-bottom: 2em;
  background-image: url("https://placedog.net/1000/1000");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
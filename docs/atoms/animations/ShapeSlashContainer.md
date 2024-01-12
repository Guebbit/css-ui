# Shape Slash Container
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge>

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

<<< @/../components/atoms/animations/ShapeSlashContainer.scss

## Documentation CSS

```scss
@use "docs/theme.scss" as theme;
@use "components/atoms/animations/ShapeSlashContainer.scss" as * with (
    $color: rgba(theme.$primary-color, 0.7),
    $active-color: rgba(theme.$secondary-color, 0.7),
    $active-size: 60%,
    $active-degree: -20deg,
);

.custom-css-container{
  position: relative;
  overflow: hidden;
  z-index: 1;
  height: 300px;
  margin-bottom: 2em;
  background-image: url("https://placekitten.com/1000/1000");
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

## SCSS variables
::: tip
- :zap: $active-varname for "on active" variants
- :first_quarter_moon_with_face: Dark theme variant with $varname--dark
:::

| Variable    | Description                                      | Accepted Values | Default         |
|:------------|:-------------------------------------------------|:----------------|:----------------|
| `$color`    | :zap: :first_quarter_moon_with_face: Shape color | `color`         | `#000` / `#fff` |
| `$size`     | :zap: Shape size (relative to container)         | `size`          | `50%`           |
| `$degree`   | :zap: Inclination (skew) degree                  | `degrees`       | `20deg`         |
| `$duration` | Transition duration                              | `time`          | `0.3s`          |

## Classes

| Class                     | Description                     |
|:--------------------------|:--------------------------------|
| `shape-slash-inverted`    | Right direction instead of left |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/animations/ShapeSlashContainer.scss" as * with (
    $color: rgba(theme.$primary-color, 0.7),
    $active-color: rgba(theme.$secondary-color, 0.7),
    $active-size: 60%,
    $active-degree: -20deg,
);

.custom-css-container{
  position: relative;
  overflow: hidden;
  z-index: 1;
  height: 300px;
  margin-bottom: 2em;
  background-image: url("https://placekitten.com/1000/1000");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
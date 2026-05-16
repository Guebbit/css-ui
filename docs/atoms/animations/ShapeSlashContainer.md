# Shape Slash Container
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/components/atoms/animations/shape-slash-container";
```


## Default

::: raw
<!--@include: ../../examples/atoms/animations/ShapeSlashContainer-default.html -->
:::

```html
<div class="shape-slash-container animate-on-hover text-primary">
  Hover me
</div>
```


## Component CSS

::: code-group
<<< @/../src/components/atoms/animations/shape-slash-container/_architecture.scss [_architecture.scss]
<<< @/../src/components/atoms/animations/shape-slash-container/index.scss [index.scss]
:::

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

Component color is inherited from utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`).

| Property | Default |
|:---------|:--------|
| `--shape-slash-container-size` | `50%` |
| `--shape-slash-container-active-size` | `50%` |
| `--shape-slash-container-degree` | `20deg` |
| `--shape-slash-container-active-degree` | `20deg` |
| `--shape-slash-container-duration` | `0.3s` |
| `--shape-slash-container-opacity` | `0.5` |


## SCSS variables

| SCSS Variable | CSS Variable | Description | Default |
|:--------------|:-------------|:------------|:--------|
| `$size` | `--shape-slash-container-size` | Component size | `50%` |
| `$active-size` | `--shape-slash-container-active-size` | Active size | `50%` |
| `$degree` | `--shape-slash-container-degree` | Degree | `20deg` |
| `$active-degree` | `--shape-slash-container-active-degree` | Active degree | `20deg` |
| `$opacity` | `--shape-slash-container-opacity` | Opacity | `0.5` |

<style lang="scss">
@use "../src/components/atoms/animations/shape-slash-container";

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

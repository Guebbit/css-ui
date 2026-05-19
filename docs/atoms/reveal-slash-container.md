# Shape Slash Container
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge>

## Use

```scss
@use "@guebbit/css-ui/atoms/reveal-slash-container";
```


## Default

::: raw
<!--@include: ../examples/atoms/ShapeSlashContainer-default.html -->
:::

```html
<div class="reveal-slash-container animate-on-hover text-primary">
  Hover me
</div>
```


## Component CSS

::: code-group
<<< @/../src/components/atoms/reveal-slash-container/_architecture.scss [_architecture.scss]
<<< @/../src/components/atoms/reveal-slash-container/index.scss [index.scss]
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
| `--reveal-slash-container-size` | `50%` |
| `--reveal-slash-container-active-size` | `50%` |
| `--reveal-slash-container-degree` | `20deg` |
| `--reveal-slash-container-active-degree` | `20deg` |
| `--reveal-slash-container-duration` | `0.3s` |
| `--reveal-slash-container-opacity` | `0.5` |


## SCSS variables

| SCSS Variable | CSS Variable | Description | Default |
|:--------------|:-------------|:------------|:--------|
| `$size` | `--reveal-slash-container-size` | Component size | `50%` |
| `$active-size` | `--reveal-slash-container-active-size` | Active size | `50%` |
| `$degree` | `--reveal-slash-container-degree` | Degree | `20deg` |
| `$active-degree` | `--reveal-slash-container-active-degree` | Active degree | `20deg` |
| `$opacity` | `--reveal-slash-container-opacity` | Opacity | `0.5` |

<style lang="scss">
@use "../src/components/atoms/reveal-slash-container";

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

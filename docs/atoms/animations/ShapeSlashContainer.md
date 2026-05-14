# Shape Slash Container
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/shape-slash-container";
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

Component color is inherited from utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`).

| Property | Default |
|:---------|:--------|
| `--shape-slash-container-size` | `50%` |
| `--shape-slash-container-active-size` | `50%` |
| `--shape-slash-container-degree` | `20deg` |
| `--shape-slash-container-active-degree` | `20deg` |
| `--shape-slash-container-duration` | `0.3s` |
| `--shape-slash-container-opacity` | `0.5` |


<style lang="scss">
@use "../src/atoms/animations/shape-slash-container";

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

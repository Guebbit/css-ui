# Hightlight Belt
<Badge type="tip">Atom</Badge> <Badge type="info">Highlight</Badge>

## Use

```scss
@use "@guebbit/css-ui/atoms/highlight-belt";
```



## Default

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/highlights/HighlightBelt-default.html -->
</div>
:::

::: code-group
```html [top]
<div class="highlight-belt bend-top">
    <b>Lorem Ipsum</b>
</div>
```
```html [no direction]
<div class="highlight-belt">
    <b>Lorem Ipsum</b>
</div>
```
```html [bottom]
<div class="highlight-belt bend-bottom">
    <b>Lorem Ipsum</b>
</div>
```
```html [different bends]
<div class="highlight-belt bend-bottom-right bend-top-left">
    <b>Lorem Ipsum</b>
</div>
<div class="highlight-belt bend-top-right bend-bottom-left">
    <b>Lorem Ipsum</b>
</div>
```
```html [top and bottom]
<div class="highlight-belt bend-top bend-bottom">
    <b>Lorem Ipsum</b>
</div>
```
:::

## Component CSS

::: code-group
<<< @/../src/components/atoms/highlight-belt/_architecture.scss [_architecture.scss]
<<< @/../src/components/atoms/highlight-belt/index.scss [index.scss]
:::

## Documentation CSS

```scss
#highlight-test-container {
  width: 100%;
  height: 600px;
  padding: 10% 0;
  background-color: #ccc;
}
```

## Classes

| Class               | Description              |
|:--------------------|:-------------------------|
| `bend-top`          | Right & left TOP bend    |
| `bend-bottom`       | Right & left BOTTOM bend |
| `bend-top-left`     | Left TOP bend            |
| `bend-bottom-left`  | Left BOTTOM bend         |
| `bend-top-right`    | Right TOP bend           |
| `bend-bottom-right` | Right BOTTOM bend        |

## SCSS variables

| SCSS Variable | CSS Variable | Description | Accepted Values | Default |
| :--------------|:-------------|:-------------|:-----------------|:---------|
| `$color` | `--highlight-belt-main-color` | :first_quarter_moon_with_face: Main color | `color` | `#fff` |
| `$fold-color` | — | :first_quarter_moon_with_face: Fold color | `color` | `50% shade of {$color}` |
| `$shadow` | `--shadow-color` | :first_quarter_moon_with_face: Shadow color | `color` | `#000` |
| `$size` | `--highlight-belt-size` | Belt size (min-height) | `size` | `2em` |
| `$border-width` | `--highlight-belt-border-width` | Border size | `size` | `15px` |
| `$border-radius` | `--highlight-belt-border-radius` | Border radius | `size` | `6px` |
| `$translate` | `--highlight-belt-translate` | translateX to be in the middle | `size` | `-({$angle * 0.5} + {$border-width} * 0.5 - 3)` |
<style lang="scss">
@use "../src/components/atoms/highlight-belt";

#highlight-test-container{
  width: 100%;
  height: 600px;
  padding: 10% 0;
  background-color: #ccc;
}
</style>

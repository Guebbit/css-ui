# Hightlight Belt
<Badge type="tip">Atom</Badge> <Badge type="info">Highlight</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/highlights/highlight-belt/index";
```

::: info Color customization
Apply a `.color-*` class to switch the belt's color scheme:
```html
<div class="highlight-belt color-primary">Primary Belt</div>
<div class="highlight-belt color-secondary">Secondary Belt</div>
```
:::

## Default

::: raw
<div class="dev-section">
    <div id="highlight-test-container">
        <div class="highlight-belt bend-top">
            <b>Lorem Ipsum</b>
        </div>
        <br />
        <div class="highlight-belt">
            <b>Lorem Ipsum</b>
        </div>
        <br />
        <div class="highlight-belt bend-bottom">
            <b>Lorem Ipsum</b>
        </div>
        <br />
        <hr />
        <br />
        <div class="highlight-belt bend-bottom-right bend-top-left">
            <b>Lorem Ipsum</b>
        </div>
        <br />
        <br />
        <div class="highlight-belt bend-top-right bend-bottom-left">
            <b>Lorem Ipsum</b>
        </div>
        <br />
        <hr />
        <br />
        <div class="highlight-belt bend-top bend-bottom">
            <b>Lorem Ipsum</b>
        </div>
    </div>
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

<<< @/../src/atoms/highlights/highlight-belt/index.scss

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

| Variable         | Description                                 | Accepted Values | Default                                         |
|:-----------------|:--------------------------------------------|:----------------|:------------------------------------------------|
| `$size`          | Belt size (min-height)                      | `size`          | `2em`                                           |
| `$border-width`  | Border size                                 | `size`          | `25px`                                          |
| `$angle`         | Belt tilt angle (corner offset)             | `size`          | `30px`                                          |
| `$translate`     | translateX to centre the belt               | `size`          | `-({$angle * 0.5} + {$border-width} * 0.5 - 3)` |

<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/highlights/highlight-belt/index" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);

#highlight-test-container{
  width: 100%;
  height: 600px;
  padding: 10% 0;
  background-color: #ccc;
}
</style>

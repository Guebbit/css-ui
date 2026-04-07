# Hightlight Belt
<Badge type="tip">Atom</Badge> <Badge type="info">Highlight</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/highlights/highlight-belt";
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
| `$color`         | :first_quarter_moon_with_face: Main color   | `color`         | `#fff`                                          |
| `$fold-color`    | :first_quarter_moon_with_face: Fold color   | `color`         | `50% shade of {$color}`                         |
| `$shadow`        | :first_quarter_moon_with_face: Shadow color | `color`         | `#000`                                          |
| `$size`          | Belt size (min-height)                      | `size`          | `2em`                                           |
| `$border-width`  | Border size                                 | `size`          | `15px`                                          |
| `$border-radius` | Border radius                               | `size`          | `6px`                                           |
| `$translate`     | translateX to be in the middle              | `size`          | `-({$angle * 0.5} + {$border-width} * 0.5 - 3)` |

## Theming

Use theme utility classes (`.bg-{role}`, `.text-{role}`, `.border-{role}`) to apply colors.

<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/highlights/highlight-belt";

#highlight-test-container{
  width: 100%;
  height: 600px;
  padding: 10% 0;
  background-color: #ccc;
}
</style>

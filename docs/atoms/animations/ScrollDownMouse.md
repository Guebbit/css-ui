# Scroll Down Mouse
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">scroll</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/scroll-down-mouse/index";
```

Colors and design tokens are controlled via CSS custom properties or `.color-*` utility classes:
```html
<div class="scroll-down-mouse color-primary animate-on-hover">
<div class="scroll-down-mouse color-secondary animate-on-hover">
```
Or override inline:
```html
<div class="scroll-down-mouse" style="--color-background: #ff6b35;">
```

## Default

::: raw
<div class="dev-section">
    <div class="scroll-down-mouse">
        <span></span>
    </div>
    <div class="scroll-down-mouse animate-active">
        <span></span>
    </div>
    <div class="scroll-down-mouse mouse-with-chevron">
        <span></span>
    </div>
    <div class="scroll-down-mouse mouse-with-chevron animate-active">
        <span></span>
    </div>
    <div class="scroll-down-mouse mouse-custom-dot">
        <span data-label="↓"></span>
    </div>
    <div class="scroll-down-mouse mouse-custom-dot animate-active">
        <span data-label="↓"></span>
    </div>
</div>
:::

::: code-group
```html [default]
<div class="scroll-down-mouse">
    <span></span>
</div>
<div class="scroll-down-mouse animate-active">
    <span></span>
</div>
```
```html [with chevron]
<div class="scroll-down-mouse mouse-with-chevron">
    <span></span>
</div>
<div class="scroll-down-mouse mouse-with-chevron animate-active">
    <span></span>
</div>
```
```html [custom-dot]
<div class="scroll-down-mouse mouse-custom-dot">
    <span data-label="↓"></span>
</div>
<div class="scroll-down-mouse mouse-custom-dot animate-active">
    <span data-label="↓"></span>
</div>
```
:::

## Component CSS

<<< @/../src/atoms/animations/scroll-down-mouse/index.scss

## Classes

| Class                | Description                      |
|:---------------------|:---------------------------------|
| `animate-active`     | Animation active                 |
| `animate-on-active`  | Animation active on .active      |
| `animate-on-hover`   | Animation active on hover        |
| `mouse-with-chevron` | Add chevron-down to bottom       |
| `mouse-custom-dot`   | Set a custom dot with data-label |


## CSS Custom Properties

| Property                           | Description        | Default       |
|:-----------------------------------|:-------------------|:--------------|
| `--scroll-down-mouse-color`        | Color              | `primary-500` |
| `--scroll-down-mouse-active-color` | Active/hover color | `primary-600` |
| `--scroll-down-mouse-size`         | Mouse size         | `50px`        |
| `--scroll-down-mouse-duration`     | Animation duration | `1s`          |


<style lang="scss">
@use "../src/atoms/animations/scroll-down-mouse/index";
</style>
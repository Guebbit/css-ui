# Scroll Down Mouse
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">scroll</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/components/atoms/animation-scroll-down-mouse";
```



## Default

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/animations/ScrollDownMouse-default.html -->
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

::: code-group
<<< @/../src/components/atoms/animation-scroll-down-mouse/_architecture.scss [_architecture.scss]
<<< @/../src/components/atoms/animation-scroll-down-mouse/index.scss [index.scss]
:::

## Classes

| Class                | Description                      |
|:---------------------|:---------------------------------|
| `animate-active`     | Animation active                 |
| `animate-on-active`  | Animation active on .active      |
| `animate-on-hover`   | Animation active on hover        |
| `mouse-with-chevron` | Add chevron-down to bottom       |
| `mouse-custom-dot`   | Set a custom dot with data-label |


## CSS Custom Properties

Component color is inherited from utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`).

| Property | Default |
|:---------|:--------|
| `--scroll-down-mouse-size` | `50px` |
| `--scroll-down-mouse-duration` | `1s` |


## SCSS variables

| SCSS Variable | CSS Variable | Description | Default |
|:--------------|:-------------|:------------|:--------|
| `$size` | `--scroll-down-mouse-size` | Component size | `50px` |
| `$duration` | `--scroll-down-mouse-duration` | Animation duration | `1s` |

<style lang="scss">
@use "../src/components/atoms/animation-scroll-down-mouse";
</style>

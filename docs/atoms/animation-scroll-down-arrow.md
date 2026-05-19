# Animation Scroll Down Arrow
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">scroll</Badge>

## Use

```scss
@use "@guebbit/css-ui/atoms/animation-scroll-down-arrow";
```



## Default

::: raw
<div class="dev-section">
<!--@include: ../examples/atoms/ScrollDownArrow-default.html -->
</div>
:::

```html
<div class="animation-scroll-down-arrow">
    <div></div>
    <div></div>
    <div></div>
    <span class="scroll-down-text">Scroll down</span>
</div>
<div class="animation-scroll-down-arrow animate-active">
    <div></div>
    <div></div>
    <div></div>
    <span class="scroll-down-text">Scroll down</span>
</div>
```

## Component CSS

::: code-group
<<< @/../src/components/atoms/animation-scroll-down-arrow/_architecture.scss [_architecture.scss]
<<< @/../src/components/atoms/animation-scroll-down-arrow/index.scss [index.scss]
:::

## CSS Custom Properties

Component color is inherited from utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`).

| Property | Default |
|:---------|:--------|
| `--animation-scroll-down-arrow-size` | `2em` |
| `--animation-scroll-down-arrow-duration` | `0.3s` |
| `--animation-scroll-down-arrow-animation-duration` | `3s` |
| `--animation-scroll-down-arrow-active-animation-duration` | `$animation-duration * 0.5` |


## Classes

| Class | Description |
|:------|:------------|
| `animation-scroll-down-arrow` | Component root |

## SCSS variables

| SCSS Variable | CSS Variable | Description | Default |
|:--------------|:-------------|:------------|:--------|
| `$size` | `--animation-scroll-down-arrow-size` | Component size | `2em` |
| `$animation-duration` | `--animation-scroll-down-arrow-animation-duration` | Animation duration | `3s` |
| `$active-animation-duration` | `--animation-scroll-down-arrow-active-animation-duration` | Active animation duration | `$animation-duration * 0.5` |

<style lang="scss">
@use "../src/components/atoms/animation-scroll-down-arrow";
</style>

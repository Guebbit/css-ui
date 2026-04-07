# Scroll Down Arrow
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">scroll</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/scroll-down-arrow/index";
```

Colors and design tokens are controlled via CSS custom properties or `.color-*` utility classes:
```html
<div class="scroll-down-arrow color-primary animate-on-hover">
<div class="scroll-down-arrow color-secondary animate-on-hover">
```
Or override inline:
```html
<div class="scroll-down-arrow" style="--color-background: #ff6b35;">
```

## Default

::: raw
<div class="dev-section">
    <div class="scroll-down-arrow">
        <div></div>
        <div></div>
        <div></div>
        <span class="scroll-down-text">Scroll down</span>
    </div>
    <div class="scroll-down-arrow animate-active">
        <div></div>
        <div></div>
        <div></div>
        <span class="scroll-down-text">Scroll down</span>
    </div>
</div>
:::

```html
<div class="scroll-down-arrow">
    <div></div>
    <div></div>
    <div></div>
    <span class="scroll-down-text">Scroll down</span>
</div>
<div class="scroll-down-arrow animate-active">
    <div></div>
    <div></div>
    <div></div>
    <span class="scroll-down-text">Scroll down</span>
</div>
```

## Component CSS

<<< @/../src/atoms/animations/scroll-down-arrow/index.scss

## CSS Custom Properties

| Property                                          | Description                      | Default       |
|:--------------------------------------------------|:---------------------------------|:--------------|
| `--scroll-down-arrow-color`                       | Color                            | `primary-500` |
| `--scroll-down-arrow-active-color`                | Active/hover color               | `primary-600` |
| `--scroll-down-arrow-size`                        | Arrow size                       | `2em`         |
| `--scroll-down-arrow-duration`                    | Transition duration              | `0.3s`        |
| `--scroll-down-arrow-animation-duration`          | Animation duration               | `3s`          |
| `--scroll-down-arrow-active-animation-duration`   | Active animation duration        | `3s`          |


<style lang="scss">
@use "../src/atoms/animations/scroll-down-arrow/index";
</style>
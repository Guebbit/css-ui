# Scroll Down Arrow
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">scroll</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/scroll-down-arrow";
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

Component color is inherited from utility classes (`.bg-{role}`, `.text-{role}`, `.border-{role}`, `.use-{role}`).

| Property | Default |
|:---------|:--------|
| `--scroll-down-arrow-size` | `2em` |
| `--scroll-down-arrow-duration` | `0.3s` |
| `--scroll-down-arrow-animation-duration` | `3s` |
| `--scroll-down-arrow-active-animation-duration` | `$animation-duration * 0.5` |


<style lang="scss">
@use "../src/atoms/animations/scroll-down-arrow";
</style>
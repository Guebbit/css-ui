# Effect Color Popup
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">effect</Badge>

An absolute-positioned overlay that slides in from off-screen to cover its parent container, creating a color-fill popup effect on hover, click, or programmatic activation.

## Use

```scss
@use "@guebbit/css-ui/src/components/atoms/animations/effect-color-popup";
```

Color is always applied via utility classes (not SCSS color variables):

- `.bg-{role}` → background + on-color
- `.text-{role}` → text color
- `.border-{role}` → border color
- `.use-{role}` → "jolly" class: sets `--main-color` / `--on-main-color` / `--active-main-color` / `--active-on-main-color` for a full single-class semantic color override

```html
<div class="text-primary">...</div>
<button class="use-brand">...</button>
<button class="use-brand">...</button>
```

## Setup

The parent element must have `position: relative` and `overflow: hidden` set for the effect to be visible and contained.

```html
<div style="position: relative; overflow: hidden;">
    <span class="effect-color-popup animate-on-hover use-brand"></span>
    Content here
</div>
```

## Default

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/animations/EffectColorPopup-default.html -->
</div>
:::

```html
<button
    class="effect-color-popup-animate-on-hover use-brand"
    style="position: relative; overflow: hidden;"
>
    <span class="effect-color-popup"></span>
    Hover me
</button>
```

## Self-triggered (animate-on-hover on the element)

When interaction classes are applied directly to the `.effect-color-popup` element itself:

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/animations/EffectColorPopup-self-triggered.html -->
</div>
:::

```html
<div style="position: relative; overflow: hidden;">
    <span class="effect-color-popup animate-on-hover use-brand"></span>
    <span style="position: relative; z-index: 1;">Content</span>
</div>
```

## Always Active

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/animations/EffectColorPopup-always-active.html -->
</div>
:::

```html
<button
    class="effect-color-popup-animate-active use-brand"
    style="position: relative; overflow: hidden;"
>
    <span class="effect-color-popup"></span>
    Always active
</button>
```

## Component CSS

::: code-group
<<< @/../src/components/atoms/animations/effect-color-popup/_architecture.scss [_architecture.scss]
<<< @/../src/components/atoms/animations/effect-color-popup/index.scss [index.scss]
:::

## Classes

| Class | Description |
|:------|:------------|
| `animate-active` | Popup always in active (visible) state |
| `animate-on-active` | Popup activates when `.active` class is present |
| `animate-on-hover` | Popup activates on hover |
| `effect-color-popup-animate-active` | Parent: trigger child popup always active |
| `effect-color-popup-animate-on-active` | Parent: trigger child popup on `.active` |
| `effect-color-popup-animate-on-hover` | Parent: trigger child popup on hover |

## CSS Custom Properties

Component color is inherited from utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`).

| Property | Default |
|:---------|:--------|
| `--effect-color-popup-duration` | `0.3s` |

## SCSS variables

| SCSS Variable | CSS Variable | Description | Default |
|:--------------|:-------------|:------------|:--------|
| `$duration` | `--effect-color-popup-duration` | Animation duration | `0.3s` |

<style lang="scss">
@use "../src/components/atoms/animations/effect-color-popup";
</style>

# Effect Color Popup
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">effect</Badge>

An absolute-positioned overlay that slides in from off-screen to cover its parent container, creating a color-fill popup effect on hover, click, or programmatic activation.

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/effect-color-popup";
```

Color is always applied via utility classes (not SCSS color variables):

- `.bg-{role}` → background + on-color
- `.text-{role}` → text color
- `.border-{role}` → border color
- `.use-{role}` → "jolly" class: sets `--main-color` / `--on-main-color` / `--active-main-color` / `--active-on-main-color` for a full single-class semantic color override

```html
<div class="text-primary">...</div>
<button class="use-primary">...</button>
<button class="use-primary">...</button>
```

## Setup

The parent element must have `position: relative` and `overflow: hidden` set for the effect to be visible and contained.

```html
<div style="position: relative; overflow: hidden;">
    <span class="effect-color-popup animate-on-hover use-primary"></span>
    Content here
</div>
```

## Default

::: raw
<div class="dev-section">
    <button class="effect-color-popup-animate-on-hover use-primary" style="position: relative; overflow: hidden; padding: 1em 2em; cursor: pointer;">
        <span class="effect-color-popup"></span>
        Hover me
    </button>
</div>
:::

```html
<button
    class="effect-color-popup-animate-on-hover use-primary"
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
    <div style="position: relative; overflow: hidden; display: inline-block; padding: 1em 2em;">
        <span class="effect-color-popup animate-on-hover use-primary"></span>
        <span style="position: relative; z-index: 1;">Hover the span</span>
    </div>
</div>
:::

```html
<div style="position: relative; overflow: hidden;">
    <span class="effect-color-popup animate-on-hover use-primary"></span>
    <span style="position: relative; z-index: 1;">Content</span>
</div>
```

## Always Active

::: raw
<div class="dev-section">
    <button class="effect-color-popup-animate-active use-primary" style="position: relative; overflow: hidden; padding: 1em 2em; cursor: pointer;">
        <span class="effect-color-popup"></span>
        Always active
    </button>
</div>
:::

```html
<button
    class="effect-color-popup-animate-active use-primary"
    style="position: relative; overflow: hidden;"
>
    <span class="effect-color-popup"></span>
    Always active
</button>
```

## Component CSS

<<< @/../src/atoms/animations/effect-color-popup/index.scss

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

<style lang="scss">
@use "../src/atoms/animations/effect-color-popup";
</style>

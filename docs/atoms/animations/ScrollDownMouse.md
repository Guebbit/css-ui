# Scroll Down Mouse
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">scroll</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/scroll-down-mouse/index";
```

Color is now always applied via utility classes (not SCSS color variables):

- `.bg-{role}` → background + on-color
- `.text-{role}` → text color
- `.border-{role}` → border color

```html
<div class="text-primary">...</div>
<button class="bg-primary">...</button>
<button class="border-primary text-primary">...</button>
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

Component colors are inherited from utility classes (`.bg-{role}`, `.text-{role}`, `.border-{role}`); use non-color custom properties only for layout/animation tuning.


<style lang="scss">
@use "../src/atoms/animations/scroll-down-mouse/index";
</style>
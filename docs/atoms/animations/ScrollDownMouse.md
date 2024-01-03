# Arrow Scroll Down
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">scroll</Badge>

## Code

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
``` html [default]
<div class="scroll-down-mouse">
    <span></span>
</div>
<div class="scroll-down-mouse animate-active">
    <span></span>
</div>
```
``` html [with chevron]
<div class="scroll-down-mouse mouse-with-chevron">
    <span></span>
</div>
<div class="scroll-down-mouse mouse-with-chevron animate-active">
    <span></span>
</div>
```
``` html [custom-dot]
<div class="scroll-down-mouse mouse-custom-dot">
    <span data-label="↓"></span>
</div>
<div class="scroll-down-mouse mouse-custom-dot animate-active">
    <span data-label="↓"></span>
</div>
```
<<< @/../components/atoms/animations/ScrollDownMouse.scss
:::

## Classes

| Class                | Description                      |
|:---------------------|:---------------------------------|
| `animate-active`     | Animation active                 |
| `animate-on-active`  | Animation active on .active      |
| `animate-on-hover`   | Animation active on hover        |
| `mouse-with-chevron` | Add chevron-down to bottom       |
| `mouse-custom-dot`   | Set a custom dot with data-label |


## SCSS variables

| Variable                      | Description        | Accepted Values | Default   |
|:------------------------------|:-------------------|:----------------|:----------|
| `$arrow-scroll-down-color`    | Color              | `color`         | `#000000` |
| `$arrow-scroll-down-height`   | Arrow size         | `size`          | `0.5em`   |
| `$arrow-scroll-down-width`    | Arrow size         | `size`          | `2em`     |
| `$arrow-scroll-down-duration` | Animation duration | `time`          | `1s`      |


<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/animations/ScrollDownMouse.scss" as * with (
    $scroll-down-mouse-color: theme.$primary-color
);
</style>
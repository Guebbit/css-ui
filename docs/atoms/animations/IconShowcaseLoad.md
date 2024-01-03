# Icon Showcase Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Progression</Badge>

## Code

::: raw
<div class="dev-section">
    <div class="icon-showcase-load">
        <div>A</div>
        <img alt="" src="https://placekitten.com/50/50" />
        <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </div>
</div>
:::

::: code-group
``` html
<div class="icon-showcase-load">
    <div>A</div>
    <img alt="" src="https://placekitten.com/50/50" />
    <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
</div>
```
<<< @/../components/atoms/animations/IconShowcaseLoad.scss
:::

## SCSS variables

| Variable                               | Description                            | Accepted Values | Default                |
|:---------------------------------------|:---------------------------------------|:----------------|:-----------------------|
| `$icon-showcase-load-color`            | Color of border and text               | `color`         | `#fff`                 |
| `$icon-showcase-load-border`           | Color of border and text               | `color`         | `as {$color}`          |
| `$icon-showcase-load-border-progress`  | Color of border and text               | `color`         | `as {$color}`          |
| `$icon-showcase-load-background`       | Background color                       | `size`          | `contrast of {$color}` |
| `$icon-showcase-load-size`             | Size                                   | `size`          | `4em`                  |
| `$icon-showcase-load-duration`         | Duration of animation (NO CSS var)     | `time`          | `4s`                   |
| `$icon-showcase-load-item-number`      | For optimization purposes (NO CSS var) | `number`        | `3`                    |


<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/animations/IconShowcaseLoad.scss" as * with (
    $icon-showcase-load-color: theme.$primary-color,
    $icon-showcase-load-background: theme.$background-color,
    $icon-showcase-load-size: 8em,
);
</style>
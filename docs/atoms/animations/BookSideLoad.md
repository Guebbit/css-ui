# Book Side Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Progression</Badge>

::: danger
Can't change $size, must be 32px, need to be fixed
:::

## Code

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/animations/BookSideLoad.html -->
</div>
:::

::: code-group
<<< @/public/components-html/atoms/animations/BookSideLoad.html [html]
<<< @/../components/atoms/animations/BookSideLoad.scss [css]
:::

## Classes

| Class               | Description          |
|:--------------------|:---------------------|
| `animate-active`    | Animation active     |
| `animate-on-active` | Animation on .active |
| `animate-on-hover`  | Animation on hover   | 

## SCSS variables

| Variable       | Description                            | Accepted Values | Default |
|:---------------|:---------------------------------------|:----------------|:--------|
| `$color`       | Main color                             | `color`         | `#000`  |
| `$size`        | Page color                             | `time`          | `32px`  |
| `$duration`    | Animation speed                        | `time`          | `7s`    |
| `$multiplier`  | Loop multiplier (NO CSS var)           | `number`        | `1.2`   |
| `$number`      | For optimization purposes (NO CSS var) | `number`        | `18`    |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/animations/BookSideLoad.scss" as * with (
    $color: theme.$primary-color,
);
</style>
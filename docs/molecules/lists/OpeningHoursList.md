# Trapezoid Text
<Badge type="tip">Molecules</Badge> <Badge type="info">Typography</Badge>

::: tip VARIANT Dependencies
- [SimpleList](/molecules/lists/SimpleList)
:::

## Regular

::: raw
<div class="dev-section without-restrictions">
    <!--@include: ../../public/components-html/molecules/lists/OpeningHoursList.html -->
</div>
:::

::: code-group
<<< @/public/components-html/molecules/lists/OpeningHoursList.html 
<<< @/../components/molecules/lists/OpeningHoursList.scss
:::

## Classes

| Class                     | Description                         |
|:--------------------------|:------------------------------------|
| `background-contain`      | Contain the line's background       |
| `animate-active`          | Animation active (on LI)            |
| `animate-on-active`       | Animation active on .active (on LI) |
| `animate-on-hover`        | Animation active on hover (on LI)   |


## SCSS variables

| Variable                              | Description                      | Accepted Values | Default               |
|:--------------------------------------|:---------------------------------|:----------------|:----------------------|
| `$opening-hours-list-opacity-even`    | Background opacity in even LI    | `percent`       | `0`                   |
| `$opening-hours-list-opacity-odd`     | Background opacity in odd LI     | `percent`       | `0.2`                 |
| `$opening-hours-list-neutral`         | Neutral, no status, LI color     | `color`         | `#000`                |
| `$opening-hours-list-today`           | Today status LI color            | `color`         | `#0f0`                |
| `$opening-hours-list-closed`          | Closed status LI color           | `color`         | `#f00`                |
| `$opening-hours-list-background`      | Background LI color              | `size`          | `contrast of neutral` |
| `$opening-hours-list-background-even` | Background LI color in even LI   | `size`          | `rgba bg + opacity`   |
| `$opening-hours-list-background-odd`  | Background LI color in odd LI    | `size`          | `rgba bg + opacity`   |
| `$opening-hours-list-hover-*****`     | Same as above, but when hovering | `*`             | `*`                   |


<style lang="scss">
@import "docs/theme.scss";

$opening-hours-list-background: $primary-color;
$opening-hours-list-hover-background: darken($primary-color, 20%);

@import "components/molecules/lists/OpeningHoursList.scss";
</style>
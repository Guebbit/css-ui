# Gear Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">loading</Badge>

## Code

<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/animations/GearLoad.html -->
</div>

::: code-group
<<< @/public/components-html/atoms/animations/GearLoad.html
<<< @/../components/atoms/animations/GearLoad.scss
:::

## Classes

| Class          | Description                               |
|:---------------|:------------------------------------------|
| `active`       | Animation is :hover or .active triggered  |


## SCSS variables

| Variable                | Description      | Accepted Values | Default   |
|:------------------------|:-----------------|:----------------|:----------|
| `$gear-load-primary`    | Primary color    | `color`         | `#000000` |
| `$gear-load-secondary`  | Secondary color  | `color`         | `#000000` |
| `$gear-load-background` | Gear hole color  | `color`         | `#ffffff` |
| `$gear-load-size`       | Pulsation color  | `size`          | `48px`    |
| `$gear-load-speed`      | Pulsation speed  | `time`          | `4s`      |


<style lang="scss">
@import "docs/theme.scss";

$gear-load-primary: $primary-color;
$gear-load-secondary: $secondary-color;

@import "components/atoms/animations/GearLoad.scss";
</style>
# Panel Askew Doors
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Presentation</Badge>

::: danger WORK IN PROGRESS
Adjust TOP position with $panel-askew-doors-tilt
:::

## Code

::: raw
<div class="dev-section without-restrictions">
    <!--@include: ../../public/components-html/atoms/animations/PanelAskewDoors.html -->
</div>
:::

::: code-group
<<< @/public/components-html/atoms/animations/PanelAskewDoors.html
<<< @/../components/atoms/animations/PanelAskewDoors.scss
:::

## Classes

| Class                                 | Description                            |
|:--------------------------------------|:---------------------------------------|
| `animate-active`                      | Animation active                       |
| `animate-on-active`                   | Animation active on .active            |
| `animate-on-hover`                    | Animation active on hover              |
| `panel-askew-doors-animate-active`    | *EXTERNAL* animation active            |
| `panel-askew-doors-animate-on-active` | *EXTERNAL* animation active on .active |
| `panel-askew-doors-animate-on-hover`  | *EXTERNAL* animation active on hover   |

## SCSS variables

| Variable                         | Description      | Accepted Values | Default    |
|:---------------------------------|:-----------------|:----------------|:-----------|
| `$panel-askew-doors-color`       | Main color       | `color`         | `#000`     |
| `$panel-askew-doors-tilt`        | Doors rotation   | `degrees`       | `15deg`    |
| `$panel-askew-doors-left-color`  | Left door color  | `color`         | `as color` |
| `$panel-askew-doors-right-color` | Right door color | `color`         | `as color` |
| `$panel-askew-doors-opacity`     | Animation speed  | `percentage`    | `0.5`      |
| `$panel-askew-doors-duration`    | Duration         | `time`          | `0.5s`     |

<style lang="scss">
@import "docs/theme.scss";

$panel-askew-doors-color: $primary-color;

@import "components/atoms/animations/PanelAskewDoors.scss";
</style>
# Book Side Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Presentation</Badge>

## Code

<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/animations/PanelAskewDoors.html -->
</div>

::: code-group
<<< @/public/components-html/atoms/animations/PanelAskewDoors.html
<<< @/../components/atoms/animations/PanelAskewDoors.scss
:::

## Classes

| Class                      | Description                   |
|:---------------------------|:------------------------------|
| `open-on-hover`            | Animation triggered on hover  |
| `open-on-active`           | Animation triggered on active |
| `panel-askew-doors-active` | Active state                  |
| `mode-open-vertical`       | Vertical mode                 |

## SCSS variables

| Variable                          | Description      | Accepted Values | Default    |
|:----------------------------------|:-----------------|:----------------|:-----------|
| `$panel-askew-doors-color`        | Main color       | `color`         | `#000`     |
| `$panel-askew-doors-left-color`   | Left door color  | `color`         | `as color` |
| `$panel-askew-doors-right-color`  | Right door color | `color`         | `as color` |
| `$panel-askew-doors-opacity`      | Animation speed  | `percentage`    | `0.5`      |
| `$panel-askew-doors-duration`     | Duration         | `time`          | `0.5s`     |

<style lang="scss">
@import "../../theme.scss";

$panel-askew-doors-color: $primary-color;

@import "components/atoms/animations/PanelAskewDoors.scss";
</style>
# Panel Askew Doors
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Presentation</Badge>

## Code

::: raw
<div class="dev-section without-restrictions">
    <section class="panel-askew-doors animate-on-hover" style="height:300px;"></section>
    <section class="panel-askew-doors animate-open-on-hover" style="height:300px;"></section>
    <section class="panel-askew-doors animate-open-on-hover askew-doors-vertical" style="height:300px;"></section>
</div>
:::

::: code-group
```html [default]
<section class="panel-askew-doors animate-on-hover" style="height:300px;"></section>
```
```html [open]
<section class="panel-askew-doors animate-open-on-hover" style="height:300px;"></section>
```
```html [open vertical]
<section class="panel-askew-doors animate-open-on-hover askew-doors-vertical" style="height:300px;"></section>
```
<<< @/../components/atoms/animations/PanelAskewDoors.scss
:::

## Classes

| Class                                 | Description                            |
|:--------------------------------------|:---------------------------------------|
| `animate-active`                      | Animation active                       |
| `animate-on-active`                   | Animation active on .active            |
| `animate-on-hover`                    | Animation active on hover              |
| `animate-open-active`                 | Open door animation active             |
| `animate-open-on-active`              | Open door animation active on .active  |
| `animate-open-on-hover`               | Open door animation active on hover    |
| `panel-askew-doors-animate-active`    | *EXTERNAL* animation active            |
| `panel-askew-doors-animate-on-active` | *EXTERNAL* animation active on .active |
| `panel-askew-doors-animate-on-hover`  | *EXTERNAL* animation active on hover   |

## SCSS variables

| Variable                         | Description               | Accepted Values | Default            |
|:---------------------------------|:--------------------------|:----------------|:-------------------|
| `$panel-askew-doors-color`       | Main color (NO CSS var)   | `color`         | `#000`             |
| `$panel-askew-doors-left-color`  | Left door color           | `color`         | `same as {$color}` |
| `$panel-askew-doors-right-color` | Right door color          | `color`         | `same as {$color}` |
| `$panel-askew-doors-opacity`     | Animation speed           | `percentage`    | `0.5`              |
| `$panel-askew-doors-duration`    | Duration                  | `time`          | `0.5s`             |
| `$panel-askew-doors-tilt`        | Doors rotation            | `degrees`       | `15deg`            |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/animations/PanelAskewDoors.scss" as * with (
    $panel-askew-doors-left-color: rgba(theme.$primary-color, 0.5),
    $panel-askew-doors-right-color: rgba(theme.$secondary-color, 0.5),
);
</style>
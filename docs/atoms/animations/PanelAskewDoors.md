# Panel Askew Doors
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Presentation</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/animations/PanelAskewDoors" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
```

## Default

::: raw
<div class="dev-section without-restrictions">
    <section class="panel-askew-doors animate-on-hover" style="height:300px;"></section>
    <section class="panel-askew-doors animate-open-on-hover animate-on-hover" style="height:300px;"></section>
    <section class="panel-askew-doors animate-open-on-hover askew-doors-vertical animate-on-hover" style="height:300px;"></section>
</div>
:::

::: code-group
```html [default]
<section class="panel-askew-doors animate-on-hover" style="height:300px;"></section>
```
```html [open]
<section class="panel-askew-doors animate-open-on-hover animate-on-hover" style="height:300px;"></section>
```
```html [open vertical]
<section class="panel-askew-doors animate-open-on-hover askew-doors-vertical animate-on-hover" style="height:300px;"></section>
```
:::

## Component CSS

<<< @/../src/atoms/animations/PanelAskewDoors.scss


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

| Variable       | Description                                               | Accepted Values | Default            |
|:---------------|:----------------------------------------------------------|:----------------|:-------------------|
| `$color`       | :x: MAIN color                                            | `color`         | `#000` / `#fff`    |
| `$background`  | :zap: :first_quarter_moon_with_face: Background color     | `color`         | `same as {$color}` |
| `$duration`    | Duration                                                  | `time`          | `0.5s`             |
| `$tilt`        | Doors rotation                                            | `degrees`       | `15deg`            |

<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/animations/PanelAskewDoors" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
</style>
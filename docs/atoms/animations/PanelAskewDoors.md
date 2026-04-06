# Panel Askew Doors
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Presentation</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/panel-askew-doors/index";
```

Colors and design tokens are controlled via CSS custom properties:
```html
<section class="panel-askew-doors" style="--panel-askew-doors-background: #ff6b35;">
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

<<< @/../src/atoms/animations/panel-askew-doors/index.scss


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

## CSS Custom Properties

| Property                                  | Description             | Default       |
|:------------------------------------------|:------------------------|:--------------|
| `--panel-askew-doors-background`          | Background color        | `primary-500` |
| `--panel-askew-doors-active-background`   | Active background color | `primary-600` |
| `--panel-askew-doors-tilt`                | Doors rotation          | `15deg`       |
| `--panel-askew-doors-duration`            | Duration                | `0.5s`        |

<style lang="scss">
@use "../src/atoms/animations/panel-askew-doors/index";
</style>
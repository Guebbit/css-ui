# Panel Askew Doors
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Presentation</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/panel-askew-doors";
```



## Default

::: raw
    <!--@include: ../../examples/atoms/animations/PanelAskewDoors-default.html -->
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

Component color is inherited from utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`).

| Property | Default |
|:---------|:--------|
| `--panel-askew-doors-tilt` | `15deg` |
| `--panel-askew-doors-duration` | `0.5s` |


<style lang="scss">
@use "../src/atoms/animations/panel-askew-doors";
</style>
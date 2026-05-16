# Simple Text Icon
<Badge type="tip">Atom</Badge> <Badge type="info">Typography</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/typography/simple-text-icon";
```



## Default

<div class="dev-section">
<!--@include: ../../examples/atoms/typography/SimpleTextIcon.html -->
</div>

::: code-group
<<< @/examples/atoms/typography/SimpleTextIcon.html#icon-svg [icon-svg]
<<< @/examples/atoms/typography/SimpleTextIcon.html#icon-text [icon-text]
<<< @/examples/atoms/typography/SimpleTextIcon.html#icon-image [icon-image]
<<< @/examples/atoms/typography/SimpleTextIcon.html#long-icon-svg [long-icon-svg]
<<< @/examples/atoms/typography/SimpleTextIcon.html#long-icon-text [long-icon-text]
<<< @/examples/atoms/typography/SimpleTextIcon.html#long-icon-image [long-icon-image]
:::

## Column mode

<div class="dev-section">
<!--@include: ../../examples/atoms/typography/SimpleTextIcon-column.html -->
</div>

::: code-group
<<< @/examples/atoms/typography/SimpleTextIcon-column.html#icon-svg [icon-svg]
<<< @/examples/atoms/typography/SimpleTextIcon-column.html#icon-text [icon-text]
<<< @/examples/atoms/typography/SimpleTextIcon-column.html#icon-image [icon-image]
<<< @/examples/atoms/typography/SimpleTextIcon-column.html#long-icon-svg [long-icon-svg]
<<< @/examples/atoms/typography/SimpleTextIcon-column.html#long-icon-text [long-icon-text]
<<< @/examples/atoms/typography/SimpleTextIcon-column.html#long-icon-image [long-icon-image]
:::

## Component CSS

::: code-group
<<< @/../src/atoms/typography/simple-text-icon/_architecture.scss [_architecture.scss]
<<< @/../src/atoms/typography/simple-text-icon/index.scss [index.scss]
:::

## Classes

| Class                | Description                         |
|:---------------------|:------------------------------------|
| `animate-active`     | Simple transition active            |
| `animate-on-active`  | Simple transition active on .active |
| `animate-on-hover`   | Simple transition active on hover   |
| `column-mode`        | Position of icon                    |


## CSS Custom Properties

Component color is inherited from utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`).

| Property | Default |
|:---------|:--------|
| `--simple-text-icon-rotate` | `0deg` |
| `--simple-text-icon-scale` | `1` |
| `--simple-text-icon-slide-x` | `0` |
| `--simple-text-icon-slide-y` | `0` |
| `--simple-text-icon-active-rotate` | `$rotate` |
| `--simple-text-icon-active-scale` | `$scale` |
| `--simple-text-icon-active-slide-x` | `$slide-x` |
| `--simple-text-icon-active-slide-y` | `$slide-y` |
| `--simple-text-icon-duration` | `0.3s` |


<style lang="scss">
@use "../src/atoms/typography/simple-text-icon";
</style>

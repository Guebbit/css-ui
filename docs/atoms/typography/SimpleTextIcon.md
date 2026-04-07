# Simple Text Icon
<Badge type="tip">Atom</Badge> <Badge type="info">Typography</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/typography/simple-text-icon";
```

Color is now always applied via utility classes (not SCSS color variables):

- `.bg-{role}` → background + on-color
- `.text-{role}` → text color
- `.border-{role}` → border color
- `.use-{role}` → sets `--css-ui-main-color` for internal component color usage

```html
<div class="text-primary">...</div>
<button class="bg-primary">...</button>
<button class="border-primary text-primary">...</button>
<button class="use-primary">...</button>
```


## Default

<div class="dev-section">
    <!--@include: ../../atoms/typography/SimpleTextIcon.html -->
</div>

::: code-group
<<< @/atoms/typography/SimpleTextIcon.html#icon-svg [icon-svg]
<<< @/atoms/typography/SimpleTextIcon.html#icon-text [icon-text]
<<< @/atoms/typography/SimpleTextIcon.html#icon-image [icon-image]
<<< @/atoms/typography/SimpleTextIcon.html#long-icon-svg [long-icon-svg]
<<< @/atoms/typography/SimpleTextIcon.html#long-icon-text [long-icon-text]
<<< @/atoms/typography/SimpleTextIcon.html#long-icon-image [long-icon-image]
:::

## Column mode

<div class="dev-section">
    <!--@include: ../../atoms/typography/SimpleTextIcon-column.html -->
</div>

::: code-group
<<< @/atoms/typography/SimpleTextIcon-column.html#icon-svg [icon-svg]
<<< @/atoms/typography/SimpleTextIcon-column.html#icon-text [icon-text]
<<< @/atoms/typography/SimpleTextIcon-column.html#icon-image [icon-image]
<<< @/atoms/typography/SimpleTextIcon-column.html#long-icon-svg [long-icon-svg]
<<< @/atoms/typography/SimpleTextIcon-column.html#long-icon-text [long-icon-text]
<<< @/atoms/typography/SimpleTextIcon-column.html#long-icon-image [long-icon-image]
:::

## Component CSS

<<< @/../src/atoms/typography/simple-text-icon/index.scss

## Classes

| Class                | Description                         |
|:---------------------|:------------------------------------|
| `animate-active`     | Simple transition active            |
| `animate-on-active`  | Simple transition active on .active |
| `animate-on-hover`   | Simple transition active on hover   |
| `column-mode`        | Position of icon                    |


## CSS Custom Properties

Component color is inherited from utility classes (`.bg-{role}`, `.text-{role}`, `.border-{role}`, `.use-{role}`).

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
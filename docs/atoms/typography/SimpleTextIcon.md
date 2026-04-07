# Simple Text Icon
<Badge type="tip">Atom</Badge> <Badge type="info">Typography</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/typography/simple-text-icon/index";
```

Color is now always applied via utility classes (not SCSS color variables):

- `.bg-{role}` → background + on-color
- `.text-{role}` → text color
- `.border-{role}` → border color

```html
<div class="text-primary">...</div>
<button class="bg-primary">...</button>
<button class="border-primary text-primary">...</button>
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

| Property                              | Description                    | Default       |
|:--------------------------------------|:-------------------------------|:--------------|
| `--simple-text-icon-color`            | Color of icon                  | `primary-500` |
| `--simple-text-icon-active-color`     | Active/hover color             | `primary-600` |
| `--simple-text-icon-rotate`           | Rotation of icon               | `0`           |
| `--simple-text-icon-scale`            | Scale of icon                  | `1`           |
| `--simple-text-icon-slide-x`          | Translate X axis of icon       | `0`           |
| `--simple-text-icon-slide-y`          | Translate Y axis of icon       | `0`           |
| `--simple-text-icon-active-rotate`    | Active/hover rotation of icon  | `0`           |
| `--simple-text-icon-active-scale`     | Active/hover scale of icon     | `1`           |
| `--simple-text-icon-active-slide-x`   | Active/hover translate X       | `0`           |
| `--simple-text-icon-active-slide-y`   | Active/hover translate Y       | `0`           |
| `--simple-text-icon-duration`         | Transition duration            | `0.3s`        |

<style lang="scss">
@use "../src/atoms/typography/simple-text-icon/index";
</style>
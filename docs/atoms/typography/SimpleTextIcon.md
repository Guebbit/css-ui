# Simple Text Icon
<Badge type="tip">Atom</Badge> <Badge type="info">Typography</Badge>

## Code

<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/typography/SimpleTextIcon.html -->
</div>

::: code-group
<<< @/public/components-html/atoms/typography/SimpleTextIcon.html#icon-svg [icon-svg]
<<< @/public/components-html/atoms/typography/SimpleTextIcon.html#icon-text [icon-text]
<<< @/public/components-html/atoms/typography/SimpleTextIcon.html#icon-image [icon-image]
<<< @/public/components-html/atoms/typography/SimpleTextIcon.html#long-icon-svg [long-icon-svg]
<<< @/public/components-html/atoms/typography/SimpleTextIcon.html#long-icon-text [long-icon-text]
<<< @/public/components-html/atoms/typography/SimpleTextIcon.html#long-icon-image [long-icon-image]
<<< @/../components/atoms/typography/SimpleTextIcon.scss
:::

<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/typography/SimpleTextIcon-column.html -->
</div>

::: code-group
<<< @/public/components-html/atoms/typography/SimpleTextIcon-column.html#icon-svg [icon-svg]
<<< @/public/components-html/atoms/typography/SimpleTextIcon-column.html#icon-text [icon-text]
<<< @/public/components-html/atoms/typography/SimpleTextIcon-column.html#icon-image [icon-image]
<<< @/public/components-html/atoms/typography/SimpleTextIcon-column.html#long-icon-svg [long-icon-svg]
<<< @/public/components-html/atoms/typography/SimpleTextIcon-column.html#long-icon-text [long-icon-text]
<<< @/public/components-html/atoms/typography/SimpleTextIcon-column.html#long-icon-image [long-icon-image]
<<< @/../components/atoms/typography/SimpleTextIcon.scss
:::

## Classes

| Class                 | Description                         |
|:----------------------|:------------------------------------|
| `highlight-active`    | Simple transition active            |
| `highlight-on-active` | Simple transition active on .active |
| `highlight-on-hover`  | Simple transition active on hover   |
| `enlarge-active`      | Simple scale active                 |
| `enlarge-on-active`   | Simple scale active on .active      |
| `enlarge-on-hover`    | Simple scale active on hover        |
| `column-mode`         | Position of icon                    |


## SCSS variables

| Variable                             | Description           | Accepted Values | Default |
|:-------------------------------------|:----------------------|:----------------|:--------|
| `$simple-simple-text-icon-duration`  | Duration of animation | `time`          | `0.4s`  |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/typography/SimpleTextIcon.scss";
</style>
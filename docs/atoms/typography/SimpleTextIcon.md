# Simple Text Icon
<Badge type="tip">Atom</Badge> <Badge type="info">typography</Badge>

## Code

<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/typography/SimpleTextIcon.html -->
</div>

::: code-group
<<< @/public/components-html/atoms/typography/SimpleTextIcon.html
<<< @/../components/atoms/typography/SimpleTextIcon.scss
:::

<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/typography/SimpleTextIcon-column.html -->
</div>

<<< @/public/components-html/atoms/typography/SimpleTextIcon-column.html

## Classes

| Class            | Description                                                 |
|:-----------------|:------------------------------------------------------------|
| `icon-highlight` | Added simple animation (transition) on hover\active to icon |
| `column-mode`    | Position of icon                                            |


## SCSS variables

| Variable                             | Description           | Accepted Values | Default |
|:-------------------------------------|:----------------------|:----------------|:--------|
| `$simple-simple-text-icon-duration`  | Duration of animation | `time`          | `0.4s`  |

<style lang="scss">
@import "../../theme.scss";
@import "components/atoms/typography/SimpleTextIcon.scss";
</style>
# Simple Text Icon
<Badge type="tip">Atom</Badge> <Badge type="info">Typography</Badge>

## Code

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

<<< @/../src/atoms/typography/SimpleTextIcon.scss

## Documentation CSS

```scss
@use "docs/theme.scss" as theme;
@use "src/atoms/typography/SimpleTextIcon.scss" with (
    $active-color: theme.$primary-color,
    $active-rotate: 20deg,
    $active-scale: 1.2,
    $active-slide-y: -50%,
);
```

## Classes

| Class                | Description                         |
|:---------------------|:------------------------------------|
| `animate-active`     | Simple transition active            |
| `animate-on-active`  | Simple transition active on .active |
| `animate-on-hover`   | Simple transition active on hover   |
| `column-mode`        | Position of icon                    |


## SCSS variables

| Variable     | Description                                           | Accepted Values | Default |
|:-------------|:------------------------------------------------------|:----------------|:--------|
| `$color`     | :zap: Color of icon                                   | `color`         | `0.4s`  |
| `$rotate`    | :zap: :first_quarter_moon_with_face: Rotation of icon | `degrees`       | `0`     |
| `$scale`     | :zap: Scale of icon                                   | `percentage`    | `1`     |
| `$slide-x`   | :zap: Translate X axis of icon                        | `size`          | `0`     |
| `$slide-y`   | :zap: Translate Y axis of icon                        | `size`          | `0`     |
| `$duration`  | Transition duration                                   | `time`          | `0.3s`  |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "src/atoms/typography/SimpleTextIcon.scss" with (
    $active-color: theme.$primary-color,
    $active-rotate: 20deg,
    $active-scale: 1.2,
    $active-slide-y: -50%,
);
</style>
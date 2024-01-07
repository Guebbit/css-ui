# Icon Focus Button
<Badge type="tip">Molecule</Badge> <Badge type="info">buttons</Badge>

::: tip VARIANT Dependencies
- [SimpleButton](/atoms/buttons/SimpleButton.md)
:::

## Regular

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/buttons/IconFocusButton.html -->
</div>
:::

::: code-group
<<< @/public/components-html/molecules/buttons/IconFocusButton.html#default [default]
<<< @/public/components-html/molecules/buttons/IconFocusButton.html#image [image]
<<< @/public/components-html/molecules/buttons/IconFocusButton.html#small [small]
<<< @/public/components-html/molecules/buttons/IconFocusButton.html#rounded [rounded]
<<< @/public/components-html/molecules/buttons/IconFocusButton.html#plain [plain]
<<< @/public/components-html/molecules/buttons/IconFocusButton.html#tonal [tonal]
<<< @/../components/molecules/buttons/ExpressiveButton.scss [CSS]
:::


## Outlined

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/buttons/IconFocusButton-outlined.html -->
</div>
:::

::: code-group
<<< @/public/components-html/molecules/buttons/IconFocusButton-outlined.html#default [default]
<<< @/public/components-html/molecules/buttons/IconFocusButton-outlined.html#image [image]
<<< @/public/components-html/molecules/buttons/IconFocusButton-outlined.html#small [small]
<<< @/public/components-html/molecules/buttons/IconFocusButton-outlined.html#rounded [rounded]
<<< @/public/components-html/molecules/buttons/IconFocusButton-outlined.html#plain [plain]
<<< @/public/components-html/molecules/buttons/IconFocusButton-outlined.html#tonal [tonal]
<<< @/../components/molecules/buttons/ExpressiveButton.scss [CSS]
:::

## Classes
#### Plus [SimpleButton](/atoms/buttons/SimpleButton) classes

## SCSS variables
#### Plus [SimpleButton](/atoms/buttons/SimpleButton) variables

| Variable           | Description         | Accepted Values | Default                |
|:-------------------|:--------------------|:----------------|:-----------------------|
| `$border-width`    | Border size         | `size`          | `2px`                  |
| `$border-color`    | Border color        | `color`         | `contrast of {$color}` |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/molecules/buttons/IconFocusButton.scss" as * with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);
</style>
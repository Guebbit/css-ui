# Icon Focus Button
<Badge type="tip">Molecule</Badge> <Badge type="info">buttons</Badge>

::: tip VARIANT Dependencies
- [SimpleButton](/atoms/buttons/SimpleButton.md)
:::

## Regular

::: raw
<div class="dev-section">
    <!--@include: ../../molecules/buttons/IconFocusButton.html -->
</div>
:::

::: code-group
<<< @/molecules/buttons/IconFocusButton.html#default [default]
<<< @/molecules/buttons/IconFocusButton.html#image [image]
<<< @/molecules/buttons/IconFocusButton.html#small [small]
<<< @/molecules/buttons/IconFocusButton.html#rounded [rounded]
<<< @/molecules/buttons/IconFocusButton.html#plain [plain]
<<< @/molecules/buttons/IconFocusButton.html#tonal [tonal]
<<< @/../components/molecules/buttons/ExpressiveButton.scss [CSS]
:::


## Outlined

::: raw
<div class="dev-section">
    <!--@include: ../../molecules/buttons/IconFocusButton-outlined.html -->
</div>
:::

::: code-group
<<< @/molecules/buttons/IconFocusButton-outlined.html#default [default]
<<< @/molecules/buttons/IconFocusButton-outlined.html#image [image]
<<< @/molecules/buttons/IconFocusButton-outlined.html#small [small]
<<< @/molecules/buttons/IconFocusButton-outlined.html#rounded [rounded]
<<< @/molecules/buttons/IconFocusButton-outlined.html#plain [plain]
<<< @/molecules/buttons/IconFocusButton-outlined.html#tonal [tonal]
<<< @/../components/molecules/buttons/ExpressiveButton.scss [CSS]
:::

## Classes
#### Plus [SimpleButton](/atoms/buttons/SimpleButton) classes

## SCSS variables
#### Plus [SimpleButton](/atoms/buttons/SimpleButton) variables

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/molecules/buttons/IconFocusButton.scss" as * with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);
</style>
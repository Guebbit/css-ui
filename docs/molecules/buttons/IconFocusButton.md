# Icon Focus Button
<Badge type="tip">Molecule</Badge> <Badge type="info">buttons</Badge>

::: tip MOLECULE Dependencies
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

| Class               | Description                 |
|:--------------------|:----------------------------|
| `animate-active`    | Animation active            |
| `animate-on-active` | Animation active on .active |
| `animate-on-hover`  | Animation active on hover   |

## SCSS variables

| Variable                             | Description         | Accepted Values | Default                |
|:-------------------------------------|:--------------------|:----------------|:-----------------------|
| `$icon-focus-button-speed`           | Animation durations | `time`          | `0.3s`                 |
| `$icon-focus-button-color`           | Main color          | `color`         | `#000`                 |
| `$icon-focus-button-on-color`        | Text color          | `color`         | `contrast of {$color}` |
| `$icon-focus-button-active-color`    | Active main color   | `color`         | `same as {$color}`     |
| `$icon-focus-button-active-on-color` | Active text color   | `color`         | `same as {$on-color}`  |

<style lang="scss">
@import "docs/theme.scss";

$icon-focus-button-color: $primary-color;
$icon-focus-button-active-color: $secondary-color;

@import "components/molecules/buttons/IconFocusButton.scss";
</style>
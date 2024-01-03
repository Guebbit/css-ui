# Button Brand Icon 
<Badge type="tip">Atom</Badge> <Badge type="info">Button</Badge>

::: tip VARIANT Dependencies
- [SimpleButton](/atoms/buttons/SimpleButton)
:::

## Code

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/buttons/ButtonBrandIcon.html -->
</div>
:::

::: code-group
<<< @/public/components-html/atoms/buttons/ButtonBrandIcon.html#default [default]
<<< @/public/components-html/atoms/buttons/ButtonBrandIcon.html#image [image]
<<< @/public/components-html/atoms/buttons/ButtonBrandIcon.html#small [small]
<<< @/public/components-html/atoms/buttons/ButtonBrandIcon.html#rounded [rounded]
<<< @/public/components-html/atoms/buttons/ButtonBrandIcon.html#circular [circular]
<<< @/public/components-html/atoms/buttons/ButtonBrandIcon.html#shadowless [shadowless]
<<< @/public/components-html/atoms/buttons/ButtonBrandIcon.html#plain [plain]
<<< @/public/components-html/atoms/buttons/ButtonBrandIcon.html#outlined [outlined]
<<< @/public/components-html/atoms/buttons/ButtonBrandIcon.html#tonal [tonal]
<<< @/../components/atoms/buttons/ButtonBrandIcon.scss [CSS]
:::


## Classes

| Class               | Description                  |
|:--------------------|:-----------------------------|
| `animate-active`    | Animation active             |
| `animate-on-active` | Animation active on .active  |
| `animate-on-hover`  | Animation active on hover    |

## SCSS variables

| Variable                             | Description                                    | Accepted Values | Default                      |
|:-------------------------------------|:-----------------------------------------------|:----------------|:-----------------------------|
| `$button-brand-icon-size`            | Size of icon                                   | `size`          | `90px`                       |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/buttons/ButtonBrandIcon.scss" as * with (
    $simple-button-color: theme.$primary-color,
);
</style>
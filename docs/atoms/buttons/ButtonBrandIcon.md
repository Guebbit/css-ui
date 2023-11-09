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
<<< @/public/components-html/atoms/buttons/ButtonBrandIcon.html#boxshadowless [boxshadowless]
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

| Variable                               | Description                                    | Accepted Values | Default                      |
|:---------------------------------------|:-----------------------------------------------|:----------------|:-----------------------------|
| `$button-brand-icon-size`              | Size of icon                                   | `size`          | `90px`                       |
| `$button-brand-icon-color`             | Color of text                                  | `color`         | `#000`                       |
| `$button-brand-icon-background`        | Color of background                            | `color`         | `contrast of {$color}`       |
| `$button-brand-icon-active-color`      | Color of text on **hover** or **active**       | `color`         | `#000`                       |
| `$button-brand-icon-active-background` | Color of background on **hover** or **active** | `color`         | `contrast of {$hover-color}` |

<style lang="scss">
@import "docs/theme.scss";

$button-brand-icon-background: $primary-color;
$button-brand-icon-color: $secondary-color;
$button-brand-icon-active-background: $secondary-color;
$button-brand-icon-active-color: $primary-color;

@import "components/atoms/buttons/ButtonBrandIcon.scss";
</style>
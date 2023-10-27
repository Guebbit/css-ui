# Button Brand Icon 
<Badge type="tip">Atom</Badge> <Badge type="info">Button</Badge>

## Code

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/buttons/ButtonBrandIcon.html -->
</div>
:::

::: code-group
<<< @/public/components-html/atoms/buttons/ButtonBrandIcon.html
<<< @/../components/atoms/buttons/ButtonBrandIcon.scss
:::


## Classes

| Class      | Description                   |
|:-----------|:------------------------------|
| `active`   | As if it's focused or hover   |
| `mini`     | Mini version                  |

## SCSS variables

| Variable                              | Description                                    | Accepted Values | Default                      |
|:--------------------------------------|:-----------------------------------------------|:----------------|:-----------------------------|
| `$button-brand-icon-size`             | Size of icon                                   | `size`          | `90px`                       |
| `$button-brand-icon-color`            | Color of text                                  | `color`         | `#000`                       |
| `$button-brand-icon-background`       | Color of background                            | `color`         | `contrast of {$color}`       |
| `$button-brand-icon-hover-color`      | Color of text on **hover** or **active**       | `color`         | `#000`                       |
| `$button-brand-icon-hover-background` | Color of background on **hover** or **active** | `color`         | `contrast of {$hover-color}` |

<style lang="scss">
@import "docs/theme.scss";

$button-brand-icon-background: $primary-color;
$button-brand-icon-color: $secondary-color;
$button-brand-icon-hover-background: $secondary-color;
$button-brand-icon-hover-color: $primary-color;

@import "components/atoms/buttons/ButtonBrandIcon.scss";
</style>
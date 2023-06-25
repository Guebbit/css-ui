# Cyberpunk Button

<Badge type="tip">Atom</Badge> <Badge type="info">Buttons</Badge>

## Code

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/buttons/CyberpunkButton.html -->
</div>
:::

::: code-group
<<< @/public/components-html/atoms/buttons/CyberpunkButton.html
<<< @/../components/atoms/buttons/CyberpunkButton.scss
:::

## Data attribute

| Class               | Description                                  |
|:--------------------|:---------------------------------------------|
| `data-text`         | Text that appear on hover (glitch animation) |

## Classes

| Class               | Description                 |
|:--------------------|:----------------------------|
| `animate-active`    | Animation active            |
| `animate-on-active` | Animation active on .active |
| `animate-on-hover`  | Animation active on hover   |

## SCSS variables

| Variable                      | Description           | Accepted Values | Default   |
|:------------------------------|:----------------------|:----------------|:----------|
| `$cyberpunk-button-text`      | Text color            | `color`         | `#000`    |
| `$cyberpunk-button-primary`   | Primary color         | `color`         | `#f2e900` |
| `$cyberpunk-button-secondary` | Secondary color       | `color`         | `#f11`    |
| `$cyberpunk-button-duration`  | Transition's duration | `duration`      | `0.2`     |

<style lang="scss">
@import "docs/theme.scss";

/*$cyberpunk-button-primary: $primary-color;*/
/*$cyberpunk-button-secondary: $secondary-color;*/

@import "components/atoms/buttons/CyberpunkButton.scss";
</style>
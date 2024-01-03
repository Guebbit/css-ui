# Cyberpunk Button

<Badge type="tip">Atom</Badge> <Badge type="info">Buttons</Badge>

## Code

::: raw
<div class="dev-section">
    <button
        class="cyberpunk-button animate-on-hover"
        data-text="test toast"
    >
        Lorem Ipsum
    </button>
</div>
:::

::: code-group
``` html
<button
    class="cyberpunk-button animate-on-hover"
    data-flicker-text="test toast"
>
    Lorem Ipsum
</button>
```
<<< @/../components/atoms/buttons/CyberpunkButton.scss
:::

## Data attribute

| Class                  | Description                                  |
|:-----------------------|:---------------------------------------------|
| `data-flicker-text`    | Text that appear on hover (glitch animation) |

## Classes

| Class               | Description                 |
|:--------------------|:----------------------------|
| `animate-active`    | Animation active            |
| `animate-on-active` | Animation active on .active |
| `animate-on-hover`  | Animation active on hover   |

## SCSS variables

| Variable                      | Description           | Accepted Values | Default                  |
|:------------------------------|:----------------------|:----------------|:-------------------------|
| `$cyberpunk-button-primary`   | Primary color         | `color`         | `#f2e900`                |
| `$cyberpunk-button-secondary` | Secondary color       | `color`         | `#f11`                   |
| `$cyberpunk-button-text`      | Text color            | `color`         | `contrast of {$primary}` |
| `$cyberpunk-button-duration`  | Transition's duration | `time`          | `1s`                     |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/buttons/CyberpunkButton.scss" as * with (
    $cyberpunk-button-primary: theme.$primary-color,
    $cyberpunk-button-secondary: theme.$secondary-color,
);
</style>
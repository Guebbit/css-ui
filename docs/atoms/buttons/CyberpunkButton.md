# Cyberpunk Button

<Badge type="tip">Atom</Badge> <Badge type="info">Buttons</Badge>

## Code

::: raw
<div class="dev-section">
    <button
        class="cyberpunk-button animate-on-hover"
        data-flicker-text="test toast"
    >
        Lorem Ipsum
    </button>
</div>
:::

```html
<button
    class="cyberpunk-button animate-on-hover"
    data-flicker-text="test toast"
>
    Lorem Ipsum
</button>
```

## Component CSS

<<< @/../components/atoms/buttons/CyberpunkButton.scss

## Documentation CSS

```scss
@use "docs/theme.scss" as theme;
@use "components/atoms/buttons/CyberpunkButton.scss" as * with (
    $primary: theme.$primary-color,
    $secondary: theme.$secondary-color,
);
```


## Data attribute

| Class                  | Description                                             |
|:-----------------------|:--------------------------------------------------------|
| `data-flicker-text`    | OPTIONAL - Text that appear on hover (glitch animation) |

## Classes

| Class               | Description                 |
|:--------------------|:----------------------------|
| `animate-active`    | Animation active            |
| `animate-on-active` | Animation active on .active |
| `animate-on-hover`  | Animation active on hover   |

## SCSS variables

| Variable      | Description           | Accepted Values | Default                  |
|:--------------|:----------------------|:----------------|:-------------------------|
| `$primary`    | Primary color         | `color`         | `#f2e900`                |
| `$secondary`  | Secondary color       | `color`         | `#f11`                   |
| `$on-primary` | Text color            | `color`         | `contrast of {$primary}` |
| `$duration`   | Transition's duration | `time`          | `1s`                     |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/buttons/CyberpunkButton.scss" as * with (
    $primary: theme.$primary-color,
    $secondary: theme.$secondary-color,
);
</style>
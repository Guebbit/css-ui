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
@use "sass:color";
@use "docs/theme.scss" as theme;
@use "components/atoms/buttons/CyberpunkButton.scss" as * with (
    $primary: theme.$primary-color,
    $active-primary: theme.$secondary-color,
    $secondary: color.complement(theme.$primary-color),
    $active-secondary: color.complement(theme.$secondary-color),
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

| Variable      | Description                                    | Accepted Values | Default                  |
|:--------------|:-----------------------------------------------|:----------------|:-------------------------|
| `$primary`    | :first_quarter_moon_with_face: Primary color   | `color`         | `#f2e900`                |
| `$secondary`  | :first_quarter_moon_with_face: Secondary color | `color`         | `#f11`                   |
| `$on-primary` | :first_quarter_moon_with_face: Text color      | `color`         | `contrast of {$primary}` |
| `$duration`   | Transition's duration                          | `time`          | `1s`                     |

<style lang="scss">
@use "sass:color";
@use "docs/theme.scss" as theme;
@use "components/atoms/buttons/CyberpunkButton.scss" as * with (
    $primary: theme.$primary-color,
    $active-primary: theme.$secondary-color,
    $secondary: color.complement(theme.$primary-color),
    $active-secondary: color.complement(theme.$secondary-color),
);
</style>
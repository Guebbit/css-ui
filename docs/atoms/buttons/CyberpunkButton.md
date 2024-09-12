# Cyberpunk Button
<Badge type="tip">Atom</Badge> <Badge type="info">Buttons</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/buttons/CyberpunkButton" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/buttons/CyberpunkButton" with (
    $color: theme.$primary-color, // #f2e900
    $color--dark: theme.$primary-color--dark,
    $border-color: theme.$secondary-color,
    $border-color--dark: theme.$secondary-color--dark,
);
```

## Default

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

<<< @/../src/atoms/buttons/CyberpunkButton.scss


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

| Variable         | Description                                              | Accepted Values | Default                  |
|:-----------------|:---------------------------------------------------------|:----------------|:-------------------------|
| `$color`         | :x: Main color                                           | `color`         | `#000` / `#fff`          |
| `$background`    | :first_quarter_moon_with_face: Button background         | `color`         | `same of {$color}`       |
| `$on-background` | :first_quarter_moon_with_face: Button text color         | `color`         | `contrast of {$color}`   |
| `$border-color`  | :first_quarter_moon_with_face: Button right border color | `color`         | `shade 50% of {$color}`  |
| `$duration`      | Transition's duration                                    | `time`          | `1s`                     |

<style lang="scss">
@use "sass:color";
@use "../docs/theme" as theme;
@use "../src/atoms/buttons/CyberpunkButton" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
</style>
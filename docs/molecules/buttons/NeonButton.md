# Neon Button
<Badge type="tip">Molecule</Badge> <Badge type="info">buttons</Badge>

::: tip VARIANT Dependencies
- [SimpleButton](/atoms/buttons/SimpleButton)
:::

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/molecules/buttons/NeonButton" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/molecules/buttons/NeonButton" with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);
```

## Default

::: raw
<div class="dev-section">
    <button class="neon-button button-shadowless animate-on-hover">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Lorem Ipsum
    </button>
</div>
:::

```html
<button class="neon-button button-shadowless animate-on-hover">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    Lorem Ipsum
</button>
```

## Component CSS

<<< @/../src/molecules/buttons/NeonButton.scss

## Classes
#### Plus [SimpleButton](/atoms/buttons/SimpleButton) classes

## SCSS variables
#### Plus [SimpleButton](/atoms/buttons/SimpleButton) variables

| Variable                     | Description         | Accepted Values | Default                     |
|:-----------------------------|:--------------------|:----------------|:----------------------------|
| `$animation-duration`        | :zap: Duration      | `time`          | `1.2s`, `half` (:zap:)      |

<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/molecules/buttons/NeonButton" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
</style>
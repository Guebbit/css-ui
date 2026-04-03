# Neon Button
<Badge type="tip">Molecule</Badge> <Badge type="info">buttons</Badge>

::: tip VARIANT Dependencies
- [SimpleButton](/atoms/buttons/SimpleButton)
:::

## Use

```scss
@use "@guebbit/css-ui/index";
```

Theme with CSS custom properties (recommended), while NeonButton inherits base behavior from `SimpleButton`:

```css
:root {
  --cui-simple-button-background: rgb(17 24 39);
  --cui-simple-button-border-color: rgb(56 189 248);
  --neon-button-animation-duration: 1.2s;
  --neon-button-active-animation-duration: .6s;
}
```

## Default

::: raw
<div class="dev-section">
    <button class="neon-button button-flat animate-on-hover">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Lorem Ipsum
    </button>
</div>
:::

```html
<button class="neon-button button-flat animate-on-hover">
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

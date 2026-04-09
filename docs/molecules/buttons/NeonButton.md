# Neon Button
<Badge type="tip">Molecule</Badge> <Badge type="info">buttons</Badge>

::: tip VARIANT Dependencies
- [SimpleButton](/atoms/buttons/SimpleButton)
:::

## Use

```scss
@use "@guebbit/css-ui/src/molecules/buttons/neon-button";
```

Color is applied via utility classes:

- `.use-{role}` → sets `--main-color` for neon glow color

```html
<button class="neon-button button-flat animate-on-hover use-primary">
    <span></span><span></span><span></span><span></span>
    Lorem Ipsum
</button>
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

<<< @/../src/molecules/buttons/neon-button/index.scss

## Classes
#### Plus [SimpleButton](/atoms/buttons/SimpleButton) classes

## SCSS variables
#### Plus [SimpleButton](/atoms/buttons/SimpleButton) variables

| Variable                     | Description              | Accepted Values | Default  |
|:-----------------------------|:-------------------------|:----------------|:---------|
| `$animation-duration`        | Neon border loop duration | `time`          | `1.2s`   |
| `$active-animation-duration` | Active state loop duration | `time`         | `0.6s`   |

## Theming

Apply `.use-{role}` on the button element to set the neon glow color:

```html
<button class="neon-button use-primary">...</button>
```

<style lang="scss">
@use "../src/molecules/buttons/neon-button";
</style>
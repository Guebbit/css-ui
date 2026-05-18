# Neon Button
<Badge type="tip">Molecule</Badge> <Badge type="info">buttons</Badge>

::: tip VARIANT Dependencies
- [SimpleButton](/atoms/button-simple)
:::

## Use

```scss
@use "@guebbit/css-ui/molecules/button-neon";
```

Color is applied via utility classes:

- `.use-{role}` → sets `--main-color` for neon glow color

```html
<button class="neon-button button-flat animate-on-hover use-brand">
    <span></span><span></span><span></span><span></span>
    Lorem Ipsum
</button>
```

## Default

::: raw
<div class="dev-section">
<!--@include: ../examples/molecules/buttons/NeonButton.html -->
</div>
:::

::: code-group
<<< @/examples/molecules/buttons/NeonButton.html#default [default]
<<< @/examples/molecules/buttons/NeonButton.html#primary [primary]
:::

## Component CSS

::: code-group
<<< @/../src/components/molecules/button-neon/_architecture.scss [_architecture.scss]
<<< @/../src/components/molecules/button-neon/index.scss [index.scss]
:::

## Classes
#### Plus [SimpleButton](/atoms/button-simple) classes

No extra component-specific classes beyond the inherited items above.

## SCSS variables
#### Plus [SimpleButton](/atoms/button-simple) variables

| SCSS Variable | CSS Variable | Description | Accepted Values | Default |
| :--------------|:-------------|:-------------|:-----------------|:---------|
| `$animation-duration` | `--neon-button-animation-duration` | Neon border loop duration | `time` | `1.2s` |
| `$active-animation-duration` | `--neon-button-active-animation-duration` | Active state loop duration | `time` | `0.6s` |
## Theming

Apply `.use-{role}` on the button element to set the neon glow color:

<<< @/examples/molecules/buttons/NeonButton.html#theme-role [theme-role]

<style lang="scss">
@use "../src/components/molecules/button-neon";
</style>

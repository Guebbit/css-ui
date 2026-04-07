# Cyberpunk Button
<Badge type="tip">Atom</Badge> <Badge type="info">Buttons</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/buttons/cyberpunk-button/index";
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

<<< @/../src/atoms/buttons/cyberpunk-button/index.scss

## Data attribute

| Class               | Description                                          |
|:--------------------|:-----------------------------------------------------|
| `data-flicker-text` | Optional text shown in glitch layer on interaction   |

## Classes

| Class               | Description                 |
|:--------------------|:----------------------------|
| `animate-active`    | Animation active            |
| `animate-on-active` | Animation active on `.active` |
| `animate-on-hover`  | Animation active on hover   |

## SCSS variables

| Variable    | Description            | Accepted Values | Default |
|:------------|:-----------------------|:----------------|:--------|
| `$duration` | Glitch animation speed | `time`          | `1s`    |

::: info Color customization
Colors are controlled by `.color-*` utility classes or by overriding `--color-*` CSS custom properties:
```html
<button class="cyberpunk-button color-primary animate-on-hover" data-flicker-text="PRIMARY">Primary</button>
<button class="cyberpunk-button color-secondary animate-on-hover" data-flicker-text="SECONDARY">Secondary</button>
```
:::

<style lang="scss">
@use "../src/atoms/buttons/cyberpunk-button/index";
</style>

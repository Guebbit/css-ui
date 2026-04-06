# Cyberpunk Button
<Badge type="tip">Atom</Badge> <Badge type="info">Buttons</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/buttons/cyberpunk-button/index" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
```

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

::: info Theme/tokens
Color/background/border tokens are resolved through semantic tokens in `index.scss` (`primary-500`, `primary-700`, etc.).
:::

<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/buttons/cyberpunk-button/index" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
</style>

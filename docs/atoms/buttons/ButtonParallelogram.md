# Button Parallelogram
<Badge type="tip">Atom</Badge> <Badge type="info">Button</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/buttons/button-parallelogram/index" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
```

```scss
@use "@guebbit/css-ui/src/atoms/buttons/button-parallelogram/index";
```

## Default

::: raw
<div class="dev-section">
    <button class="button-parallelogram animate-on-hover">
        Lorem Ipsum
    </button>
    <button class="button-parallelogram animate-on-hover focus-on-hover">
        More focus
    </button>
</div>
:::

::: code-group
```html
<button class="button-parallelogram animate-on-hover">
    Lorem Ipsum
</button>
```
```html [focus]
<button class="button-parallelogram animate-on-hover focus-on-hover">
    Focus
</button>
```
:::

## Component CSS

<<< @/../src/atoms/buttons/button-parallelogram/index.scss

## Classes

| Class               | Description                 |
|:--------------------|:----------------------------|
| `animate-active`    | Animation active            |
| `animate-on-active` | Animation active on `.active` |
| `animate-on-hover`  | Animation active on hover   |
| `focus-active`      | Focus side borders active   |
| `focus-on-active`   | Focus side borders on `.active` |
| `focus-on-hover`    | Focus side borders on hover |

## SCSS variables

| Variable       | Description                       | Accepted Values | Default |
|:---------------|:----------------------------------|:----------------|:--------|
| `$tilt`        | Parallelogram skew angle          | `angle`         | `10deg` |
| `$active-tilt` | Active-state skew angle           | `angle`         | `-10deg` |
| `$duration`    | Transition duration               | `time`          | `0.3s` |
| `$padding`     | Horizontal/vertical base spacing  | `size`          | `8px` |

::: info Theme/tokens
Color tokens are resolved through the semantic token system in `index.scss` (`primary-500`, `primary-600`, etc.).
:::

<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/buttons/button-parallelogram/index" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
</style>

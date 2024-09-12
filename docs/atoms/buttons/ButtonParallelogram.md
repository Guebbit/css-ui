# Button Parallelogram 
<Badge type="tip">Atom</Badge> <Badge type="info">Button</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/buttons/ButtonParallelogram" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/buttons/ButtonParallelogram" with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);
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

<<< @/../src/atoms/buttons/ButtonParallelogram.scss

## SCSS variables

| Variable       | Description                                              | Accepted Values | Default                   |
|:---------------|:---------------------------------------------------------|:----------------|:--------------------------|
| `$color`       | :zap: :first_quarter_moon_with_face: Backgrkound color   | `color`         | `#000`                    |
| `$on-color`    | :zap: :first_quarter_moon_with_face: Text color          | `color`         | `contrast as {$color}`    |
| `$focus-color` | :zap: :first_quarter_moon_with_face: Lateral focus color | `color`         | `same as {$active-color}` |
| `$tilt`        | :zap: Skew degrees                                       | `size`          | `10deg`, `-10deg`(:zap:)  |
| `$duration`    | Animation duration                                       | `time`          | `0.3s`                    |
| `$padding`     | Padding                                                  | `size`          | `8px`                     |

<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/buttons/ButtonParallelogram" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
</style>
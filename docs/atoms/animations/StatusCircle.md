# Status Circle
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge>

## Code

::: raw
<div class="dev-section">
    <span class="status-circle" />
    <span class="status-circle animate-active" />
</div>
:::

```html [html]
<span class="status-circle" />
<span class="status-circle animate-active" />
```

## Component CSS

<<< @/../src/atoms/animations/StatusCircle.scss [css]

## Documentation CSS

```scss
@use "docs/theme.scss" as theme;
@use "src/atoms/animations/StatusCircle.scss" as * with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);
```

## Classes

| Class               | Description                  |
|:--------------------|:-----------------------------|
| `animate-active`    | Pulsing animation            |
| `animate-on-active` | Pulsing animation on .active |
| `animate-on-hover`  | Pulsing animation on hover   | 

## SCSS variables

| Variable       | Description                                      | Accepted Values | Default               |
|:---------------|:-------------------------------------------------|:----------------|:----------------------|
| `$color`       | :zap: :first_quarter_moon_with_face: Main color  | `color`         | `#000` / `#fff`       |
| `$pulse-color` | :zap: :first_quarter_moon_with_face: Pulse color | `color`         | `rgba({$color}, 0.3)` |
| `$duration`    | Animation duration                               | `time`          | `1s`                  |


<style lang="scss">
@use "docs/theme.scss" as theme;
@use "src/atoms/animations/StatusCircle.scss" as * with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);
</style>
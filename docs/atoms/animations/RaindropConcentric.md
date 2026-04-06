# Raindrop Concentric
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/raindrop-concentric/index";
```

Colors and design tokens are controlled via CSS custom properties:
```html
<div class="raindrop-concentric" style="--raindrop-concentric-color: #ff6b35;">
```

## Default

::: raw
<div class="dev-section" style="height: 500px">
    <div class="raindrop-concentric animate-active">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>
:::

```html
<div class="raindrop-concentric animate-active">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
```

## Component CSS

<<< @/../src/atoms/animations/raindrop-concentric/index.scss

## Classes

| Class            | Description                                          |
|:-----------------|:-----------------------------------------------------|
| `animate-active` | Animation active (needed for programmatic activation |
| `animate-once`   | Animation count becomes 1                            |

## CSS Custom Properties

| Property                              | Description                  | Default       |
|:--------------------------------------|:-----------------------------|:--------------|
| `--raindrop-concentric-color`         | Primary color                | `primary-500` |
| `--raindrop-concentric-active-color`  | Active color transformation  | `primary-600` |
| `--raindrop-concentric-size`          | Main size                    | `150px`       |
| `--raindrop-concentric-border-size`   | Border size                  | `10px`        |

<style lang="scss">
@use "../src/atoms/animations/raindrop-concentric/index";
</style>
# Raindrop Concentric
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/components/atoms/animation-raindrop-concentric";
```

```html
<div class="raindrop-concentric animate-active">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
```


## Default

::: raw
<div class="dev-section" style="height: 500px">
<!--@include: ../../examples/atoms/animations/RaindropConcentric-default.html -->
</div>
:::


## Primary (with it's active version) AND irregular

::: raw
<div class="dev-section" style="height: 500px">
<!--@include: ../../examples/atoms/animations/RaindropConcentric-primary-and-irregular.html -->
</div>
:::


## Custom CSS

```css
--main-color: var(--pink-500); 
--active-main-color: var(--green-500);
```

::: raw
<div class="dev-section" style="height: 500px">
<!--@include: ../../examples/atoms/animations/RaindropConcentric-custom-css.html -->
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

::: code-group
<<< @/../src/components/atoms/animation-raindrop-concentric/_architecture.scss [_architecture.scss]
<<< @/../src/components/atoms/animation-raindrop-concentric/index.scss [index.scss]
:::

## Classes

| Class               | Description                                           |
|:--------------------|:------------------------------------------------------|
| `animate-active`    | Animation active (needed for programmatic activation) |
| `animate-once`      | Animation count becomes 1                             |
| `animate-irregular` | Rings expand at varying speeds, breaking the uniform ripple for a more natural look |

## CSS Custom Properties

Component color is inherited from utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`).

| Property | Default |
|:---------|:--------|
| `--raindrop-concentric-size` | `150px` |
| `--raindrop-concentric-border-size` | `10px` |
| `--raindrop-concentric-duration` | `10s` |


## SCSS variables

| SCSS Variable | CSS Variable | Description | Default |
|:--------------|:-------------|:------------|:--------|
| `$size` | `--raindrop-concentric-size` | Component size | `150px` |
| `$border-size` | `--raindrop-concentric-border-size` | Border size | `10px` |
| `$duration` | `--raindrop-concentric-duration` | Animation duration | `8s` |
| `$number` | `--raindrop-concentric-number` | Number | `4` |
| `$irregular-multipliers` | `--raindrop-concentric-irregular-multipliers` | Irregular multipliers | `(0.2, 0.7, 0.4, 1.5)` |

<style lang="scss">
@use "../src/components/atoms/animation-raindrop-concentric";
</style>

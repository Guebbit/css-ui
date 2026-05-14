# Raindrop Concentric
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/raindrop-concentric";
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
    <div class="raindrop-concentric animate-active">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>
:::


## Primary (with it's active version) AND irregular

::: raw
<div class="dev-section" style="height: 500px">
    <div class="raindrop-concentric use-brand animate-irregular animate-active">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>
:::


## Custom CSS

```css
--main-color: var(--pink-500); 
--active-main-color: var(--green-500);
```

::: raw
<div class="dev-section" style="height: 500px">
    <div class="raindrop-concentric animate-active" style="--main-color: var(--pink-500); --active-main-color: var(--green-500);">
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


<style lang="scss">
@use "../src/atoms/animations/raindrop-concentric";
</style>
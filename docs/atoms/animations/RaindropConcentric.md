# Raindrop Concentric
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/raindrop-concentric";
```

Color is now always applied via utility classes (not SCSS color variables):

- `.bg-{role}` → background + on-color
- `.text-{role}` → text color
- `.border-{role}` → border color
- `.use-{role}` → "jolly" class: sets `--main-color` / `--on-main-color` / `--active-main-color` / `--active-on-main-color` for a full single-class semantic color override

```html
<div class="text-primary">...</div>
<button class="bg-primary">...</button>
<button class="border-primary text-primary">...</button>
<button class="use-primary">...</button>
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

Component color is inherited from utility classes (`.bg-{role}`, `.text-{role}`, `.border-{role}`, `.use-{role}`).

| Property | Default |
|:---------|:--------|
| `--raindrop-concentric-size` | `150px` |
| `--raindrop-concentric-border-size` | `10px` |


<style lang="scss">
@use "../src/atoms/animations/raindrop-concentric";
</style>
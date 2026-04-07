# Raindrop Concentric
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/raindrop-concentric/index";
```

Color is now always applied via utility classes (not SCSS color variables):

- `.bg-{role}` → background + on-color
- `.text-{role}` → text color
- `.border-{role}` → border color

```html
<div class="text-primary">...</div>
<button class="bg-primary">...</button>
<button class="border-primary text-primary">...</button>
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
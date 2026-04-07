# Solar System Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Loading</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/solar-system-load/index";
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
<div class="dev-section">
    <div class="solar-system-load">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>
:::

::: code-group
```html
<div class="solar-system-load">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
```
:::

## Component CSS

<<< @/../src/atoms/animations/solar-system-load/index.scss


## CSS Custom Properties

| Property                               | Description       | Default       |
|:---------------------------------------|:------------------|:--------------|
| `--solar-system-load-central-color`    | Center color      | `primary-500` |
| `--solar-system-load-satellite-color`  | Satellite color   | `primary-300` |
| `--solar-system-load-size`             | Size              | `24px`        |


<style lang="scss">
@use "../src/atoms/animations/solar-system-load/index";
</style>
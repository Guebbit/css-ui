# Icon Showcase Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Progression</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/icon-showcase-load";
```

Color is now always applied via utility classes (not SCSS color variables):

- `.bg-{role}` → background + on-color
- `.text-{role}` → text color
- `.border-{role}` → border color
- `.use-{role}` → sets `--css-ui-main-color` for internal component color usage

```html
<div class="text-primary">...</div>
<button class="bg-primary">...</button>
<button class="border-primary text-primary">...</button>
<button class="use-primary">...</button>
```


## Default

::: raw
<div class="dev-section">
    <div class="icon-showcase-load">
        <div>A</div>
        <img alt="" src="https://placedog.net/50/50" />
        <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </div>
</div>
:::

```html
<div class="icon-showcase-load">
    <div>A</div>
    <img alt="" src="https://placedog.net/50/50" />
    <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
</div>
```


## Component CSS

<<< @/../src/atoms/animations/icon-showcase-load/index.scss

## CSS Custom Properties

Component color is inherited from utility classes (`.bg-{role}`, `.text-{role}`, `.border-{role}`, `.use-{role}`).

| Property | Default |
|:---------|:--------|
| `--icon-showcase-load-size` | `4em` |


<style lang="scss">
@use "../src/atoms/animations/icon-showcase-load";
</style>
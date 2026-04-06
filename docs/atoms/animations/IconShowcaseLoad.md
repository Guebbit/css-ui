# Icon Showcase Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Progression</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/icon-showcase-load/index";
```

Colors and design tokens are controlled via CSS custom properties:
```html
<div class="icon-showcase-load" style="--icon-showcase-load-color: #ff6b35;">
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

| Property                             | Description                                  | Default          |
|:-------------------------------------|:---------------------------------------------|:-----------------|
| `--icon-showcase-load-color`         | Color of text                                | `primary-500`    |
| `--icon-showcase-load-progress`      | Slice of border                              | `on-primary-500` |
| `--icon-showcase-load-background`    | Background color (transparency not available)| `surface-100`    |
| `--icon-showcase-load-size`          | Size                                         | `4em`            |


<style lang="scss">
@use "../src/atoms/animations/icon-showcase-load/index";
</style>
# Icon Showcase Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Progression</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/icon-showcase-load";
```



## Default

::: raw
    <div class="dev-section">
    <!--@include: ../../examples/atoms/animations/IconShowcaseLoad-default.html -->
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

Component color is inherited from utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`).

| Property | Default |
|:---------|:--------|
| `--icon-showcase-load-size` | `4em` |


<style lang="scss">
@use "../src/atoms/animations/icon-showcase-load";
</style>

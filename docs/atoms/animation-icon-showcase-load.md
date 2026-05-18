# Icon Showcase Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Progression</Badge>

## Use

```scss
@use "@guebbit/css-ui/atoms/animation-icon-showcase-load";
```



## Default

::: raw
<div class="dev-section">
<!--@include: ../examples/atoms/animations/IconShowcaseLoad-default.html -->
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

::: code-group
<<< @/../src/components/atoms/animation-icon-showcase-load/_architecture.scss [_architecture.scss]
<<< @/../src/components/atoms/animation-icon-showcase-load/index.scss [index.scss]
:::

## CSS Custom Properties

Component color is inherited from utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`).

| Property | Default |
|:---------|:--------|
| `--icon-showcase-load-size` | `4em` |


## Classes

| Class | Description |
|:------|:------------|
| `icon-showcase-load` | Component root |

## SCSS variables

| SCSS Variable | CSS Variable | Description | Default |
|:--------------|:-------------|:------------|:--------|
| `$size` | `--icon-showcase-load-size` | Component size | `4em` |
| `$duration` | `--icon-showcase-load-duration` | Animation duration | `4s` |
| `$item-number` | `--icon-showcase-load-item-number` | Item number | `3` |

<style lang="scss">
@use "../src/components/atoms/animation-icon-showcase-load";
</style>

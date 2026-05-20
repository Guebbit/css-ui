# Progression Icon Showcase
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Progression</Badge>

## Use

```scss
@use "@guebbit/css-ui/atoms/progression-icon-showcase";
```



## Default

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/IconShowcaseLoad-default.html -->
</div>
:::

```html
<div class="progression-icon-showcase use-brand">
    <div>A</div>
    <img alt="" src="https://placedog.net/50/50" />
    <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
</div>
```


## Component CSS

::: code-group
<<< @/../src/components/atoms/progression-icon-showcase/_architecture.scss [_architecture.scss]
<<< @/../src/components/atoms/progression-icon-showcase/index.scss [index.scss]
:::

## CSS Custom Properties

Component color is inherited from utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`).

| Property | Default |
|:---------|:--------|
| `--progression-icon-showcase-size` | `4em` |


## Classes

| Class | Description |
|:------|:------------|
| `progression-icon-showcase` | Component root |

## SCSS variables

| SCSS Variable | CSS Variable | Description | Default |
|:--------------|:-------------|:------------|:--------|
| `$size` | `--progression-icon-showcase-size` | Component size | `4em` |
| `$duration` | `--progression-icon-showcase-duration` | Animation duration | `4s` |
| `$item-number` | `--progression-icon-showcase-item-number` | Item number | `3` |

<style lang="scss">
@use "../src/components/atoms/progression-icon-showcase";
</style>

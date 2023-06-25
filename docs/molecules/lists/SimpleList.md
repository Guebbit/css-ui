# Simple List
<Badge type="tip">Atom</Badge> <Badge type="info">Lists</Badge>

## Vertical (default)

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/lists/SimpleList.html -->
</div>
:::

::: code-group
<<< @/public/components-html/molecules/lists/SimpleList.html
<<< @/../components/molecules/lists/SimpleList.scss
:::

## Vertical with links

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/lists/SimpleList-vertical-links.html -->
</div>
:::

<<< @/public/components-html/molecules/lists/SimpleList-vertical-links.html

## Vertical nested

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/lists/SimpleList-vertical-nested.html -->
</div>
:::

<<< @/public/components-html/molecules/lists/SimpleList-vertical-nested.html

## Horizontal

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/lists/SimpleList-horizontal.html -->
</div>
:::

<<< @/public/components-html/molecules/lists/SimpleList-horizontal.html

## Classes

| Class               | Description                 |
|:--------------------|:----------------------------|
| `horizontal-list`   | Horizontal mode             |
| `animate-active`    | Animation active            |
| `animate-on-active` | Animation active on .active |
| `animate-on-hover`  | Animation active on hover   |

## SCSS variables

| Variable                   | Description             | Accepted Values | Default            |
|:---------------------------|:------------------------|:----------------|:-------------------|
| `$simple-list-color`       | Main color              | `color`         | `#000`             |
| `$simple-list-hover-color` | Main color on **hover** | `color`         | `color darken 10%` |
| `$simple-list-duration`    | Transition's duration   | `duration`      | `0.2`              |

<!-- ICONS -->

<div style="display: none">
    <svg id="icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
</div>

<style lang="scss">
@import "docs/theme.scss";

$simple-list-color: $primary-color;
$simple-list-hover-color: $secondary-color;

@import "components/molecules/lists/SimpleList.scss";

.simple-list{
    border-left: 1px solid var(--vp-c-divider-light);
    border-right: 1px solid var(--vp-c-divider-light);
}
</style>
# Simple List
<Badge type="tip">Atom</Badge> <Badge type="info">Cards</Badge> <Badge type="info">Blockquote</Badge>

## Vertical (default)

<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/lists/SimpleList.html -->
</div>

::: code-group
<<< @/public/components-html/atoms/lists/SimpleList.html
<<< @/../components/atoms/lists/SimpleList.scss
:::

## Vertical with links

<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/lists/SimpleList-vertical-links.html -->
</div>

<<< @/public/components-html/atoms/lists/SimpleList-vertical-links.html

## Vertical nested

<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/lists/SimpleList-vertical-nested.html -->
</div>

<<< @/public/components-html/atoms/lists/SimpleList-vertical-nested.html

## Horizontal

<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/lists/SimpleList-horizontal.html -->
</div>

<<< @/public/components-html/atoms/lists/SimpleList-horizontal.html

## Classes

| Class        | Description     |
|:-------------|:----------------|
| `Horizontal` | Horizontal mode |

## SCSS variables

| Variable                    | Description             | Accepted Values | Default         |
|:----------------------------|:------------------------|:----------------|:----------------|
| `$simple-list-color`        | Main color              | `color`         | `#000`          |
| `$simple-list-hover-color`  | Main color on **hover** | `color`         | `same as color` |

<!-- ICONS -->

<div style="display: none">
    <svg id="icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
</div>

<style lang="scss">
@import "../../theme.scss";

$simple-list-color: $primary-color;
$simple-list-hover-color: $secondary-color;

@import "components/atoms/lists/SimpleList.scss";

.simple-list{
    border-left: 1px solid var(--vp-c-divider-light);
    border-right: 1px solid var(--vp-c-divider-light);
}
</style>
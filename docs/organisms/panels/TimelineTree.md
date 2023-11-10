# Timeline Tree
<Badge type="tip">Organism</Badge> <Badge type="info">Panel</Badge>

::: tip INCLUDED
- [SimpleCard](/molecules/cards/SimpleCard.md)
:::

::: raw
<div class="dev-section with-overflow">
    <!--@include: ../../public/components-html/organisms/panels/TimelineTree.html -->
</div>
:::

::: code-group
<<< @/public/components-html/organisms/panels/TimelineTree.html#snippet1 [HTML]
<<< @/../components/organisms/panels/TimelineTree.scss [CSS]
:::

## Classes

| Class         | Description             |
|:--------------|:------------------------|
| `flipped`     | Back of the credit card |

## SCSS variables

| Variable                   | Description      | Accepted Values | Default   |
|:---------------------------|:-----------------|:----------------|:----------|
| `$credit-card-text`        | Text color       | `color`         | `#000000` |
| `$credit-card-background`  | Background color | `color`         | `#ffffff` |

<style lang="scss">
@import "docs/theme.scss";
@import "components/molecules/cards/SimpleCard";

$timeline-tree-pillar-color: $primary-color;
$timeline-tree-pillar-on-color: #fff;

@import "components/organisms/panels/TimelineTree";
</style>
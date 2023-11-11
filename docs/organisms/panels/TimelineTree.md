# Timeline Tree
<Badge type="tip">Organism</Badge> <Badge type="info">Panel</Badge>

::: tip INCLUDED
- [SimpleCard](/molecules/cards/SimpleCard.md)
:::

## Default

::: raw
<div class="dev-section with-overflow">
    <!--@include: ../../public/components-html/organisms/panels/TimelineTree.html -->
</div>
:::

::: code-group
<<< @/public/components-html/organisms/panels/TimelineTree.html#default [Default]
<<< @/public/components-html/organisms/panels/TimelineTree.html#alternate [Alternate]
:::

## Balloon

::: raw
<div class="dev-section with-overflow">
    <!--@include: ../../public/components-html/organisms/panels/TimelineTree-balloon.html -->
</div>
:::

::: code-group
<<< @/public/components-html/organisms/panels/TimelineTree-balloon.html#default [Default]
<<< @/public/components-html/organisms/panels/TimelineTree-balloon.html#alternate [Alternate]
:::

## Line

::: raw
<div class="dev-section with-overflow">
    <!--@include: ../../public/components-html/organisms/panels/TimelineTree-line.html -->
</div>
:::

::: code-group
<<< @/public/components-html/organisms/panels/TimelineTree-line.html#default [Default]
<<< @/public/components-html/organisms/panels/TimelineTree-line.html#alternate [Alternate]
:::

## Border

::: raw
<div class="dev-section with-overflow">
    <!--@include: ../../public/components-html/organisms/panels/TimelineTree-border.html -->
</div>
:::

::: code-group
<<< @/public/components-html/organisms/panels/TimelineTree-border.html
:::

## CSS

::: code-group
<<< @/../components/organisms/panels/TimelineTree.scss [CSS]
:::

## Classes

| Class                       | Description             |
|:----------------------------|:------------------------|
| `timeline-with-balloon`     | little arrows           |
| `timeline-with-line`        | Connecting lines        |
| `timeline-with-border`      | Borders                 |
| `timeline-tree-alternate`   | Alternate visualization |


## SCSS variables

| Variable                             | Description      | Accepted Values      | Default                                      |
|:-------------------------------------|:-----------------|:---------------------|:---------------------------------------------|
| `$timeline-tree-pillar-color`        | Text color       | `color`              | `#000`                                       |
| `$timeline-tree-pillar-on-color`     | Background color | `color`              | `contrast of {$color}`                       |
| `$timeline-tree-pillar-opacity`      | Background color | `decimal percentage` | `0.5`                                        |
| `$timeline-tree-pillar-icon-size`    | Background color | `size`               | `40px`                                       |
| `$timeline-tree-pillar-icon-shadow`  | Background color | `color`              | `#000`                                       |
| `$timeline-tree-pillar-size`         | Background color | `size`               | `4px`                                        |
| `$timeline-tree-slot-color`          | Background color | `color`              | `inherit`                                    |
| `$timeline-tree-slot-on-color`       | Background color | `color`              | `inherit`                                    |
| `$timeline-tree-slot-distance`       | Background color | `size`               | `24px`                                       |
| `$timeline-tree-threshold`           | Background color | `size`               | `600px`                                      |
| `$timeline-tree-pillar-distance`     | Background color | `color`              | `calc($icon-size * 0.5 - pillar-size * 0.5)` |

<style lang="scss">
@import "docs/theme.scss";
@import "components/molecules/cards/SimpleCard";

.timeline-tree{
    margin: 50px auto;
}

$timeline-tree-pillar-color: $primary-color;
$timeline-tree-pillar-on-color: #fff;

@import "components/organisms/panels/TimelineTree";
</style>
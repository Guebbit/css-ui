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

## Component CSS

::: code-group
<<< @/../components/organisms/panels/TimelineTree.scss [CSS]
:::

## Documentation CSS

```scss
@use "docs/theme.scss" as theme;
@use "components/organisms/panels/TimelineTree.scss" as * with (
    $color: theme.$primary-color,
    $on-color: #fff,
);
@use "components/molecules/cards/SimpleCard";

.timeline-tree{
    margin: 50px auto;
}
```

## Classes

| Class                       | Description             |
|:----------------------------|:------------------------|
| `timeline-with-balloon`     | little arrows           |
| `timeline-with-line`        | Connecting lines        |
| `timeline-with-border`      | Borders                 |
| `timeline-tree-alternate`   | Alternate visualization |


## SCSS variables

| Variable                             | Description                      | Accepted Values      | Default                                      |
|:-------------------------------------|:---------------------------------|:---------------------|:---------------------------------------------|
| `$color`        | Text color                       | `color`              | `#000`                                       |
| `$on-color`     | Background color                 | `color`              | `contrast of {$color}`                       |
| `$opacity`      | Background color                 | `decimal percentage` | `0.5`                                        |
| `$icon-size`    | Background color                 | `size`               | `40px`                                       |
| `$icon-shadow`  | Background color                 | `color`              | `#000`                                       |
| `$size`         | Background color                 | `size`               | `4px`                                        |
| `$timeline-tree-slot-color`          | Background color                 | `color`              | `inherit`                                    |
| `$timeline-tree-slot-on-color`       | Background color                 | `color`              | `inherit`                                    |
| `$timeline-tree-slot-distance`       | Background color                 | `size`               | `24px`                                       |
| `$timeline-tree-threshold`           | Background color   (NO CSS var)  | `size`               | `600px`                                      |
| `$distance`     | Background color                 | `color`              | `calc($icon-size * 0.5 - pillar-size * 0.5)` |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/organisms/panels/TimelineTree.scss" as * with (
    $color: theme.$primary-color,
    $on-color: #fff,
);
@use "components/molecules/cards/SimpleCard";

.timeline-tree{
    margin: 50px auto;
}
</style>
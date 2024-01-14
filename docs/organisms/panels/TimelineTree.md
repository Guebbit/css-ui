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

<<< @/public/components-html/organisms/panels/TimelineTree-border.html

## Component CSS

<<< @/../components/organisms/panels/TimelineTree.scss

## Documentation CSS

```scss
@use "docs/theme.scss" as theme;
@use "components/organisms/panels/TimelineTree.scss" as * with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
    $pillar-on-color: #fff,
    $active-pillar-on-color: #fff,
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

| Variable              | Description                                                                              | Accepted Values | Default                                                 |
|:----------------------|:-----------------------------------------------------------------------------------------|:----------------|:--------------------------------------------------------|
| `$color`              | :x: MAIN color                                                                           | `color`         | `transparent`                                           |
| `$pillar-color`       | :zap: :first_quarter_moon_with_face: Pillar background color                             | `color`         | `same as {$color}`                                      |
| `$pillar-on-color`    | :zap: :first_quarter_moon_with_face: Pillar icon text color                              | `color`         | `same as {$pillar-color}`                               | 
| `$pillar-line-color`  | :zap: :first_quarter_moon_with_face: Line color                                          | `color`         | `same as {rgba($pillar-color, 0.3)}`                    |
| `$pillar-icon-shadow` | :zap: :first_quarter_moon_with_face: Shadow text color for icon (on `var()` MUST be RGB) | `color`         | `0,0,0`                                                 |
| `$slot-color`         | :zap: :first_quarter_moon_with_face: Background color in item                            | `color`         | `same as {$color}`                                      |
| `$slot-on-color`      | :zap: :first_quarter_moon_with_face: Text color in item                                  | `color`         | `contrast of {$slot-color}`                             |
| `$pillar-icon-size`   | Main icon size                                                                           | `size`          | `40px`                                                  |
| `$pillar-line-size`   | Line width                                                                               | `size`          | `4px`                                                   |
| `$pillar-distance`    | Line distance from items                                                                 | `size`          | `{$pillar-icon-size * 0.5 - $pillar-line-size * 0.5 }`  |
| `$slot-distance`      | Slot (wrappers) distance from one another                                                | `size`          | `24px`                                                  |
| `$duration`           | Transition time                                                                          | `time`          | `0.3s`                                                  |
| `$threshold-mobile`   | Mobile threshold (NO CSS var)                                                            | `size`          | `600px`                                                 |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/organisms/panels/TimelineTree.scss" as * with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);
@use "components/molecules/cards/SimpleCard";

.timeline-tree{
    margin: 50px auto;
}
</style>
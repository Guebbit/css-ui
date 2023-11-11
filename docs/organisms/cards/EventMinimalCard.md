# Event Minimal Card
<Badge type="tip">Organisms</Badge> <Badge type="info">Cards</Badge> <Badge type="info">Event</Badge>

::: tip INCLUDED
- [SimpleButton](/atoms/buttons/SimpleButton)
:::

## Code

::: raw
<div class="dev-section without-restrictions">
    <!--@include: ../../public/components-html/organisms/cards/EventMinimalCard.html -->
</div>
:::

::: code-group
<<< @/public/components-html/organisms/cards/EventMinimalCard.html#default [Default]
<<< @/public/components-html/organisms/cards/EventMinimalCard.html#border [With border]
<<< @/../components/organisms/cards/EventMinimalCard.scss [CSS]
:::


## Classes

| Class                 | Description                 |
|:----------------------|:----------------------------|
| `animate-active`      | Animation active            |
| `animate-on-active`   | Animation active on .active |
| `animate-on-hover`    | Animation active on hover   |
| `animate-on-hover`    | Animation active on hover   |
| `border-active`       | Border active               |
| `border-on-active`    | Border active on .active    |
| `border-on-hover`     | Border active on hover      |

## SCSS variables

| Variable                           | Description                 | Accepted Values | Default       |
|:-----------------------------------|:----------------------------|:----------------|:--------------|
| `$event-minimal-card-transition`   | Transition time             | `time`          | `0.3s`        |
| `$event-minimal-card-color`        | Main color                  | `size`          | `#fff`        |
| `$event-minimal-card-date-color`   | Date color                  | `size`          | `as {$color}` |
| `$event-minimal-card-title-color`  | Title color                 | `size`          | `as {$color}` |
| `$event-minimal-card-threshold`    | Mobile threshold            | `size`          | `600px`       |
| `$event-minimal-active-*`          | All classes active variants | `*`             | `*`           |
| `$event-minimal-card-border-size`  | Border size (only active)   | `size`          | `2px`         |
| `$event-minimal-card-border-color` | Border color (only active)  | `color`         | `as {$color}` |

<style lang="scss">
@import "docs/theme.scss";
@import "components/atoms/buttons/SimpleButton.scss";

$event-minimal-card-date-color: lighten($primary-color, 20%);
$event-minimal-card-active-date-color: darken($primary-color, 20%);

@import "components/organisms/cards/EventMinimalCard.scss";
</style>

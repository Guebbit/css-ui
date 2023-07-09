# Event Long Card
<Badge type="tip">Atom</Badge> <Badge type="info">Cards</Badge> <Badge type="info">Event</Badge>

::: tip ORGANISM Dependencies
 - [SimpleCard](/molecules/cards/SimpleCard)
:::

## Code

::: raw
<div class="dev-section without-restrictions">
    <!--@include: ../../public/components-html/organisms/cards/EventLongCard.html -->
</div>
:::

::: code-group
<<< @/public/components-html/organisms/cards/EventLongCard.html
<<< @/../components/organisms/cards/EventLongCard.scss
:::

## SCSS variables

| Variable                            | Description           | Accepted Values | Default               |
|:------------------------------------|:----------------------|:----------------|:----------------------|
| `$event-long-card-mobile-threshold` | Mobile threshold      | `size`          | `600px`               |
| `$event-long-card-height`           | Height                | `size`          | `200px`               |
| `$event-long-card-padding`          | Padding               | `size`          | `24px`                |
| `$event-long-card-color`            | Main color            | `color`         | `#000`                |
| `$event-long-card-icon`             | Icon color            | `color`         | `as *-color`          |
| `$event-long-card-text`             | Text color            | `color`         | `as *-color`          |
| `$event-long-card-background`       | Background Color      | `color`         | `contrast of *-text`  |
| `$event-long-card-time-text`        | Time text color       | `color`         | `contrast of *-color` |
| `$event-long-card-time-background`  | Time background color | `color`         | `as *-color`          |

<style lang="scss">
@import "docs/theme.scss";

$event-long-card-color: $primary-color;

@import "components/organisms/cards/EventLongCard.scss";
</style>

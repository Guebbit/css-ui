# Event Lite Card
<Badge type="tip">Organisms</Badge> <Badge type="info">Cards</Badge> <Badge type="info">Event</Badge>

::: tip INCLUDED
- [SimpleButton](/atoms/buttons/SimpleButton)
:::

## Code

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/organisms/cards/EventLiteCard.html -->
</div>
:::

::: code-group
<<< @/public/components-html/organisms/cards/EventLiteCard.html#default [Default]
<<< @/public/components-html/organisms/cards/EventLiteCard.html#mobile [Mobile]
:::

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/organisms/cards/EventLiteCard-border.html -->
</div>
:::

::: code-group
<<< @/public/components-html/organisms/cards/EventLiteCard-border.html#default [Default]
<<< @/public/components-html/organisms/cards/EventLiteCard-border.html#mobile [Mobile]
:::

## CSS

::: code-group
<<< @/../components/organisms/cards/EventLiteCard.scss
:::

## Classes

| Class           | Description                                 |
|:----------------|:--------------------------------------------|
| `mobile-active` | Mobile mode active (regardless screen size) |

## SCSS variables

| Variable                         | Description                               | Accepted Values | Default                           |
|:---------------------------------|:------------------------------------------|:----------------|:----------------------------------|
| `$event-lite-card-color`         | Main color                                | `color`         | `#fff`                            |
| `$event-lite-card-on-color`      | Main text color                           | `color`         | `contrast of {$color}`            |
| `$event-lite-card-height`        | Element height (and image height + width) | `size`          | `160px`                           |
| `$event-lite-card-padding`       | ---                                       | `size`          | `24px`                            |
| `$event-lite-card-border-radius` | ---                                       | `size`          | `6px`                             |
| `$event-lite-card-border-width`  | Border of {border-active} width           | `size`          | `2px`                             |
| `$event-lite-card-shadow-color`  | Shadow color                              | `color`         | `#000`                            |
| `$event-lite-card-shadow`        | Box-shadow instruction                    | `css`           | `box-shadow with {$shadow-color}` |
| `$event-lite-card-threshold`     | Mobile threshold                          | `size`          | `600px`                           |

<style lang="scss">
@import "docs/theme.scss";
@import "components/atoms/buttons/SimpleButton.scss";

@import "components/organisms/cards/EventLiteCard.scss";
</style>

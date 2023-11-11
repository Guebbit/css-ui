# Countdown Card
<Badge type="tip">Atom</Badge> <Badge type="info">Card</Badge>

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/cards/CountdownCard.html -->
</div>
:::

::: code-group
<<< @/public/components-html/atoms/cards/CountdownCard.html#snippet1 [HTML]
<<< @/../components/atoms/cards/CountdownCard.scss [CSS]
:::

## SCSS variables

| Variable                        | Description            | Accepted Values | Default                           |
|:--------------------------------|:-----------------------|:----------------|:----------------------------------|
| `$countdown-card-color`         | Background color       | `color`         | `#000`                            |
| `$countdown-card-on-color`      | Text color             | `color`         | `contrast of {$color}`            |
| `$countdown-card-padding`       | Padding size           | `size`          | `24px`                            |
| `$countdown-card-shadow-color`  | Shadow color           | `color`         | `#000`                            |
| `$countdown-card-shadow`        | Box-shadow instruction | `css`           | `box-shadow with {$shadow-color}` |

<style lang="scss">
@import "../../theme.scss";

$countdown-card-color: $primary-color;

@import "components/atoms/cards/CountdownCard.scss";
</style>
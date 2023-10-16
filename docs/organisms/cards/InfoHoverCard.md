# Info Hover Card
<Badge type="tip">Organisms</Badge> <Badge type="info">Card</Badge>

::: tip ORGANISM Dependencies
 - [SimpleCard](/molecules/cards/SimpleCard.md)
:::

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/organisms/cards/InfoHoverCard.html -->
</div>
:::

::: code-group
<<< @/public/components-html/organisms/cards/InfoHoverCard.html
<<< @/../components/organisms/cards/InfoHoverCard.scss
:::

## SCSS variables

| Variable                           | Description                 | Accepted Values | Default                          |
|:-----------------------------------|:----------------------------|:----------------|:---------------------------------|
| `$info-hover-card-height`          | Background color            | `size`          | `300px`                          |
| `$info-hover-card-icon-size`       | Text color                  | `size`          | `100px`                          |
| `$info-hover-card-duration`        | Text color of titles        | `time`          | `0.5s`                           |
| `$info-hover-card-padding`         | Shadow color                | `size`          | `same as {$simple-card-padding}` |

<style lang="scss">
@import "docs/theme.scss";

$simple-card-border-color: $primary-color;

@import "components/organisms/cards/InfoHoverCard.scss";
</style>
# Credit Card
<Badge type="tip">Atom</Badge> <Badge type="info">Card</Badge>

<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/cards/CreditCard.html -->
</div>

::: code-group
<<< @/public/components-html/molecules/cards/CreditCard.html#snippet1 [HTML]
<<< @/../components/molecules/cards/CreditCard.scss [CSS]
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
@import "../../theme.scss";

$credit-card-background: #ffff33;

.credit-card{
    width: 100%;
}

@import "components/molecules/cards/CreditCard.scss";
</style>
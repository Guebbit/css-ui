# Credit Card
<Badge type="tip">Atom</Badge> <Badge type="info">Card</Badge>

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/cards/CreditCard.html -->
</div>
:::

::: code-group
<<< @/public/components-html/molecules/cards/CreditCard.html#snippet1 [HTML]
<<< @/../components/molecules/cards/CreditCard.scss [CSS]
:::

## Classes

| Class                  | Description                           |
|:-----------------------|:--------------------------------------|
| `animate-active`       | Back of credit card active            |
| `animate-on-active`    | Back of credit card active on .active |
| `animate-on-hover`     | Back of credit card active on hover   |

## SCSS variables

| Variable                     | Description           | Accepted Values | Default                  |
|:-----------------------------|:----------------------|:----------------|:-------------------------|
| `$credit-card-color`         | Background color      | `color`         | `#000`                   |
| `$credit-card-on-color`      | Text color            | `color`         | `contrast of {$color}`   |
| `$credit-card-wave-color`    | Wave color            | `color`         | `rgba(#000, 0.2)`        |
| `$credit-card-chip-color`    | Chip background color | `color`         | `#fff`                   |
| `$credit-card-chip-on-color` | Chip text color       | `color`         | `#4c4c4c`                |
| `$credit-card-duration`      | Animation duration    | `time`          | `0.6s`                   |

<style lang="scss">
@use "components/molecules/cards/CreditCard.scss" as * with (
    $credit-card-color: #ffff33,
);

.credit-card{
    width: 100%;
}
</style>
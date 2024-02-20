# Credit Card
<Badge type="tip">Atom</Badge> <Badge type="info">Card</Badge>

::: raw
<div class="dev-section">
    <!--@include: ../../molecules/cards/CreditCard.html -->
</div>
:::

::: code-group
<<< @/molecules/cards/CreditCard.html#front-card [Front]
<<< @/molecules/cards/CreditCard.html#back-card [Back]
:::

## Component CSS

<<< @/../src/molecules/cards/CreditCard.scss

## Documentation CSS

```scss
@use "docs/theme.scss" as theme;
@use "src/molecules/cards/CreditCard.scss" as * with (
    $color: #ffff33,
);

.credit-card{
  width: 100%;
}
```

## Classes

| Class                  | Description                           |
|:-----------------------|:--------------------------------------|
| `animate-active`       | Back of credit card active            |
| `animate-on-active`    | Back of credit card active on .active |
| `animate-on-hover`     | Back of credit card active on hover   |

## SCSS variables

| Variable         | Description                                          | Accepted Values | Default                  |
|:-----------------|:-----------------------------------------------------|:----------------|:-------------------------|
| `$color`         | :first_quarter_moon_with_face: Background color      | `color`         | `#000`                   |
| `$on-color`      | :first_quarter_moon_with_face: Text color            | `color`         | `contrast of {$color}`   |
| `$wave-color`    | :first_quarter_moon_with_face: Wave color            | `color`         | `rgba(#000, 0.2)`        |
| `$chip-color`    | :first_quarter_moon_with_face: Chip background color | `color`         | `#fff`                   |
| `$chip-on-color` | :first_quarter_moon_with_face: Chip text color       | `color`         | `#4c4c4c`                |
| `$duration`      | Animation duration                                   | `time`          | `0.6s`                   |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "src/molecules/cards/CreditCard.scss" as * with (
    $color: #ffff33,
);

.credit-card{
    width: 100%;
}
</style>
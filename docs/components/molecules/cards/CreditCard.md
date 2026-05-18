# Credit Card
<Badge type="tip">Atom</Badge> <Badge type="info">Card</Badge>

## Use

```scss
@use "@guebbit/css-ui/styles" as theme;
@use "@guebbit/css-ui/molecules/card-credit";
```

```scss
@use "@guebbit/css-ui/styles" as theme;
@use "@guebbit/css-ui/molecules/card-credit";
```


::: raw
<div class="dev-section">
<!--@include: ../../../examples/molecules/cards/CreditCard.html -->
</div>
:::

::: code-group
<<< @/examples/molecules/cards/CreditCard.html#front-card [Front]
<<< @/examples/molecules/cards/CreditCard.html#back-card [Back]
:::

## Component CSS

::: code-group
<<< @/../src/components/molecules/card-credit/_architecture.scss [_architecture.scss]
<<< @/../src/components/molecules/card-credit/index.scss [index.scss]
:::

## Classes

| Class                  | Description                           |
|:-----------------------|:--------------------------------------|
| `animate-active`       | Back of credit card active            |
| `animate-on-active`    | Back of credit card active on .active |
| `animate-on-hover`     | Back of credit card active on hover   |

## SCSS variables

| SCSS Variable | CSS Variable | Description | Accepted Values | Default |
| :--------------|:-------------|:-------------|:-----------------|:---------|
| `$color` | `--credit-card-main-color` | :first_quarter_moon_with_face: Background color | `color` | `#000` |
| `$on-color` | `--credit-card-on-main-color` | :first_quarter_moon_with_face: Text color | `color` | `contrast of {$color}` |
| `$wave-color` | — | :first_quarter_moon_with_face: Wave color | `color` | `rgba(0 0 0 / 0.2)` |
| `$chip-color` | — | :first_quarter_moon_with_face: Chip background color | `color` | `#fff` |
| `$chip-on-color` | — | :first_quarter_moon_with_face: Chip text color | `color` | `contrast of {$chip-color}` |
| `$duration` | `--credit-card-duration` | Animation duration | `time` | `0.6s` |
<style lang="scss">
@use "../src/components/molecules/card-credit";
</style>

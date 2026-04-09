# Credit Card
<Badge type="tip">Atom</Badge> <Badge type="info">Card</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/molecules/cards/credit-card";
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/molecules/cards/CreditCard" with (
    $css-ui-base-prefix: theme.$css-ui-base-prefix
);
```

Color is now always applied via utility classes (not SCSS color variables):

- `.bg-{role}` → background + on-color
- `.text-{role}` → text color
- `.border-{role}` → border color
- `.use-{role}` → "jolly" class: sets `--main-color` / `--on-main-color` / `--active-main-color` / `--active-on-main-color` for a full single-class semantic color override

```html
<div class="text-primary">...</div>
<button class="bg-primary">...</button>
<button class="border-primary text-primary">...</button>
<button class="use-primary">...</button>
```

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

<<< @/../src/molecules/cards/credit-card/index.scss

## Classes

| Class                  | Description                           |
|:-----------------------|:--------------------------------------|
| `animate-active`       | Back of credit card active            |
| `animate-on-active`    | Back of credit card active on .active |
| `animate-on-hover`     | Back of credit card active on hover   |

## SCSS variables

| Variable         | Description                                          | Accepted Values | Default                     |
|:-----------------|:-----------------------------------------------------|:----------------|:----------------------------|
| `$color`         | :first_quarter_moon_with_face: Background color      | `color`         | `#000`                      |
| `$on-color`      | :first_quarter_moon_with_face: Text color            | `color`         | `contrast of {$color}`      |
| `$wave-color`    | :first_quarter_moon_with_face: Wave color            | `color`         | `rgba(0 0 0 / 0.2)`           |
| `$chip-color`    | :first_quarter_moon_with_face: Chip background color | `color`         | `#fff`                      |
| `$chip-on-color` | :first_quarter_moon_with_face: Chip text color       | `color`         | `contrast of {$chip-color}` |
| `$duration`      | Animation duration                                   | `time`          | `0.6s`                      |

<style lang="scss">
@use "../src/molecules/cards/credit-card";
</style>
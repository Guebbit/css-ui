# Image Slash Card
<Badge type="tip">Atom</Badge> <Badge type="info">Cards</Badge>

::: danger TODO
Dynamic number of buttons
:::

::: tip VARIANT Dependencies
- [SimpleCard](/molecules/cards/SimpleCard.md)
:::

::: tip INCLUDED
- [SimpleButton](/atoms/buttons/SimpleButton)
:::

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);
```

## Default

::: raw
<div class="dev-section">
    <!--@include: ../../organisms/cards/ImageSlashCard.html -->
</div>
:::

::: code-group
<<< @/organisms/cards/ImageSlashCard.html#default [default]
<<< @/organisms/cards/ImageSlashCard.html#right [right]
:::


## Component CSS

<<< @/../src/organisms/cards/ImageSlashCard.scss

## Documentation CSS

```scss
@use "../../theme" as theme;
@use "../src/atoms/buttons/SimpleButton.scss";
@use "../src/organisms/cards/ImageSlashCard" with (
    $color: theme.$primary-color,
    $on-background: #fff,
    $button-background: theme.$secondary-color,
    $button-on-background: #fff,
);
```

## Classes
#### Plus [SimpleCard](/molecules/cards/SimpleCard.md) classes

## SCSS variables
#### Plus [SimpleCard](/molecules/cards/SimpleCard.md) variables

| Variable           | Description                                                                     | Accepted Values | Default                       |
|:-------------------|:--------------------------------------------------------------------------------|:----------------|:------------------------------|
| `$height`          | Height, necessary due to tecnical limits (border-width doesn't accept % values) | `size`          | `400px`                       |
| `$button-color`    | Button background color                                                         | `color`         | `same as {$color}`            |
| `$button-on-color` | Button text color                                                               | `color`         | `contrast of {$button-color}` |

<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/buttons/SimpleButton.scss";
@use "../src/organisms/cards/ImageSlashCard" with (
    $color: theme.$primary-color,
    $on-background: #fff,
    $on-background--dark: #fff,
    $button-background: theme.$secondary-color,
    $button-background--dark: theme.$secondary-color,
    $button-on-background: #fff,
    $button-on-background--dark: #fff,
);
</style>

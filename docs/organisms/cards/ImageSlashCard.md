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
@use "@guebbit/css-ui/src/atoms/buttons/simple-button";
@use "@guebbit/css-ui/src/organisms/cards/image-slash-card";
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/buttons/simple-button";
@use "@guebbit/css-ui/src/organisms/cards/image-slash-card";
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
@use "../src/organisms/cards/image-slash-card";
</style>

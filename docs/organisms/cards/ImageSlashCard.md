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
<!--@include: ../../examples/organisms/cards/ImageSlashCard.html -->
</div>
:::

::: code-group
<<< @/examples/organisms/cards/ImageSlashCard.html#default [default]
<<< @/examples/organisms/cards/ImageSlashCard.html#right [right]
:::


## Component CSS

::: code-group
<<< @/../src/organisms/cards/image-slash-card/_architecture.scss [_architecture.scss]
<<< @/../src/organisms/cards/image-slash-card/index.scss [index.scss]
:::

## Classes
#### Plus [SimpleCard](/molecules/cards/SimpleCard.md) classes

No extra component-specific classes beyond the inherited items above.

## SCSS variables
#### Plus [SimpleCard](/molecules/cards/SimpleCard.md) variables

| SCSS Variable | CSS Variable | Description | Accepted Values | Default |
| :--------------|:-------------|:-------------|:-----------------|:---------|
| `$height` | `--image-slash-card-height` | Height, necessary due to technical limits (border-width doesn't accept % values) | `size` | `400px` |
| `$button-color` | — | Button background color | `color` | `same as {$color}` |
| `$button-on-color` | — | Button text color | `color` | `contrast of {$button-color}` |
<style lang="scss">
@use "../src/organisms/cards/image-slash-card";
</style>

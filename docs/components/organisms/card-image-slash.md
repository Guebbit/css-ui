# Card Image Slash
<Badge type="tip">Atom</Badge> <Badge type="info">Cards</Badge>

::: danger TODO
Dynamic number of buttons
:::

::: tip VARIANT Dependencies
- [Card](/components/molecules/card)
:::

::: tip INCLUDED
- [Button](/components/atoms/button)
:::

## Use

```scss
@use "@guebbit/css-ui/styles" as theme;
@use "@guebbit/css-ui/atoms/button";
@use "@guebbit/css-ui/organisms/card-image-slash";
```

```scss
@use "@guebbit/css-ui/styles" as theme;
@use "@guebbit/css-ui/atoms/button";
@use "@guebbit/css-ui/organisms/card-image-slash";
```


## Default

::: raw
<div class="dev-section">
<!--@include: ../../examples/organisms/cards/card-image-slash.html -->
</div>
:::

::: code-group
<<< @/examples/organisms/cards/card-image-slash.html#default [default]
<<< @/examples/organisms/cards/card-image-slash.html#right [right]
:::


## Component CSS

::: code-group
<<< @/../src/components/organisms/card-image-slash/_architecture.scss [_architecture.scss]
<<< @/../src/components/organisms/card-image-slash/index.scss [index.scss]
:::

## Classes
#### Plus [Card](/components/molecules/card) classes

No extra component-specific classes beyond the inherited items above.

## SCSS variables
#### Plus [Card](/components/molecules/card) variables

| SCSS Variable | CSS Variable | Description | Accepted Values | Default |
| :--------------|:-------------|:-------------|:-----------------|:---------|
| `$height` | `--image-slash-card-height` | Height, necessary due to technical limits (border-width doesn't accept % values) | `size` | `400px` |
| `$button-color` | — | Button background color | `color` | `same as {$color}` |
| `$button-on-color` | — | Button text color | `color` | `contrast of {$button-color}` |
<style lang="scss">
@use "../src/components/organisms/card-image-slash";
</style>

# Button Large Icon 
<Badge type="tip">Atom</Badge> <Badge type="info">Button</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/buttons/button-large-icon/index";
```

## Default

::: raw
<div class="dev-section">
    <!--@include: ../../atoms/buttons/ButtonLargeIcon.html -->
</div>
:::

::: code-group
<<< @/atoms/buttons/ButtonLargeIcon.html#default [default]
<<< @/atoms/buttons/ButtonLargeIcon.html#image [image]
<<< @/atoms/buttons/ButtonLargeIcon.html#small [small]
<<< @/atoms/buttons/ButtonLargeIcon.html#rounded [rounded]
<<< @/atoms/buttons/ButtonLargeIcon.html#circular [circular]
<<< @/atoms/buttons/ButtonLargeIcon.html#flat [flat]
<<< @/atoms/buttons/ButtonLargeIcon.html#plain [plain]
<<< @/atoms/buttons/ButtonLargeIcon.html#outlined [outlined]
:::

## Component CSS

<<< @/../src/atoms/buttons/button-large-icon/index.scss 

## Classes

## CSS Custom Properties

| Property                            | Description         | Default |
|:------------------------------------|:--------------------|:--------|
| `--button-large-icon-icon-size`     | Size of icon        | `90px`  |
| `--button-large-icon-duration`      | Transition duration | `0.3s`  |

::: info Color customization
Colors are controlled by `.color-*` utility classes or by overriding `--color-*` CSS custom properties:
```html
<a class="button-large-icon color-primary animate-on-hover">...</a>
<a class="button-large-icon color-secondary animate-on-hover">...</a>
```
:::

<style lang="scss">
@use "../src/atoms/buttons/button-large-icon/index";
</style>
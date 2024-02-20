# Button Brand Icon 
<Badge type="tip">Atom</Badge> <Badge type="info">Button</Badge>

::: tip VARIANT Dependencies
- [SimpleButton](/atoms/buttons/SimpleButton)
:::

## Code

::: raw
<div class="dev-section">
    <!--@include: ../../atoms/buttons/ButtonBrandIcon.html -->
</div>
:::

::: code-group
<<< @/atoms/buttons/ButtonBrandIcon.html#default [default]
<<< @/atoms/buttons/ButtonBrandIcon.html#image [image]
<<< @/atoms/buttons/ButtonBrandIcon.html#small [small]
<<< @/atoms/buttons/ButtonBrandIcon.html#rounded [rounded]
<<< @/atoms/buttons/ButtonBrandIcon.html#circular [circular]
<<< @/atoms/buttons/ButtonBrandIcon.html#shadowless [shadowless]
<<< @/atoms/buttons/ButtonBrandIcon.html#plain [plain]
<<< @/atoms/buttons/ButtonBrandIcon.html#outlined [outlined]
<<< @/atoms/buttons/ButtonBrandIcon.html#tonal [tonal]
:::

## Component CSS

<<< @/../src/atoms/buttons/ButtonBrandIcon.scss 


## Documentation CSS

```scss
@use "docs/theme.scss" as theme;
@use "src/atoms/buttons/ButtonBrandIcon.scss" with (
    $color: theme.$primary-color,
);
```

## Classes
#### Plus [SimpleButton](/atoms/buttons/SimpleButton) classes

## SCSS variables
#### Plus [SimpleButton](/atoms/buttons/SimpleButton) variables

| Variable                | Description                                    | Accepted Values | Default                      |
|:------------------------|:-----------------------------------------------|:----------------|:-----------------------------|
| `$icon-size`            | Size of icon                                   | `size`          | `90px`                       |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "src/atoms/buttons/ButtonBrandIcon.scss" with (
    $color: theme.$primary-color,
);
</style>
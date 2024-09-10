# Button Brand Icon 
<Badge type="tip">Atom</Badge> <Badge type="info">Button</Badge>

::: tip VARIANT Dependencies
- [SimpleButton](/atoms/buttons/SimpleButton)
:::

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/buttons/ButtonBrandIcon" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/buttons/ButtonBrandIcon" with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);
```

## Default

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

## Classes
#### Plus [SimpleButton](/atoms/buttons/SimpleButton) classes

## SCSS variables
#### Plus [SimpleButton](/atoms/buttons/SimpleButton) variables

| Variable                | Description                                    | Accepted Values | Default                      |
|:------------------------|:-----------------------------------------------|:----------------|:-----------------------------|
| `$icon-size`            | Size of icon                                   | `size`          | `90px`                       |

<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/buttons/ButtonBrandIcon" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
    // $color: theme.$primary-color,
);
</style>
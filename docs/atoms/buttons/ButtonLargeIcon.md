# Button Large Icon 
<Badge type="tip">Atom</Badge> <Badge type="info">Button</Badge>

::: tip VARIANT Dependencies
- [SimpleButton](/atoms/buttons/SimpleButton)
:::

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/buttons/ButtonLargeIcon" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/buttons/ButtonLargeIcon" with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);
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

<<< @/../src/atoms/buttons/ButtonLargeIcon.scss 

## Classes
#### Plus [SimpleButton](/atoms/buttons/SimpleButton) classes

## SCSS variables
#### Plus [SimpleButton](/atoms/buttons/SimpleButton) variables

| Variable                | Description                                    | Accepted Values | Default                      |
|:------------------------|:-----------------------------------------------|:----------------|:-----------------------------|
| `$icon-size`            | Size of icon                                   | `size`          | `90px`                       |

<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/buttons/ButtonLargeIcon" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
</style>
# Choose Option Card
<Badge type="tip">Organism</Badge> <Badge type="info">buttons</Badge>

::: danger TODO
$css-ui-root-prefix not very good, rework
:::

::: tip VARIANT Dependencies
- [SimpleCard](/molecules/cards/SimpleCard.md)
- [SimpleButton](/atoms/buttons/SimpleButton.md)
- [SimpleList](/molecules/lists/SimpleList.md)
:::

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/organisms/cards/ChooseOptionCard" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/organisms/cards/ChooseOptionCard" with (
    $color: #fff,
    $active-color: theme.$primary-color,
    $border-color: theme.$primary-color,
    $border-color--dark: theme.$primary-color,
);
```

## Default
::: raw
<div class="dev-section">
    <!--@include: ../../organisms/cards/ChooseOptionCard.html -->
</div>
:::

<<< @/organisms/cards/ChooseOptionCard.html

## Component CSS

<<< @/../src/organisms/cards/ChooseOptionCard.scss

## Classes
#### Plus [SimpleCard](/molecules/cards/SimpleCard.md) classes

| Class      | Description                      |
|:-----------|:---------------------------------|
| `active`   | on `{li}`, selected option       |
| `disabled` | on `{li}`, non selectable option |

## SCSS variables
#### Plus [SimpleCard](/molecules/cards/SimpleCard.md) variables
#### Plus [SimpleButton](/atoms/buttons/SimpleButton.md) variables (prefix: "button-")
#### Plus [SimpleList](/molecules/lists/SimpleList.md) variables (prefix: "list-")

| Variable              | Description                | Accepted Values | Default                                        |
|:----------------------|:---------------------------|:----------------|:-----------------------------------------------|
| `$selected-color`     | background color           | `color`         | `inherited from SimpleCard {$active-color}`    |
| `$selected-on-color`  | text color                 | `color`         | `inherited from SimpleCard {$active-on-color}` |
| `$hover-color`        | background color           | `color`         | `rgba({$selected-color}, 0.2)`                 |
| `$hover-on-color`     | text color                 | `color`         | `same as {$selected-on-color}`                 |
| `$inactive-color`     | background color           | `color`         | `#ccc`                                         |
| `$inactive-on-color`  | text color                 | `color`         | `contrast of {$inactive-color}`                |
| `$disabled-opacity`   | Opacity of disabled option | `number`        | `0.5`                                          |

<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/organisms/cards/ChooseOptionCard" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
</style>
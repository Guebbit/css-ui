# Choose Option Card
<Badge type="tip">Organism</Badge> <Badge type="info">buttons</Badge>

::: tip VARIANT Dependencies
- [SimpleCard](/molecules/cards/SimpleCard.md)
- [SimpleButton](/atoms/buttons/SimpleButton.md)
- [SimpleList](/molecules/lists/SimpleList.md)
:::

## Code

::: raw
<div class="dev-section">
    <!--@include: ../../organisms/cards/ChooseOptionCard.html -->
</div>
:::

<<< @/organisms/cards/ChooseOptionCard.html

## Component CSS

<<< @/../components/organisms/cards/ChooseOptionCard.scss

## Documentation CSS

```scss
@use "docs/theme.scss" as theme;
@use "components/organisms/cards/ChooseOptionCard.scss" as * with (
    $color: #fff,
    $active-color: theme.$primary-color,
);
```

## Classes
#### Plus [SimpleCard](/molecules/cards/SimpleCard.md) classes

| Class      | Description                      |
|:-----------|:---------------------------------|
| `active`   | on `{li}`, selected option       |
| `disabled` | on `{li}`, non selectable option |

## SCSS variables
##### Plus [SimpleCard](/molecules/cards/SimpleCard.md) variables
##### Plus [SimpleButton](/atoms/buttons/SimpleButton.md) variables (prefix: "button-")
##### Plus [SimpleList](/molecules/lists/SimpleList.md) variables (prefix: "list-")

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
@use "docs/theme.scss" as theme;
@use "components/organisms/cards/ChooseOptionCard.scss" as * with (
    $color: #fff,
    $active-color: theme.$primary-color,
    $border-color: theme.$primary-color,
    $border-color--dark: theme.$primary-color,
);
</style>
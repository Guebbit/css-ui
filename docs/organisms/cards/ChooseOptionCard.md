# Choose Option Card
<Badge type="tip">Organism</Badge> <Badge type="info">buttons</Badge>

::: danger TODO
$css-ui-base-prefix not very good, rework
:::

::: tip VARIANT Dependencies
- [SimpleCard](/molecules/cards/SimpleCard.md)
- [SimpleButton](/atoms/buttons/SimpleButton.md)
- [SimpleList](/molecules/lists/SimpleList.md)
:::

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/organisms/cards/choose-option-card";
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/organisms/cards/choose-option-card";
```

Color is now always applied via utility classes (not SCSS color variables):

- `.bg-{role}` → background + on-color
- `.text-{role}` → text color
- `.border-{role}` → border color
- `.use-{role}` → "jolly" class: sets `--main-color` / `--on-main-color` / `--active-main-color` / `--active-on-main-color` for a full single-class semantic color override

```html
<div class="text-primary">...</div>
<button class="bg-primary">...</button>
<button class="border-primary text-primary">...</button>
<button class="use-primary">...</button>
```

## Default
::: raw
<div class="dev-section">
    <!--@include: ../../organisms/cards/ChooseOptionCard.html -->
</div>
:::

<<< @/organisms/cards/ChooseOptionCard.html

## Component CSS

<<< @/../src/organisms/cards/choose-option-card/index.scss

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
@use "../src/organisms/cards/choose-option-card";
</style>
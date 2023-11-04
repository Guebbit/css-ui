# Expressive button
<Badge type="tip">Organism</Badge> <Badge type="info">buttons</Badge>

::: tip MOLECULE Dependencies
- [SimpleCard](/molecules/cards/SimpleCard.md)
- [SimpleButton](/atoms/buttons/SimpleButton.md)
- [SimpleList](/molecules/lists/SimpleList.md)
:::

## Code

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/organisms/cards/ChooseOptionCard.html -->
</div>
:::

::: code-group
<<< @/public/components-html/organisms/cards/ChooseOptionCard.html
<<< @/../components/organisms/cards/ChooseOptionCard.scss
:::

## Classes

| Class          | Description                       |
|:---------------|:----------------------------------|
| `active`       | on `{li}`, alternative coloration |


## SCSS variables

| Variable                             | Description            | Accepted Values | Default                     |
|:-------------------------------------|:-----------------------|:----------------|:----------------------------|
| `$choose-option-card-background`     | Card background color  | `color`         | `#fff`                      |
| `$choose-option-card-text-color`     | Card text color        | `color`         | `contrast of {$background}` |
| `$choose-option-card-color`          | Main color             | `color`         | `#000`                      |
| `$choose-option-card-on-color`       | Text color             | `color`         | `contrast of {$color}`      |
| `$choose-option-card-duration`       | Transition duration    | `time`          | `0.3s`                      |
| `$choose-option-card-inactive-color` | Main inactive LI color | `color`         | `#f0f0f0`                   |
| `$choose-option-card-active-color`   | Main active LI color   | `color`         | `0.2 rgba of {$color}`      |
| `$choose-option-card-padding`        | Paddings               | `size`          | `24px`                      |

<style lang="scss">
@import "../../theme.scss";

$choose-option-card-color: $primary-color;

@import "../../../components/organisms/cards/ChooseOptionCard.scss";
</style>
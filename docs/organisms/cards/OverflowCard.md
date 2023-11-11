# Overflow Card
<Badge type="tip">Organisms</Badge> <Badge type="info">Card</Badge>
### [Codepen](https://codepen.io/nathantaylor/pen/WOgBQN)

::: tip ORGANISM Dependencies
- [ExpressiveButton](/molecules/buttons/ExpressiveButton.md)
- [HighlightLine](/atoms/highlights/HighlightLine.md)
- [HighlightRollup](/atoms/highlights/HighlightRollup.md)
- [SimpleCard](/molecules/cards/SimpleCard.md)
:::

## Code

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/organisms/cards/OverflowCard.html -->
</div>
:::

::: code-group
<<< @/public/components-html/organisms/cards/OverflowCard.html
<<< @/../components/organisms/cards/OverflowCard.scss
:::

## SCSS variables

| Variable                            | Description            | Accepted Values | Default                            |
|:------------------------------------|:-----------------------|:----------------|:-----------------------------------|
| `$overflow-card-threshold`          | Mobile threshold       | `size`          | `600px`                            |
| `$overflow-card-color`              | Main color             | `color`         | `#000`                             |
| `$overflow-card-background`         | Background color       | `color`         | `#000`                             |
| `$overflow-card-on-background`      | Text color             | `color`         | `contrast of {$*-background}`      |
| `$overflow-card-padding`            | Padding of content     | `size`          | `48px`                             |
| `$overflow-card-shadow-color`       | Shadow color           | `color`         | `#000`                             |
| `$overflow-card-shadow-opacity`     | Shadow color           | `percentage`    | `0.75`                             |
| `$overflow-card-shadow`             | Box-shadow instruction | `css`           | `box-shadow with {$shadow-color}`  |
| `$overflow-card-border-color`       | Border color           | `color`         | `as {$*-color}`                    |
| `$overflow-card-border-width`       | Border width           | `size`          | `2px`                              |
| `$overflow-card-border-radius`      | Border radius          | `size`          | `6px`                              |
| `$action-panel-button-background`   | Button background      | `color`         | `as {$*-color}`                    |
| `$action-panel-button-text`         | Button color           | `color`         | `contrast of {$*-background}`      |
| `$action-panel-button-shadow-color` | Button shadow color    | `color`         | `contrast of {$*-color}`           |
| `$action-panel-button-shadow`       | Button box-shadow      | `CSS`           | `*`                                |


<style lang="scss">
@import "docs/theme.scss";

$overflow-card-color: $primary-color;

@import "components/organisms/cards/OverflowCard.scss";
</style>
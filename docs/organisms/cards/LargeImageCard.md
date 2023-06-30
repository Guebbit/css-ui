# Large Image Card
<Badge type="tip">Organisms</Badge> <Badge type="info">Card</Badge>
### [Codepen](https://codepen.io/nathantaylor/pen/WOgBQN)

::: tip ORGANISM Dependencies
- [SimpleButton](/components/atoms/buttons/SimpleButton)
- [HighlightLine](/components/atoms/highlights/HighlightLine)
- [HighlightRollup](/components/atoms/highlights/HighlightRollup)
- [SimpleCard](/components/molecules/cards/SimpleCard)
:::

## Default

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/organisms/cards/LargeImageCard.html -->
</div>
:::

::: code-group
<<< @/public/components-html/organisms/cards/LargeImageCard.html
<<< @/../components/organisms/cards/LargeImageCard.scss
:::

## SCSS variables

| Variable                            | Description            | Accepted Values | Default                       |
|:------------------------------------|:-----------------------|:----------------|:------------------------------|
| `$large-image-card-threshold`       | Mobile threshold       | `size`          | `600px`                       |
| `$large-image-card-color`           | Main color             | `color`         | `#000`                        |
| `$large-image-card-background`      | Background color       | `color`         | `#000`                        |
| `$large-image-card-on-background`   | Text color             | `color`         | `contrast of {$*-background}` |
| `$large-image-card-padding`         | Padding of content     | `size`          | `48px`                        |
| `$large-image-card-shadow-color`    | Shadow color           | `color`         | `#000`                        |
| `$large-image-card-shadow-opacity`  | Shadow color           | `percentage`    | `0.75`                        |
| `$large-image-card-shadow`          | Box-shadow instruction | `css`           | `box-shadow`                  |
| `$large-image-card-border-color`    | Border color           | `color`         | `as {$*-color}`               |
| `$large-image-card-border-width`    | Border width           | `size`          | `2px`                         |
| `$large-image-card-border-radius`   | Border radius          | `size`          | `6px`                         |
| `$action-panel-button-background`   | Button background      | `color`         | `as {$*-color}`               |
| `$action-panel-button-text`         | Button color           | `color`         | `contrast of {$*-background}` |
| `$action-panel-button-shadow-color` | Button shadow color    | `color`         | `contrast of {$*-color}`      |
| `$action-panel-button-shadow`       | Button box-shadow      | `CSS`           | `*`                           |


<style lang="scss">
@import "docs/theme.scss";

$large-image-card-color: $primary-color;

@import "components/organisms/cards/LargeImageCard.scss";
</style>
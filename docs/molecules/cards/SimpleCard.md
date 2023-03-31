# Simple Card
<Badge type="tip">Molecules</Badge> <Badge type="info">Card</Badge>

## Example: basic

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/cards/SimpleCard.html -->
</div>
:::

::: code-group
<<< @/public/components-html/molecules/cards/SimpleCard.html
<<< @/../components/molecules/cards/SimpleCard.scss
:::

## Example: icons

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/cards/SimpleCard-icons.html -->
</div>
:::

<<< @/public/components-html/molecules/cards/SimpleCard-image.html

## Example: image

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/cards/SimpleCard-image.html -->
</div>
:::

<<< @/public/components-html/molecules/cards/SimpleCard-mix.html

## Example: mix

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/cards/SimpleCard-mix.html -->
</div>
:::

<<< @/public/components-html/molecules/cards/SimpleCard-icons.html

## Classes

| Class                      | Description              |
|:---------------------------|:-------------------------|
| `right-highlight`          | Right highlight          |
| `top-highlight`            | Top highlight            |
| `bottom-highlight`         | Bottom highlight         |
| `highlight-line-active`    | Active effect            |
| `highlight-line-on-active` | Active effect on .active |
| `highlight-line-on-hover`  | Active effect on hover   |



&.border-active,
&.border-on-active.active,
&.border-on-hover:hover {
&.shadow-active,
&.shadow-on-active.active,
&.shadow-on-hover:hover {
&.grayscale-active,
&.grayscale-on-active.active,
&.grayscale-on-hover:hover {
&.grayscale-reverse-active,
&.grayscale-reverse-on-active.active,
&.grayscale-reverse-on-hover:hover {

## SCSS variables

| Variable                     | Description        | Accepted Values | Default                 |
|:-----------------------------|:-------------------|:----------------|:------------------------|
| `$simple-card-background`    | Background color   | `color`         | `transparent`           |
| `$simple-card-color`         | Primary color      | `color`         | `#000000`               |
| `$simple-card-text-color`    | Text color         | `color`         | `#212121`               |
| `$simple-card-shadow-color`  | Shadow color       | `color`         | `#000000`               |
| `$simple-card-icon-color`    | Icon color         | `color`         | `as $simple-card-color` |
| `$$simple-card-border-color` | Border color       | `color`         | `as $simple-card-color` |
| `$simple-card-border-width`  | Border width       | `size`          | `6px`                   |
| `$simple-card-padding`       | Padding of content | `size`          | `24px`                  |

$simple-card-color: #000 !default;
$simple-card-background: transparent !default;
$simple-card-text-color: guebbit-contrast($simple-card-background) !default;
$simple-card-shadow-color: #000 !default;
$simple-card-icon-color: $simple-card-color !default;
$simple-card-border-color: $simple-card-color !default;
$simple-card-border-width: 6px !default;
$simple-card-border-radius: 6px !default;
$simple-card-image-border-radius: $simple-card-border-radius !default;
$simple-card-padding: 24px !default;
$simple-card-duration: 0.3s !default;


<style lang="scss">
@import "../../theme.scss";

$simple-card-color: $primary-color;

@import "components/molecules/cards/SimpleCard.scss";
</style>
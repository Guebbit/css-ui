# Simple Blockquote 
<Badge type="tip">Atom</Badge> <Badge type="info">Cards</Badge> <Badge type="info">Blockquote</Badge>


## Positions

<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/cards/BlockquoteSimple.html -->
</div>

::: code-group
<<< @/public/components-html/molecules/cards/BlockquoteSimple.html
<<< @/../components/molecules/cards/BlockquoteSimple.scss
:::

## Borders

<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/cards/BlockquoteSimple-borders.html -->
</div>

<<< @/public/components-html/molecules/cards/BlockquoteSimple-borders.html

## Classes

| Class           | Description             |
|:----------------|:------------------------|
| `no-quote`      | Hide quote              |
| `right-cite`    | Quote position: right   |
| `center-cite`   | Quote position: center  |
| `double-quote`  | Double quote            |
| `border-left`   | Border position: left   |
| `border-right`  | Border position: right  |
| `border-top`    | Border position: top    |
| `border-bottom` | Border position: bottom |
| `full`          | With background         |

## SCSS variables

| Variable                          | Description              | Accepted Values | Default         |
|:----------------------------------|:-------------------------|:----------------|:----------------|
| `$blockquote-simple-border-size`  | border size              | `size`          | `6px`           |
| `$blockquote-simple-color`        | Main color               | `color`         | `#000`          |
| `$blockquote-simple-cite-marks`   | Color of quotation marks | `color`         | `same as color` |
| `$blockquote-simple-cite-color`   | Color of cite            | `color`         | `same as color` |
| `$blockquote-simple-border-color` | Color of border          | `color`         | `same as color` |

<style lang="scss">
@import "docs/theme.scss";

$blockquote-simple-color: $primary-color;
$blockquote-simple-cite-color: $secondary-color;

@import "components/molecules/cards/BlockquoteSimple.scss";
</style>
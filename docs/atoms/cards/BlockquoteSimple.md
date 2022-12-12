# Simple Blockquote 
<Badge type="tip">Atom</Badge> <Badge type="info">Cards</Badge> <Badge type="info">Blockquote</Badge>

## Positions

<div class="dev-section">
    <blockquote class="blockquote-simple">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <cite>normal</cite>
    </blockquote>
    <blockquote class="blockquote-simple no-quote">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <cite>no-quote</cite>
    </blockquote>
    <blockquote class="blockquote-simple right-cite">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <cite>right-cite</cite>
    </blockquote>
    <blockquote class="blockquote-simple center-cite">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <cite>center-cite</cite>
    </blockquote>
    <blockquote class="blockquote-simple double-quote">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <cite>double-quote</cite>
    </blockquote>
    <blockquote class="blockquote-simple center-cite center-quote double-quote">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <cite>center-cite center-quote double-quote</cite>
    </blockquote>
</div>

```html
    <blockquote class="blockquote-simple">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <cite>normal</cite>
    </blockquote>
    
    <blockquote class="blockquote-simple no-quote">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <cite>no-quote</cite>
    </blockquote>
    
    <blockquote class="blockquote-simple right-cite">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <cite>right-cite</cite>
    </blockquote>
    
    <blockquote class="blockquote-simple center-cite">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <cite>center-cite</cite>
    </blockquote>

    <blockquote class="blockquote-simple double-quote">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <cite>double-quote</cite>
    </blockquote>
    
    <blockquote class="blockquote-simple center-cite center-quote double-quote">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <cite>center-cite center-quote double-quote</cite>
    </blockquote>
```

## Borders

<div class="dev-section">
    <blockquote class="blockquote-simple border-right border-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <cite>border-right border-left</cite>
    </blockquote>
    <blockquote class="blockquote-simple border-top border-bottom">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <cite>border-top border-bottom</cite>
    </blockquote>
    <blockquote class="blockquote-simple border-right border-left border-top border-bottom">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <cite>border-right border-left border-top border-bottom</cite>
    </blockquote>
    <blockquote class="blockquote-simple border-left full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <cite>border-left full</cite>
    </blockquote>
</div>

```html    
    <blockquote class="blockquote-simple border-right border-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <cite>border-right border-left</cite>
    </blockquote>
    
    <blockquote class="blockquote-simple border-top border-bottom">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <cite>border-top border-bottom</cite>
    </blockquote>
    
    <blockquote class="blockquote-simple border-right border-left border-top border-bottom">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <cite>border-right border-left border-top border-bottom</cite>
    </blockquote>
    
    <blockquote class="blockquote-simple border-left full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <cite>border-left full</cite>
    </blockquote>
```

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
@import "../../theme.scss";

$blockquote-simple-color: $primary-color;
$blockquote-simple-cite-color: $secondary-color;

@import "components/atoms/cards/BlockquoteSimple.scss";
</style>
# Book Card
<Badge type="tip">Atom</Badge> <Badge type="info">Card</Badge>
::: tip VARIANT Dependencies
- [SimpleCard](/molecules/cards/SimpleCard.md)
:::

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/molecules/cards/BookCard" with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/molecules/cards/BookCard" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
```

::: raw
<div class="dev-section">
    <div class="book-card animate-on-hover">
        <div>
            <div class="book-cover">
                <div class="card-content">
                    <h1>Lorem Ipsum Sit Dolor</h1>
                </div>
                <img class="book-cover-image" alt="" src="https://placedog.net/400/600">
                <div class="card-bottom">
                    <img alt="" src="https://placedog.net/100/100">
                </div>
            </div>
            <div class="book-spine">
                <div class="card-content">
                    <h1>Lorem Ipsum Sit Dolor</h1>
                </div>
                <img class="card-background" alt="" src="https://placedog.net/100/600">
                <div class="card-bottom">
                    <svg class="card-icon" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</div>
:::

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);
```

## Default

```html
<div class="book-card animate-on-hover">
    <div>
        <div class="book-cover">
            <div class="card-content">
                <h1>Lorem Ipsum Sit Dolor</h1>
            </div>
            <img class="book-cover-image" alt="" src="https://placedog.net/400/600">
            <div class="card-bottom">
                <img alt="" src="https://placedog.net/100/100">
            </div>
        </div>
        <div class="book-spine">
            <div class="card-content">
                <h1>Lorem Ipsum Sit Dolor</h1>
            </div>
            <img class="card-background" alt="" src="https://placedog.net/100/600">
            <div class="card-bottom">
                <svg class="card-icon" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </div>
        </div>
    </div>
</div>
```

## Component CSS

<<< @/../src/molecules/cards/BookCard.scss

## Documentation CSS

```scss
@use "../../theme" as theme;
@use "../src/molecules/cards/BookCard" with (
    $color: #000,
    $on-background: theme.$secondary-color,
    $active-on-background: theme.$secondary-color,
);
```

## Classes
#### Plus [SimpleCard](/molecules/cards/SimpleCard.md) classes

## SCSS variables
#### Plus [SimpleCard](/molecules/cards/SimpleCard.md) variables

| Variable       | Description      | Accepted Values | Default               |
|:---------------|:-----------------|:----------------|:----------------------|
| `$tilt`        | Book tilt value  | `color`         | `21px`                |
| `$spine-width` | Spine width      | `color`         | `50px`                |
| `$overlay`     | Overlay CSS rule | `CSS`           | `rgba({$color}, 0.2)` |


<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/molecules/cards/BookCard" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
</style>
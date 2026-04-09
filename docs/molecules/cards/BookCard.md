# Book Card
<Badge type="tip">Atom</Badge> <Badge type="info">Card</Badge>
::: tip VARIANT Dependencies
- [SimpleCard](/molecules/cards/SimpleCard.md)
:::

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/molecules/cards/book-card";
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/molecules/cards/book-card";
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

<<< @/../src/molecules/cards/book-card/index.scss

## Classes
#### Plus [SimpleCard](/molecules/cards/SimpleCard.md) classes

## SCSS variables
#### Plus [SimpleCard](/molecules/cards/SimpleCard.md) variables

| Variable                             | Description      | Accepted Values | Default               |
|:-------------------------------------|:-----------------|:----------------|:----------------------|
| `$tilt`                              | Book tilt value  | `color`         | `21px`                |
| `$spine-width`                       | Spine width      | `color`         | `50px`                |
| `$overlay` (on `var()` MUST be RGB)  | Overlay CSS rule | `CSS`           | `rgba({$color}, 0.2)` |


<style lang="scss">
@use "../src/molecules/cards/book-card";
</style>
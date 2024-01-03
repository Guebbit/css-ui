# Book Card
<Badge type="tip">Atom</Badge> <Badge type="info">Card</Badge>

::: raw
<div class="dev-section">
    <div class="book-card animate-on-hover">
        <div>
            <div class="book-cover">
                <div class="card-content">
                    <h1>Lorem Ipsum Sit Dolor</h1>
                </div>
                <img class="book-cover-image" alt="" src="https://placekitten.com/400/600">
                <div class="card-bottom">
                    <img alt="" src="https://placekitten.com/100/100">
                </div>
            </div>
            <div class="book-spine">
                <div class="card-content">
                    <h1>Lorem Ipsum Sit Dolor</h1>
                </div>
                <img class="card-background" alt="" src="https://placekitten.com/100/600">
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

## Code

::: code-group
``` html
<div class="book-card animate-on-hover">
    <div>
        <div class="book-cover">
            <div class="card-content">
                <h1>Lorem Ipsum Sit Dolor</h1>
            </div>
            <img class="book-cover-image" alt="" src="https://placekitten.com/400/600">
            <div class="card-bottom">
                <img alt="" src="https://placekitten.com/100/100">
            </div>
        </div>
        <div class="book-spine">
            <div class="card-content">
                <h1>Lorem Ipsum Sit Dolor</h1>
            </div>
            <img class="card-background" alt="" src="https://placekitten.com/100/600">
            <div class="card-bottom">
                <svg class="card-icon" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </div>
        </div>
    </div>
</div>
```
<<< @/../components/molecules/cards/BookCard.scss
:::

## Classes

| Class               | Description             |
|:--------------------|:------------------------|
| `animate-active`    | Skew active             |
| `animate-on-active` | Skew active on .active  |
| `animate-on-hover`  | Skew active on hover    |

## SCSS variables

| Variable                     | Description      | Accepted Values | Default               |
|:-----------------------------|:-----------------|:----------------|:----------------------|
| `$book-card-color`           | Text color       | `color`         | `#000`                |
| `$book-card-tilt`   | Book tilt value  | `color`         | `3`                   |
| `$book-card-spine-width`     | Spine width      | `color`         | `50px`                |
| `$book-card-overlay`         | Overlay CSS rule | `CSS`           | `rgba({$color}, 0.2)` |


<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/molecules/cards/BookCard.scss" as * with (
    $book-card-color: theme.$primary-color,
);
</style>
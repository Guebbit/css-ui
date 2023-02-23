# Simple Card
<Badge type="tip">Atom</Badge> <Badge type="info">Card</Badge>

<div class="dev-section with-restrictions">
    <div class="book-card is-hoverable">
        <div>
            <div class="book-cover">
                <div class="content-cover">
                    <h1>Lorem Ipsum Sit Dolor</h1>
                </div>
                <img class="book-cover-image" src="http://placekitten.com/400/600">
                <div class="card-bottom">
                    <img src="http://placekitten.com/100/100">
                </div>
            </div>
            <div class="book-spine">
                <div class="content-spine">
                    <h1>Ipsum</h1>
                </div>
                <img class="book-spine-image" src="http://placekitten.com/100/600">
                <div class="card-bottom">
                    <svg style="fill: blue" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="dev-section with-restrictions">
    <div class="book-card is-hoverable">
        <div>
            <div class="book-cover">
                <div class="content-cover">
                    <h1>Lorem Ipsum Sit Dolor</h1>
                </div>
                <img class="book-cover-image" src="http://placekitten.com/400/600">
                <div class="card-bottom">
                    <img src="http://placekitten.com/100/100">
                </div>
            </div>
            <div class="book-spine">
                <div class="content-spine">
                    <h1>Ipsum</h1>
                </div>
                <img class="book-spine-image" src="http://placekitten.com/100/600">
                <div class="card-bottom">
                    <img src="http://placekitten.com/100/100">
                </div>
            </div>
        </div>
    </div>
</div>
```

## Classes

| Class          | Description                 |
|:---------------|:----------------------------|
| `active`       | As if it's focused or hover |
| `is-hoverable` | Same as `active` on hover   |

## SCSS variables

| Variable                 | Description      | Accepted Values | Default       |
|:-------------------------|:-----------------|:----------------|:--------------|
| `$book-card-color`       | Text color       | `color`         | `#000000`     |
| `$book-card-rotation`    | Title color      | `color`         | `#000000`     |
| `$book-card-spine-width` | Background color | `color`         | `transparent` |


<style lang="scss">
@import "../../theme.scss";

$book-card-color: $primary-color;

@import "components/molecules/cards/BookCard.scss";
</style>
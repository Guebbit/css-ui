# Book Card
<Badge type="tip">Atom</Badge> <Badge type="info">Card</Badge>
::: tip VARIANT Dependencies
- [SimpleCard](/molecules/cards/SimpleCard.md)
:::

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/molecules/cards/BookCard" with (
    $overlay: theme.$primary-color,
);
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/molecules/cards/BookCard" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
```

## Default
If not stated otherwise, the aspect ratio of the image is maintained. 
<br/>
Use *max-width* or *card-size-as-content* to limit the width (and the height, since it doesn't alter the aspect ratio).

::: raw
<div class="dev-section">
    <div class="book-card animate-on-hover card-size-as-content">
        <div>
            <div class="book-cover">
                <div class="card-header">
                    <h1>Lorem Ipsum header</h1>
                </div>
                <div class="card-content">
                    <h1>Lorem Ipsum Sit Dolor content</h1>
                </div>
                <img class="card-media" alt="" src="https://placedog.net/400/600" />
                <div class="card-footer">
                    <img alt="" src="https://placedog.net/100/100" />
                </div>
            </div>
            <div class="book-spine">
                <div class="card-header">
                    <h1>Lorem Ipsum Sit Dolor</h1>
                </div>
                <img class="card-background" alt="" src="https://placedog.net/100/600" />
                <div class="card-footer">
                    <svg class="card-icon" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <div class="book-card animate-on-hover card-size-as-content">
        <div>
            <div class="book-cover">
                <div class="card-header">
                    <h1>Lorem Ipsum header</h1>
                </div>
                <div class="card-content">
                    <h1>Lorem Ipsum Sit Dolor content</h1>
                </div>
                <video class="card-media" preload="metadata" playsinline="" loop="" autoplay="" alt="" title="" muted="">
                    <source src="http://assets.guebbit.com/guebbit/video/normal.mp4" type="video/mp4">
                </video>
                <div class="card-footer">
                    <img alt="" src="https://placedog.net/100/100" />
                </div>
            </div>
            <div class="book-spine">
                <div class="card-header">
                    <h1>Lorem Ipsum Sit Dolor</h1>
                </div>
                <img class="card-background" alt="" src="https://placedog.net/100/600" />
                <div class="card-footer">
                    <svg class="card-icon" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</div>
:::

::: code-group
```html [regular]
<div class="book-card animate-on-hover card-size-as-content">
    <div>
        <div class="book-cover">
            <div class="card-header">
                <h1>Lorem Ipsum header</h1>
            </div>
            <div class="card-content">
                <h1>Lorem Ipsum Sit Dolor content</h1>
            </div>
            <img class="card-media" alt="" src="https://placedog.net/400/600" />
            <div class="card-footer">
                <img alt="" src="https://placedog.net/100/100" />
            </div>
        </div>
        <div class="book-spine">
            <div class="card-header">
                <h1>Lorem Ipsum Sit Dolor</h1>
            </div>
            <img class="card-background" alt="" src="https://placedog.net/100/600" />
            <div class="card-footer">
                <svg class="card-icon" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </div>
        </div>
    </div>
</div>
```
```html [video]
<div class="book-card animate-on-hover card-size-as-content">
    <div>
        <div class="book-cover">
            <div class="card-header">
                <h1>Lorem Ipsum header</h1>
            </div>
            <div class="card-content">
                <h1>Lorem Ipsum Sit Dolor content</h1>
            </div>
            <video class="card-media" preload="metadata" playsinline="" loop="" autoplay="" alt="" title="" muted="">
                <source src="http://assets.guebbit.com/guebbit/video/normal.mp4" type="video/mp4">
            </video>
            <div class="card-footer">
                <img alt="" src="https://placedog.net/100/100" />
            </div>
        </div>
        <div class="book-spine">
            <div class="card-header">
                <h1>Lorem Ipsum Sit Dolor</h1>
            </div>
            <img class="card-background" alt="" src="https://placedog.net/100/600" />
            <div class="card-footer">
                <svg class="card-icon" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </div>
        </div>
    </div>
</div>
```
:::

## Component CSS

<<< @/../src/molecules/cards/BookCard.scss

## Classes
#### Plus [SimpleCard](/molecules/cards/SimpleCard.md) classes

| Class                  | Description                                                                  |
|:-----------------------|:-----------------------------------------------------------------------------|
| `card-size-as-content` | The card size become based on the cover image size (it must NOT be absolute) |

## SCSS variables
#### Plus [SimpleCard](/molecules/cards/SimpleCard.md) variables

| Variable          | Description                                           | Accepted Values | Default |
|:------------------|:------------------------------------------------------|:----------------|:--------|
| `$tilt`           | :zap: Book tilt value                                 | `degrees`       | `20deg` |
| `$tilt-transform` | :zap: Adjustement for tilt value (should be the same) | `size`          | `20px`  |
| `$spine-width`    | Spine width                                           | `size`          | `50px`  |


<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/molecules/cards/BookCard" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
</style>

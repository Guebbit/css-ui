# Book Card
<Badge type="tip">Atom</Badge> <Badge type="info">Card</Badge>
::: tip VARIANT Dependencies
- [SimpleCard](/components/molecules/cards/SimpleCard.md)
:::

## Use

```scss
@use "@guebbit/css-ui/styles" as theme;
@use "@guebbit/css-ui/molecules/card-book";
```

```scss
@use "@guebbit/css-ui/styles" as theme;
@use "@guebbit/css-ui/molecules/card-book";
```


::: raw
<div class="dev-section">
<!--@include: ../../../examples/molecules/cards/BookCard-use.html -->
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

::: code-group
<<< @/../src/components/molecules/card-book/_architecture.scss [_architecture.scss]
<<< @/../src/components/molecules/card-book/index.scss [index.scss]
:::

## Classes
#### Plus [SimpleCard](/components/molecules/cards/SimpleCard.md) classes

No extra component-specific classes beyond the inherited items above.

## SCSS variables
#### Plus [SimpleCard](/components/molecules/cards/SimpleCard.md) variables

| SCSS Variable | CSS Variable | Description | Accepted Values | Default |
| :--------------|:-------------|:-------------|:-----------------|:---------|
| `$tilt` | `--book-card-tilt` | Book tilt value | `color` | `21px` |
| `$spine-width` | `--book-card-spine-width` | Spine width | `color` | `50px` |
| `$overlay` (on `var()` MUST be RGB) | — | Overlay CSS rule | `CSS` | `rgba({$color}, 0.2)` |

<style lang="scss">
@use "../src/components/molecules/card-book";
</style>

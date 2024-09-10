# Info Hover Card
<Badge type="tip">Organisms</Badge> <Badge type="info">Card</Badge>

::: tip VARIANT Dependencies
 - [SimpleCard](/molecules/cards/SimpleCard.md)
:::

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/organisms/cards/InfoHoverCard" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix,
    $duration: 0.5s,
);
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/organisms/cards/InfoHoverCard" with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
    $duration: 0.5s,
);
```

::: info
- Custom height: 300px
:::

::: raw
<div class="dev-section">
    <div class="info-hover-card card-plain animate-on-hover border-on-hover card-shadowless">
        <div class="icon-wrapper">
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
        <div class="card-header">
            <h4 class="card-title">Lorem Ipsum</h4>
        </div>
        <div class="card-content">
            <p>
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            </p>
        </div>
    </div>
    <div class="info-hover-card animate-on-hover">
        <div class="icon-wrapper">
            <img alt="" src="https://placedog.net/800/600" />
        </div>
        <div class="card-header">
            <h4 class="card-title">Lorem Ipsum</h4>
        </div>
        <div class="card-content">
            <p>
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            </p>
        </div>
    </div>
</div>
:::

::: code-group
```html
<div class="info-hover-card card-plain animate-on-hover border-on-hover card-shadowless">
    <div class="icon-wrapper">
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </div>
    <div class="card-header">
        <h4 class="card-title">Lorem Ipsum</h4>
    </div>
    <div class="card-content">
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
<div class="info-hover-card animate-on-hover">
    <div class="icon-wrapper">
        <img alt="" src="https://placedog.net/800/600" />
    </div>
    <div class="card-header">
        <h4 class="card-title">Lorem Ipsum</h4>
    </div>
    <div class="card-content">
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
```
:::

## Component CSS

<<< @/../src/organisms/cards/InfoHoverCard.scss

## Classes
#### Plus [SimpleCard](/molecules/cards/SimpleCard.md) classes

## SCSS variables
#### Plus [SimpleCard](/molecules/cards/SimpleCard.md) variables

| Variable       | Description      | Accepted Values | Default           |
|:---------------|:-----------------|:----------------|:------------------|
| `$icon-size`   | Text color       | `size`          | `100px`           |

<style lang="scss">
@use "../docs/theme" as theme;;
@use "../src/organisms/cards/InfoHoverCard" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix,
    $duration: 0.5s,
);

.info-hover-card{
    height: 300px;
}
</style>
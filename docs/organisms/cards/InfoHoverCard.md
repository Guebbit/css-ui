# Info Hover Card
<Badge type="tip">Organisms</Badge> <Badge type="info">Card</Badge>

::: tip VARIANT Dependencies
 - [SimpleCard](/molecules/cards/SimpleCard.md)
:::

::: raw
<div class="dev-section">
    <div class="info-hover-card animate-on-hover border-on-hover card-shadowless" style="height: 300px">
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
    <div class="info-hover-card animate-on-hover" style="height: 300px">
        <div class="icon-wrapper">
            <img alt="" src="https://placekitten.com/800/600" />
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
<div class="info-hover-card animate-on-hover border-on-hover card-shadowless" style=""height: 300px"">
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
<div class="info-hover-card animate-on-hover" style="height: 300px">
    <div class="icon-wrapper">
        <img alt="" src="https://placekitten.com/800/600" />
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
<<< @/../components/organisms/cards/InfoHoverCard.scss [css]
:::

## Classes
#### Plus [SimpleCard](/molecules/cards/SimpleCard.md) classes

## SCSS variables
##### Plus [SimpleCard](/molecules/cards/SimpleCard.md) variables

| Variable       | Description      | Accepted Values | Default           |
|:---------------|:-----------------|:----------------|:------------------|
| `$icon-size`   | Text color       | `size`          | `100px`           |

<style lang="scss">
@use "docs/theme.scss";
@use "components/organisms/cards/InfoHoverCard.scss";
</style>
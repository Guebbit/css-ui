# Image Hover Card
<Badge type="tip">Atom</Badge> <Badge type="info">Cards</Badge>

::: tip INCLUDED
- [SimpleCard](/molecules/cards/SimpleCard.md)
:::

## Code
::: info
- Custom panel height: 600px
:::

::: raw
<div class="dev-section">
    <div class="image-hover-card animate-on-hover" style="height: 600px">
        <div class="card-image">
            <img alt="" src="/logo.svg" />
        </div>
        <div class="card-content">
            <div class="simple-card shadow-on-hover" style="background: red">
                <div class="card-content">
                    <h2 class="card-title">Title of lorem ipsum</h2>
                    <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
                    <br/>
                    <p>
                        lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                        lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
:::

::: code-group
```html
<div class="image-hover-card animate-on-hover">
    <div class="card-image">
        <img alt="" src="/logo.svg" />
    </div>
    <div class="card-content">
        <div class="simple-card shadow-on-hover">
            <div class="card-content">
                <h2 class="card-title">Title of lorem ipsum</h2>
                <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
                <br/>
                <p>
                    lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                    lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                </p>
            </div>
        </div>
    </div>
</div>
```
<<< @/../src/molecules/cards/ImageHoverCard.scss
:::

## Classes

| Class                  | Description                 |
|:-----------------------|:----------------------------|
| `animate-active`       | Animation active            |
| `animate-on-active`    | Animation active on .active |
| `animate-on-hover`     | Animation active on hover   |
| `animate-mobile`       | Active (show) on mobile     |

## SCSS variables

| Variable           | Description          | Accepted Values | Default      |
|:-------------------|:---------------------|:----------------|:-------------|
| `$threshold`       | :x: Mobile threshold | `size`          | `600px`      |
| `$duration`        | Transition duration  | `time`          | `0.5s`       |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "src/molecules/cards/SimpleCard.scss";
@use "src/molecules/cards/ImageHoverCard.scss";
</style>

# Image Hover Card
<Badge type="tip">Atom</Badge> <Badge type="info">Cards</Badge>

::: tip INCLUDED
- [SimpleCard](/molecules/card-simple)
:::

## Use

```scss
@use "@guebbit/css-ui/styles" as theme;
@use "@guebbit/css-ui/molecules/card-simple";
@use "@guebbit/css-ui/molecules/card-image-hover";
```

```scss
@use "@guebbit/css-ui/styles" as theme;
@use "@guebbit/css-ui/molecules/card-simple";
@use "@guebbit/css-ui/molecules/card-image-hover";
```


## Default
::: info
- Custom panel height: 600px
:::

::: raw
<div class="dev-section">
<!--@include: ../examples/molecules/cards/ImageHoverCard-default.html -->
</div>
:::

::: code-group
```html
<div class="image-hover-card animate-on-hover" style="height: 600px">
    <div class="card-media">
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
<<< @/../src/components/molecules/card-image-hover/index.scss
:::

## Classes

| Class                  | Description                 |
|:-----------------------|:----------------------------|
| `animate-active`       | Animation active            |
| `animate-on-active`    | Animation active on .active |
| `animate-on-hover`     | Animation active on hover   |
| `animate-mobile`       | Active (show) on mobile     |

## SCSS variables

| SCSS Variable | CSS Variable | Description | Accepted Values | Default |
| :--------------|:-------------|:-------------|:-----------------|:---------|
| `$threshold` | — | :x: Mobile threshold | `size` | `600px` |
| `$duration` | `--image-hover-card-duration` | Transition duration | `time` | `0.5s` |
<style lang="scss">
@use "../src/components/molecules/card-simple";
</style>

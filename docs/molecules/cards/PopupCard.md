# Popup Card
<Badge type="tip">Atom</Badge> <Badge type="info">Cards</Badge>

::: tip INCLUDED
- [SimpleCard](/molecules/cards/SimpleCard.md)
:::

::: warning
Margin top and margin bottom could be required, based on the size of the content, to prevent overlap with other elements
:::
  
## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/molecules/cards/SimpleCard" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
@use "@guebbit/css-ui/src/molecules/cards/PopupCard";
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/molecules/cards/SimpleCard" with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);
@use "@guebbit/css-ui/src/molecules/cards/PopupCard";
```

## Default
::: info
- Custom panel height: 600px
:::

::: raw
<div class="dev-section">
    <div class="popup-card animate-on-hover" style="height: 600px">
        <div class="main-content">
            <img alt="" src="/logo.svg" />
        </div>
        <div class="popup-content">
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
</div>
<div class="dev-section">
    <div class="popup-card animate-on-hover" style="height: 600px">
        <div class="main-content">
            <img alt="" src="https://placedog.net/1000/1000" />
        </div>
        <div class="popup-content">
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
</div>
<div class="dev-section">
    <div class="popup-card animate-on-hover" style="height: 600px">
        <div class="main-content">
            <div class="simple-card shadow-on-hover" style="--background: rgb(var(--secondary-500))">
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
        <div class="popup-content">
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
</div>
:::

::: code-group
```html
<div class="popup-card animate-on-hover" style="height: 600px">
    <div class="main-content">
        <img alt="" src="/logo.svg" />
    </div>
    <div class="popup-content">
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
```html
<div class="popup-card animate-on-hover" style="height: 600px">
    <div class="main-content">
        <img alt="" src="https://placedog.net/1000/1000" />
    </div>
    <div class="popup-content">
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
<<< @/../src/molecules/cards/PopupCard.scss
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
@use "../docs/theme" as theme;
@use "../src/molecules/cards/SimpleCard" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
@use "../src/molecules/cards/PopupCard";
</style>

# Trapezoid Form
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Effect</Badge>

::: tip INCLUDED
- [SimpleButton](/atoms/buttons/SimpleButton)
- [TrapezoidForm](/atoms/animations/TrapezoidForm)
:::

## Regular

::: raw
<div class="dev-section">
    <div style="position:relative; width: 200px; height: 50px;">
        <span class="trapezoid-form"></span>
    </div>
    <div style="position:relative; width: 50px; height: 200px;">
        <span class="trapezoid-form"></span>
    </div>
    <div style="position:relative; width: 100px; height: 100px;">
        <span class="trapezoid-form"></span>
    </div>
</div>
:::

::: code-group
``` html
    <div style="position:relative; width: 200px; height: 50px;">
        <span class="trapezoid-form"></span>
    </div>
    <div style="position:relative; width: 50px; height: 200px;">
        <span class="trapezoid-form"></span>
    </div>
    <div style="position:relative; width: 100px; height: 100px;">
        <span class="trapezoid-form"></span>
    </div>
```
<<< @/../components/atoms/animations/TrapezoidForm.scss
:::

## Buttons

::: raw
<div class="dev-section">
    <div class="simple-button button-shadowless">
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        <span class="trapezoid-form"></span>
        LOREM IPSUM
    </div>
    <div class="simple-button button-shadowless">
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        <span class="trapezoid-form trapezoid-form-reverse"></span>
        LOREM IPSUM
    </div>
    <div class="simple-button button-shadowless">
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        <span class="trapezoid-form trapezoid-form-outlined"></span>
        LOREM IPSUM
    </div>
</div>
:::

::: code-group
``` html
<div class="simple-button button-shadowless">
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
    <span class="trapezoid-form"></span>
    LOREM IPSUM
</div>
<div class="simple-button button-shadowless">
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
    <span class="trapezoid-form trapezoid-form-reverse"></span>
    LOREM IPSUM
</div>
<div class="simple-button button-shadowless">
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
    <span class="trapezoid-form trapezoid-form-outlined"></span>
    LOREM IPSUM
</div>
```
:::

## Cards

::: raw
<div class="dev-section">
    <div class="simple-card card-shadowless">
        <span class="trapezoid-form trapezoid-form-big"></span>
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
:::

::: code-group
``` html
<div class="simple-card card-shadowless">
    <span class="trapezoid-form trapezoid-form-big"></span>
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
```
:::


## Classes

| Class                        | Description                 |
|:-----------------------------|:----------------------------|
| `trapezoid-form-outlined`    | Outlined mode               |
| `trapezoid-form-big`         | Enlarge form                |
| `trapezoid-form-bottom`      | Move bottom                 |
| `trapezoid-form-left`        | Move left                   |
| `trapezoid-form-reverse`     | Form reverse                |
| `animate-active`             | Animation active            |
| `animate-on-active`          | Animation active on .active |
| `animate-on-hover`           | Animation active on hover   |


## SCSS variables

| Variable                            | Description           | Accepted Values | Default                |
|:------------------------------------|:----------------------|:----------------|:-----------------------|
| `$trapezoid-form-color`             | Main color            | `color`         | `transparent`          |
| `$trapezoid-form-opacity`           | Text color            | `color`         | `contrast of {$color}` |
| `$trapezoid-form-border`            | Shadow color          | `color`         | `#000`                 |
| `$trapezoid-form-border-radius`     | Padding               | `size`          | `8px`                  |
| `$trapezoid-form-position-top`      | Border                | `size`          | `2px`                  |
| `$trapezoid-form-position-left`     | Border radius         | `size`          | `4px`                  |
| `$trapezoid-form-position-modifier` | Tonal mode bg opacity | `number`        | `0.2`                  |


<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/buttons/SimpleButton.scss";
@use "components/molecules/cards/SimpleCard.scss";
@use "components/atoms/animations/TrapezoidForm.scss" as * with (
    $trapezoid-form-color: theme.$primary-color,
);
</style>
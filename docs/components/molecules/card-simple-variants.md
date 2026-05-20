# Card Simple Variants
<Badge type="tip">Molecules</Badge> <Badge type="info">Card</Badge>

::: tip INCLUDED
- [SimpleButton](/components/atoms/button-simple)
:::

## Use

```scss
@use "@guebbit/css-ui/molecules/card-simple";
```

## Simple
Custom CSS (or SCSS) variables to change style

::: raw
<div class="dev-section">
<!--@include: ../../examples/molecules/cards/SimpleCard-variants-simple.html -->
</div>
:::

::: code-group
```html [border and icons mixed colors]
<div
    class="simple-card card-elevated border-active"
    style="
        --icon-color: rgb(var(--secondary-500));
        --shadow-color: var(--secondary-500);
    "
>
    <div class="card-header use-brand">
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        <span class="card-title">Lorem Ipsum</span>
        <div class="card-actions">
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
    </div>
    <div class="card-content use-brand">
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
```
```html [HOVER background and shadow mixed colors]
<div class="dev-section use-brand">
    <div 
        class="simple-card animate-on-hover"
        style="
            --active-background: rgba(var(--primary-500) / .4);
            --active-shadow-color: var(--secondary-500);
        "
    >
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
```
```html [Descriptive background card]
<div class="simple-card card-overlay use-brand">
    <img class="card-background" alt="" src="https://placedog.net/600/600" />
    <div class="card-header">
        <h3 class="card-title">Lorem Ipsum</h3>
    </div>
    <div class="card-content" style="width: 40%; min-width: 300px;">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt
        </p>
    </div>
    <div class="card-footer">
        <div class="card-actions">
            <div class="simple-button animate-on-hover button-small primary-500-bg">
                1000 €
            </div>
        </div>
    </div>
</div>
```
:::

## Glossy Hover Card
Custom CSS and\or elements that, with a just a little, can heavily customize the card

::: raw
<div class="dev-section">
<!--@include: ../../examples/molecules/cards/SimpleCard-variants-glossy-hover-card.html -->
</div>
:::

::: code-group
```html
<div class="simple-card custom-advanced-1 animate-on-hover highlight-rollup highlight-rollup-mirror use-brand">
    <img class="card-background" alt="" src="https://placedog.net/1000/600" />
</div>
```
```scss
@use "@guebbit/css-ui/styles";
@use "@guebbit/css-ui/molecules/card-simple";
@use "@guebbit/css-ui/atoms/highlight-rollup";

.simple-card {
  --shadow-color: var(--secondary-500);

  &.custom-advanced-1 {
    height: 400px;
    width: 300px;
    overflow: hidden;
    box-shadow:
        0 7px 9px -4px rgba(var(--shadow-color) / .6),
        0 14px 21px 2px rgba(var(--shadow-color) / .4),
        0 5px 26px 4px rgba(var(--shadow-color) / .2);

    &:hover {
      transform: translateY(-3px) scale(1.05) rotateX(15deg);

      &:after {
        transform: rotate(25deg);
        top: -40%;
        opacity: 0.15;
      }
    }
  }
}
```
:::

## Highlighted title

::: raw
<div class="dev-section">
<!--@include: ../../examples/molecules/cards/SimpleCard-variants-highlighted-title.html -->
</div>
:::

::: code-group
```html
<div class="simple-card custom-advanced-1 animate-on-hover highlight-rollup highlight-rollup-mirror use-brand">
    <img class="card-background" alt="" src="https://placedog.net/1000/600" />
</div>
```
```scss
@use "@guebbit/css-ui/styles";
@use "@guebbit/css-ui/molecules/card-simple";

.simple-card {
  &.custom-advanced-2{
    min-height: 400px;

    .card-tag {
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .card-title {
      span {
        background: rgb(var(--primary-500));
        padding: 0.25em 0.5em;
      }
    }

    .card-subtitle {
      span {
        background: rgb(var(--secondary-500));
        padding: 0.25em 0.5em;
      }
    }
  }
}
```
:::

## Business Card

::: raw
<div class="dev-section">
<!--@include: ../../examples/molecules/cards/SimpleCard-variants-business-card.html -->
</div>
:::

::: code-group
```html [Simple design]
<div class="simple-card custom-advanced-3 use-brand">
    <div class="card-content">
        <img class="card-icon" alt="" src="/logo.svg" style="font-size: 10em" />
        <h3 class="card-title"><span>Lorem Ipsum</span></h3>
        <h4 class="card-subtitle"><span>Dolor sit amet</span></h4>
    </div>
</div>
```
```html [Complex design]
<div class="simple-card custom-advanced-3 use-brand">
    <div class="card-content">
        <h3 class="card-title"><span>Lorem Ipsum</span></h3>
        <hr class="card-divider" />
        <img class="card-icon" alt="" src="/logo.svg" style="font-size: 15em" />
        <hr class="card-divider" />
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt
        </p>
        <hr class="card-divider" />
        <div class="card-actions">
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
    </div>
</div>
```
```scss [CSS (common)]
@use "@guebbit/css-ui/styles";
@use "@guebbit/css-ui/molecules/card-simple";

.simple-card {
  &.custom-advanced-3 {
    --background: #ff9800;
    --on-background: #fff;
    --shadow-color: 0,0,0;
    --divider-color: #fff;
    text-shadow: 2px 2px 4px rgba(var(--overlay));

    .card-content{
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 12px;
    }
  }
}
```
:::

## Classes
#### Same as [SimpleCard](/components/molecules/card-simple) classes

No extra component-specific classes beyond the inherited items above.

## SCSS variables
#### Same as [SimpleCard](/components/molecules/card-simple) variables

No extra component-specific SCSS variables beyond the inherited items above.
<style lang="scss">
/*@use "../docs/theme" as theme;*/
/*@use "../src/components/atoms/button-simple/index.scss";*/
/*@use "../src/components/molecules/card-simple" with (*/
/*    $border-color: theme.$primary-color,*/
/*    $divider-color: theme.$primary-color,*/
/*    $active-border-color: theme.$secondary-color,*/
/*    $active-background: theme.$primary-color,*/
/*    $active-on-background: #fff,*/

/*    $border-color--dark: theme.$primary-color,*/
/*    $divider-color--dark: theme.$primary-color,*/
/*    $active-border-color--dark: theme.$secondary-color,*/
/*    $active-background--dark: theme.$primary-color,*/
/*    $active-on-background--dark: #fff,*/
/*);*/

@use "../src/components/atoms/button-simple";
@use "../src/components/molecules/card-simple";

// added to show custom use in {Custom Advanced}
@use "../src/components/atoms/highlight-rollup";


.simple-card {
    --shadow-color: var(--secondary-500);

    &.custom-advanced-1 {
        height: 400px; 
        width: 300px;
        overflow: hidden;
        box-shadow: 
            0 7px 9px -4px rgba(var(--shadow-color) / .6),
            0 14px 21px 2px rgba(var(--shadow-color) / .4),
            0 5px 26px 4px rgba(var(--shadow-color) / .2);

        &:hover {
            transform: translateY(-3px) scale(1.05) rotateX(15deg);
    
            &:after {
                transform: rotate(25deg);
                top: -40%;
                opacity: 0.15;
            }
        }
    }

    &.custom-advanced-2{
        min-height: 400px;

        .card-tag {
            position: absolute;
            bottom: 0;
            left: 0;
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        .card-title {
            span {
                background: rgb(var(--primary-500));
                padding: 0.25em 0.5em;
            }
        }

        .card-subtitle {
            span {
                background: rgb(var(--secondary-500));
                padding: 0.25em 0.5em;
            }
        }
    }

    &.custom-advanced-3 {
        --background: #ff9800;
        --on-background: #fff;
        --shadow-color: 0,0,0;
        --divider-color: #fff;
        text-shadow: 2px 2px 4px rgba(var(--overlay));

        .card-content{
                display:flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 12px;
        }
    }
}
</style>

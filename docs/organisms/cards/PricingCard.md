# Pricing cards
<Badge type="tip">Atom</Badge> <Badge type="info">Cards</Badge>

::: danger TODO
ADD: https://guebbit.com/admin/view/382
:::

::: tip VARIANT Dependencies
- [SimpleCard](/molecules/cards/SimpleCard.md)
:::
::: tip INCLUDED
- [SimpleButton](/atoms/buttons/SimpleButton)
:::


## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/buttons/SimpleButton" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
@use "@guebbit/css-ui/src/organisms/cards/PricingCard" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/buttons/SimpleButton" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
@use "@guebbit/css-ui/src/organisms/cards/PricingCard" with (
    $color: #fff,
    $header: theme.$primary-color,
    $on-header: #fff,
    $footer: theme.$primary-color,
    $on-footer: #fff,
    $title-color: theme.$primary-color,
    $price-color: theme.$secondary-color,

    $active-color: theme.$primary-color,
    $active-on-background: #fff,
    $active-price-color: inherit,

    $header--dark: theme.$primary-color,
    $on-header--dark: #fff,
    $footer--dark: theme.$primary-color,
    $on-footer--dark: #fff,
    $title-color--dark: theme.$primary-color,
    $price-color--dark: theme.$secondary-color,

    $active-color--dark: theme.$primary-color,
    $active-on-background--dark: #fff,
    $active-price-color--dark: inherit,
);
```

## Default

::: raw
<div class="dev-section with-restrictions">
    <div class="pricing-card animate-on-hover">
        <div class="card-content">
            <h3 class="card-title">Lorem Ipsum</h3>
            <div class="card-price">
                <span class="card-currency">€</span>
                10
            </div>
        </div>
        <div class="card-content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
        <div class="card-actions">
            <button class="simple-button">
                Lorem Ipsum
            </button>
        </div>
    </div>
</div>
:::

```html
<div class="pricing-card animate-on-hover">
    <div class="card-content">
        <h3 class="card-title">Lorem Ipsum</h3>
        <div class="card-price">
            <span class="card-currency">€</span>
            10
        </div>
    </div>
    <div class="card-content">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
    </div>
    <div class="card-actions">
        <button class="simple-button">
            Lorem Ipsum
        </button>
    </div>
</div>
```

## Header & Footer highlighted

::: raw
<div class="dev-section with-restrictions">
    <div class="pricing-card animate-on-hover card-elevated">
        <div class="card-header">
            Header
        </div>
        <div class="card-content">
            <h3 class="card-title">Lorem Ipsum</h3>
            <div class="card-price">
                <span class="card-currency">€</span>
                10
            </div>
        </div>
        <div class="card-content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
        <div class="card-actions">
            <button class="simple-button">
                Lorem Ipsum
            </button>
        </div>
        <div class="card-footer">
            Footer
        </div>
    </div>
</div>
:::

```html
<div class="pricing-card animate-on-hover card-elevated">
    <div class="card-header">
        Header
    </div>
    <div class="card-content">
        <h3 class="card-title">Lorem Ipsum</h3>
        <div class="card-price">
            <span class="card-currency">€</span>
            10
        </div>
    </div>
    <div class="card-content">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
    </div>
    <div class="card-actions">
        <button class="simple-button">
            Lorem Ipsum
        </button>
    </div>
    <div class="card-footer">
        Footer
    </div>
</div>
```

## Custom
Custom CSS (or SCSS) variables to change style
::: info
Custom CSS highlighted
:::

::: raw
<div class="dev-section with-restrictions" style="background: #212121; padding: 50px; background-image: url(https://placedog.net/1000/600);">
    <div class="pricing-card animate-on-hover card-elevated card-blurred" style="--background: transparent;; --on-background: #fff; --shadow-color: var(--primary-500)">
        <div>
            <h3 class="card-title">Lorem Ipsum</h3>
            <div class="card-price">
                <span class="card-currency">€</span>
                10
            </div>
        </div>
        <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="card-actions">
            <button class="simple-button">
                Lorem Ipsum
            </button>
        </div>
    </div>
</div>
:::

```html{4,5,6,22}
<div 
    class="pricing-card animate-on-hover card-elevated card-blurred" 
    style="
        --background: transparent; 
        --shadow-color: var(--primary-500);
        --on-background: #fff;
    "
>
    <div>
        <h3 class="card-title">Lorem Ipsum</h3>
        <div class="card-price">
            <span class="card-currency">€</span>
            10
        </div>
    </div>
    <p class="card-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <div class="card-actions">
        <button class="simple-button">
            Lorem Ipsum
        </button>
    </div>
</div>
```

::: raw
<div class="dev-section with-restrictions" style="background: #212121; padding: 50px; background-image: url(https://placedog.net/1000/600);">
    <div 
        class="pricing-card animate-on-hover card-elevated card-blurred" 
        style="--background: transparent; --on-background: #fff; --shadow-color: var(--primary-500); --header: rgba(var(--primary-500) / .2); --footer: rgba(var(--primary-500) / .2)"
    >
        <div class="card-header">
            Header
        </div>
        <div class="card-content">
            <h3 class="card-title">Lorem Ipsum</h3>
            <div class="card-price">
                <span class="card-currency">€</span>
                10
            </div>
        </div>
        <div class="card-content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
        <div class="card-actions">
            <button class="simple-button">
                Lorem Ipsum
            </button>
        </div>
        <div class="card-footer">
            Footer
        </div>
    </div>
</div>
:::

```html{4,5,6,7,8,27}
<div 
    class="pricing-card animate-on-hover card-elevated card-blurred" 
    style="
        --background: transparent; 
        --on-background: #fff;
        --shadow-color: var(--primary-500); 
        --header: rgba(var(--primary-500) / .2); 
        --footer: rgba(var(--primary-500) / .2)
    "
>
    <div class="card-header">
        Header
    </div>
    <div class="card-content">
        <h3 class="card-title">Lorem Ipsum</h3>
        <div class="card-price">
            <span class="card-currency">€</span>
            10
        </div>
    </div>
    <div class="card-content">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
    </div>
    <div class="card-actions">
        <button class="simple-button">
            Lorem Ipsum
        </button>
    </div>
    <div class="card-footer">
        Footer
    </div>
</div>
```

## Component CSS

<<< @/../src/organisms/cards/PricingCard.scss

## Documentation CSS


## Classes
#### Plus [SimpleCard](/molecules/cards/SimpleCard.md) classes

## SCSS variables
#### Plus [SimpleCard](/molecules/cards/SimpleCard.md) variables

| Variable       | Description                                            | Accepted Values | Default                              |
|:---------------|:-------------------------------------------------------|:----------------|:-------------------------------------|
| `$price-color` | :zap: :first_quarter_moon_with_face:  Price text color | `color`         | `inherited from SimpleCard {$color}` |

<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/buttons/SimpleButton" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
@use "../src/organisms/cards/PricingCard" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
</style>
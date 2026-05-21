# Card Pricing
<Badge type="tip">Atom</Badge> <Badge type="info">Cards</Badge>

::: danger TODO
ADD: https://guebbit.com/admin/view/382
:::

::: tip VARIANT Dependencies
- [Card](/components/molecules/card)
:::
::: tip INCLUDED
- [Button](/components/atoms/button)
:::


## Use

```scss
@use "@guebbit/css-ui/styles" as theme;
@use "@guebbit/css-ui/atoms/button";
@use "@guebbit/css-ui/organisms/card-pricing";
```

```scss
@use "@guebbit/css-ui/styles" as theme;
@use "@guebbit/css-ui/atoms/button";
@use "@guebbit/css-ui/organisms/card-pricing";
```


## Default

::: raw
<!--@include: ../../examples/organisms/cards/PricingCard-default.html -->
:::

```html
<div class="pricing-card animate-on-hover use-brand">
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
        <button class="button">
            Lorem Ipsum
        </button>
    </div>
</div>
```

## Header & Footer highlighted

::: raw
<!--@include: ../../examples/organisms/cards/PricingCard-header-footer-highlighted.html -->
:::

```html
<div class="pricing-card animate-on-hover card-elevated use-brand">
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
        <button class="button">
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
<!--@include: ../../examples/organisms/cards/PricingCard-custom-2.html -->
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
    <p class="card-text use-brand">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <div class="card-actions use-brand">
        <button class="button">
            Lorem Ipsum
        </button>
    </div>
</div>
```

::: raw
<!--@include: ../../examples/organisms/cards/PricingCard-custom.html -->
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
    <div class="card-header use-brand">
        Header
    </div>
    <div class="card-content use-brand">
        <h3 class="card-title">Lorem Ipsum</h3>
        <div class="card-price">
            <span class="card-currency">€</span>
            10
        </div>
    </div>
    <div class="card-content use-brand">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
    </div>
    <div class="card-actions use-brand">
        <button class="button">
            Lorem Ipsum
        </button>
    </div>
    <div class="card-footer use-brand">
        Footer
    </div>
</div>
```

## Component CSS

::: code-group
<<< @/../src/components/organisms/card-pricing/_architecture.scss [_architecture.scss]
<<< @/../src/components/organisms/card-pricing/index.scss [index.scss]
:::

## Documentation CSS


## Classes
#### Plus [Card](/components/molecules/card) classes

No extra component-specific classes beyond the inherited items above.

## SCSS variables
#### Plus [Card](/components/molecules/card) variables

| SCSS Variable | CSS Variable | Description | Accepted Values | Default |
| :--------------|:-------------|:-------------|:-----------------|:---------|
| `$price-color` | — | :zap: :first_quarter_moon_with_face:  Price text color | `color` | `inherited from Card {$color}` |
<style lang="scss">
@use "../src/components/organisms/card-pricing";
</style>

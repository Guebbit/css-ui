# Card Showcase
<Badge type="tip">Atom</Badge> <Badge type="info">Card</Badge>

::: tip INCLUDED
- [Button](/components/atoms/button)
:::

## Use

```scss
@use "@guebbit/css-ui/atoms/card";
```

## Simple
Custom CSS (or SCSS) variables to change style

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/card-simple-variants-simple.html -->
</div>
:::

::: code-group
```html [border and icons mixed colors]
<div
    class="card card-elevated border-active"
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
        class="card animate-on-hover"
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
<div class="card card-overlay use-brand">
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
            <div class="button animate-on-hover button-small primary-500-bg">
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
<!--@include: ../../examples/atoms/card-simple-variants-glossy-hover-card.html -->
</div>
:::

::: code-group
```html
<!--@include: ../../examples/atoms/card-simple-variants-glossy-hover-card.html -->
```
```scss
<!--@include: ../../examples/atoms/card-simple-variants-glossy-hover-card.scss -->
```
:::

## Highlighted title

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/card-simple-variants-highlighted-title.html -->
</div>
:::

::: code-group
```html
<!--@include: ../../examples/atoms/card-simple-variants-highlighted-title.html -->
```
```scss
<!--@include: ../../examples/atoms/card-simple-variants-highlighted-title.scss -->
```
:::

## Business Card

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/card-simple-variants-business-card.html -->
</div>
:::

::: code-group
```html [Simple design]
<div class="card custom-advanced-3 use-brand">
    <div class="card-content">
        <img class="card-icon" alt="" src="/logo.svg" style="font-size: 10em" />
        <h3 class="card-title"><span>Lorem Ipsum</span></h3>
        <h4 class="card-subtitle"><span>Dolor sit amet</span></h4>
    </div>
</div>
```
```html [Complex design]
<div class="card custom-advanced-3 use-brand">
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
<!--@include: ../../examples/atoms/card-simple-variants-business-card.scss -->
```
:::

## Classes
#### Same as [Card](/components/atoms/card) classes

No extra component-specific classes beyond the inherited items above.

## SCSS variables
#### Same as [Card](/components/atoms/card) variables

No extra component-specific SCSS variables beyond the inherited items above.
<style lang="scss">
@use "../src/components/atoms/button";
@use "../src/components/atoms/card";
@use "../src/components/atoms/highlight-rollup";

<!--@include: ../../examples/atoms/card-simple-variants-glossy-hover-card.scss -->
<!--@include: ../../examples/atoms/card-simple-variants-highlighted-title.scss -->
<!--@include: ../../examples/atoms/card-simple-variants-business-card.scss -->
</style>

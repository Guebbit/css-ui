# Trapezoid Form
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Effect</Badge>

::: tip INCLUDED
- [SimpleButton](/atoms/buttons/SimpleButton)
- [SimpleCard](/molecules/cards/SimpleCard.md)
:::

## Use

```scss
@use "@guebbit/css-ui/src/components/atoms/animation-trapezoid-form";
```



## Regular

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/animations/TrapezoidForm-regular-5.html -->
</div>
:::

```html
<div style="position:relative; width: 200px; height: 50px;">
    <span class="trapezoid-form"></span>
</div>
```

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/animations/TrapezoidForm-regular-4.html -->
</div>
:::

```html{4}
<div class="trapezoid-form-animate-on-hover" style="position:relative; width: 50px; height: 200px;">
    <span class="trapezoid-form" style="--active-transform-scale: 1.2;"></span>
</div>
```

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/animations/TrapezoidForm-regular-3.html -->
</div>
:::

```html{4,9,10,11,12,13}
<div style="position:relative; width: 200px; height: 50px;">
    <span
        class="trapezoid-form"
        style="--active-transform-rotate: -2deg;"
    ></span>
    <span
        class="trapezoid-form trapezoid-form-outlined"
        style="
            --transform-rotate: -2deg; 
            --active-transform-rotate: 2deg;  
            --active-border-size: 4px;
            "
    ></span>
</div>
```


::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/animations/TrapezoidForm-regular-2.html -->
</div>
:::

```html{4,9,10,11}
<div class="trapezoid-form-animate-on-hover" style="position:relative; width: 100px; height: 100px;">
    <span 
        class="trapezoid-form" 
        style="--active-transform-scale: 0.8"
    ></span>
    <span 
        class="trapezoid-form trapezoid-form-outlined" 
        style="
            --transform-scale: 1.2; 
            --active-transform-scale: 1.2; 
            --active-border-size: 8px;
            "
    ></span>
</div>
```

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/animations/TrapezoidForm-regular.html -->
</div>
:::

```html{5,9,13}
<div class="trapezoid-form-animate-on-hover" style="position:relative; width: 200px; height: 80px;">
    <span class="trapezoid-form">Lorem Ipsum</span>
    <span 
        class="trapezoid-form trapezoid-form-outlined" 
        style=" --transform-scale: 1.2"
    ></span>
    <span 
        class="trapezoid-form trapezoid-form-outlined" 
        style=" --transform-scale: 1.5"
    ></span>
    <span 
        class="trapezoid-form trapezoid-form-outlined" 
        style=" --transform-scale: 1.7"
    ></span>
</div>
```

## Buttons

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/animations/TrapezoidForm-buttons-5.html -->
</div>
:::

```html
<div class="simple-button button-flat trapezoid-form-animate-on-hover" style="background: transparent">
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
    <span class="trapezoid-form"></span>
    Default
</div>
```

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/animations/TrapezoidForm-buttons-4.html -->
</div>
:::

```html
<div 
    class="simple-button button-flat button-plain trapezoid-form-animate-on-hover animate-on-hover" 
    style="
        --on-background: rgb(var(--primary-500)); 
        --active-on-background: rgb(var(--secondary-500))
    "
>
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
    <span class="trapezoid-form trapezoid-form-outlined"></span>
    Outlined
</div>
```

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/animations/TrapezoidForm-buttons-3.html -->
</div>
:::

```html
<div class="simple-button button-flat button-plain trapezoid-form-animate-on-hover animate-on-hover">
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
    <span class="trapezoid-form trapezoid-form-outlined"></span>
    <span class="trapezoid-form trapezoid-form-outlined" style="--active-transform-scale: 1.2"></span>
    <span class="trapezoid-form trapezoid-form-outlined" style="--active-transform-scale: 1.5"></span>
    <span class="trapezoid-form trapezoid-form-outlined" style="--active-transform-scale: 1.7"></span>
    Hover Multiple Outline
</div>
```


::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/animations/TrapezoidForm-buttons-2.html -->
</div>
:::

```html
<div 
    class="simple-button button-flat trapezoid-form-animate-on-hover"
    style="--background: transparent; --on-background: rgb(var(--g-theme-on-background))"
>
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
    <span 
        class="trapezoid-form"
        style="--transform-scale: 1.2"
    ></span>
    <span 
        class="trapezoid-form trapezoid-form-outlined"
        
    ></span>
    Big & Outline
</div>
```

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/animations/TrapezoidForm-buttons.html -->
</div>
:::

::: code-group
```html [First]
<div 
    class="simple-button button-flat trapezoid-form-animate-on-hover"
    style="background: transparent; --on-background: #fff;"
>
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
    <span 
        class="trapezoid-form"
        style="--position-top: 30%"
    ></span>
    <span 
        class="trapezoid-form trapezoid-form-outlined"
        
    ></span>
    Special
</div>
```
```html [Second]
<div 
    class="simple-button button-flat trapezoid-form-animate-on-hover"
    style="background: transparent; --on-background: #fff;"
>
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
    <span 
        class="trapezoid-form"
        style="--position-top: 30%; --transform-scale: 1.2;  --active-transform-scale: 1.2"
    ></span>
    <span 
        class="trapezoid-form trapezoid-form-outlined"
        style=" --active-transform-scale: 1.2"
    ></span>
    Special
</div>
```
:::

## Cards

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/animations/TrapezoidForm-cards.html -->
</div>
:::

```html{4}
<div class="simple-card card-flat trapezoid-form-animate-on-hover" style="background: transparent">
    <span 
        class="trapezoid-form" 
        style="--active-transform-scale: 1.2; --active-transform-rotate: 0"
    ></span>
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

## Component CSS

::: code-group
<<< @/../src/components/atoms/animation-trapezoid-form/_architecture.scss [_architecture.scss]
<<< @/../src/components/atoms/animation-trapezoid-form/index.scss [index.scss]
:::

## Classes

| Class                              | Description                                |
|:-----------------------------------|:-------------------------------------------|
| `trapezoid-form-outlined`          | Outlined mode                              |
| `animate-active`                   | Animation active                           |
| `animate-on-active`                | Animation active on .active                |
| `animate-on-hover`                 | Animation active on hover                  |
| `trapezoid-form-animate-active`    | Animation when parent is active            |
| `trapezoid-form-animate-on-active` | Animation when parent is active on .active |
| `trapezoid-form-animate-on-hover`  | Animation when parent is active on hover   |


## CSS Custom Properties

Component color is inherited from utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`).

| Property | Default |
|:---------|:--------|
| `--trapezoid-form-transform-rotate` | `2deg` |
| `--trapezoid-form-transform-scale` | `1` |
| `--trapezoid-form-position-top` | `5%` |
| `--trapezoid-form-position-left` | `0` |
| `--trapezoid-form-border-size` | `2px` |
| `--trapezoid-form-active-transform-rotate` | `$transform-rotate` |
| `--trapezoid-form-active-transform-scale` | `$transform-scale` |
| `--trapezoid-form-active-position-top` | `$position-top` |
| `--trapezoid-form-active-position-left` | `$position-left` |
| `--trapezoid-form-active-border-size` | `$border-size` |
| `--trapezoid-form-opacity` | `1` |
| `--trapezoid-form-border-radius` | `6px` |
| `--trapezoid-form-duration` | `0.3s` |


## SCSS variables

| SCSS Variable | CSS Variable | Description | Default |
|:--------------|:-------------|:------------|:--------|
| `$opacity` | `--trapezoid-form-opacity` | Opacity | `1` |
| `$transform-rotate` | `--trapezoid-form-transform-rotate` | Transform rotate | `2deg` |
| `$transform-scale` | `--trapezoid-form-transform-scale` | Transform scale | `1` |
| `$position-top` | `--trapezoid-form-position-top` | Position top | `5%` |
| `$position-left` | `--trapezoid-form-position-left` | Position left | `0` |
| `$border-size` | `--trapezoid-form-border-size` | Border size | `2px` |
| `$border-radius` | `--trapezoid-form-border-radius` | Border radius | `6px` |
| `$active-transform-rotate` | `--trapezoid-form-active-transform-rotate` | Active transform rotate | `$transform-rotate` |
| `$active-transform-scale` | `--trapezoid-form-active-transform-scale` | Active transform scale | `$transform-scale` |
| `$active-position-top` | `--trapezoid-form-active-position-top` | Active position top | `$position-top` |
| `$active-position-left` | `--trapezoid-form-active-position-left` | Active position left | `$position-left` |
| `$active-border-size` | `--trapezoid-form-active-border-size` | Active border size | `$border-size` |

<style lang="scss">
@use "../src/components/atoms/button-simple";
@use "../src/components/molecules/card-simple";
@use "../src/components/atoms/animation-trapezoid-form";
</style>

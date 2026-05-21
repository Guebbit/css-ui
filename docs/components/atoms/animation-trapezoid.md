# Animation Trapezoid
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Effect</Badge>

::: tip INCLUDED
- [Button](/components/atoms/button)
- [Card](/components/atoms/card)
:::

## Use

```scss
@use "@guebbit/css-ui/atoms/animation-trapezoid";
```



## Regular

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/animation-trapezoid-regular-5.html -->
</div>
:::

```html
<div style="position:relative; width: 200px; height: 50px;">
    <span class="animation-trapezoid use-brand"></span>
</div>
```

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/animation-trapezoid-regular-4.html -->
</div>
:::

```html{4}
<div class="animation-trapezoid-animate-on-hover use-brand" style="position:relative; width: 50px; height: 200px;">
    <span class="animation-trapezoid" style="--active-transform-scale: 1.2;"></span>
</div>
```

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/animation-trapezoid-regular-3.html -->
</div>
:::

```html{4,9,10,11,12,13}
<div style="position:relative; width: 200px; height: 50px;">
    <span
        class="animation-trapezoid"
        style="--active-transform-rotate: -2deg;"
    ></span>
    <span
        class="animation-trapezoid animation-trapezoid-outlined"
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
<!--@include: ../../examples/atoms/animation-trapezoid-regular-2.html -->
</div>
:::

```html{4,9,10,11}
<div class="animation-trapezoid-animate-on-hover use-brand" style="position:relative; width: 100px; height: 100px;">
    <span 
        class="animation-trapezoid" 
        style="--active-transform-scale: 0.8"
    ></span>
    <span 
        class="animation-trapezoid animation-trapezoid-outlined" 
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
<!--@include: ../../examples/atoms/animation-trapezoid-regular.html -->
</div>
:::

```html{5,9,13}
<div class="animation-trapezoid-animate-on-hover use-brand" style="position:relative; width: 200px; height: 80px;">
    <span class="animation-trapezoid">Lorem Ipsum</span>
    <span 
        class="animation-trapezoid animation-trapezoid-outlined" 
        style=" --transform-scale: 1.2"
    ></span>
    <span 
        class="animation-trapezoid animation-trapezoid-outlined" 
        style=" --transform-scale: 1.5"
    ></span>
    <span 
        class="animation-trapezoid animation-trapezoid-outlined" 
        style=" --transform-scale: 1.7"
    ></span>
</div>
```

## Buttons

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/animation-trapezoid-buttons-5.html -->
</div>
:::

```html
<div class="button button-flat animation-trapezoid-animate-on-hover use-brand" style="background: transparent">
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
    <span class="animation-trapezoid"></span>
    Default
</div>
```

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/animation-trapezoid-buttons-4.html -->
</div>
:::

```html
<div 
    class="button button-flat button-plain animation-trapezoid-animate-on-hover animate-on-hover" 
    style="
        --on-background: rgb(var(--primary-500)); 
        --active-on-background: rgb(var(--secondary-500))
    "
>
    <svg class="button-icon use-brand" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
    <span class="animation-trapezoid animation-trapezoid-outlined use-brand"></span>
    Outlined
</div>
```

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/animation-trapezoid-buttons-3.html -->
</div>
:::

```html
<div class="button button-flat button-plain animation-trapezoid-animate-on-hover animate-on-hover use-brand">
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
    <span class="animation-trapezoid animation-trapezoid-outlined"></span>
    <span class="animation-trapezoid animation-trapezoid-outlined" style="--active-transform-scale: 1.2"></span>
    <span class="animation-trapezoid animation-trapezoid-outlined" style="--active-transform-scale: 1.5"></span>
    <span class="animation-trapezoid animation-trapezoid-outlined" style="--active-transform-scale: 1.7"></span>
    Hover Multiple Outline
</div>
```


::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/animation-trapezoid-buttons-2.html -->
</div>
:::

```html
<div 
    class="button button-flat animation-trapezoid-animate-on-hover"
    style="--background: transparent; --on-background: rgb(var(--g-theme-on-background))"
>
    <svg class="button-icon use-brand" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
    <span 
        class="animation-trapezoid"
        style="--transform-scale: 1.2"
    ></span>
    <span 
        class="animation-trapezoid animation-trapezoid-outlined"
        
    ></span>
    Big & Outline
</div>
```

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/animation-trapezoid-buttons.html -->
</div>
:::

::: code-group
```html [First]
<div 
    class="button button-flat animation-trapezoid-animate-on-hover"
    style="background: transparent; --on-background: #fff;"
>
    <svg class="button-icon use-brand" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
    <span 
        class="animation-trapezoid"
        style="--position-top: 30%"
    ></span>
    <span 
        class="animation-trapezoid animation-trapezoid-outlined"
        
    ></span>
    Special
</div>
```
```html [Second]
<div 
    class="button button-flat animation-trapezoid-animate-on-hover"
    style="background: transparent; --on-background: #fff;"
>
    <svg class="button-icon use-brand" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
    <span 
        class="animation-trapezoid"
        style="--position-top: 30%; --transform-scale: 1.2;  --active-transform-scale: 1.2"
    ></span>
    <span 
        class="animation-trapezoid animation-trapezoid-outlined"
        style=" --active-transform-scale: 1.2"
    ></span>
    Special
</div>
```
:::

## Cards

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/animation-trapezoid-cards.html -->
</div>
:::

```html{4}
<div class="card card-flat animation-trapezoid-animate-on-hover use-brand" style="background: transparent">
    <span 
        class="animation-trapezoid" 
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
<<< @/../src/components/atoms/animation-trapezoid/_architecture.scss [_architecture.scss]
<<< @/../src/components/atoms/animation-trapezoid/index.scss [index.scss]
:::

## Classes

| Class                              | Description                                |
|:-----------------------------------|:-------------------------------------------|
| `animation-trapezoid-outlined`          | Outlined mode                              |
| `animate-active`                   | Animation active                           |
| `animate-on-active`                | Animation active on .active                |
| `animate-on-hover`                 | Animation active on hover                  |
| `animation-trapezoid-animate-active`    | Animation when parent is active            |
| `animation-trapezoid-animate-on-active` | Animation when parent is active on .active |
| `animation-trapezoid-animate-on-hover`  | Animation when parent is active on hover   |


## CSS Custom Properties

Component color is inherited from utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`).

| Property | Default |
|:---------|:--------|
| `--animation-trapezoid-transform-rotate` | `2deg` |
| `--animation-trapezoid-transform-scale` | `1` |
| `--animation-trapezoid-position-top` | `5%` |
| `--animation-trapezoid-position-left` | `0` |
| `--animation-trapezoid-border-size` | `2px` |
| `--animation-trapezoid-active-transform-rotate` | `$transform-rotate` |
| `--animation-trapezoid-active-transform-scale` | `$transform-scale` |
| `--animation-trapezoid-active-position-top` | `$position-top` |
| `--animation-trapezoid-active-position-left` | `$position-left` |
| `--animation-trapezoid-active-border-size` | `$border-size` |
| `--animation-trapezoid-opacity` | `1` |
| `--animation-trapezoid-border-radius` | `6px` |
| `--animation-trapezoid-duration` | `0.3s` |


## SCSS variables

| SCSS Variable | CSS Variable | Description | Default |
|:--------------|:-------------|:------------|:--------|
| `$opacity` | `--animation-trapezoid-opacity` | Opacity | `1` |
| `$transform-rotate` | `--animation-trapezoid-transform-rotate` | Transform rotate | `2deg` |
| `$transform-scale` | `--animation-trapezoid-transform-scale` | Transform scale | `1` |
| `$position-top` | `--animation-trapezoid-position-top` | Position top | `5%` |
| `$position-left` | `--animation-trapezoid-position-left` | Position left | `0` |
| `$border-size` | `--animation-trapezoid-border-size` | Border size | `2px` |
| `$border-radius` | `--animation-trapezoid-border-radius` | Border radius | `6px` |
| `$active-transform-rotate` | `--animation-trapezoid-active-transform-rotate` | Active transform rotate | `$transform-rotate` |
| `$active-transform-scale` | `--animation-trapezoid-active-transform-scale` | Active transform scale | `$transform-scale` |
| `$active-position-top` | `--animation-trapezoid-active-position-top` | Active position top | `$position-top` |
| `$active-position-left` | `--animation-trapezoid-active-position-left` | Active position left | `$position-left` |
| `$active-border-size` | `--animation-trapezoid-active-border-size` | Active border size | `$border-size` |

<style lang="scss">
@use "../src/components/atoms/button";
@use "../src/components/atoms/card";
@use "../src/components/atoms/animation-trapezoid";
</style>

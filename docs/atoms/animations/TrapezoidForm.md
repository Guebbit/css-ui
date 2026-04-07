# Trapezoid Form
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Effect</Badge>

::: tip INCLUDED
- [SimpleButton](/atoms/buttons/SimpleButton)
- [SimpleCard](/molecules/cards/SimpleCard.md)
:::

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/trapezoid-form/index";
```

Color is now always applied via utility classes (not SCSS color variables):

- `.bg-{role}` → background + on-color
- `.text-{role}` → text color
- `.border-{role}` → border color

```html
<div class="text-primary">...</div>
<button class="bg-primary">...</button>
<button class="border-primary text-primary">...</button>
```


## Regular

::: raw
<div class="dev-section">
    <div style="position:relative; width: 200px; height: 50px;">
        <span class="trapezoid-form"></span>
    </div>
</div>
:::

```html
<div style="position:relative; width: 200px; height: 50px;">
    <span class="trapezoid-form"></span>
</div>
```

::: raw
<div class="dev-section">
    <div class="trapezoid-form-animate-on-hover" style="position:relative; width: 50px; height: 200px;">
        <span class="trapezoid-form" style="--active-transform-scale: 1.2;"></span>
    </div>
</div>
:::

```html{4}
<div class="trapezoid-form-animate-on-hover" style="position:relative; width: 50px; height: 200px;">
    <span class="trapezoid-form" style="--active-transform-scale: 1.2;"></span>
</div>
```

::: raw
<div class="dev-section">
    <div class="trapezoid-form-animate-on-hover" style="position:relative; width: 200px; height: 50px;">
        <span class="trapezoid-form" style="--active-transform-rotate: -2deg;"></span>
        <span class="trapezoid-form trapezoid-form-outlined" style="--transform-rotate: -2deg; --active-transform-rotate: 2deg;  --active-border-size: 4px;"></span>
    </div>
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
    <div class="trapezoid-form-animate-on-hover" style="position:relative; width: 100px; height: 100px;">
        <span class="trapezoid-form" style="--active-transform-scale: 0.8"></span>
        <span class="trapezoid-form trapezoid-form-outlined" style="--transform-scale: 1.2; --active-transform-scale: 1.2; --active-border-size: 8px;"></span>
    </div>
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
    <div class="trapezoid-form-animate-on-hover" style="position:relative; width: 200px; height: 80px;">
        <span class="trapezoid-form">Lorem Ipsum</span>
        <span class="trapezoid-form trapezoid-form-outlined" style=" --transform-scale: 1.2"></span>
        <span class="trapezoid-form trapezoid-form-outlined" style=" --transform-scale: 1.5"></span>
        <span class="trapezoid-form trapezoid-form-outlined" style=" --transform-scale: 1.7"></span>
    </div>
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
    <div class="simple-button button-flat trapezoid-form-animate-on-hover" style="background: transparent">
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        <span class="trapezoid-form"></span>
        Default
    </div>
    <div class="simple-button button-flat trapezoid-form-animate-on-hover" style="background: transparent">
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        <span class="trapezoid-form"></span>
        Lorem Ipsum Very Long Text Lorem Ipsum
    </div>
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
    <div class="simple-button button-flat button-plain trapezoid-form-animate-on-hover animate-on-hover">
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        <span class="trapezoid-form trapezoid-form-outlined"></span>
        Outlined
    </div>
</div>
:::

```html{4,5}
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
</div>
:::

```html{6,7,8}
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
</div>
:::

```html{3,10,14}
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
</div>
:::

::: code-group
```html{3,10,14} [First]
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
```html{3,10,14} [Second]
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
    <div class="simple-card card-flat trapezoid-form-animate-on-hover" style="background: transparent">
        <span class="trapezoid-form" style="--active-transform-scale: 1.2; --active-transform-rotate: 0"></span>
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

<<< @/../src/atoms/animations/trapezoid-form/index.scss

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

Component colors are inherited from utility classes (`.bg-{role}`, `.text-{role}`, `.border-{role}`); use non-color custom properties only for layout/animation tuning.


<style lang="scss">
@use "../src/atoms/buttons/simple-button/index";
@use "../src/molecules/cards/SimpleCard";
@use "../src/atoms/animations/trapezoid-form/index";
</style>
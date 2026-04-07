# Advancing Moon
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">reveal</Badge>

Use the SCSS or CSS variables to do what you want with this special fade-in or fade-out animation

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/advancing-moon/index";
```

## Default

::: raw
<div class="dev-section">
    <img class="advancing-moon-reveal animate-on-hover" src="https://placedog.net/400/400"/>
    <img
        class="advancing-moon-reveal animate-on-hover"
        src="https://placedog.net/400/400"
        style="--opacity-start: 1; --scale-end: 1.5"
    />
</div>
:::

```html
<img class="advancing-moon-reveal animate-on-hover" src="https://placedog.net/400/400"/>
<img
    class="advancing-moon-reveal animate-on-hover"
    src="https://placedog.net/400/400"
    style="--opacity-start: 1; --scale-end: 1.5"
/>
```

## Fade In To left
::: info
- CSS var: --slide-x-start: 0;
- CSS var --slide-x-end: -60%;
:::

::: raw
<div class="dev-section">
    <img 
        class="advancing-moon-reveal animate-on-hover" 
        style="
            --slide-x-start: 0;
            --slide-x-end: -60%;
        "
        src="https://placedog.net/400/400"
    />
</div>
:::

```html {4,5}
<img
    class="advancing-moon-reveal animate-on-hover"
    style="
        --slide-x-start: 0;
        --slide-x-end: -60%;
    "
    src="https://placedog.net/400/400"
/>
```

## Fade Out (.animation-inverted)

::: raw
<div class="dev-section">
    <img 
        class="advancing-moon-reveal animate-on-hover animation-inverted"
        src="https://placedog.net/400/400" 
    />
</div>
:::

```html
<img class="advancing-moon-reveal animate-on-hover animation-inverted" src="https://placedog.net/400/400" />
```

## Fade Out From Right
::: info
- CSS var: --slide-x-start: 0;
- CSS var --slide-x-end: 60%;
:::

::: raw
<div class="dev-section">
    <img 
        class="advancing-moon-reveal animation-inverted animate-on-hover" 
        style="
            --slide-x-start: 0;
            --slide-x-end: 60%;
        "
        src="https://placedog.net/400/400"
    />
</div>
:::

```html {4,5}
<img
    class="advancing-moon-reveal animation-inverted animate-on-hover"
    style="
        --slide-x-start: 0;
        --slide-x-end: 60%;
    "
    src="https://placedog.net/400/400"
/>
```

## Fade In From Center
::: info
- CSS var: --slide-x-start: 0;
:::

::: raw
<div class="dev-section">
    <img 
        class="advancing-moon-reveal animate-on-hover" 
        style="--slide-x-start: 0;"
        src="https://placedog.net/400/400"
    />
</div>
:::

```html {3}
<img
    class="advancing-moon-reveal animate-on-hover"
    style="--slide-x-start: 0;"
    src="https://placedog.net/400/400"
/>
```


## Component CSS

<<< @/../src/atoms/animations/advancing-moon/index.scss

## Classes

| Class                  | Description                         |
|:-----------------------|:------------------------------------|
| `animate-active`       | Animation active                    |
| `animate-on-active`    | Animation active on .active         |
| `animate-on-hover`     | Animation active on hover           |
| `animation-inverted`   | Invert $*-start and $*-end variable |


## CSS Custom Properties

| Property                                   | Description                    | Default  |
|:-------------------------------------------|:-------------------------------|:---------|
| `--advancing-moon-reveal-duration`         | Duration of transition         | `1s`     |
| `--advancing-moon-reveal-blur-start`       | Blur intensity at start        | `10px`   |
| `--advancing-moon-reveal-blur-end`         | Blur intensity at end          | `0px`    |
| `--advancing-moon-reveal-opacity-start`    | Opacity at the start           | `0.5`    |
| `--advancing-moon-reveal-opacity-end`      | Opacity at the end             | `1`      |
| `--advancing-moon-reveal-scale-start`      | Scale at the start             | `0.6`    |
| `--advancing-moon-reveal-scale-end`        | Scale at the end               | `1`      |
| `--advancing-moon-reveal-slide-x-start`    | Translate X at start           | `-40%`   |
| `--advancing-moon-reveal-slide-x-end`      | Translate X at end             | `0%`     |
| `--advancing-moon-reveal-slide-y-start`    | Translate Y at start           | `0%`     |
| `--advancing-moon-reveal-slide-y-end`      | Translate Y at end             | `0%`     |


<style lang="scss">
@use "../src/atoms/animations/advancing-moon/index";
</style>
# Advancing Moon Reveal
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">reveal</Badge>

Use the SCSS or CSS variables to do what you want with this special fade-in or fade-out animation

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/AdvancingMoonReveal";
```

## Default

::: raw
<div class="dev-section">
    <img class="advancing-moon-reveal animate-on-hover" src="https://placedog.net/400/400"/>
</div>
:::

```html
<img class="advancing-moon-reveal animate-on-hover" src="https://placedog.net/400/400"/>
```


## Faster and bigger
::: info
- CSS var: --duration: 0.25s; 
- CSS var: --duration-reveal: 2.5s; 
- CSS var: --scale-end: 1.5;
:::

::: raw
<div class="dev-section">
    <img
        class="advancing-moon-reveal animate-on-hover"
        src="https://placedog.net/400/400"
        style="--duration: 0.25s; --duration-reveal: 2.5s; --scale-end: 1.5"
    />
</div>
:::

```html {5,6,7}
<img
    class="advancing-moon-reveal animate-on-hover"
    src="https://placedog.net/400/400"
    style="
        --duration: 0.25s; 
        --duration-reveal: 2.5s; 
        --scale-end: 1.5;
    "
/>
```

## Fade In To left
::: info
- CSS var: --slide-x-start: 0;
- CSS var: --slide-x-end: -60%;
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
- CSS var: --slide-x-end: 60%;
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
## Fast return
::: info
- CSS var: --duration-return: 0.2s;
- CSS var: --reveal-duration-return: 2s;
:::

::: raw
<div class="dev-section">
    <img 
        class="advancing-moon-reveal animate-on-hover" 
        style="--duration-return: 0.2s; --reveal-duration-return: 2s"
        src="https://placedog.net/400/400"
    />
</div>
:::

```html {3}
<img
    class="advancing-moon-reveal animate-on-hover"
    style="--duration-return: 0.2s; --reveal-duration-return: 2s"
    src="https://placedog.net/400/400"
/>
```

## Change image during animation

::: raw
<div class="dev-section">
    <div class="advancing-moon-reveal animate-on-hover advancing-moon-swap">
        <img src="https://placedog.net/400/400" />
        <img src="https://placedog.net/500/500" />
    </div>
</div>
:::

```html
<div class="advancing-moon-reveal animate-on-hover advancing-moon-swap">
    <img src="https://placedog.net/400/400" />
    <img src="https://placedog.net/500/500" />
</div>
```


## Component CSS

<<< @/../src/atoms/animations/AdvancingMoonReveal.scss

## Classes

| Class                  | Description                         |
|:-----------------------|:------------------------------------|
| `animate-active`       | Animation active                    |
| `animate-on-active`    | Animation active on .active         |
| `animate-on-hover`     | Animation active on hover           |
| `animation-inverted`   | Invert $*-start and $*-end variable |


## SCSS variables

| Variable                  | Description                                                        | Accepted Values | Default                 |
|:--------------------------|:-------------------------------------------------------------------|:----------------|:------------------------|
| `$duration`               | Duration of transition                                             | `time`          | `1s`                    |
| `$reveal-duration`        | Slower fade in transition while returning in the starting position | `time`          | `10x {$duration}`       |
| `$duration-return`        | Duration of transition                                             | `time`          | `2x {$duration}`        |
| `$reveal-duration-return` | Slower fade in transition while returning in the starting position | `time`          | `2x {$duration-return}` |
| `$blur`                   | Blur intensity                                                     | `size`          | `10px`                  |
| `$opacity-start`          | Opacity intensity at the start                                     | `size`          | `0.5`                   |
| `$opacity-end`            | Opacity intensity at the end                                       | `size`          | `1`                     |
| `$scale-start`            | Scale at the start                                                 | `number`        | `0.6`                   |
| `$scale-end`              | Scale at the end                                                   | `number`        | `1`                     |
| `$slide`                  | Animation duration                                                 | `percentage`    | `40%`                   |


<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/animations/AdvancingMoonReveal";
</style>
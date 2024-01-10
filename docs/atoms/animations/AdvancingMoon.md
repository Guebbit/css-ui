# Advancing Moon
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">reveal</Badge>

Use the SCSS or CSS variables to do what you want with this special fade-in or fade-out animation

## Default

::: raw
<div class="dev-section">
    <img class="advancing-moon-reveal animate-on-hover" src="https://placekitten.com/400/400"/>
    <img
        class="advancing-moon-reveal animate-on-hover"
        src="https://placekitten.com/400/400"
        style="--opacity-start: 1; --scale-end: 1.5"
    />
</div>
:::

```html
<img class="advancing-moon-reveal animate-on-hover" src="https://placekitten.com/400/400"/>
<img
    class="advancing-moon-reveal animate-on-hover"
    src="https://placekitten.com/400/400"
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
        src="https://placekitten.com/400/400"
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
    src="https://placekitten.com/400/400"
/>
```

## Fade Out (.animation-inverted)

::: raw
<div class="dev-section">
    <img 
        class="advancing-moon-reveal animate-on-hover animation-inverted"
        src="https://placekitten.com/400/400" 
    />
</div>
:::

```html
<img class="advancing-moon-reveal animate-on-hover animation-inverted" src="https://placekitten.com/400/400" />
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
        src="https://placekitten.com/400/400"
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
    src="https://placekitten.com/400/400"
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
        src="https://placekitten.com/400/400"
    />
</div>
:::

```html {3}
<img
    class="advancing-moon-reveal animate-on-hover"
    style="--slide-x-start: 0;"
    src="https://placekitten.com/400/400"
/>
```


## Component CSS

<<< @/../components/atoms/animations/AdvancingMoon.scss

## Documentation CSS

```scss
@use "docs/theme.scss";
@use "components/atoms/animations/AdvancingMoon.scss";
```


## Classes

| Class                  | Description                         |
|:-----------------------|:------------------------------------|
| `animate-active`       | Animation active                    |
| `animate-on-active`    | Animation active on .active         |
| `animate-on-hover`     | Animation active on hover           |
| `animation-inverted`   | Invert $*-start and $*-end variable |


## SCSS variables

| Variable         | Description                    | Accepted Values | Default |
|:-----------------|:-------------------------------|:----------------|:--------|
| `$Duration`      | Duration of transition         | `time`          | `1s`    |
| `$blur`          | Blur intensity                 | `size`          | `10px`  |
| `$opacity-start` | Opacity intensity at the start | `size`          | `0.5`   |
| `$opacity-end`   | Opacity intensity at the end   | `size`          | `1`     |
| `$scale-start`   | Scale at the start             | `number`        | `0.6`   |
| `$scale-end`     | Scale at the end               | `number`        | `1`     |
| `$slide`         | Animation duration             | `percentage`    | `40%`   |


<style lang="scss">
@use "docs/theme.scss";
@use "components/atoms/animations/AdvancingMoon.scss";
</style>
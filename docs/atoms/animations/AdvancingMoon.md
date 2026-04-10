# Advancing Moon
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">reveal</Badge>

Use the SCSS or CSS variables to do what you want with this special fade-in or fade-out animation

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/advancing-moon";
```

Color is now always applied via utility classes (not SCSS color variables):

- `.bg-{role}` → background + on-color
- `.text-{role}` → text color
- `.border-{role}` → border color
- `.use-{role}` → "jolly" class: sets `--main-color` / `--on-main-color` / `--active-main-color` / `--active-on-main-color` for a full single-class semantic color override

```html
<div class="text-primary">...</div>
<button class="use-primary">...</button>
<button class="border-primary text-primary">...</button>
<button class="use-primary">...</button>
```


## Default

::: raw
<div class="dev-section">
    <img class="advancing-moon-reveal animate-on-hover" src="https://placedog.net/400/400"/>
    <img
        class="advancing-moon-reveal animate-on-hover"
        src="https://placedog.net/400/400"
        style="--advancing-moon-reveal-opacity-start: 1; --advancing-moon-reveal-scale-end: 1.5"
    />
</div>
:::

```html
<img class="advancing-moon-reveal animate-on-hover" src="https://placedog.net/400/400"/>
<img
    class="advancing-moon-reveal animate-on-hover"
    src="https://placedog.net/400/400"
    style="--advancing-moon-reveal-opacity-start: 1; --advancing-moon-reveal-scale-end: 1.5"
/>
```

## Fade In To left
::: info
- CSS var: --advancing-moon-reveal-slide-x-start: 0;
- CSS var --advancing-moon-reveal-slide-x-end: -60%;
:::

::: raw
<div class="dev-section">
    <img 
        class="advancing-moon-reveal animate-on-hover" 
        style="
            --advancing-moon-reveal-slide-x-start: 0;
            --advancing-moon-reveal-slide-x-end: -60%;
        "
        src="https://placedog.net/400/400"
    />
</div>
:::

```html {4,5}
<img
    class="advancing-moon-reveal animate-on-hover"
    style="
        --advancing-moon-reveal-slide-x-start: 0;
        --advancing-moon-reveal-slide-x-end: -60%;
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
- CSS var: --advancing-moon-reveal-slide-x-start: 0;
- CSS var --advancing-moon-reveal-slide-x-end: 60%;
:::

::: raw
<div class="dev-section">
    <img 
        class="advancing-moon-reveal animation-inverted animate-on-hover" 
        style="
            --advancing-moon-reveal-slide-x-start: 0;
            --advancing-moon-reveal-slide-x-end: 60%;
        "
        src="https://placedog.net/400/400"
    />
</div>
:::

```html {4,5}
<img
    class="advancing-moon-reveal animation-inverted animate-on-hover"
    style="
        --advancing-moon-reveal-slide-x-start: 0;
        --advancing-moon-reveal-slide-x-end: 60%;
    "
    src="https://placedog.net/400/400"
/>
```

## Fade In From Center
::: info
- CSS var: --advancing-moon-reveal-slide-x-start: 0;
:::

::: raw
<div class="dev-section">
    <img 
        class="advancing-moon-reveal animate-on-hover" 
        style="--advancing-moon-reveal-slide-x-start: 0;"
        src="https://placedog.net/400/400"
    />
</div>
:::

```html {3}
<img
    class="advancing-moon-reveal animate-on-hover"
    style="--advancing-moon-reveal-slide-x-start: 0;"
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

Component color is inherited from utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`).

| Property | Default |
|:---------|:--------|
| `--advancing-moon-reveal-duration` | `2s` |
| `--advancing-moon-reveal-blur-start` | `10px` |
| `--advancing-moon-reveal-blur-end` | `0` |
| `--advancing-moon-reveal-opacity-start` | `0.5` |
| `--advancing-moon-reveal-opacity-end` | `1` |
| `--advancing-moon-reveal-scale-start` | `0.6` |
| `--advancing-moon-reveal-scale-end` | `1` |
| `--advancing-moon-reveal-slide-x-start` | `-60%` |
| `--advancing-moon-reveal-slide-x-end` | `0` |
| `--advancing-moon-reveal-slide-y-start` | `0` |
| `--advancing-moon-reveal-slide-y-end` | `0` |


<style lang="scss">
@use "../src/atoms/animations/advancing-moon";
</style>
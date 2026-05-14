# Advancing Moon
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">reveal</Badge>

Use the SCSS or CSS variables to do what you want with this special fade-in or fade-out animation

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/advancing-moon";
```


## Default

::: raw
    <div class="dev-section">
<!--@include: ../../examples/atoms/animations/AdvancingMoon-default.html -->
    </div>
:::

```html
<img class="advancing-moon animate-on-hover" src="https://placedog.net/400/400"/>
<img
    class="advancing-moon animate-on-hover"
    src="https://placedog.net/400/400"
    style="--advancing-moon-opacity-start: 1; --advancing-moon-scale-end: 1.5"
/>
```

## Fade In To left
::: info
- CSS var: --advancing-moon-slide-x-start: 0;
- CSS var --advancing-moon-slide-x-end: -60%;
:::

::: raw
    <div class="dev-section">
<!--@include: ../../examples/atoms/animations/AdvancingMoon-fade-in-to-left.html -->
    </div>
:::

```html {4,5}
<img
    class="advancing-moon animate-on-hover"
    style="
        --advancing-moon-slide-x-start: 0;
        --advancing-moon-slide-x-end: -60%;
    "
    src="https://placedog.net/400/400"
/>
```

## Fade Out (.animation-inverted)

::: raw
    <div class="dev-section">
<!--@include: ../../examples/atoms/animations/AdvancingMoon-fade-out.html -->
    </div>
:::

```html
<img class="advancing-moon animate-on-hover animation-inverted" src="https://placedog.net/400/400" />
```

## Fade Out From Right
::: info
- CSS var: --advancing-moon-slide-x-start: 0;
- CSS var --advancing-moon-slide-x-end: 60%;
:::

::: raw
    <div class="dev-section">
<!--@include: ../../examples/atoms/animations/AdvancingMoon-fade-out-from-right.html -->
    </div>
:::

```html {4,5}
<img
    class="advancing-moon animation-inverted animate-on-hover"
    style="
        --advancing-moon-slide-x-start: 0;
        --advancing-moon-slide-x-end: 60%;
    "
    src="https://placedog.net/400/400"
/>
```

## Fade In From Center
::: info
- CSS var: --advancing-moon-slide-x-start: 0;
:::

::: raw
    <div class="dev-section">
<!--@include: ../../examples/atoms/animations/AdvancingMoon-fade-in-from-center.html -->
    </div>
:::

```html {3}
<img
    class="advancing-moon animate-on-hover"
    style="--advancing-moon-slide-x-start: 0;"
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
| `--advancing-moon-duration` | `2s` |
| `--advancing-moon-easing` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` |
| `--advancing-moon-blur-start` | `10px` |
| `--advancing-moon-blur-end` | `0` |
| `--advancing-moon-opacity-start` | `0.5` |
| `--advancing-moon-opacity-end` | `1` |
| `--advancing-moon-scale-start` | `0.6` |
| `--advancing-moon-scale-end` | `1` |
| `--advancing-moon-slide-x-start` | `-60%` |
| `--advancing-moon-slide-x-end` | `0` |
| `--advancing-moon-slide-y-start` | `0` |
| `--advancing-moon-slide-y-end` | `0` |
| `--advancing-moon-reveal-filter-factor` | `2` |
| `--advancing-moon-reveal-transform-factor` | `5` |
| `--advancing-moon-hide-filter-factor` | `10` |
| `--advancing-moon-hide-transform-factor` | `10` |


<style lang="scss">
@use "../src/atoms/animations/advancing-moon";
</style>

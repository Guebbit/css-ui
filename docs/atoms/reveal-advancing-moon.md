# Advancing Moon
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">reveal</Badge>

Use the SCSS or CSS variables to do what you want with this special fade-in or fade-out animation

## Use

```scss
@use "@guebbit/css-ui/atoms/reveal-advancing-moon";
```


## Default

::: raw
<div class="dev-section">
<!--@include: ../examples/atoms/AdvancingMoon-default.html -->
</div>
:::

```html
<img class="reveal-advancing-moon animate-on-hover" src="https://placedog.net/400/400"/>
<img
    class="reveal-advancing-moon animate-on-hover"
    src="https://placedog.net/400/400"
    style="--reveal-advancing-moon-opacity-start: 1; --reveal-advancing-moon-scale-end: 1.5"
/>
```

## Fade In To left
::: info
- CSS var: --reveal-advancing-moon-slide-x-start: 0;
- CSS var --reveal-advancing-moon-slide-x-end: -60%;
:::

::: raw
<div class="dev-section">
<!--@include: ../examples/atoms/AdvancingMoon-fade-in-to-left.html -->
</div>
:::

```html {4,5}
<img
    class="reveal-advancing-moon animate-on-hover"
    style="
        --reveal-advancing-moon-slide-x-start: 0;
        --reveal-advancing-moon-slide-x-end: -60%;
    "
    src="https://placedog.net/400/400"
/>
```

## Fade Out (.animation-inverted)

::: raw
<div class="dev-section">
<!--@include: ../examples/atoms/AdvancingMoon-fade-out.html -->
</div>
:::

```html
<img class="reveal-advancing-moon animate-on-hover animation-inverted" src="https://placedog.net/400/400" />
```

## Fade Out From Right
::: info
- CSS var: --reveal-advancing-moon-slide-x-start: 0;
- CSS var --reveal-advancing-moon-slide-x-end: 60%;
:::

::: raw
<div class="dev-section">
<!--@include: ../examples/atoms/AdvancingMoon-fade-out-from-right.html -->
</div>
:::

```html {4,5}
<img
    class="reveal-advancing-moon animation-inverted animate-on-hover"
    style="
        --reveal-advancing-moon-slide-x-start: 0;
        --reveal-advancing-moon-slide-x-end: 60%;
    "
    src="https://placedog.net/400/400"
/>
```

## Fade In From Center
::: info
- CSS var: --reveal-advancing-moon-slide-x-start: 0;
:::

::: raw
<div class="dev-section">
<!--@include: ../examples/atoms/AdvancingMoon-fade-in-from-center.html -->
</div>
:::

```html {3}
<img
    class="reveal-advancing-moon animate-on-hover"
    style="--reveal-advancing-moon-slide-x-start: 0;"
    src="https://placedog.net/400/400"
/>
```


## Component CSS

::: code-group
<<< @/../src/components/atoms/reveal-advancing-moon/_architecture.scss [_architecture.scss]
<<< @/../src/components/atoms/reveal-advancing-moon/index.scss [index.scss]
:::

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
| `--reveal-advancing-moon-duration` | `2s` |
| `--reveal-advancing-moon-easing` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` |
| `--reveal-advancing-moon-blur-start` | `10px` |
| `--reveal-advancing-moon-blur-end` | `0` |
| `--reveal-advancing-moon-opacity-start` | `0.5` |
| `--reveal-advancing-moon-opacity-end` | `1` |
| `--reveal-advancing-moon-scale-start` | `0.6` |
| `--reveal-advancing-moon-scale-end` | `1` |
| `--reveal-advancing-moon-slide-x-start` | `-60%` |
| `--reveal-advancing-moon-slide-x-end` | `0` |
| `--reveal-advancing-moon-slide-y-start` | `0` |
| `--reveal-advancing-moon-slide-y-end` | `0` |
| `--reveal-advancing-moon-reveal-filter-factor` | `2` |
| `--reveal-advancing-moon-reveal-transform-factor` | `5` |
| `--reveal-advancing-moon-hide-filter-factor` | `10` |
| `--reveal-advancing-moon-hide-transform-factor` | `10` |


## SCSS variables

| SCSS Variable | CSS Variable | Description | Default |
|:--------------|:-------------|:------------|:--------|
| `$duration` | `--reveal-advancing-moon-duration` | Animation duration | `2s` |
| `$easing` | `--reveal-advancing-moon-easing` | Animation easing | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` |
| `$blur-start` | `--reveal-advancing-moon-blur-start` | Start blur | `10px` |
| `$blur-end` | `--reveal-advancing-moon-blur-end` | End blur | `0` |
| `$opacity-start` | `--reveal-advancing-moon-opacity-start` | Start opacity | `0.5` |
| `$opacity-end` | `--reveal-advancing-moon-opacity-end` | End opacity | `1` |
| `$scale-start` | `--reveal-advancing-moon-scale-start` | Start scale | `0.6` |
| `$scale-end` | `--reveal-advancing-moon-scale-end` | End scale | `1` |
| `$slide-x-start` | `--reveal-advancing-moon-slide-x-start` | Start X offset | `-60%` |
| `$slide-x-end` | `--reveal-advancing-moon-slide-x-end` | End X offset | `0` |
| `$slide-y-start` | `--reveal-advancing-moon-slide-y-start` | Start Y offset | `0` |
| `$slide-y-end` | `--reveal-advancing-moon-slide-y-end` | End Y offset | `0` |
| `$reveal-filter-factor` | `--reveal-advancing-moon-reveal-filter-factor` | Reveal filter factor | `2` |
| `$reveal-transform-factor` | `--reveal-advancing-moon-reveal-transform-factor` | Reveal transform factor | `5` |
| `$hide-filter-factor` | `--reveal-advancing-moon-hide-filter-factor` | Hide filter factor | `10` |
| `$hide-transform-factor` | `--reveal-advancing-moon-hide-transform-factor` | Hide transform factor | `10` |

<style lang="scss">
@use "../src/components/atoms/reveal-advancing-moon";
</style>

# Card Event Long
<Badge type="tip">Atom</Badge> <Badge type="info">Cards</Badge> <Badge type="info">Event</Badge>

::: tip INCLUDED
- [Button](/components/atoms/button)
:::

## Use

```scss
@use "@guebbit/css-ui/styles" as theme;
@use "@guebbit/css-ui/atoms/button";
@use "@guebbit/css-ui/organisms/card-event-long";
```

```scss
@use "@guebbit/css-ui/styles" as theme;
@use "@guebbit/css-ui/atoms/button" with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);
@use "@guebbit/css-ui/organisms/card-event-long";
```


## Default

::: raw
<!--@include: ../../examples/organisms/card-event-long-default.html -->
:::

::: code-group
```html
<div class="card-event-long animate-on-hover use-brand">
    <time class="event-date">
        <span class="day-number">3</span>
        <span class="month-label">SET</span>
        <span class="year-number">1991</span>
        <span class="day-label">MON</span>
    </time>
    <div class="card-media">
        <img alt="" src="https://placedog.net/500/500" />
    </div>
    <div class="card-content">
        <div>
            <h3 class="card-title">Independence Day</h3>
            <h5 class="card-subtitle">United States Holiday</h5>
        </div>
        <p class="card-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="card-actions card-section-end">
            <button class="button button-small cyan-500-bg">
                lorem
            </button>
            <button class="button button-small orange-500-bg">
                ipsum
            </button>
        </div>
    </div>
    <div class="card-actions card-section-absolute">
        <a href="#">
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </a>
        <a href="#">
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </a>
    </div>
</div>
```
<<< @/../src/components/organisms/card-event-long/index.scss
:::

## Classes

| Class               | Description                                 |
|:--------------------|:--------------------------------------------|
| `animate-active`    | Animation active                            |
| `animate-on-active` | Animation active on .active                 |
| `animate-on-hover`  | Animation active on hover                   |
| `mobile-active`     | Mobile mode active (regardless screen size) |

## SCSS variables

| SCSS Variable | CSS Variable | Description | Accepted Values | Default |
| :--------------|:-------------|:-------------|:-----------------|:---------|
| `$color` | `--event-long-card-main-color` | :x: :first_quarter_moon_with_face: :zap: MAIN color | `color` | `transparent` |
| `$background` | — | :first_quarter_moon_with_face: :zap: Background color | `color` | `same as {$color}` |
| `$on-background` | `--event-long-card-on-main-color` | :first_quarter_moon_with_face: :zap: Text color | `color` | `contrast of {$background}` |
| `$date` | — | :first_quarter_moon_with_face: :zap: Date background color | `color` | `transparent` |
| `$on-date` | — | :first_quarter_moon_with_face: :zap: Date text color | `color` | `inherit` |
| `$title-color` | — | :first_quarter_moon_with_face: :zap: Title color | `color` | `inherit` |
| `$icon-color` | — | :first_quarter_moon_with_face: :zap: Icon color | `color` | `inherit` |
| `$shadow-color` | `--shadow-color` | :first_quarter_moon_with_face: :zap: Shadow color (on `var()` MUST be RGB) | `color` | `0,0,0` |
| `$height` | `--event-long-card-height` | Height | `size` | `160px` |
| `$padding` | `--event-long-card-padding` | Padding | `size` | `24px` |
| `$border-radius` | `--event-long-card-border-radius` | Border radius | `size` | `6px` |
| `$duration` | `--event-long-card-duration` | Transition time | `time` | `0.3s` |
| `$threshold-mobile` | `--event-long-card-threshold-mobile` | :x: Mobile threshold | `size` | `600px` |
| `$-*` | — | All classes active variants | `*` | `*` |

<style lang="scss">
@use "../src/components/organisms/card-event-long";
</style>

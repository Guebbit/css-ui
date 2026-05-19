# Card Event Minimal
<Badge type="tip">Organisms</Badge> <Badge type="info">Cards</Badge> <Badge type="info">Event</Badge>

::: tip INCLUDED
- [SimpleButton](/atoms/button-simple)
:::

## Use

```scss
@use "@guebbit/css-ui/styles" as theme;
@use "@guebbit/css-ui/atoms/button-simple";
@use "@guebbit/css-ui/organisms/card-event-minimal";
```

```scss
@use "@guebbit/css-ui/atoms/button-simple" with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);
@use "@guebbit/css-ui/organisms/card-event-minimal";
```


## Default

::: raw
<!--@include: ../examples/organisms/cards/EventMinimalCard-default.html -->
:::

::: code-group
```html [Default]
<div class="event-minimal-card animate-on-hover">
    <time class="event-date" datetime="2014-02-14">
        <span>16</span>
        <span>Mon</span>
        <span>Feb</span>
    </time>
    <h4 class="event-title">Lorem Ipsum, Dolor sit Amet</h4>
    <div class="simple-button button-pill animate-on-hover core-white-color core-orange-bg">
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        Buy
    </div>
</div>
```
```html [With border]
<div class="event-minimal-card border-on-hover animate-on-hover">
    SAME AS [Default]
</div>
```
:::

## Component CSS

::: code-group
<<< @/../src/components/organisms/card-event-minimal/_architecture.scss [_architecture.scss]
<<< @/../src/components/organisms/card-event-minimal/index.scss [index.scss]
:::


## Classes

| Class                | Description                                 |
|:---------------------|:--------------------------------------------|
| `animate-active`     | Animation active                            |
| `animate-on-active`  | Animation active on .active                 |
| `animate-on-hover`   | Animation active on hover                   |
| `border-active`      | Border active                               |
| `border-on-active`   | Border active on .active                    |
| `border-on-hover`    | Border active on hover                      |
| `mobile-active`      | Mobile mode active (regardless screen size) |

## SCSS variables

| SCSS Variable | CSS Variable | Description | Accepted Values | Default |
| :--------------|:-------------|:-------------|:-----------------|:---------|
| `$color` | `--event-minimal-card-main-color` | :x: :first_quarter_moon_with_face: :zap: MAIN color | `color` | `transparent` |
| `$background` | — | :first_quarter_moon_with_face: :zap: Background color | `color` | `same as {$color}` |
| `$on-background` | `--event-minimal-card-on-main-color` | :first_quarter_moon_with_face: :zap: Text color | `color` | `contrast of {$background}` |
| `$title-color` | — | :first_quarter_moon_with_face: :zap: Title color | `color` | `inherit` |
| `$date-color` | — | :first_quarter_moon_with_face: :zap: Date color | `color` | `inherit` |
| `$border-color` | `--event-minimal-card-border-color` | :first_quarter_moon_with_face: :zap: Border color (when active) | `color` | `contrast of {$color}` |
| `$border-size` | `--event-minimal-card-border-size` | Border size (when active) | `size` | `2px` |
| `$padding` | `--event-minimal-card-padding` | Padding | `size` | `6px` |
| `$duration` | `--event-minimal-card-duration` | Transition time | `time` | `0.3s` |
| `$threshold-mobile` | `--event-minimal-card-threshold-mobile` | Mobile threshold (NO CSS var) | `size` | `600px` |
| `$-*` | — | All classes active variants | `*` | `*` |
<style lang="scss">
@use "../src/components/organisms/card-event-minimal/index.scss";
</style>

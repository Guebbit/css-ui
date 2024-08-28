# Event Minimal Card
<Badge type="tip">Organisms</Badge> <Badge type="info">Cards</Badge> <Badge type="info">Event</Badge>

::: tip INCLUDED
- [SimpleButton](/atoms/buttons/SimpleButton)
:::

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/buttons/SimpleButton" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
@use "@guebbit/css-ui/src/organisms/cards/EventMinimalCard" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
```

```scss
@use "@guebbit/css-ui/src/atoms/buttons/SimpleButton" with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);
@use "@guebbit/css-ui/src/organisms/cards/EventMinimalCard" with (
    $active-border-color: theme.$primary-color,
    $date-color: theme.$primary-color,
    $active-date-color: theme.$secondary-color,

    $active-border-color--dark: theme.$primary-color,
    $date-color--dark: theme.$primary-color,
    $active-date-color--dark: theme.$secondary-color,
);
```

## Default

::: raw
<div class="dev-section without-restrictions">
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
    <div class="event-minimal-card border-on-hover animate-on-hover">
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
</div>
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

<<< @/../src/organisms/cards/EventMinimalCard.scss [CSS]

## Documentation CSS

```scss
@use "../../theme" as theme;
@use "../src/atoms/buttons/SimpleButton.scss";
@use "../src/organisms/cards/EventMinimalCard" with (
    $active-border-color: theme.$primary-color,
    $date-color: theme.$primary-color,
    $active-date-color: theme.$secondary-color,

    $active-border-color--dark: theme.$primary-color,
    $date-color--dark: theme.$primary-color,
    $active-date-color--dark: theme.$secondary-color,
);
```

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

| Variable            | Description                                                     | Accepted Values | Default                     |
|:--------------------|:----------------------------------------------------------------|:----------------|:----------------------------|
| `$color`            | :x: :first_quarter_moon_with_face: :zap: MAIN color             | `color`         | `transparent`               |
| `$background`       | :first_quarter_moon_with_face: :zap: Background color           | `color`         | `same as {$color}`          |
| `$on-background`    | :first_quarter_moon_with_face: :zap: Text color                 | `color`         | `contrast of {$background}` |
| `$title-color`      | :first_quarter_moon_with_face: :zap: Title color                | `color`         | `inherit`                   |
| `$date-color`       | :first_quarter_moon_with_face: :zap: Date color                 | `color`         | `inherit`                   |
| `$border-color`     | :first_quarter_moon_with_face: :zap: Border color (when active) | `color`         | `contrast of {$color}`      |
| `$border-size`      | Border size (when active)                                       | `size`          | `2px`                       |
| `$padding`          | Padding                                                         | `size`          | `6px`                       |
| `$duration`         | Transition time                                                 | `time`          | `0.3s`                      |
| `$threshold-mobile` | Mobile threshold (NO CSS var)                                   | `size`          | `600px`                     |
| `$-*`               | All classes active variants                                     | `*`             | `*`                         |

<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/buttons/SimpleButton" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
@use "../src/organisms/cards/EventMinimalCard.scss" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
</style>

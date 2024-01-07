# Event Minimal Card
<Badge type="tip">Organisms</Badge> <Badge type="info">Cards</Badge> <Badge type="info">Event</Badge>

::: tip INCLUDED
- [SimpleButton](/atoms/buttons/SimpleButton)
:::

## Code

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
<<< @/../components/organisms/cards/EventMinimalCard.scss [CSS]
:::


## Documentation CSS

```scss
@use "docs/theme.scss" as theme;
@use "components/organisms/cards/EventMinimalCard.scss" as * with (
    $on-color: #fff,
    $date-color: theme.$primary-color,
    $active-on-background: #fff,
    $active-date-color: theme.$secondary-color,
);
@use "components/atoms/buttons/SimpleButton.scss";
```

## Classes

| Class                 | Description                 |
|:----------------------|:----------------------------|
| `animate-active`      | Animation active            |
| `animate-on-active`   | Animation active on .active |
| `animate-on-hover`    | Animation active on hover   |
| `animate-on-hover`    | Animation active on hover   |
| `border-active`       | Border active               |
| `border-on-active`    | Border active on .active    |
| `border-on-hover`     | Border active on hover      |

## SCSS variables

| Variable            | Description                   | Accepted Values | Default                     |
|:--------------------|:------------------------------|:----------------|:----------------------------|
| `$color`            | MAIN color (NO CSS var)       | `color`         | `transparent`               |
| `$on-color`         | MAIN on-color (NO CSS var)    | `color`         | `contrast of {$color}`      |
| `$background`       | Background color              | `color`         | `same as {$color}`          |
| `$on-background`    | Text color                    | `color`         | `contrast of {$background}` |
| `$title-color`      | Title color                   | `size`          | `inherit`                   |
| `$icon-color`       | Icon color                    | `size`          | `currentcolor`              |
| `$date-color`       | Date color                    | `size`          | `same as {$color}`          |
| `$border-size`      | Border size (when active)     | `size`          | `2px`                       |
| `$border-color`     | Border color (when active)    | `color`         | `contrast of {$color}`      |
| `$padding`          | Padding                       | `size`          | `6px`                       |
| `$duration`         | Transition time               | `time`          | `0.3s`                      |
| `$threshold-mobile` | Mobile threshold (NO CSS var) | `size`          | `600px`                     |
| `$-*`               | All classes active variants   | `*`             | `*`                         |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/organisms/cards/EventMinimalCard.scss" as * with (
    $on-color: #fff,
    $date-color: theme.$primary-color,
    $active-on-background: #fff,
    $active-date-color: theme.$secondary-color,
);
@use "components/atoms/buttons/SimpleButton.scss";
</style>

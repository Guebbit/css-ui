# Event Long Card
<Badge type="tip">Atom</Badge> <Badge type="info">Cards</Badge> <Badge type="info">Event</Badge>

::: tip INCLUDED
- [SimpleButton](/atoms/buttons/SimpleButton)
:::

## Code

::: raw
<div class="dev-section without-restrictions">
    <div class="event-long-card animate-on-hover">
        <time class="event-date" datetime="1991-09-03">
            <span class="day-number">3</span>
            <span class="month-label">SET</span>
            <span class="year-number">1991</span>
            <span class="day-label">TUE</span>
        </time>
        <div class="card-image">
            <img alt="" src="https://placekitten.com/500/500" />
        </div>
        <div class="card-content">
            <div>
                <h3 class="card-title">Lorem Ipsum Sit Amet</h3>
                <h5 class="card-subtitle">Consectetur Adipiscing Elit</h5>
            </div>
            <p class="card-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div class="card-actions card-actions-end">
                <button class="simple-button button-small" style="--background: rgb(var(--primary-color))">
                    lorem
                </button>
                <button class="simple-button button-small" style="--background: rgb(var(--primary-color))">
                    ipsum
                </button>
            </div>
        </div>
        <div class="card-actions card-actions-absolute">
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
</div>
:::

::: code-group
```html
<div class="event-long-card animate-on-hover">
    <time class="event-date">
        <span class="day-number">3</span>
        <span class="month-label">SET</span>
        <span class="year-number">1991</span>
        <span class="day-label">MON</span>
    </time>
    <div class="card-image">
        <img alt="" src="https://placekitten.com/500/500" />
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
        <div class="card-actions card-actions-end">
            <button class="simple-button button-small" style="--background: rgb(var(--primary-color))">
                lorem
            </button>
            <button class="simple-button button-small" style="--background: rgb(var(--primary-color))">
                ipsum
            </button>
        </div>
    </div>
    <div class="card-actions card-actions-absolute">
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
<<< @/../components/organisms/cards/EventLongCard.scss
:::

## Documentation CSS

```scss
@use "docs/theme.scss" as theme;
@use "components/organisms/cards/EventLongCard.scss" as * with (
    $on-background: #fff,
    $date: theme.$primary-color,
    $title-color: theme.$primary-color,
    $icon-color: theme.$secondary-color,
    $active-color: theme.$primary-color,
    $active-title-color: #000,
);
@use "components/atoms/buttons/SimpleButton.scss";
```

## Classes

| Class               | Description                                  |
|:--------------------|:---------------------------------------------|
| `animate-active`    | Animation active                             |
| `animate-on-active` | Animation active on .active                  |
| `animate-on-hover`  | Animation active on hover                    |

## SCSS variables

| Variable            | Description                           | Accepted Values | Default                     |
|:--------------------|:--------------------------------------|:----------------|:----------------------------|
| `$color`            | MAIN color (NO CSS var)               | `color`         | `transparent`               |
| `$on-color`         | MAIN on-color (NO CSS var)            | `color`         | `contrast of {$color}`      |
| `$background`       | Background color                      | `color`         | `same as {$color}`          |
| `$on-background`    | Text color                            | `color`         | `contrast of {$background}` |
| `$date`             | Date background color                 | `color`         | `transparent`               |
| `$on-date`          | Date text color                       | `color`         | `inherit`                   |
| `$title-color`      | Title and subtitle color              | `color`         | `inherit`                   |
| `$icon-color`       | Icon color                            | `color`         | `currentcolor`              |
| `$shadow-color`     | Shadow color (on `var()` MUST be RGB) | `color`         | `0,0,0`                     |
| `$height`           | Height                                | `size`          | `200px`                     |
| `$padding`          | Padding                               | `size`          | `16px`                      |
| `$border-radius`    | Time background color                 | `size`          | `6px`                       |
| `$duration`         | Time background color                 | `time`          | `0.3s`                      |
| `$mobile-threshold` | Mobile threshold (NO CSS var)         | `size`          | `600px`                     |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/organisms/cards/EventLongCard.scss" as * with (
    $on-background: #fff,
    $date: theme.$primary-color,
    $title-color: theme.$primary-color,
    $icon-color: theme.$secondary-color,
    $active-color: theme.$primary-color,
    $active-title-color: #000,
);
@use "components/atoms/buttons/SimpleButton.scss";
</style>

# Event Lite Card
<Badge type="tip">Organisms</Badge> <Badge type="info">Cards</Badge> <Badge type="info">Event</Badge>

::: tip INCLUDED
- [SimpleButton](/atoms/buttons/SimpleButton)
:::

## Default

::: raw
<div class="dev-section with-overflow">
    <div class="event-lite-card animate-on-hover">
        <img alt="" class="event-image" src="https://placekitten.com/600/400">
        <time class="event-date" datetime="2014-02-14">
            <span class="event-date-day">14</span>
            <span class="event-date-month">Feb</span>
            <span class="event-date-year">2014</span>
        </time>
        <div class="event-place">
            <h5 class="event-title">Conference in Amsterdam</h5>
            <h6>08 AM - 04 PM</h6>
            <p>Speaker: Daniel Hill</p>
        </div>
        <div class="event-actions">
            <div class="simple-button button-pill animate-on-hover core-cyan-bg">
                <svg class="button-icon" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
                Button
            </div>
            <div class="simple-button button-pill animate-on-hover core-orange-bg">
                <svg class="button-icon" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
                Button
            </div>
        </div>
    </div>
</div>
:::

## With .mobile-active

::: raw
<div class="dev-section">
    <div class="event-lite-card animate-on-hover mobile-active">
        <img alt="" class="event-image" src="https://placekitten.com/600/400">
        <time class="event-date" datetime="2014-02-14">
            <span class="event-date-day">14</span>
            <span class="event-date-month">Feb</span>
            <span class="event-date-year">2014</span>
        </time>
        <div class="event-place">
            <h5 class="event-title">Conference in Amsterdam</h5>
            <h6>08 AM - 04 PM</h6>
            <p>Speaker: Daniel Hill</p>
        </div>
        <div class="event-actions">
            <div class="simple-button button-pill animate-on-hover core-cyan-bg">
                <svg class="button-icon" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
                Button
            </div>
            <div class="simple-button button-pill animate-on-hover core-orange-bg">
                <svg class="button-icon" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
                Button
            </div>
        </div>
    </div>
</div>
:::

## With .border-active

::: tip
Added style: 
- --background: transparent;
- --active-background: transparent; 
- --on-background: #fff; 
- --active-on-background: #fff;
:::

::: raw
<div class="dev-section with-overflow">
    <div 
        class="event-lite-card animate-on-hover border-active" 
        style="--background: transparent; --active-background: transparent; --on-background: #fff; --active-on-background: #fff;"
    >
        <img alt="" class="event-image" src="https://placekitten.com/600/400">
        <time class="event-date" datetime="2014-02-14">
            <span class="event-date-day">14</span>
            <span class="event-date-month">Feb</span>
            <span class="event-date-year">2014</span>
        </time>
        <div class="event-place">
            <h5 class="event-title">Conference in Amsterdam</h5>
            <h6>08 AM - 04 PM</h6>
            <p>Speaker: Daniel Hill</p>
        </div>
        <div class="event-actions">
            <div class="simple-button button-pill animate-on-hover core-cyan-bg">
                <svg class="button-icon" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
                Button
            </div>
            <div class="simple-button button-pill animate-on-hover core-orange-bg">
                <svg class="button-icon" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
                Button
            </div>
        </div>
    </div>
</div>
:::

## With  .border-active AND .mobile-active

::: tip
Added style:
- --background: transparent;
- --active-background: transparent;
- --on-background: #fff;
- --active-on-background: #fff;
:::

<div class="dev-section">
    <div 
        class="event-lite-card animate-on-hover border-active mobile-active" 
        style="--background: transparent; --active-background: transparent; --on-background: #fff; --active-on-background: #fff;"
    >
        <img alt="" class="event-image" src="https://placekitten.com/600/400">
        <time class="event-date" datetime="2014-02-14">
            <span class="event-date-day">14</span>
            <span class="event-date-month">Feb</span>
            <span class="event-date-year">2014</span>
        </time>
        <div class="event-place">
            <h5 class="event-title">Conference in Amsterdam</h5>
            <h6>08 AM - 04 PM</h6>
            <p>Speaker: Daniel Hill</p>
        </div>
        <div class="event-actions">
            <div class="simple-button button-pill animate-on-hover core-cyan-bg">
                <svg class="button-icon" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
                Button
            </div>
            <div class="simple-button button-pill animate-on-hover core-orange-bg">
                <svg class="button-icon" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
                Button
            </div>
        </div>
    </div>
</div>

## Code

::: code-group
```html [Default]
<div class="event-lite-card animate-on-hover">
    <img alt="" class="event-image" src="https://placekitten.com/600/400">
    <time class="event-date" datetime="2014-02-14">
        <span class="event-date-day">14</span>
        <span class="event-date-month">Feb</span>
        <span class="event-date-year">2014</span>
    </time>
    <div class="event-place">
        <h5 class="event-title">Conference in Amsterdam</h5>
        <h6>08 AM - 04 PM</h6>
        <p>Speaker: Daniel Hill</p>
    </div>
    <div class="event-actions">
        <div class="simple-button button-pill animate-on-hover core-cyan-bg">
            <svg class="button-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
            Button
        </div>
        <div class="simple-button button-pill animate-on-hover core-orange-bg">
            <svg class="button-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
            Button
        </div>
    </div>
</div>
```
<<< @/../components/organisms/cards/EventLiteCard.scss
:::


## Documentation CSS

```scss
@use "docs/theme.scss" as theme;
@use "components/organisms/cards/EventLiteCard.scss" as * with (
    $color: #fff,
    $title-color: theme.$primary-color,
    $border-color: theme.$primary-color,
    $active-title-color: theme.$secondary-color,
    $active-border-color: theme.$secondary-color,
);
@use "components/atoms/buttons/SimpleButton.scss";
```

## Classes

| Class               | Description                                 |
|:--------------------|:--------------------------------------------|
| `mobile-active`     | Mobile mode active (regardless screen size) |
| `animate-active`    | Animation active                            |
| `animate-on-active` | Animation active on .active                 |
| `animate-on-hover`  | Animation active on hover                   |
| `border-active`     | Border active                               |
| `border-on-active`  | Border active on .active                    |
| `border-on-hover`   | Border active on hover                      |

## SCSS variables

| Variable            | Description                           | Accepted Values | Default                     |
|:--------------------|:--------------------------------------|:----------------|:----------------------------|
| `$color`            | MAIN color (NO CSS var)               | `color`         | `transparent`               |
| `$background`       | Background color                      | `color`         | `same as {$color}`          |
| `$on-background`    | Text color                            | `color`         | `contrast of {$background}` |
| `$title-color`      | Title color                           | `size`          | `inherit`                   |
| `$date-color`       | Date color                            | `size`          | `inherit`                   |
| `$border-color`     | Border color (when active)            | `color`         | `same as {$color}`          |
| `$shadow-color`     | Shadow color (on `var()` MUST be RGB) | `color`         | `0,0,0`                     |
| `$border-size`      | Border size (when active)             | `size`          | `2px`                       |
| `$height`           | Height                                | `size`          | `160px`                     |
| `$padding`          | Padding                               | `size`          | `24px`                      |
| `$border-radius`    | Border radius                         | `size`          | `6px`                       |
| `$border-width`     | Border width                          | `size`          | `2px`                       |
| `$duration`         | Transition time                       | `time`          | `0.3s`                      |
| `$threshold-mobile` | Mobile threshold (NO CSS var)         | `size`          | `600px`                     |
| `$-*`               | All classes active variants           | `*`             | `*`                         |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/organisms/cards/EventLiteCard.scss" as * with (
    $color: #fff,
    $title-color: theme.$primary-color,
    $border-color: theme.$primary-color,
    $active-title-color: theme.$secondary-color,
    $active-border-color: theme.$secondary-color,
);
@use "components/atoms/buttons/SimpleButton.scss";
</style>

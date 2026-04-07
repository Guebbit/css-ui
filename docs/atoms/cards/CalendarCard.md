# Calendar Card
<Badge type="tip">Atom</Badge> <Badge type="info">Card</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/cards/calendar-card/index";
```

Colors and design tokens are controlled via CSS custom properties:
```html
<div class="calendar-card" style="--calendar-card-header: #ff6b35;">
```

## Default

<div class="dev-section">
    <div class="calendar-card animate-on-hover" style="font-size: 2em;">
        <header class="calendar-head">
            May
            <small>2019</small>
        </header>
        <time class="calendar-body" datetime="2019-05-27">
            <div class="calendar-info-label">Monday</div>
            <div class="calendar-info-day">27</div>
            <div class="calendar-info-time">
                <span>21</span>
                <span>05</span>
            </div>
        </time>
    </div>
    <div class="calendar-card animate-on-hover" style="font-size: 2em;">
        <time class="calendar-body" datetime="2019-05-27">
            <div class="calendar-info-label">Monday</div>
            <div class="calendar-info-day">27</div>
        </time>
    </div>
</div>

::: code-group
```scss [Default]
<div class="calendar-card animate-on-hover" style="font-size: 2em;">
    <header class="calendar-head">
        May
        <small>2019</small>
    </header>
    <time class="calendar-body" datetime="2019-05-27">
        <div class="calendar-info-label">Monday</div>
        <div class="calendar-info-day">27</div>
        <div class="calendar-info-time">
            <span>21</span>
            <span>05</span>
        </div>
    </time>
</div>
```
```scss [Small]
<div class="calendar-card animate-on-hover" style="font-size: 2em;">
    <time class="calendar-body" datetime="2019-05-27">
        <div class="calendar-info-label">Monday</div>
        <div class="calendar-info-day">27</div>
    </time>
</div>
```
:::

## Component CSS

<<< @/../src/atoms/cards/calendar-card/index.scss


## Classes

| Class                              | Description                                |
|:-----------------------------------|:-------------------------------------------|
| `animate-active`                   | Animation active                           |
| `animate-on-active`                | Animation active on .active                |
| `animate-on-hover`                 | Animation active on hover                  |

## CSS Custom Properties

| Property                                 | Description                                      | Default         |
|:-----------------------------------------|:-------------------------------------------------|:----------------|
| `--calendar-card-header`                 | Header background color                          | `primary-500`   |
| `--calendar-card-on-header`              | Header text color                                | `on-primary-500`|
| `--calendar-card-background`             | Body background (transparency not available)     | `surface-100`   |
| `--calendar-card-on-background`          | Body text color                                  | `on-surface-100`|
| `--calendar-card-clip-color`             | Clips color                                      | `primary-700`   |
| `--calendar-card-shadow-color`           | Shadow color                                     | `primary-900`   |
| `--calendar-card-active-header`          | Active/hover header background                   | `primary-600`   |
| `--calendar-card-active-on-header`       | Active/hover header text color                   | `on-primary-600`|
| `--calendar-card-active-background`      | Active/hover body background                     | `surface-200`   |
| `--calendar-card-active-on-background`   | Active/hover body text color                     | `on-surface-200`|
| `--calendar-card-active-clip-color`      | Active/hover clips color                         | `primary-800`   |
| `--calendar-card-active-shadow-color`    | Active/hover shadow color                        | `primary-900`   |
| `--calendar-card-padding`                | Padding size                                     | `24px`          |
| `--calendar-card-duration`               | Duration of transition                           | `0.3s`          |

<style lang="scss">
@use "../src/atoms/cards/calendar-card/index";
</style>
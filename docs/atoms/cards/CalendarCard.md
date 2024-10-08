# Calendar Card
<Badge type="tip">Atom</Badge> <Badge type="info">Card</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/cards/CalendarCard" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/cards/CalendarCard" with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);
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

<<< @/../src/atoms/cards/CalendarCard.scss


## Classes

| Class                              | Description                                |
|:-----------------------------------|:-------------------------------------------|
| `animate-active`                   | Animation active                           |
| `animate-on-active`                | Animation active on .active                |
| `animate-on-hover`                 | Animation active on hover                  |

## SCSS variables

| Variable         | Description                                                                         | Accepted Values | Default                     |
|:-----------------|:------------------------------------------------------------------------------------|:----------------|:----------------------------|
| `$header`        | :zap: :first_quarter_moon_with_face:  Header background color                       | `color`         | `#000`                      |
| `$on-header`     | :zap: :first_quarter_moon_with_face: Header text color                              | `color`         | `contrast of {$color}`      |
| `$background`    | :zap: :first_quarter_moon_with_face: Body background (transparency not available)   | `color`         | `tint 80% of {$color}`      |
| `$on-background` | :zap: :first_quarter_moon_with_face: Body text color                                | `color`         | `contrast of {$background}` |
| `$clip-color`    | :zap: :first_quarter_moon_with_face: Clips color                                    | `color`         | `shade 40% of {$color}`     |
| `$shadow-color`  | :zap: :first_quarter_moon_with_face: Shadow color (on `var()` MUST be RGB)          | `color`         | `#000`                      |
| `$padding`       | Padding size                                                                        | `color`         | `24px`                      |
| `$duration`      | Duration of transition                                                              | `time`          | `0.3s`                      |

<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/cards/CalendarCard" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
</style>
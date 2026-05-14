# Calendar Card
<Badge type="tip">Atom</Badge> <Badge type="info">Card</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/cards/calendar-card";
```



## Default

::: raw                                                
    <div class="dev-section">
<!--@include: ../../examples/atoms/cards/CalendarCard-default.html -->
    </div>
:::

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

Component color is inherited from utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`).

| Property | Default |
|:---------|:--------|
| `--calendar-card-padding` | `24px` |
| `--calendar-card-duration` | `0.3s` |


<style lang="scss">
@use "../src/atoms/cards/calendar-card";
</style>

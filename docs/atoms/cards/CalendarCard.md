# Calendar Card
<Badge type="tip">Atom</Badge> <Badge type="info">Card</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/cards/calendar-card/index";
```

Color is now always applied via utility classes (not SCSS color variables):

- `.bg-{role}` → background + on-color
- `.text-{role}` → text color
- `.border-{role}` → border color
- `.use-{role}` → sets `--css-ui-main-color` for internal component color usage

```html
<div class="text-primary">...</div>
<button class="bg-primary">...</button>
<button class="border-primary text-primary">...</button>
<div class="use-primary">...</div>
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

Component color is inherited from utility classes (`.bg-{role}`, `.text-{role}`, `.border-{role}`, `.use-{role}`).

| Property | Default |
|:---------|:--------|
| `--calendar-card-padding` | `24px` |
| `--calendar-card-duration` | `0.3s` |


<style lang="scss">
@use "../src/atoms/cards/calendar-card/index";
</style>
# Opening Hours List
<Badge type="tip">Molecules</Badge> <Badge type="info">Typography</Badge>

::: tip VARIANT Dependencies
- [SimpleList](/molecules/lists/SimpleList)
:::

## Regular

::: raw
<div class="dev-section without-restrictions">
    <ul class="opening-hours-list background-infinite animate-on-hover">
        <li class="today">
            <span class="label">Domenica</span>
            <span class="hours">9.00 - 23.30</span>
        </li>
        <li class="closed">
            <span class="label">Lunedì</span>
            <span class="hours">Chiuso</span>
        </li>
        <li>
            <span class="label">Martedì</span>
            <span class="hours">10.00 - 24.00</span>
        </li>
        <li>
            <span class="label">Mercoledì</span>
            <span class="hours">12.00 - 20.00</span>
        </li>
        <li>
            <span class="label">Giovedì</span>
            <span class="hours">10.00 - 24.00</span>
        </li>
        <li>
            <span class="label">Venerdì</span>
            <span class="hours">10.00 - 24.00</span>
        </li>
        <li>
            <span class="label">Sabato</span>
            <span class="hours">10.00 - 12.00</span>
        </li>
    </ul></div>
:::

::: code-group
```html
<ul class="opening-hours-list background-infinite animate-on-hover">
    <li class="today">
        <span class="label">Domenica</span>
        <span class="hours">9.00 - 23.30</span>
    </li>
    <li class="closed">
        <span class="label">Lunedì</span>
        <span class="hours">Chiuso</span>
    </li>
    <li>
        <span class="label">Martedì</span>
        <span class="hours">10.00 - 24.00</span>
    </li>
    <li>
        <span class="label">Mercoledì</span>
        <span class="hours">12.00 - 20.00</span>
    </li>
    <li>
        <span class="label">Giovedì</span>
        <span class="hours">10.00 - 24.00</span>
    </li>
    <li>
        <span class="label">Venerdì</span>
        <span class="hours">10.00 - 24.00</span>
    </li>
    <li>
        <span class="label">Sabato</span>
        <span class="hours">10.00 - 12.00</span>
    </li>
</ul>
```
<<< @/../components/molecules/lists/OpeningHoursList.scss
:::

## Classes

| Class                 | Description                          |
|:----------------------|:-------------------------------------|
| `background-infinite` | Line's background goes beyond limits |
| `animate-active`      | Animation active (on LI)             |
| `animate-on-active`   | Animation active on .active (on LI)  |
| `animate-on-hover`    | Animation active on hover (on LI)    |


## SCSS variables

| Variable                                | Description                     | Accepted Values | Default                    |
|:----------------------------------------|:--------------------------------|:----------------|:---------------------------|
| `$opening-hours-list-neutral-color`     | Background in normal days       | `color`         | `guebbit.$black`           |
| `$opening-hours-list-neutral-on-color`  | Text color in normal days       | `color`         | `contrast of above`        |
| `$opening-hours-list-today-color`       | Background in current day       | `color`         | `guebbit.$green-500`       |
| `$opening-hours-list-today-on-color`    | Text color in current day       | `color`         | `contrast of above`        |
| `$opening-hours-list-closed-color`      | Background in closed days       | `color`         | `guebbit.$red-500`         |
| `$opening-hours-list-closed-on-color`   | Text color in closed days       | `color`         | `contrast of above`        |
| `$opening-hours-list-*****-odd-******`  | Same as above, but on ODD days  | `*`             | `* with different opacity` |
| `$opening-hours-list-*****-even-******` | Same as above, but on EVEN days | `*`             | `* with different opacity` |
| `$opening-hours-list-active-*****`      | Same as above, but when ACTIVE  | `*`             | `*`                        |


<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/molecules/lists/OpeningHoursList.scss" as * with (
    $opening-hours-list-neutral-color: theme.$primary-color,
);
</style>
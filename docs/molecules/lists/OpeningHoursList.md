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


## Component CSS

<<< @/../src/molecules/lists/OpeningHoursList.scss

## Documentation CSS

```scss
@use "docs/theme.scss" as theme;
@use "src/molecules/lists/OpeningHoursList.scss";
```

## Classes

| Class                 | Description                          |
|:----------------------|:-------------------------------------|
| `background-infinite` | Line's background goes beyond limits |
| `animate-active`      | Animation active (on LI)             |
| `animate-on-active`   | Animation active on .active (on LI)  |
| `animate-on-hover`    | Animation active on hover (on LI)    |


## SCSS variables

| Variable                | Description                                                                                           | Accepted Values | Default                    |
|:------------------------|:------------------------------------------------------------------------------------------------------|:----------------|:---------------------------|
| `$neutral-color`        | :x: :zap: :first_quarter_moon_with_face:  Background in normal days                                   | `color`         | `#000` / `#fff`            |
| `$today-color`          | :x: :zap: :first_quarter_moon_with_face:  Background in current day                                   | `color`         | `guebbit.$green-500`       |
| `$closed-color`         | :x: :zap: :first_quarter_moon_with_face:  Background in closed days                                   | `color`         | `guebbit.$red-500`         |
| `$*****-odd-******`     | :zap: :first_quarter_moon_with_face:  Same as above, but on ODD days                                  | `*`             | `* with different opacity` |
| `$*****-odd-on-******`  | :zap: :first_quarter_moon_with_face:  Same as above, but on ODD days                                  | `*`             | `* with different opacity` |
| `$*****-even-******`    | :zap: :first_quarter_moon_with_face:  Same as above, but on EVEN days                                 | `*`             | `* with different opacity` |
| `$*****-even-on-******` | :zap: :first_quarter_moon_with_face:  Same as above, but on EVEN days                                 | `*`             | `* with different opacity` |
| `$active-*****`         | :zap: :first_quarter_moon_with_face:  Same as above, but when ACTIVE (no ODD or EVEN on active modes) | `*`             | `*`                        |
| `$active-on-*****`      | :zap: :first_quarter_moon_with_face:  Same as above, but when ACTIVE (no ODD or EVEN on active modes) | `*`             | `*`                        |


<style lang="scss">
@use "docs/theme.scss" as theme;
@use "src/molecules/lists/OpeningHoursList.scss";
</style>
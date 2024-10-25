# SimpleChip
<Badge type="tip">Atom</Badge> <Badge type="info">Generics</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/generics/SimpleChip" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/generics/SimpleChip" with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);
```

## test





<div class="dev-section">
    <div class="simple-chip2 animate-on-hover">
        Something
    </div>
    <div class="simple-chip2 animate-on-hover">
        <svg class="chip-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        Something
        <svg class="chip-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </div>
    <div class="simple-chip2 chip-rounded animate-on-hover">
        Something
    </div>
    <div class="simple-chip2 chip-rounded animate-on-hover">
        <svg class="chip-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        Something
        <svg class="chip-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </div>
</div>





<div class="dev-section">
    <!-- #region xs -->
    <div class="simple-chip2 animate-on-hover chip-xs">
        <svg class="chip-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        EXTRA SMALL
    </div>
    <!-- #endregion xs -->
    <!-- #region sm -->
    <div class="simple-chip2 animate-on-hover chip-sm">
        <svg class="chip-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        SMALL
    </div>
    <!-- #endregion sm -->
    <!-- #region md -->
    <div class="simple-chip2 animate-on-hover">
        <svg class="chip-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        MEDIUM
    </div>
    <!-- #endregion md -->
    <!-- #region lg -->
    <div class="simple-chip2 animate-on-hover chip-lg">
        <svg class="chip-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        LARGE
    </div>
    <!-- #endregion lg -->
    <!-- #region xl -->
    <div class="simple-chip2 animate-on-hover chip-xl">
        <svg class="chip-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        EXTRA LARGE
    </div>
    <!-- #endregion xl -->
</div>





## Default

<div class="dev-section">
    <!--@include: ../../atoms/generics/SimpleChip.html -->
</div>

::: code-group
<<< @/atoms/generics/SimpleChip.html#icon-svg [icon-svg]
<<< @/atoms/generics/SimpleChip.html#icon-text [icon-text]
<<< @/atoms/generics/SimpleChip.html#icon-image [icon-image]
<<< @/atoms/generics/SimpleChip.html#long-icon-svg [long-icon-svg]
<<< @/atoms/generics/SimpleChip.html#long-icon-text [long-icon-text]
<<< @/atoms/generics/SimpleChip.html#long-icon-image [long-icon-image]
:::

## Column mode

<div class="dev-section">
    <!--@include: ../../atoms/generics/SimpleChip-column.html -->
</div>

::: code-group
<<< @/atoms/generics/SimpleChip-column.html#icon-svg [icon-svg]
<<< @/atoms/generics/SimpleChip-column.html#icon-text [icon-text]
<<< @/atoms/generics/SimpleChip-column.html#icon-image [icon-image]
<<< @/atoms/generics/SimpleChip-column.html#long-icon-svg [long-icon-svg]
<<< @/atoms/generics/SimpleChip-column.html#long-icon-text [long-icon-text]
<<< @/atoms/generics/SimpleChip-column.html#long-icon-image [long-icon-image]
:::

## Component CSS

<<< @/../src/atoms/generics/SimpleChip.scss

## Classes

| Class                | Description                         |
|:---------------------|:------------------------------------|
| `animate-active`     | Simple transition active            |
| `animate-on-active`  | Simple transition active on .active |
| `animate-on-hover`   | Simple transition active on hover   |
| `column-mode`        | Position of icon                    |


## SCSS variables

| Variable     | Description                                           | Accepted Values | Default |
|:-------------|:------------------------------------------------------|:----------------|:--------|
| `$color`     | :zap: Color of icon                                   | `color`         | `0.4s`  |
| `$rotate`    | :zap: :first_quarter_moon_with_face: Rotation of icon | `degrees`       | `0`     |
| `$scale`     | :zap: Scale of icon                                   | `percentage`    | `1`     |
| `$slide-x`   | :zap: Translate X axis of icon                        | `size`          | `0`     |
| `$slide-y`   | :zap: Translate Y axis of icon                        | `size`          | `0`     |
| `$duration`  | Transition duration                                   | `time`          | `0.3s`  |

<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/generics/SimpleChip" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix,
    $active-rotate: 20deg,
    $active-scale: 1.2,
    $active-slide-y: -50%,
);
</style>
# Simple Input
<Badge type="tip">Atoms</Badge> <Badge type="info">Input</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/inputs/SimpleInput" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/inputs/SimpleInput" with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/inputs/SimpleInput" with (
    $color: (var(--primary-500) / .5),
    $active-color: (var(--secondary-500) / .5)
);
```

## Basics

::: raw
<div class="dev-section">
    <div class="simple-input">
        <input id="simple-input-id-basic" type="text" />
        <label for="simple-input-id-basic">Simple Input</label>
    </div>
</div>
:::

::: code-group
```html
<div class="simple-input">
    <input type="text" />
</div>
```
:::

## Variants

::: raw
<div class="dev-section">
    <!--@include: ../../atoms/inputs/SimpleInput.html -->
</div>
:::

::: code-group
<<< @/atoms/inputs/SimpleInput.html#outlined [Outlined]
<<< @/atoms/inputs/SimpleInput.html#plain [Plain]
<<< @/atoms/inputs/SimpleInput.html#flat [Flat]
<<< @/atoms/inputs/SimpleInput.html#elevated [Elevated]
<<< @/atoms/inputs/SimpleInput.html#rounded [Rounded]
:::


## Advanced
Javascript is needed to correctly handle the label. 
*.input-is-filled* must be added if input has value, CSS can't handle this.

::: raw
<div class="dev-section">
    <div class="simple-input animate-on-focus input-label-float">
        <input id="simple-input-id-basic" type="text" />
        <label for="simple-input-id-basic">Simple Input</label>
    </div>
</div>
:::

::: code-group
```html
<div class="simple-input animate-on-focus input-label-float">
    <input type="text" />
</div>
```
:::

## Component CSS

<<< @/../src/atoms/inputs/SimpleInput.scss

## Classes

| Class                | Description                                                                                            |
|:---------------------|:-------------------------------------------------------------------------------------------------------|
| `{effect}-active`    | {effect} active                                                                                        |
| `{effect}-on-active` | {effect} active on .active                                                                             |
| `{effect}-on-hover`  | {effect} active on hover                                                                               |
| `{effect}-on-focus`  | {effect} active on focus (within)                                                                      |
| `input-elevated`     | More box-shadow                                                                                        |
| `input-rounded`      | Slightly rounded borders                                                                               |
| `input-blurred`      | Background has filter: blur                                                                            |
| `input-transparent`  | Forced transparent border and, if present, global "on-color" font color                                |
| `input-outlined`     | border (all) active at half size + background transparent                                              |
| `input-plain`        | background transparent and $background color become text color (inherit if $background is transparent) | |
| `input-flat`         | Remove box shadow                                                                                      |
| `input-label-float`  | Label is on input and float up only when focused or value is present (JS IS NEEDED)                    |
| `input-is-filled`    | Need to be applied via CSS to `input-label-float` when value is present                                |

## SCSS variables

| Variable                 | Description                                                                                                   | Accepted Values | Default                       |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------|:----------------|:------------------------------|
| `$color`                 | :x: MAIN color                                                                                                | `color`         | `transparent`                 |
| `$background`            | :zap: :first_quarter_moon_with_face: Background color                                                         | `color`         | `same as {$color}`            |
| `$on-background`         | :zap: :first_quarter_moon_with_face: Text color                                                               | `color`         | `contrast of {$background}`   |
| `$padding`               | Padding of content                                                                                            | `size`          | `24px`                        |
| `$duration`              | Padding                                                                                                       | `duration`      | `0.3s`                        |
| `$elevated-shadow`       | Box-shadow instruction                                                                                        | `css`           | `box-shadow`                  |


<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/inputs/SimpleInput" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix,
);
</style>


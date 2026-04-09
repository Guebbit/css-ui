# Highlight Rollup

<Badge type="tip">Atom</Badge> <Badge type="info">Highlight</Badge>

::: danger TODO
Some highlight-rollup-* missing
:::

::: raw
<div class="dev-section">
    <!--@include: ../../atoms/highlights/HighlightRollup.html -->
</div>
:::

## Use

```scss
@use "@guebbit/css-ui/src/atoms/highlights/highlight-rollup";
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
<button class="use-primary">...</button>
```


## Default

::: code-group
<<< @/atoms/highlights/HighlightRollup.html#down-to-up [down-to-up]
<<< @/atoms/highlights/HighlightRollup.html#right-to-left [right-to-left]
<<< @/atoms/highlights/HighlightRollup.html#up-to-down [up-to-down]
<<< @/atoms/highlights/HighlightRollup.html#left-to-right [left-to-right]
<<< @/atoms/highlights/HighlightRollup.html#skew-right-to-left [skew-right-to-left]
<<< @/atoms/highlights/HighlightRollup.html#skew-left-to-right [skew-left-to-right]
:::

## Component CSS

<<< @/../src/atoms/highlights/highlight-rollup/index.scss

## Classes

| Class                         | Description                 |
|:------------------------------|:----------------------------|
| `animate-active`              | Animation active            |
| `animate-on-active`           | Animation active on .active |
| `animate-on-hover`            | Animation active on hover   |
| `highlight-rollup-horizontal` | Horizontal animation        |
| `highlight-rollup-reverse`    | Animation reverse direction |
| `highlight-rollup-skew`       | Skew animation              |


## SCSS variables

| Variable        | Description                                           | Accepted Values | Default            |
|:----------------|:------------------------------------------------------|:----------------|:-------------------|
| `$color`        | :zap: :first_quarter_moon_with_face: Background color | `color`         | `#000` / `#fff`    |
| `$duration`     | Animation duration                                    | `time`          | `0.2s`             |
| `$active-color` | Active background color                               | `color`         | `same as {$color}` |
| `$padding`      | Padding                                               | `size`          | `1em 2em`          |

## Theming

Use theme utility classes (`.bg-{role}`, `.text-{role}`, `.border-{role}`) to apply colors.

<style lang="scss">
@use "../src/atoms/highlights/highlight-rollup";
</style>

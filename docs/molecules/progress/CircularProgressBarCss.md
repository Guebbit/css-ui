# Circular Progress Bar Svg
<Badge type="tip">Molecule</Badge> <Badge type="info">Progress</Badge>


::: danger TODO
Transition\animation not working
REDO (https://codepen.io/fuzzywalrus/pen/OxYENY/ ??)
:::

::: tip
Suggested aria attributes:

- role="progressbar"
- aria-valuenow="60" (value)
- aria-valuemin="0"
- aria-valuemax="100"
  :::


## Use

```scss
@use "@guebbit/css-ui/styles" as theme;
@use "@guebbit/css-ui/molecules/progress-circular-css" with (
    $css-ui-base-prefix: theme.$css-ui-base-prefix
);
```

```scss
@use "@guebbit/css-ui/styles" as theme;
@use "@guebbit/css-ui/molecules/progress-circular-css" with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);
```


## Default

::: raw
<div class="dev-section">
<!--@include: ../../examples/molecules/progress/CircularProgressBarCss.html -->
</div>
:::

::: code-group
<<< @/examples/molecules/progress/CircularProgressBarCss.html#default [default]
<<< @/examples/molecules/progress/CircularProgressBarCss.html#simplified [simplified]
<<< @/../src/components/molecules/progress-circular-css/index.scss [CSS]
:::

## Classes

| Class               | Description                               |
|:--------------------|:------------------------------------------|
| `numberless-mode`   | Remove central number                     |
| `simplified-mode`   | Remove central hole, becomes regular cake |

## SCSS variables

| SCSS Variable | CSS Variable | Description | Accepted Values | Default |
| :--------------|:-------------|:-------------|:-----------------|:---------|
| `$color` | `--circular-progress-bar-css-main-color` | Main color | `color` | `transparent` |
| `$on-color` | `--circular-progress-bar-css-on-main-color` | Secondary color | `color` | `transparent` |
| `$background` | — | Background color | `color` | `transparent` |
| `$text-color` | — | Text color | `color` | `transparent` |
<style lang="scss">
@use "../src/components/molecules/progress-circular-css";
</style>

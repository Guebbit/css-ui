# Button Expressive
<Badge type="tip">Molecule</Badge> <Badge type="info">buttons</Badge>

::: danger WORK IN PROGRESS
Will be a collection of strange and various buttons
:::

::: tip VARIANT Dependencies
- [Button](/components/atoms/button)
- [HighlightRollup](/components/atoms/highlight-rollup)
- [HighlightPopup](/components/atoms/highlight-popup)
:::

## Use

```scss
@use "@guebbit/css-ui/styles" as theme;
@use "@guebbit/css-ui/molecules/button-expressive";
```

```scss
@use "@guebbit/css-ui/styles" as theme;
@use "@guebbit/css-ui/molecules/button-expressive";
```


## Rollup button
Integrate [HighlightRollup](/components/atoms/highlight-rollup) 

::: raw
<div class="dev-section">
<!--@include: ../../examples/molecules/button-expressive-rollup.html -->
</div>
:::

::: code-group
<<< @/examples/molecules/button-expressive-rollup.html#down-to-up [down-to-up]
<<< @/examples/molecules/button-expressive-rollup.html#right-to-left [right-to-left]
<<< @/examples/molecules/button-expressive-rollup.html#up-to-down [up-to-down]
<<< @/examples/molecules/button-expressive-rollup.html#left-to-right [left-to-right]
<<< @/examples/molecules/button-expressive-rollup.html#skew-right-to-left [skew-right-to-left]
<<< @/examples/molecules/button-expressive-rollup.html#skew-left-to-right [skew-left-to-right]
:::

## Popup button
Integrate [HighlightPopup](/components/atoms/highlight-popup)
Force background transparency or it would mess up the result.

::: raw
<div class="dev-section">
<!--@include: ../../examples/molecules/button-expressive-popup.html -->
</div>
:::

::: code-group
<<< @/examples/molecules/button-expressive-popup.html#horizontal-invalid [horizontal-invalid]
<<< @/examples/molecules/button-expressive-popup.html#vertical-invalid [vertical-invalid]
<<< @/examples/molecules/button-expressive-popup.html#horizontal [horizontal]
<<< @/examples/molecules/button-expressive-popup.html#vertical [vertical]
<<< @/examples/molecules/button-expressive-popup.html#explosion [explosion]
<<< @/examples/molecules/button-expressive-popup.html#fill [fill]
<<< @/examples/molecules/button-expressive-popup.html#fill-circle [fill-circle]
<<< @/examples/molecules/button-expressive-popup.html#fill-icon [fill-icon]
<<< @/examples/molecules/button-expressive-popup.html#drop [drop]
<<< @/examples/molecules/button-expressive-popup.html#bounce [bounce]
:::

## Strong elevation button

::: raw
<div class="dev-section">
<!--@include: ../../examples/molecules/button-expressive-elevation.html -->
</div>
:::

::: code-group
<<< @/examples/molecules/button-expressive-elevation.html#default [default]
<<< @/examples/molecules/button-expressive-elevation.html#image [image]
<<< @/examples/molecules/button-expressive-elevation.html#small [small]
<<< @/examples/molecules/button-expressive-elevation.html#rounded [rounded]
<<< @/examples/molecules/button-expressive-elevation.html#outlined [outlined]
<<< @/examples/molecules/button-expressive-elevation.html#custom [custom]
:::

## Solid elevation button

::: raw
<div class="dev-section">
<!--@include: ../../examples/molecules/button-expressive-elevation-solid.html -->
</div>
:::

::: code-group
<<< @/examples/molecules/button-expressive-elevation-solid.html#default [default]
<<< @/examples/molecules/button-expressive-elevation-solid.html#image [image]
<<< @/examples/molecules/button-expressive-elevation-solid.html#small [small]
<<< @/examples/molecules/button-expressive-elevation-solid.html#rounded [rounded]
<<< @/examples/molecules/button-expressive-elevation-solid.html#outlined [outlined]
<<< @/examples/molecules/button-expressive-elevation-solid.html#custom [custom]
:::


## Component CSS

::: code-group
<<< @/../src/components/molecules/button-expressive/_architecture.scss [_architecture.scss]
<<< @/../src/components/molecules/button-expressive/index.scss [index.scss]
:::

## Classes
#### Plus [Button](/components/atoms/button) classes

| Class               | Description                 |
|:--------------------|:----------------------------|
| `animate-active`    | Animation active            |
| `animate-on-active` | Animation active on .active |
| `animate-on-hover`  | Animation active on hover   |
| `rollup-button`     | HighlightRollup mode        |
| `popup-button`      | HighlightPopup mode         |


## SCSS variables
#### Plus [Button](/components/atoms/button) variables
#### Plus [HighlightRollup](/components/atoms/highlight-rollup) variables (prefix: "rollup-")c
#### Plus [HighlightPopup](/components/atoms/highlight-popup) variables (prefix: "popup-")

| SCSS Variable | CSS Variable | Description | Accepted Values | Default |
| :--------------|:-------------|:-------------|:-----------------|:---------|
| `:zap: :first_quarter_moon_with_face: $expressive-color` | — | Text color | `color` | `contrast of {$color}` |
| `:zap: :first_quarter_moon_with_face: $expressive-on-color` | — | Text color | `color` | `contrast of {$color}` |
| `$border-width` | `--expressive-button-border-width` | Border width | `size` | `inherited from Button {$outlined-border-width}` |
| `:zap: :first_quarter_moon_with_face: $border-color` | — | Border color | `color` | `same as {$color}` |
<style lang="scss">
@use "../src/components/atoms/button";
@use "../src/components/molecules/button-expressive";
</style>

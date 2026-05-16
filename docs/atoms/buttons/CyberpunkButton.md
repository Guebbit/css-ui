# Cyberpunk Button
<Badge type="tip">Atom</Badge> <Badge type="info">Buttons</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/buttons/cyberpunk-button";
```



## Default

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/buttons/CyberpunkButton-default.html -->
</div>
:::

```html
<button
    class="cyberpunk-button animate-on-hover"
    data-flicker-text="test toast"
>
    Lorem Ipsum
</button>
```

## Component CSS

::: code-group
<<< @/../src/atoms/buttons/cyberpunk-button/_architecture.scss [_architecture.scss]
<<< @/../src/atoms/buttons/cyberpunk-button/index.scss [index.scss]
:::

## Data attribute

| Class               | Description                                          |
|:--------------------|:-----------------------------------------------------|
| `data-flicker-text` | Optional text shown in glitch layer on interaction   |

## Classes

| Class               | Description                 |
|:--------------------|:----------------------------|
| `animate-active`    | Animation active            |
| `animate-on-active` | Animation active on `.active` |
| `animate-on-hover`  | Animation active on hover   |

## SCSS variables

| SCSS Variable | CSS Variable | Description | Accepted Values | Default |
| :--------------|:-------------|:-------------|:-----------------|:---------|
| `$color` | `--cyberpunk-button-main-color` | :x: Main color | `color` | `#000` / `#fff` |
| `$background` | — | :first_quarter_moon_with_face: Button background | `color` | `same as {$color}` |
| `$on-background` | `--cyberpunk-button-on-main-color` | :first_quarter_moon_with_face: Button text color | `color` | `contrast of {$color}` |
| `$border-color` | `--cyberpunk-button-border-color` | :first_quarter_moon_with_face: Button right border color | `color` | `shade 50% of {$color}` |
| `$duration` | `--cyberpunk-button-duration` | Transition's duration | `time` | `1s` |
<style lang="scss">
@use "../src/atoms/buttons/cyberpunk-button";
</style>

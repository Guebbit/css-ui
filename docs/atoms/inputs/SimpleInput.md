# Simple Input
<Badge type="tip">Atom</Badge> <Badge type="info">Inputs</Badge>

A clean, token-driven `<input>` component with outlined, underlined, and filled variants. Colors are fully theme-controlled via utility classes — no SCSS color variables are needed.

## Use

```scss
@use "@guebbit/css-ui/atoms/input-simple";
```

Color is applied via utility classes (not SCSS color variables):

- `.bg-{role}` → background + on-color
- `.text-{role}` → text color
- `.border-{role}` → border color
- `.use-{role}` → sets `--main-color` / `--on-main-color` / `--active-main-color` / `--active-on-main-color` for full single-class semantic color override

```html
<input class="simple-input use-brand" type="text" placeholder="..." />
```


## Default

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/inputs/SimpleInput-default.html -->
</div>
<div class="dev-section">
<!--@include: ../../examples/atoms/inputs/SimpleInput-primary.html -->
</div>
:::

::: code-group
<<< @/examples/atoms/inputs/SimpleInput-default.html#default [default]
<<< @/examples/atoms/inputs/SimpleInput-default.html#outlined [outlined]
<<< @/examples/atoms/inputs/SimpleInput-default.html#underlined [underlined]
<<< @/examples/atoms/inputs/SimpleInput-default.html#filled [filled]
<<< @/examples/atoms/inputs/SimpleInput-default.html#disabled [disabled]
<<< @/../src/components/atoms/input-simple/index.scss [CSS]
:::


## Classes

| Class               | Description                                                     |
|:--------------------|:----------------------------------------------------------------|
| `input-outlined`    | Always-visible border using `--main-color`; changes on focus   |
| `input-underlined`  | Bottom-border only (no border radius), border uses `--main-color` |
| `input-filled`      | Subtle filled background (`--main-color` at 8% opacity), transparent border until focused |
| `disabled`          | Disabled appearance (also respects `[disabled]`)               |


## CSS Custom Properties

Component color is inherited from utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`).

| Property | Default |
|:---------|:--------|
| `--simple-input-padding` | `8px` |
| `--simple-input-border-radius` | `4px` |
| `--simple-input-border-width` | `1px` |


## SCSS variables

| SCSS Variable | CSS Variable | Description | Type | Default |
| :--------------|:-------------|:-------------|:------|:---------|
| `$padding` | `--simple-input-padding` | Internal padding (v; h is `* 1.5`) | `length` | `8px` |
| `$border-radius` | `--simple-input-border-radius` | Border corner radius | `length` | `4px` |
| `$border-width` | `--simple-input-border-width` | Border thickness | `length` | `1px` |

```scss
@use "@guebbit/css-ui/atoms/input-simple" with (
    $padding: 10px,
    $border-radius: 8px,
    $border-width: 2px
);
```

<style lang="scss">
@use "../src/components/atoms/input-simple";
</style>

# Simple Input
<Badge type="tip">Atom</Badge> <Badge type="info">Inputs</Badge>

A clean, token-driven `<input>` component with outlined, underlined, and filled variants. Colors are fully theme-controlled via utility classes — no SCSS color variables are needed.

## Use

```scss
@use "@guebbit/css-ui/src/atoms/inputs/simple-input";
```

Color is applied via utility classes (not SCSS color variables):

- `.bg-{role}` → background + on-color
- `.text-{role}` → text color
- `.border-{role}` → border color
- `.use-{role}` → sets `--main-color` / `--on-main-color` / `--active-main-color` / `--active-on-main-color` for full single-class semantic color override

```html
<input class="simple-input use-primary" type="text" placeholder="..." />
```


## Default

::: raw
<div class="dev-section">
    <!--@include: ../../atoms/inputs/SimpleInput-default.html -->
</div>
<div class="dev-section">
    <!--@include: ../../atoms/inputs/SimpleInput-primary.html -->
</div>
:::

::: code-group
<<< @/atoms/inputs/SimpleInput-default.html#default [default]
<<< @/atoms/inputs/SimpleInput-default.html#outlined [outlined]
<<< @/atoms/inputs/SimpleInput-default.html#underlined [underlined]
<<< @/atoms/inputs/SimpleInput-default.html#filled [filled]
<<< @/atoms/inputs/SimpleInput-default.html#disabled [disabled]
<<< @/../src/atoms/inputs/simple-input/index.scss [CSS]
:::


## Classes

| Class               | Description                                      |
|:--------------------|:-------------------------------------------------|
| `input-outlined`    | Full-border outline (default style)              |
| `input-underlined`  | Bottom-border only, no border radius             |
| `input-filled`      | Subtle filled background, transparent border     |
| `disabled`          | Disabled appearance (also respects `[disabled]`) |


## CSS Custom Properties

Component color is inherited from utility classes (`.bg-{role}`, `.text-{role}`, `.border-{role}`, `.use-{role}`).

| Property | Default |
|:---------|:--------|
| `--simple-input-padding` | `8px` |
| `--simple-input-border-radius` | `4px` |
| `--simple-input-border-width` | `1px` |


## SCSS variables

| Variable | Description | Type | Default |
|:---------|:------------|:-----|:--------|
| `$padding` | Internal padding (v; h is `* 1.5`) | `length` | `8px` |
| `$border-radius` | Border corner radius | `length` | `4px` |
| `$border-width` | Border thickness | `length` | `1px` |

```scss
@use "@guebbit/css-ui/src/atoms/inputs/simple-input" with (
    $padding: 10px,
    $border-radius: 8px,
    $border-width: 2px
);
```


<style lang="scss">
@use "../src/atoms/inputs/simple-input";
</style>

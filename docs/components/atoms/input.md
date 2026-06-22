# Input
<Badge type="tip">Atom</Badge> <Badge type="info">Inputs</Badge>

A token-driven input component. The `.input` class is applied to a **wrapper element** (e.g. `<div>`); the inner `<input>` inherits all styling from the wrapper and renders without its own background or border. Colors, elevation, shape, and size variants mirror the button component's API.

## Use

```scss
@use "@guebbit/css-ui/atoms/input";
```

Color is applied via utility classes (not SCSS color variables):

- `.use-{role}` → sets `--main-color` / `--on-main-color` / `--active-main-color` / `--active-on-main-color` for full single-class semantic color override

```html
<div class="input use-brand animate-on-hover">
    <input type="text" placeholder="..." />
</div>
```


## Default

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/input-default.html -->
</div>
<div class="dev-section">
<!--@include: ../../examples/atoms/input-primary.html -->
</div>
:::

::: code-group
<<< @/examples/atoms/input-default.html#default [default]
<<< @/examples/atoms/input-default.html#outlined [outlined]
<<< @/examples/atoms/input-default.html#underlined [underlined]
<<< @/examples/atoms/input-default.html#plain [plain]
<<< @/examples/atoms/input-default.html#pill [pill]
<<< @/examples/atoms/input-default.html#icon [icon]
<<< @/examples/atoms/input-default.html#disabled [disabled]
:::


## Component CSS

::: code-group
<<< @/../src/components/atoms/input/_architecture.scss [_architecture.scss]
<<< @/../src/components/atoms/input/index.scss [index.scss]
:::


## Classes

| Class               | Description                                                              |
|:--------------------|:-------------------------------------------------------------------------|
| `animate-active`    | Animation active                                                         |
| `animate-on-active` | Animation active on `.active`                                            |
| `animate-on-hover`  | Animation active on hover                                                |
| `input-outlined`    | Always-visible border using `--main-color`; activates on focus          |
| `input-underlined`  | Bottom-border only, no border radius                                     |
| `input-plain`       | Transparent background                                                   |
| `input-flat`        | No elevation shadow                                                      |
| `input-elevated`    | Elevated shadow (level 4)                                               |
| `input-rounded`     | Rounded corners (`28%`)                                                 |
| `input-pill`        | Pill shape (`5em` border-radius)                                        |
| `input-xs`          | Extra-small size tier                                                    |
| `input-sm`          | Small size tier                                                          |
| `input-lg`          | Large size tier                                                          |
| `input-xl`          | Extra-large size tier                                                    |
| `disabled`          | Disabled appearance (also respects `[disabled]`)                        |


## SCSS variables

| SCSS Variable | CSS Variable | Description | Accepted Values | Default |
| :--------------|:-------------|:-------------|:-----------------|:---------|
| `$padding` | `--input-padding` | Internal padding (h is `* 1.5`) | `size` | `8px` |
| `$border-radius` | `--input-border-radius` | Border corner radius | `size` | `4px` |
| `$border-width` | `--input-border-width` | Default border thickness | `size` | `1px` |
| `$outlined-border-width` | `--input-outlined-border-width` | Border thickness for outlined/underlined variants | `size` | `2px` |
| `$tonal-opacity` | `--input-tonal-opacity` | Background opacity for tonal mode | `number` | `0.08` |

```scss
@use "@guebbit/css-ui/atoms/input" with (
    $padding: 10px,
    $border-radius: 8px,
    $border-width: 2px
);
```

<style lang="scss">
@use "../src/components/atoms/input";
</style>

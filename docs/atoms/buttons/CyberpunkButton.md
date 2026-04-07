# Cyberpunk Button
<Badge type="tip">Atom</Badge> <Badge type="info">Buttons</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/buttons/cyberpunk-button/index";
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
<div class="use-primary">...</div>
```


## Default

::: raw
<div class="dev-section">
    <button
        class="cyberpunk-button animate-on-hover"
        data-flicker-text="test toast"
    >
        Lorem Ipsum
    </button>
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

<<< @/../src/atoms/buttons/cyberpunk-button/index.scss

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

| Variable         | Description                                              | Accepted Values | Default                  |
|:-----------------|:---------------------------------------------------------|:----------------|:-------------------------|
| `$color`         | :x: Main color                                           | `color`         | `#000` / `#fff`          |
| `$background`    | :first_quarter_moon_with_face: Button background         | `color`         | `same of {$color}`       |
| `$on-background` | :first_quarter_moon_with_face: Button text color         | `color`         | `contrast of {$color}`   |
| `$border-color`  | :first_quarter_moon_with_face: Button right border color | `color`         | `shade 50% of {$color}`  |
| `$duration`      | Transition's duration                                    | `time`          | `1s`                     |

## Theming

Use theme utility classes (`.bg-{role}`, `.text-{role}`, `.border-{role}`) to apply colors.

<style lang="scss">
@use "../src/atoms/buttons/cyberpunk-button/index";
</style>

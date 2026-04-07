# Effect Mirror Reflection
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Effect</Badge>

::: warning
 - *position:relative;* NEEDED
 - *overflow:hidden;* NEEDED
:::

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/effect-mirror-reflection";
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
<div class="dev-section with-restrictions">
    <div class="effect-mirror-reflection-animate-on-hover" style="position:relative; overflow:hidden;">
        <div class="effect-mirror-reflection"></div>
        <img class="card-background" alt="" src="https://placedog.net/1000/600"/>
    </div>
</div>
:::

```html
<div class="effect-mirror-reflection-animate-on-hover" style="position:relative; overflow:hidden;">
    <div class="effect-mirror-reflection"></div>
    <img class="card-background" alt="" src="https://placedog.net/1000/600" />
</div>
```


## Component CSS

<<< @/../src/atoms/animations/effect-mirror-reflection/index.scss


## Classes

| Class                                        | Description                            |
|:---------------------------------------------|:---------------------------------------|
| `animate-active`                             | Animation active                       |
| `animate-on-active`                          | Animation active on .active            |
| `animate-on-hover`                           | Animation active on hover              |
| `effect-mirror-reflection-animate-active`    | *EXTERNAL* animation active            |
| `effect-mirror-reflection-animate-on-active` | *EXTERNAL* animation active on .active |
| `effect-mirror-reflection-animate-on-hover`  | *EXTERNAL* animation active on hover   |

## CSS Custom Properties

Component color is inherited from utility classes (`.bg-{role}`, `.text-{role}`, `.border-{role}`, `.use-{role}`).

| Property | Default |
|:---------|:--------|
| `--effect-mirror-reflection-duration` | `0.3s` |
| `--effect-mirror-reflection-opacity` | `0.2` |
| `--effect-mirror-reflection-rotation` | `35deg` |
| `--effect-mirror-reflection-position-top` | `-70%` |
| `--effect-mirror-reflection-active-opacity` | `0.2` |
| `--effect-mirror-reflection-active-rotation` | `10deg` |
| `--effect-mirror-reflection-active-position-top` | `-40%` |


<style lang="scss">
@use "../src/atoms/animations/effect-mirror-reflection";
</style>

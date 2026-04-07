# Corner Ribbon
<Badge type="tip">Atom</Badge> <Badge type="info">Highlights</Badge>

::: warning
- *position:relative;* NEEDED
- Add a SPAN container to 180 rotate text in the bottom ribbons
:::
- 
## Use

```scss
@use "@guebbit/css-ui/src/atoms/highlights/corner-ribbon";
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

::: raw
<div class="dev-section">
    <div id="corner-ribbon-test-container">
        <div class="corner-ribbon ribbon-top-left"><span>ribbon</span></div>
        <div class="corner-ribbon ribbon-top-right"><span>ribbon</span></div>
        <div class="corner-ribbon ribbon-bottom-left"><span><span>ribbon</span></span></div>
        <div class="corner-ribbon ribbon-bottom-right"><span><span>ribbon</span></span></div>
    </div>
</div>
:::


::: code-group
```html [top-left]
<div class="corner-ribbon ribbon-top-left"><span>ribbon</span></div>
```
```html [top-right]
<div class="corner-ribbon ribbon-top-right"><span>ribbon</span></div>
```
```html [bottom-left]
<div class="corner-ribbon ribbon-bottom-left"><span><span>ribbon</span></span></div>
```
```html [bottom-right]
<div class="corner-ribbon ribbon-bottom-right"><span><span>ribbon</span></span></div>
```
:::

## Component CSS

<<< @/../src/atoms/highlights/corner-ribbon/index.scss

## Documentation CSS

```scss
#corner-ribbon-test-container {
  position: relative;
  width: 600px;
  height: 400px;
  background: #aaa;
}
```


## SCSS variables

| Variable         | Description                                                          | Accepted Values | Default                 |
|:-----------------|:---------------------------------------------------------------------|:----------------|:------------------------|
| `$color`         | :x: Main color                                                       | `color`         | `#000` / `#fff`         |
| `$background`    | :first_quarter_moon_with_face: Background color                      | `color`         | `#fff`                  |
| `$on-background` | :first_quarter_moon_with_face: Text color                            | `color`         | `contrast of {$color}`  |
| `$fold-color`    | :first_quarter_moon_with_face: Ribbon fold color                     | `color`         | `shade 50% of {$color}` |
| `$shadow`        | :first_quarter_moon_with_face: Shadow color (on `var()` MUST be RGB) | `color`         | `0,0,0`                 |
| `$size`          | Size of ribbon                                                       | `size`          | `150px`                 |
| `$height`        | Custom adjust (needed)                                               | `size`          | `1/3 of {size} -2px`    |
| `$font-size`     | Custom adjust (needed)                                               | `size`          | `18px`                  |
| `$padding`       | Ribbon padding                                                       | `size`          | `1/10 of {size}`        |

## Theming

Use theme utility classes (`.bg-{role}`, `.text-{role}`, `.border-{role}`) to apply colors.

<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/highlights/corner-ribbon";

#corner-ribbon-test-container{
  position: relative;
  width: 600px;
  height: 400px;
  background: #aaa;
}
</style>

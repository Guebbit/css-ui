# Corner Ribbon
<Badge type="tip">Atom</Badge> <Badge type="info">Highlights</Badge>

::: warning
- *position:relative;* NEEDED
- Add a SPAN container to 180 rotate text in the bottom ribbons
:::
- 
## Use

```scss
@use "@guebbit/css-ui/atoms/highlight-corner-ribbon";
```



## Default

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/highlights/CornerRibbon-default.html -->
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

::: code-group
<<< @/../src/components/atoms/highlight-corner-ribbon/_architecture.scss [_architecture.scss]
<<< @/../src/components/atoms/highlight-corner-ribbon/index.scss [index.scss]
:::

## Documentation CSS

```scss
#corner-ribbon-test-container {
  position: relative;
  width: 600px;
  height: 400px;
  background: #aaa;
}
```


## Classes

| Class | Description |
|:------|:------------|
| `corner-ribbon` | Component root |
| `ribbon-top-left` | Attach the ribbon to the top-left corner |
| `ribbon-top-right` | Attach the ribbon to the top-right corner |
| `ribbon-bottom-left` | Attach the ribbon to the bottom-left corner |
| `ribbon-bottom-right` | Attach the ribbon to the bottom-right corner |

## SCSS variables

| SCSS Variable | CSS Variable | Description | Accepted Values | Default |
| :--------------|:-------------|:-------------|:-----------------|:---------|
| `$color` | `--corner-ribbon-main-color` | :x: Main color | `color` | `#000` / `#fff` |
| `$background` | — | :first_quarter_moon_with_face: Background color | `color` | `#fff` |
| `$on-background` | `--corner-ribbon-on-main-color` | :first_quarter_moon_with_face: Text color | `color` | `contrast of {$color}` |
| `$fold-color` | — | :first_quarter_moon_with_face: Ribbon fold color | `color` | `shade 50% of {$color}` |
| `$shadow` | `--shadow-color` | :first_quarter_moon_with_face: Shadow color (on `var()` MUST be RGB) | `color` | `0,0,0` |
| `$size` | `--corner-ribbon-size` | Size of ribbon | `size` | `150px` |
| `$height` | `--corner-ribbon-height` | Custom adjust (needed) | `size` | `1/3 of {size} -2px` |
| `$font-size` | `--corner-ribbon-font-size` | Custom adjust (needed) | `size` | `18px` |
| `$padding` | `--corner-ribbon-padding` | Ribbon padding | `size` | `1/10 of {size}` |
<style lang="scss">
@use "../src/components/atoms/highlight-corner-ribbon";

#corner-ribbon-test-container{
  position: relative;
  width: 600px;
  height: 400px;
  background: #aaa;
}
</style>

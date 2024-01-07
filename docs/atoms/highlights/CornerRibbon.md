# Corner Ribbon
<Badge type="tip">Atom</Badge> <Badge type="info">Highlights</Badge>

::: warning
- *position:relative;* NEEDED
:::

::: raw
<div class="dev-section">
    <div id="corner-ribbon-test-container">
        <div class="corner-ribbon ribbon-top-left"><span>ribbon</span></div>
        <div class="corner-ribbon ribbon-top-right"><span>ribbon</span></div>
        <div class="corner-ribbon ribbon-bottom-left"><span>ribbon</span></div>
        <div class="corner-ribbon ribbon-bottom-right"><span>ribbon</span></div>
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
<div class="corner-ribbon ribbon-bottom-left"><span>ribbon</span></div>
```
```html [bottom-right]
<div class="corner-ribbon ribbon-bottom-right"><span>ribbon</span></div>
```
<<< @/../components/atoms/highlights/CornerRibbon.scss
:::

## SCSS variables

| Variable                    | Description                            | Accepted Values | Default                 |
|:----------------------------|:---------------------------------------|:----------------|:------------------------|
| `$corner-ribbon-color`      | Background color                       | `color`         | `#fff`                  |
| `$corner-ribbon-on-color`   | Text color                             | `color`         | `contrast of {$color}`  |
| `$corner-ribbon-fold-color` | Ribbon fold color                      | `color`         | `50% shade of {$color}` |
| `$corner-ribbon-shadow`     | Shadow color (on `var()` MUST be RGB)  | `color`         | `0,0,0`                 |
| `$corner-ribbon-size`       | Size of ribbon                         | `size`          | `150px`                 |
| `$corner-ribbon-height`     | Custom adjust (needed)                 | `size`          | `1/3 of {size} -2px`    |
| `$corner-ribbon-font-size`  | Custom adjust (needed)                 | `size`          | `18px`                  |
| `$corner-ribbon-padding`    | Angle of ribbon                        | `size`          | `1/10 of {size}`        |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/highlights/CornerRibbon.scss" as * with (
    $corner-ribbon-color: theme.$primary-color,
);

#corner-ribbon-test-container{
  position: relative;
  width: 600px;
  height: 400px;
  background: #aaa;
}
</style>
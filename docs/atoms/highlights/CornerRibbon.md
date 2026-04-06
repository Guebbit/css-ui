# Corner Ribbon
<Badge type="tip">Atom</Badge> <Badge type="info">Highlights</Badge>

::: warning
- *position:relative;* NEEDED
- Add a SPAN container to 180 rotate text in the bottom ribbons
:::
- 
## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/highlights/corner-ribbon/index" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
```

```scss
@use "@guebbit/css-ui/src/atoms/highlights/corner-ribbon/index";
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

| Variable             | Description                                                          | Accepted Values | Default                 |
|:---------------------|:---------------------------------------------------------------------|:----------------|:------------------------|
| `$size`              | Size of ribbon                                                       | `size`          | `150px`                 |
| `$height`            | Custom adjust (needed)                                               | `size`          | `1/3 of {size} -2px`    |
| `$font-size`         | Custom adjust (needed)                                               | `size`          | `18px`                  |
| `$padding`           | Angle of ribbon                                                      | `size`          | `1/10 of {size}`        |

<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/highlights/corner-ribbon/index" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);

#corner-ribbon-test-container{
  position: relative;
  width: 600px;
  height: 400px;
  background: #aaa;
}
</style>
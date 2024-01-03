# SVG Title
<Badge type="tip">Atom</Badge> <Badge type="info">Typography</Badge>

::: warning
Line height or margins MUST change in relation of the chosen SVG
:::

## Default

::: raw
<h1 class="svg-title svg-title-line" style="font-size:4em; line-height: 4">
    Default
    <svg style="height: 300px; width: 300px;" class="svg-title-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 288 164.67" xml:space="preserve">
         <polyline style="stroke: currentColor; fill:none; stroke-width: 14; stroke-miterlimit: 10" points="0,82.188 54,82.188 108,1.188 152.75,163.063 207.25,19.25 234,82.188 288,82.188 "/>
    </svg>
</h1>
:::

``` html
<h1 class="svg-title svg-title-line" style="font-size:4em; line-height: 4">
    Default
    <svg style="height: 300px; width: 300px;" class="svg-title-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 288 164.67" xml:space="preserve">
         <polyline style="stroke: currentColor; fill:none; stroke-width: 14; stroke-miterlimit: 10" points="0,82.188 54,82.188 108,1.188 152.75,163.063 207.25,19.25 234,82.188 288,82.188 "/>
    </svg>
</h1>
```

## Default (different SVG)

::: raw
<h1 class="svg-title svg-title-line" style="font-size:4em; line-height: 4">
    Default
    <svg style="height: 300px; width: 300px;" class="svg-title-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 281.164 800 37.671" >
        <path d="M800,281.164c-49.44,25.182-225.332,56.213-440.436,14.134C144.461,253.221,0,318.835,0,318.835h800V281.164z"/>
    </svg>
</h1>
:::

``` html
<h1 class="svg-title svg-title-line" style="font-size:4em; line-height: 4">
    Default
    <svg style="height: 300px; width: 300px;" class="svg-title-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 281.164 800 37.671" >
        <path d="M800,281.164c-49.44,25.182-225.332,56.213-440.436,14.134C144.461,253.221,0,318.835,0,318.835h800V281.164z"/>
    </svg>
</h1>
```

## Custom BG image

::: raw
<h1 class="svg-title svg-title-custom-bg" style="font-size:4em; line-height: 4; --image: url('https://assets.guebbit.com/guebbit/images/beatline.svg')">Custom BG image</h1>
:::

``` html
<h1 class="svg-title svg-title-custom-bg" style="font-size:4em; line-height: 4; --image: url('https://assets.guebbit.com/guebbit/images/beatline.svg')">Custom BG image</h1>
```

## Custom Line CSS

::: raw
<h1 class="svg-title svg-title-line-custom" style="font-size:4em; line-height: 4">
    Custom line CSS
    <svg style="height: 300px; width: 300px;" class="svg-title-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 288 164.67" xml:space="preserve">
         <polyline style="stroke: currentColor; fill:none; stroke-width: 14; stroke-miterlimit: 10" points="0,82.188 54,82.188 108,1.188 152.75,163.063 207.25,19.25 234,82.188 288,82.188 "/>
    </svg>
</h1>
:::

``` html
<h1 class="svg-title svg-title-line-custom" style="font-size:4em; line-height: 4">
    Custom line CSS
    <svg style="height: 300px; width: 300px;" class="svg-title-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 288 164.67" xml:space="preserve">
         <polyline style="stroke: currentColor; fill:none; stroke-width: 14; stroke-miterlimit: 10" points="0,82.188 54,82.188 108,1.188 152.75,163.063 207.25,19.25 234,82.188 288,82.188 "/>
    </svg>
</h1>
```


::: code-group




<<< @/../components/atoms/typography/SvgTitle.scss
:::


## Classes

| Class                 | Description                                                                                             |
|:----------------------|:--------------------------------------------------------------------------------------------------------|
| `svg-title-line`      | Simple line behind title and image (use --svg-title-background if image has transparency in the middle) |
| `svg-title-custom-bg` | Image\svg as background-image (use --svg-title-image)                                                   |


## SCSS variables

| Variable                  | Description                                                                        | Accepted Values | Default                |
|:--------------------------|:-----------------------------------------------------------------------------------|:----------------|:-----------------------|
| `$svg-title-color`        | Svg color                                                                          | `color`         | `#000`                 |
| `$svg-title-on-color`     | Text color                                                                         | `color`         | `contrast of {$color}` |
| `$svg-title-background`   | Background needed if image\svg has empty spaces in the middle while using the line | `color`         | `transparent`          |
| `$svg-title-line-height`  | Line height of line                                                                | `size`          | `0.2em`                |
| `$svg-title-shadow-color` | Text shadow color                                                                  | `color`         | `#000`                 |
| `$svg-title-shadow-color` | Shadow color (on `var()` MUST be RGB)                                              | `color`         | `0,0,0`                |


<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/typography/SvgTitle.scss" as * with (
    $svg-title-color: theme.$primary-color,
    $svg-title-background: theme.$background-color,
);

.svg-title {
  &.svg-title-line-custom{
    --background: transparent;

    &::after,
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: -2;
      background-color: var(--color);
      height: var(--line-height);
      width: 50%;
    }
    &:after{
      left: -100px;
    }
    &:before{
      right: -100px;
    }
  }
}
</style>
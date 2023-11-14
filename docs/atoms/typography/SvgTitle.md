# SVG Title
<Badge type="tip">Atom</Badge> <Badge type="info">Typography</Badge>

::: warning
Line height or margins MUST change in relation of the chosen SVG
:::

## Code

::: raw
<div class="dev-section without-restrictions">
    <!--@include: ../../public/components-html/atoms/typography/SvgTitle.html -->
</div>
:::

::: code-group
<<< @/public/components-html/atoms/typography/SvgTitle.html#default [default]
<<< @/public/components-html/atoms/typography/SvgTitle.html#default2 [default2]
<<< @/public/components-html/atoms/typography/SvgTitle.html#custom-bg [custom-bg]
<<< @/public/components-html/atoms/typography/SvgTitle.html#custom-css [custom-css]
<<< @/../components/atoms/typography/SvgTitle.scss
:::


## Classes

| Class                 | Description                                                                                             |
|:----------------------|:--------------------------------------------------------------------------------------------------------|
| `svg-title-line`      | Simple line behind title and image (use --svg-title-background if image has transparency in the middle) |
| `svg-title-custom-bg` | Image\svg as background-image (use --svg-title-image)                                                   |


## SCSS variables

| Variable                  | Description                                                                        | Accepted Values | Default                           |
|:--------------------------|:-----------------------------------------------------------------------------------|:----------------|:----------------------------------|
| `$svg-title-color`        | Svg color                                                                          | `color`         | `#000`                            |
| `$svg-title-on-color`     | Text color                                                                         | `color`         | `contrast of {$color}`            |
| `$svg-title-background`   | Background needed if image\svg has empty spaces in the middle while using the line | `color`         | `transparent`                     |
| `$svg-title-line-height`  | Line height of line                                                                | `size`          | `0.2em`                           |
| `$svg-title-shadow-color` | Text shadow color                                                                  | `color`         | `#000`                            |
| `$svg-title-shadow`       | Box-shadow instruction                                                             | `css`           | `box-shadow with {$shadow-color}` |


<style lang="scss">
@import "docs/theme.scss";

$svg-title-color: $primary-color;
$svg-title-background: #1b1b1f;

.svg-title {
  &.svg-title-line-custom{
    --svg-title-background: transparent;

    &::after,
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: -2;
      background-color: var(--svg-title-color);
      height: var(--svg-title-line-height);
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

@import "components/atoms/typography/SvgTitle.scss";
</style>
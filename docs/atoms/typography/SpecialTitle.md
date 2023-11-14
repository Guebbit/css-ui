# Special Title
<Badge type="tip">Atom</Badge> <Badge type="info">Typography</Badge>

## Code

::: raw
<div class="dev-section without-restrictions">
    <!--@include: ../../public/components-html/atoms/typography/SpecialTitle.html -->
</div>
:::

::: code-group
<<< @/public/components-html/atoms/typography/SpecialTitle.html#characters [characters]
<<< @/public/components-html/atoms/typography/SpecialTitle.html#characters-line [characters-line]
<<< @/public/components-html/atoms/typography/SpecialTitle.html#shadow [shadow]
<<< @/public/components-html/atoms/typography/SpecialTitle.html#strong-shadow [strong-shadow]
<<< @/public/components-html/atoms/typography/SpecialTitle.html#line [line]
<<< @/public/components-html/atoms/typography/SpecialTitle.html#full-line [full-line]
<<< @/public/components-html/atoms/typography/SpecialTitle.html#strong-shadow-line [strong-shadow-line]
<<< @/public/components-html/atoms/typography/SpecialTitle.html#line-border [line-border]
<<< @/public/components-html/atoms/typography/SpecialTitle.html#line-border-shadow [line-border-shadow]
<<< @/public/components-html/atoms/typography/SpecialTitle.html#custom-css [custom-css]
:::

## CUSTOM

::: code-group
<<< @/public/components-html/atoms/typography/SpecialTitle.html#custom-css [html]
``` css [css]
.special-title {
  &.custom-css{
    --special-title-strong-shadow: 0px 0px 20px #fff, 0px 0px 20px #fff, 0px 0px 20px #fff;
    --special-title-line-height: 1.2em;

    &.title-with-line-border {
      &::after{
        width: 50%;
        border-top-style: solid;
      }
      &::before{
        content: "";
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        width: 50%;
        z-index: -1;
        border-top-style: dotted;
        border-top-width: var(--special-title-line-height);
        border-top-color: var(--special-title-on-color);
      }
    }
  }
}
```
:::


## CSS

::: code-group
<<< @/../components/atoms/typography/SpecialTitle.scss
:::


## Classes

| Class                      | Description                                                     |
|:---------------------------|:----------------------------------------------------------------|
| `title-with-shadow`        | Text with shadow                                                |
| `title-with-strong-shadow` | Text with much stronger shadow                                  |
| `title-with-line`          | Line behind text                                                |
| `title-with-full-line`     | Line behind text with 100% height, similar to regular highlight |
| `title-with-line-border`   | Line behind text is a border (with various styles)              |
| `special-title-enlarge`    | CHILD: text is larger (could need --special-title-adjust        |
| `special-title-color`      | Text color change to main color                                 |
| `special-title-highlight`  | Background color (and relative contrast color)                  |



## SCSS variables

| Variable                          | Description                                                          | Accepted Values | Default                           |
|:----------------------------------|:---------------------------------------------------------------------|:----------------|:----------------------------------|
| `$special-title-color`            | Title elements color                                                 | `color`         | `#000`                            |
| `$special-title-on-color`         | Text color                                                           | `color`         | `contrast of {$color}`            |
| `$special-title-adjust`           | May be needed to fix the position of some special characters         | `size`          | `0`                               |
| `$special-title-shadow-color`     | Shadow color                                                         | `color`         | `#000`                            |
| `$special-title-shadow`           | Box-shadow instruction                                               | `css`           | `box-shadow with {$shadow-color}` |
| `$special-title-strong-shadow`    | Stronger box-shadow instruction                                      | `css`           | `box-shadow with {$shadow-color}` |
| `$special-title-border-style`     | title-with-line-border only                                          | `border-style`  | `solid`                           |
| `$special-title-line-background`  | title-with-line only: needed to hide line so it doesn't overlap text | `color`         | `#fff`                            |
| `$special-title-line-color`       | title-with-line only: line color                                     | `color`         | `same as {$color}`                |
| `$special-title-line-on-color`    | title-with-line only: text color (relative to line)                  | `color`         | `contrast of {$line-color}`       |
| `$special-title-line-height`      | title-with-line only: line height                                    | `size`          | `0.2em`                           |

<style lang="scss">
@import "docs/theme.scss";

$special-title-color: $primary-color;
$special-title-line-background: #1b1b1f;
$special-title-adjust: -0.15em;
$special-title-shadow-color: $secondary-color;
$special-title-line-on-color: $secondary-color;
$special-title-border-style: dashed;

.special-title{
  font-size: 3em;
  margin: 1em auto;
}


.special-title {
  &.custom-css{
    --special-title-strong-shadow: 0px 0px 20px #fff, 0px 0px 20px #fff, 0px 0px 20px #fff;
    --special-title-line-height: 1.2em;

    &.title-with-line-border {
      &::after{
        width: 50%;
        border-top-style: solid;
      }
      &::before{
        content: "";
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        width: 50%;
        z-index: -1;
        border-top-style: dotted;
        border-top-width: var(--special-title-line-height);
        border-top-color: var(--special-title-on-color);
      }
    }
  }
}

@import "components/atoms/typography/SpecialTitle.scss";
</style>
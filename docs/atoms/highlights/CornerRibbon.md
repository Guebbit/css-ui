# Corner Ribbon
<Badge type="tip">Atom</Badge> <Badge type="info">Highlights</Badge>

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/highlights/CornerRibbon.html -->
</div>
:::


::: code-group
<<< @/public/components-html/atoms/highlights/CornerRibbon.html
<<< @/../components/atoms/highlights/CornerRibbon.scss
:::

## SCSS variables

| Variable                        | Description            | Accepted Values | Default                     |
|:--------------------------------|:-----------------------|:----------------|:----------------------------|
| `$corner-ribbon-size`           | Size of ribbon         | `size`          | `150px`                     |
| `$corner-ribbon-padding`        | Angle of ribbon        | `size`          | `1/10 of {size}`            |
| `$corner-ribbon-span-height`    | Custom adjust (needed) | `size`          | `1/3 of {size}`             |
| `$corner-ribbon-font-size`      | Custom adjust (needed) | `size`          | `18px`                      |
| `$corner-ribbon-background`     | Background color       | `color`         | `#fff`                      |
| `$corner-ribbon-text`           | Text color             | `color`         | `contrast of {$background}` |
| `$corner-ribbon-shadow`         | Shadow color           | `color`         | `#000`                      |

<style lang="scss">
@import "docs/theme.scss";

#corner-ribbon-test-container{
  position: relative;
  width: 600px;
  height: 400px;
  background: #aaa;
}

$corner-ribbon-background: $primary-color;

@import "components/atoms/highlights/CornerRibbon.scss";
</style>
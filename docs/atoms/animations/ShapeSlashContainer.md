# Shape Slash Container
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge>

::: raw
<div class="dev-section without-restrictions">
    <!--@include: ../../public/components-html/atoms/animations/ShapeSlashContainer.html -->
</div>
:::

::: code-group
<<< @/public/components-html/atoms/animations/ShapeSlashContainer.html
<<< @/../components/atoms/animations/ShapeSlashContainer.scss [CSS]
:::

## SCSS variables

| Variable                               | Description                        | Accepted Values | Default    |
|:---------------------------------------|:-----------------------------------|:----------------|:-----------|
| `$shape-slash-color`                   | Shape color                        | `color`         | `#000`     |
| `$shape-slash-width`                   | Shape size (relative to container) | `size`          | `50%`      |
| `$shape-slash-degree`                  | Inclination (skew) degree          | `degrees`       | `20deg`    |

## Classes

| Class               | Description                     |
|:--------------------|:--------------------------------|
| `shape-inverted`    | Right direction instead of left |

<style lang="scss">
@import "../../theme.scss";

$shape-slash-color: rgba($secondary-color, 0.5); 

.test-shape-slash{
  position: relative; // TODO segnala che è necessario
  overflow: hidden; // TODO segnala che è necessario
  z-index: 1;
  height: 300px;
  background: black;
  margin-bottom: 2em;
}

@import "components/atoms/animations/ShapeSlashContainer.scss";
</style>
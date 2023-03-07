# Button Parallelogram 
<Badge type="tip">Atom</Badge> <Badge type="info">Button</Badge>

## Code

<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/buttons/ButtonParallelogram.html -->
</div>

::: code-group
<<< @/public/components-html/atoms/buttons/ButtonParallelogram.html
<<< @/../components/atoms/buttons/ButtonParallelogram.scss
:::

## SCSS variables

| Variable                            | Description                  | Accepted Values | Default           |
|:------------------------------------|:-----------------------------|:----------------|:------------------|
| `$button-parallelogram-color`       | Color of button              | `size`          | `90px`            |
| `$button-parallelogram-hover-color` | Color of button on **hover** | `color`         | `#000`            |

<style lang="scss">
@import "../../theme.scss";

$button-parallelogram-color: $primary-color;
$button-parallelogram-hover-color: $secondary-color;

@import "components/atoms/buttons/ButtonParallelogram.scss";
</style>
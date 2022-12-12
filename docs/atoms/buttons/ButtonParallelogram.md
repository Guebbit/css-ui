# Button Parallelogram 
<Badge type="tip">Atom</Badge> <Badge type="info">Button</Badge>

## Code

<div class="dev-section">
    <button class="button-parallelogram">
        Lorem Ipsum
    </button>
</div>

```html
    <button class="button-parallelogram">
        Lorem Ipsum
    </button>
```

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
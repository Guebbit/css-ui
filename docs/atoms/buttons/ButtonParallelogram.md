# Button Parallelogram 
<Badge type="tip">Atom</Badge> <Badge type="info">Button</Badge>

## Code

::: raw
<div class="dev-section">
    <button class="button-parallelogram animate-on-hover">
        Lorem Ipsum
    </button>
    <button class="button-parallelogram animate-on-hover" style="--focus-color: rgba(255,255,255,0.5)">
        More focus
    </button>
</div>
:::

::: code-group
``` html
<button class="button-parallelogram animate-on-hover">
    Lorem Ipsum
</button>
```
``` html [focus]
<button class="button-parallelogram animate-on-hover" style="--focus-color: rgba(255,255,255,0.5)">
    Focus
</button>
```
<<< @/../components/atoms/buttons/ButtonParallelogram.scss [css]
:::

## SCSS variables

| Variable           | Description                | Accepted Values | Default                       |
|:-------------------|:---------------------------|:----------------|:------------------------------|
| `$color`           | Backgrkound color          | `color`         | `#000`                        |
| `$on-color`        | Text color                 | `color`         | `contrast as {$color}`        |
| `$active-color`    | ACTIVE background color    | `color`         | `same as {$color}`            |
| `$active-on-color` | ACTIVE text color          | `color`         | `contrast as {$active-color}` |
| `$focus-color`     | ACTIVE lateral focus color | `color`         | `same as {$active-color}`     |
| `$duration`        | Animation duration         | `time`          | `0.3s`                        |
| `$padding`         | Padding                    | `size`          | `8px`                         |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/buttons/ButtonParallelogram.scss" as * with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color
);
</style>
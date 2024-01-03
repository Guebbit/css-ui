# Button Parallelogram 
<Badge type="tip">Atom</Badge> <Badge type="info">Button</Badge>

## Code

<div class="dev-section">
    <button class="button-parallelogram animate-on-hover">
        Lorem Ipsum
    </button>
</div>

::: code-group
``` html
<button class="button-parallelogram animate-on-hover">
    Lorem Ipsum
</button>
```
<<< @/../components/atoms/buttons/ButtonParallelogram.scss
:::

## SCSS variables

| Variable                               | Description                      | Accepted Values | Default            |
|:---------------------------------------|:---------------------------------|:----------------|:-------------------|
| `$button-parallelogram-color`          | Color of button                  | `color`         | `#000`             |
| `$button-parallelogram-active-color`   | Color of button on **hover**     | `color`         | `same as {$color}` |
| `$button-parallelogram-duration`       | Animation duration (NO CSS var)  | `time`          | `0.3s`             |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/buttons/ButtonParallelogram.scss" as * with (
    $button-parallelogram-color: theme.$primary-color,
    $button-parallelogram-active-color: theme.$secondary-color,
);
</style>
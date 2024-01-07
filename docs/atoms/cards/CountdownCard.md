# Countdown Card
<Badge type="tip">Atom</Badge> <Badge type="info">Card</Badge>

::: raw
<div class="dev-section">
    <time class="countdown-card" datetime="2021-11-20">
        <span class="timer">10</span>
        <span class="label">Hours</span>
    </time>
</div>
:::

::: code-group
```html
<time class="countdown-card" datetime="2021-11-20">
    <span class="timer">10</span>
    <span class="label">Hours</span>
</time>
```
<<< @/../components/atoms/cards/CountdownCard.scss [CSS]
:::

## SCSS variables

| Variable                        | Description                            | Accepted Values | Default                |
|:--------------------------------|:---------------------------------------|:----------------|:-----------------------|
| `$countdown-card-color`         | Background color                       | `color`         | `#000`                 |
| `$countdown-card-on-color`      | Text color                             | `color`         | `contrast of {$color}` |
| `$countdown-card-padding`       | Padding size                           | `size`          | `24px`                 |
| `$countdown-card-shadow-color`  | Shadow color (on `var()` MUST be RGB)  | `color`         | `0,0,0`                |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/cards/CountdownCard.scss" as * with (
    $countdown-card-color: theme.$primary-color,
);
</style>
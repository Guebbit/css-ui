# Countdown Card
<Badge type="tip">Molecules</Badge> <Badge type="info">Card</Badge>
::: tip VARIANT Dependencies
- [SimpleCard](/molecules/cards/SimpleCard.md)
:::

::: raw
<div class="dev-section">
    <time class="countdown-card animate-on-hover" datetime="2021-11-20">
        <span class="timer">10</span>
        <span class="label">Hours</span>
    </time>
    <time class="countdown-card card-outlined animate-on-hover" datetime="2021-11-20">
        <span class="timer">10</span>
        <span class="label">Hours</span>
    </time>
</div>
:::

```html
<time class="countdown-card animate-on-hover" datetime="2021-11-20">
    <span class="timer">10</span>
    <span class="label">Hours</span>
</time>
<time class="countdown-card card-outlined animate-on-hover" datetime="2021-11-20">
    <span class="timer">10</span>
    <span class="label">Hours</span>
</time>
```

## Component CSS

<<< @/../components/molecules/cards/CountdownCard.scss

## Documentation CSS

```scss
@use "../../theme" as theme;
@use "../../../components/molecules/cards/CountdownCard" as * with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);
```


## Classes
#### Plus [SimpleCard](/molecules/cards/SimpleCard.md) classes

## SCSS variables
##### Plus [SimpleCard](/molecules/cards/SimpleCard.md) variables


<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/molecules/cards/CountdownCard.scss" as * with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);
</style>
# Countdown Card
<Badge type="tip">Molecules</Badge> <Badge type="info">Card</Badge>
::: tip VARIANT Dependencies
- [SimpleCard](/molecules/cards/SimpleCard.md)
:::

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/molecules/cards/countdown-card";
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/molecules/cards/countdown-card";
```

::: raw
<div class="dev-section">
<!--@include: ../../examples/molecules/cards/CountdownCard-use.html -->
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

::: code-group
<<< @/../src/molecules/cards/countdown-card/_architecture.scss [_architecture.scss]
<<< @/../src/molecules/cards/countdown-card/index.scss [index.scss]
:::

## Classes
#### Plus [SimpleCard](/molecules/cards/SimpleCard.md) classes

No extra component-specific classes beyond the inherited items above.

## SCSS variables
#### Plus [SimpleCard](/molecules/cards/SimpleCard.md) variables

No extra component-specific SCSS variables beyond the inherited items above.

<style lang="scss">
@use "../src/molecules/cards/countdown-card";
</style>

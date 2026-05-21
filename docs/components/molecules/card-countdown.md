# Card Countdown
<Badge type="tip">Molecules</Badge> <Badge type="info">Card</Badge>
::: tip VARIANT Dependencies
- [Card](/components/molecules/card)
:::

## Use

```scss
@use "@guebbit/css-ui/styles" as theme;
@use "@guebbit/css-ui/molecules/card-countdown";
```

```scss
@use "@guebbit/css-ui/styles" as theme;
@use "@guebbit/css-ui/molecules/card-countdown";
```

::: raw
<div class="dev-section">
<!--@include: ../../examples/molecules/cards/CountdownCard-use.html -->
</div>
:::

```html
<time class="card-countdown animate-on-hover use-brand" datetime="2021-11-20">
    <span class="timer">10</span>
    <span class="label">Hours</span>
</time>
<time class="card-countdown card-outlined animate-on-hover use-brand" datetime="2021-11-20">
    <span class="timer">10</span>
    <span class="label">Hours</span>
</time>
```


## Component CSS

::: code-group
<<< @/../src/components/molecules/card-countdown/_architecture.scss [_architecture.scss]
<<< @/../src/components/molecules/card-countdown/index.scss [index.scss]
:::

## Classes
#### Plus [Card](/components/molecules/card) classes

No extra component-specific classes beyond the inherited items above.

## SCSS variables
#### Plus [Card](/components/molecules/card) variables

No extra component-specific SCSS variables beyond the inherited items above.

<style lang="scss">
@use "../src/components/molecules/card-countdown";
</style>

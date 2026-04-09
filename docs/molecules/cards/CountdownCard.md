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

Color is now always applied via utility classes (not SCSS color variables):

- `.bg-{role}` → background + on-color
- `.text-{role}` → text color
- `.border-{role}` → border color
- `.use-{role}` → "jolly" class: sets `--main-color` / `--on-main-color` / `--active-main-color` / `--active-on-main-color` for a full single-class semantic color override

```html
<div class="text-primary">...</div>
<button class="bg-primary">...</button>
<button class="border-primary text-primary">...</button>
<button class="use-primary">...</button>
```

## Component CSS

<<< @/../src/molecules/cards/countdown-card/index.scss

## Classes
#### Plus [SimpleCard](/molecules/cards/SimpleCard.md) classes

## SCSS variables
#### Plus [SimpleCard](/molecules/cards/SimpleCard.md) variables


<style lang="scss">
@use "../src/molecules/cards/countdown-card";
</style>
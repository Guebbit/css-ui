# Info Hover Card
<Badge type="tip">Organisms</Badge> <Badge type="info">Card</Badge>

::: tip VARIANT Dependencies
 - [SimpleCard](/molecules/cards/SimpleCard.md)
:::

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/organisms/cards/info-hover-card";
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/organisms/cards/info-hover-card";
```

::: info
- Custom height: 300px
:::

::: raw
<div class="dev-section">
    <div class="info-hover-card card-plain animate-on-hover border-on-hover card-flat">
        <div class="icon-wrapper">
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
        <div class="card-header">
            <h4 class="card-title">Lorem Ipsum</h4>
        </div>
        <div class="card-content">
            <p>
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            </p>
        </div>
    </div>
    <div class="info-hover-card animate-on-hover">
        <div class="icon-wrapper">
            <img alt="" src="https://placedog.net/800/600" />
        </div>
        <div class="card-header">
            <h4 class="card-title">Lorem Ipsum</h4>
        </div>
        <div class="card-content">
            <p>
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            </p>
        </div>
    </div>
</div>
:::

::: code-group
```html
<div class="info-hover-card card-plain animate-on-hover border-on-hover card-flat">
    <div class="icon-wrapper">
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </div>
    <div class="card-header">
        <h4 class="card-title">Lorem Ipsum</h4>
    </div>
    <div class="card-content">
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
<div class="info-hover-card animate-on-hover">
    <div class="icon-wrapper">
        <img alt="" src="https://placedog.net/800/600" />
    </div>
    <div class="card-header">
        <h4 class="card-title">Lorem Ipsum</h4>
    </div>
    <div class="card-content">
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
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
:::

## Component CSS

<<< @/../src/organisms/cards/info-hover-card/index.scss

## Classes
#### Plus [SimpleCard](/molecules/cards/SimpleCard.md) classes

## SCSS variables
#### Plus [SimpleCard](/molecules/cards/SimpleCard.md) variables

| Variable       | Description      | Accepted Values | Default           |
|:---------------|:-----------------|:----------------|:------------------|
| `$icon-size`   | Text color       | `size`          | `100px`           |

<style lang="scss">
@use "../src/organisms/cards/info-hover-card";
</style>
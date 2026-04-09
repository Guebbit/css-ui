# Icon Focus Button
<Badge type="tip">Molecule</Badge> <Badge type="info">buttons</Badge>

::: tip VARIANT Dependencies
- [SimpleButton](/atoms/buttons/SimpleButton.md)
:::

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/molecules/buttons/icon-focus-button";
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/molecules/buttons/icon-focus-button";
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

## Regular

::: raw
<div class="dev-section">
    <!--@include: ../../molecules/buttons/IconFocusButton.html -->
</div>
:::

::: code-group
<<< @/molecules/buttons/IconFocusButton.html#default [default]
<<< @/molecules/buttons/IconFocusButton.html#image [image]
<<< @/molecules/buttons/IconFocusButton.html#small [small]
<<< @/molecules/buttons/IconFocusButton.html#rounded [rounded]
<<< @/molecules/buttons/IconFocusButton.html#plain [plain]
<<< @/../src/molecules/buttons/icon-focus-button/index.scss [CSS]
:::


## Outlined

::: raw
<div class="dev-section">
    <!--@include: ../../molecules/buttons/IconFocusButton-outlined.html -->
</div>
:::

::: code-group
<<< @/molecules/buttons/IconFocusButton-outlined.html#default [default]
<<< @/molecules/buttons/IconFocusButton-outlined.html#image [image]
<<< @/molecules/buttons/IconFocusButton-outlined.html#small [small]
<<< @/molecules/buttons/IconFocusButton-outlined.html#rounded [rounded]
<<< @/molecules/buttons/IconFocusButton-outlined.html#plain [plain]
<<< @/../src/molecules/buttons/icon-focus-button/index.scss [CSS]
:::

## Classes
#### Plus [SimpleButton](/atoms/buttons/SimpleButton) classes

## SCSS variables
#### Plus [SimpleButton](/atoms/buttons/SimpleButton) variables

<style lang="scss">
@use "../src/molecules/buttons/icon-focus-button";
</style>
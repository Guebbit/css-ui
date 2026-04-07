# Button Large Icon 
<Badge type="tip">Atom</Badge> <Badge type="info">Button</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/buttons/button-large-icon/index";
```

Color is now always applied via utility classes (not SCSS color variables):

- `.bg-{role}` → background + on-color
- `.text-{role}` → text color
- `.border-{role}` → border color

```html
<div class="text-primary">...</div>
<button class="bg-primary">...</button>
<button class="border-primary text-primary">...</button>
```


## Default

::: raw
<div class="dev-section">
    <!--@include: ../../atoms/buttons/ButtonLargeIcon.html -->
</div>
:::

::: code-group
<<< @/atoms/buttons/ButtonLargeIcon.html#default [default]
<<< @/atoms/buttons/ButtonLargeIcon.html#image [image]
<<< @/atoms/buttons/ButtonLargeIcon.html#small [small]
<<< @/atoms/buttons/ButtonLargeIcon.html#rounded [rounded]
<<< @/atoms/buttons/ButtonLargeIcon.html#circular [circular]
<<< @/atoms/buttons/ButtonLargeIcon.html#flat [flat]
<<< @/atoms/buttons/ButtonLargeIcon.html#plain [plain]
<<< @/atoms/buttons/ButtonLargeIcon.html#outlined [outlined]
:::

## Component CSS

<<< @/../src/atoms/buttons/button-large-icon/index.scss 

## Classes

## CSS Custom Properties

Component colors are inherited from utility classes (`.bg-{role}`, `.text-{role}`, `.border-{role}`); use non-color custom properties only for layout/animation tuning.


<style lang="scss">
@use "../src/atoms/buttons/button-large-icon/index";
</style>
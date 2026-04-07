# Rotating Squares
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Progression</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/rotating-squares/index";
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


## Rotating Squares

::: raw
<div class="dev-section">
    <div class="rotating-squares rotating-squares">
        <div></div>
        <div></div>
    </div>
</div>
:::

```html
<div class="rotating-squares rotating-squares">
    <div></div>
    <div></div>
</div>
```

# Commons

::: code-group
<<< @/../src/atoms/animations/rotating-squares/index.scss
:::

## CSS Custom Properties

Component colors are inherited from utility classes (`.bg-{role}`, `.text-{role}`, `.border-{role}`); use non-color custom properties only for layout/animation tuning.


<style lang="scss">
@use "../src/atoms/animations/rotating-squares/index";
</style>
# Gear Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Loading</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/gear-load";
```

Color is now always applied via utility classes (not SCSS color variables):

- `.bg-{role}` → background + on-color
- `.text-{role}` → text color
- `.border-{role}` → border color
- `.use-{role}` → sets `--css-ui-main-color` for internal component color usage

```html
<div class="text-primary">...</div>
<button class="bg-primary">...</button>
<button class="border-primary text-primary">...</button>
<div class="use-primary">...</div>
```


## Default

<div class="dev-section">
    <div class="gear-load animate-on-hover"></div>
    <div class="gear-load animate-active"></div>
</div>

```html
<div class="gear-load animate-on-hover"></div>
<div class="gear-load animate-active"></div>
```


## Component CSS

<<< @/../src/atoms/animations/gear-load/index.scss


## Classes

| Class                   | Description                    |
|:------------------------|:-------------------------------|
| `animate-active`        | Animation active               |
| `animate-on-active`     | Animation active on .active    |
| `animate-on-hover`      | Animation active on hover      |


## CSS Custom Properties

Component color is inherited from utility classes (`.bg-{role}`, `.text-{role}`, `.border-{role}`, `.use-{role}`).

| Property | Default |
|:---------|:--------|
| `--gear-load-size` | `48px` |
| `--gear-load-duration` | `4s` |


<style lang="scss">
@use "../src/atoms/animations/gear-load";
</style>
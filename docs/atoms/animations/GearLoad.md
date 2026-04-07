# Gear Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Loading</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/gear-load/index";
```

Colors and design tokens are controlled via CSS custom properties or `.color-*` utility classes:
```html
<div class="gear-load color-primary animate-on-hover">
<div class="gear-load color-secondary animate-on-hover">
```
Or override inline:
```html
<div class="gear-load" style="--color-background: #ff6b35;">
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

| Property                      | Description                      | Default         |
|:------------------------------|:---------------------------------|:----------------|
| `--gear-load-first-gear`      | First gear color                 | `primary-500`   |
| `--gear-load-second-gear`     | Second gear color                | `primary-500`   |
| `--gear-load-background`      | Background (center of gear)      | `surface-100`   |
| `--gear-load-size`            | Load size                        | `4s`            |
| `--gear-load-duration`        | Animation duration               | `4s`            |


<style lang="scss">
@use "../src/atoms/animations/gear-load/index";
</style>
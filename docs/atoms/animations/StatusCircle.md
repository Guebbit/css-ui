# Status Circle
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/status-circle/index";
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
    <span class="status-circle animate-on-hover" />
    <span class="status-circle animate-active" />
</div>
:::

```html [html]
<span class="status-circle animate-on-hover" />
<span class="status-circle animate-active" />
```

## Component CSS

<<< @/../src/atoms/animations/status-circle/index.scss [css]


## Classes

| Class               | Description                  |
|:--------------------|:-----------------------------|
| `animate-active`    | Pulsing animation            |
| `animate-on-active` | Pulsing animation on .active |
| `animate-on-hover`  | Pulsing animation on hover   | 

## CSS Custom Properties

| Property                             | Description              | Default            |
|:-------------------------------------|:-------------------------|:-------------------|
| `--status-circle-color`              | Main color               | `primary-500`      |
| `--status-circle-pulse-color`        | Pulse color              | `primary-500/0.3`  |
| `--status-circle-active-color`       | Active/hover color       | `primary-600`      |
| `--status-circle-active-pulse-color` | Active/hover pulse color | `primary-600/0.3`  |
| `--status-circle-duration`           | Animation duration       | `1s`               |
| `--status-circle-opacity`            | Pulse opacity            | `0.5`              |


<style lang="scss">
@use "../src/atoms/animations/status-circle/index";
</style>
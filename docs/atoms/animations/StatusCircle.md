# Status Circle
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/atoms/animations/status-circle";
```



## Default

::: raw
    <div class="dev-section">
    <!--@include: ../../examples/atoms/animations/StatusCircle-default.html -->
    </div>
:::

```html [html]
<span class="status-circle animate-on-hover"></span>
<span class="status-circle animate-active"></span>
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

Component color is inherited from utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`).

| Property | Default |
|:---------|:--------|
| `--status-circle-duration` | `1s` |
| `--status-circle-opacity` | `0.5` |


<style lang="scss">
@use "../src/atoms/animations/status-circle";
</style>

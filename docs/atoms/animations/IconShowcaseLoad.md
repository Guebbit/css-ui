# Icon Showcase Load
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">progression</Badge>

## Code

<div class="dev-section">
    <div class="icon-showcase-load">
        <div>A</div>
        <img class="icon" src="https://placekitten.com/50/50" />
        <svg viewBox="0 0 24 24" style="fill: white">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </div>
</div>

```html
    <div class="icon-showcase-load">
        <div>A</div>
        <img class="icon" src="https://placekitten.com/50/50" />
        <svg viewBox="0 0 24 24" style="fill: white">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </div>
```

## SCSS variables

| Variable                          | Description              | Accepted Values | Default   |
|:----------------------------------|:-------------------------|:----------------|:----------|
| `$icon-showcase-load-color`       | Color of border and text | `color`         | `#ffffff` |
| `$icon-showcase-load-background`  | Primary/Background color | `size`          | `#000000` |
| `$icon-showcase-load-duration`    | Duration of animation    | `size`          | `4s`      |
| `$icon-showcase-load-size`        | Size                     | `size`          | `4em`     |
| `$icon-showcase-load-item-number` | Number of items          | `number`        | `3`       |


<style lang="scss">
@import "../../theme.scss";

$icon-showcase-load-background: $primary-color;
$icon-showcase-load-size: 8em;

@import "components/atoms/animations/IconShowcaseLoad.scss";
</style>
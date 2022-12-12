# Status Circle
<Badge type="tip">Atom</Badge> <Badge type="info">Drawing</Badge>

## Code

<div class="dev-section">
    <span class="status-circle" />
    <span class="status-circle pulse-mode" />
</div>

```html
    <span class="status-circle" />

    <span class="status-circle pulse-mode" />
```

## Classes

| Class        | Description       |
|:-------------|:------------------|
| `Pulse mode` | Pulsing animation |

## SCSS variables

| Variable                 | Description     | Accepted Values | Default |
|:-------------------------|:----------------|:----------------|:--------|
| `$status-circle-color`   | Main color      | `color`         | `#000`  |
| `$status-circle-speed`   | Animation speed | `time`          | `1s`    |


<style lang="scss">
@import "../../theme.scss";

$status-circle-color: $primary-color;

@import "components/atoms/drawings/StatusCircle.scss";
</style>
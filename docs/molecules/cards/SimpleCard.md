# Simple Card
<Badge type="tip">Atom</Badge> <Badge type="info">Card</Badge>

## Code

<div class="simple-card">
    <div class="card-toggle">
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </div>
    <div class="card-header">
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        <span class="card-title">Lorem Ipsum</span>
    </div>
    <div class="card-content">
        <small>Ut enim ad minim veniam</small>
        <small>Jan 1997 - Mar 2000</small>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
    </div>
    <div class="card-actions">
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </div>
</div>

```html
    <div class="simple-card">
        <div class="card-toggle">
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
        <div class="card-header">
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
            <span class="card-title">Lorem Ipsum</span>
        </div>
        <div class="card-content">
            <small>Ut enim ad minim veniam</small>
            <small>Jan 1997 - Mar 2000</small>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
        <div class="card-actions">
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
    </div>
```

## SCSS variables

| Variable                     | Description        | Accepted Values | Default                 |
|:-----------------------------|:-------------------|:----------------|:------------------------|
| `$simple-card-background`    | Background color   | `color`         | `transparent`           |
| `$simple-card-color`         | Primary color      | `color`         | `#000000`               |
| `$simple-card-text-color`    | Text color         | `color`         | `#212121`               |
| `$simple-card-shadow-color`  | Shadow color       | `color`         | `#000000`               |
| `$simple-card-icon-color`    | Icon color         | `color`         | `as $simple-card-color` |
| `$$simple-card-border-color` | Border color       | `color`         | `as $simple-card-color` |
| `$simple-card-border-width`  | Border width       | `size`          | `6px`                   |
| `$simple-card-padding`       | Padding of content | `size`          | `24px`                  |




<style lang="scss">
@import "../../theme.scss";

$simple-card-color: $primary-color;

@import "components/molecules/cards/SimpleCard.scss";
</style>
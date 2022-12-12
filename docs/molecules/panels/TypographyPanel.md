# Typography Panel
<Badge type="info">Molecule</Badge> <Badge type="info">Panel</Badge>

## Example

<div class="dev-section">
    <div class="typography-panel">
        <span class="panel-category">Lorem Ipsum</span>
        <h3 class="panel-title">
            Lorem ipsum dolor sit amet, <b class="text-primary">consectetur</b> adipiscing elit
        </h3>
        <p class="panel-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud <b class="text-secondary">exercitation ullamco</b> laboris
            nisi ut aliquip ex ea commodo consequat.
        </p>
        <p class="panel-text">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>
</div>

## Code

```html
<div class="typography-panel">
    <span class="panel-category">Lorem Ipsum</span>
    <h3 class="panel-title">
        Lorem ipsum dolor sit amet, <b class="text-primary">consectetur</b> adipiscing elit
    </h3>
    <p class="panel-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud <b class="text-secondary">exercitation ullamco</b> laboris
        nisi ut aliquip ex ea commodo consequat.
    </p>
    <p class="panel-text">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</div>
```

## SCSS variables

| Variable                  | Description     | Accepted Values | Default           |
|:--------------------------|:----------------|:----------------|:------------------|
| `$typography-panel-color` | Color of button | `color`         | `#000`            |
| `$typography-size`        | Size of text    | `size`          | `14px`            |

<style lang="scss">
@import "../../theme.scss";

$typography-panel-color: $primary-color;

@import "components/molecules/panels/TypographyPanel.scss";
</style>
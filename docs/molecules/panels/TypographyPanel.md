# Typography Panel
<Badge type="info">Molecule</Badge> <Badge type="info">Panel</Badge>

## Code

::: raw
<div class="dev-section">
    <div class="typography-panel">
        <div class="panel-category">Lorem Ipsum</div>
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
:::

::: code-group
```html
<div class="typography-panel">
    <div class="panel-category">Lorem Ipsum</div>
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
<<< @/../components/molecules/panels/TypographyPanel.scss
:::

## SCSS variables

| Variable                        | Description                     | Accepted Values | Default               |
|:--------------------------------|:--------------------------------|:----------------|:----------------------|
| `$typography-color`             | Main background color           | `color`         | `transparent`         |
| `$typography-on-color`          | Main text color                 | `color`         | `inherit`             |
| `$typography-category-color`    | Category (top) background color | `color`         | `same as {$color}`    |
| `$typography-category-on-color` | Category (top) text color       | `color`         | `same as {$on-color}` |
| `$typography-title-color`       | Title background color          | `color`         | `same as {$color}`    |
| `$typography-title-on-color`    | Title text color                | `color`         | `same as {$on-color}` |
| `$typography-text-color`        | Regular background color        | `color`         | `same as {$color}`    |
| `$typography-text-on-color`     | Regular text color              | `color`         | `same as {$on-color}` |
| `$typography-size`              | Size of text                    | `size`          | `14px`                |

<style lang="scss">

@use "docs/theme.scss" as theme;
@use "components/molecules/panels/TypographyPanel.scss" as * with (
    $typography-size: 18px,
    $typography-category-on-color: theme.$secondary-color,
    $typography-title-on-color: theme.$primary-color,
);
</style>
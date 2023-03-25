# Typography Panel
<Badge type="info">Molecule</Badge> <Badge type="info">Panel</Badge>

::: danger DEPENDENCIES
 - components/molecules/panels/HeroPanel.scss
:::

## Code

<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/panels/ActionPanel.html -->
</div>

::: code-group
<<< @/public/components-html/molecules/panels/ActionPanel.html
<<< @/../components/molecules/panels/ActionPanel.scss
:::

## Classes

| Prop             | Description                                     |
|:-----------------|:------------------------------------------------|
| `shadow-active`  | Active shadow (better readability)              |

## SCSS variables

| Variable                         | Description      | Accepted Values | Default   |
|:---------------------------------|:-----------------|:----------------|:----------|
| `$action-panel-mobile-threshold` | Mobile threshold | `size`          | `600px`   |
| `$action-panel-shadow-opacity`   | Shadow opacity   | `0.1 - 0.9`     | `0.4`     |
| `$action-panel-shadow-color`     | Shadow color     | `color`         | `#000000` |

<style lang="scss">
@import "../../theme.scss";

$action-panel-shadow-color: $primary-color;
$hero-panel-shadow-color: $primary-color;

@import "components/molecules/panels/HeroPanel.scss";
@import "components/molecules/panels/ActionPanel.scss";
</style>
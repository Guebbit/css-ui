# Action Panel
<Badge type="info">Molecule</Badge> <Badge type="info">Panel</Badge>

::: tip VARIANT Dependencies
- [HeroPanel](/molecules/panels/HeroPanel)
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

| Variable                            | Description                     | Accepted Values | Default                  |
|:------------------------------------|:--------------------------------|:----------------|:-------------------------|
| `$action-panel-mobile-threshold`    | Mobile threshold  (NO CSS var)  | `size`          | `600px`                  |
| `$action-panel-color`               | Main color                      | `color`         | `#000`                   |
| `$action-panel-on-color`            | Text color                      | `color`         | `#000`                   |
| `$action-panel-shadow-opacity`      | Shadow opacity                  | `0 - 1`         | `0.4`                    |
| `$action-panel-shadow-color`        | Shadow color                    | `color`         | `#000`                   |
| `$action-panel-padding`             | Padding                         | `size`          | `24px`                   |
| `$action-panel-button-background`   | Button background               | `color`         | `same as color`          |
| `$action-panel-button-color`        | Button color                    | `color`         | `contrast of background` |
| `$action-panel-button-shadow-color` | Button shadow color             | `color`         | `contrast of color`      |
| `$action-panel-button-shadow`       | Button box-shadow               | `CSS`           | `*`                      |


<style lang="scss">
@import "docs/theme.scss";

// $action-panel-color: $primary-color;

@import "components/molecules/panels/ActionPanel.scss";
</style>
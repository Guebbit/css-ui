# Typography Panel
<Badge type="info">Molecule</Badge> <Badge type="info">Panel</Badge>

## Code

<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/panels/TypographyPanel.html -->
</div>

::: code-group
<<< @/public/components-html/molecules/panels/TypographyPanel.html
<<< @/../components/molecules/panels/TypographyPanel.scss
:::

## SCSS variables

| Variable                  | Description     | Accepted Values | Default           |
|:--------------------------|:----------------|:----------------|:------------------|
| `$typography-panel-color` | Color of button | `color`         | `#000`            |
| `$typography-size`        | Size of text    | `size`          | `14px`            |

<style lang="scss">
@import "docs/theme.scss"

$typography-panel-color: $primary-color;

@import "components/molecules/panels/TypographyPanel.scss";
</style>
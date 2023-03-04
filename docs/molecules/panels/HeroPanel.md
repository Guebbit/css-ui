# Hero Panel
<Badge type="info">Molecule</Badge> <Badge type="tip">Basic</Badge> <Badge type="info">Panel</Badge>

::: info
Custom height: 500px
:::

## Basic

<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/panels/HeroPanel.html -->
</div>

::: code-group
<<< @/public/components-html/molecules/panels/HeroPanel.html
<<< @/../components/molecules/panels/HeroPanel.scss
:::

## Different media

Different media.
Background (via CSS), Color (via CSS), Video and Iframe.

::: warning
Iframe are difficult to handle: custom css may be needed
:::

<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/panels/HeroPanel-media.html -->
</div>

::: code-group
<<< @/public/components-html/molecules/panels/HeroPanel-media.html#background-css [Background-css]
<<< @/public/components-html/molecules/panels/HeroPanel-media.html#css-color [CSS color]
<<< @/public/components-html/molecules/panels/HeroPanel-media.html#video [Video]
<<< @/public/components-html/molecules/panels/HeroPanel-media.html#iframe [Iframe]
:::

## Classes

| Prop             | Description                                     |
|:-----------------|:------------------------------------------------|
| `shadow-active`  | Active shadow (better readability)              |
| `centered-mode`  | Content is centered                             |
| `bottom-mode`    | Content will be bottom                          |
| `wallpaper-mode` | Size of panel will be based on panel-background |


## SCSS variables

| Variable                      | Description    | Accepted Values | Default   |
|:------------------------------|:---------------|:----------------|:----------|
| `$hero-panel-shadow-opacity`  | Shadow opacity | `0.1 - 0.9`     | `0.4`     |
| `$hero-panel-shadow-color`    | Shadow color   | `color`         | `#000000` |

<style lang="scss">
@import "../../theme.scss";

.content-example{
    height: 200px;
    background-color: rgba(255, 0, 0, 0.5);
    color: white;
    border: 4px solid red;
    font-weight: 600;
    font-size: 2em;
    padding: 24px;
}

@import "components/molecules/panels/HeroPanel.scss";
</style>
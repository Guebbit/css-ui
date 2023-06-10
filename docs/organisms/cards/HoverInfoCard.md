# Hover Info Card
<Badge type="tip">Organisms</Badge> <Badge type="info">Card</Badge>

::: tip Organism Dependencies
 - [SimpleCard](/molecules/cards/SimpleCard)
:::

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/organisms/cards/HoverInfoCard.html -->
</div>
:::

::: code-group
<<< @/public/components-html/organisms/cards/HoverInfoCard.html
<<< @/../components/organisms/cards/HoverInfoCard.scss
<<< @/../components/molecules/cards/SimpleCard.scss
:::

<style lang="scss">
@import "docs/theme.scss";

$simple-card-background: #f0f;
$simple-card-active-background: #00f;
$simple-card-active-shadow-color: #ff0;
$simple-card-shadow:
        0 8px 10px -5px rgba($simple-card-active-shadow-color, .2),
        0 16px 24px 2px rgba($simple-card-active-shadow-color, .14),
        0 6px 30px 5px rgba($simple-card-active-shadow-color, .12);

@import "components/molecules/cards/SimpleCard.scss";
</style>
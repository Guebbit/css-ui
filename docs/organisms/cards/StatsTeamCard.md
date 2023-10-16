# Stats Team Card
<Badge type="tip">Organisms</Badge> <Badge type="info">Card</Badge>

::: tip ORGANISM Dependencies
 - [SimpleCard]/docs/molecules/cards/SimpleCard.md)
 - [HighlightBelt]/docs/atoms/highlights/HighlightBelt.md)
 - [SimpleTextIcon]/docs/atoms/typography/SimpleTextIcon.md)
:::


::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/organisms/cards/StatsTeamCard.html -->
</div>
:::

::: code-group
<<< @/public/components-html/organisms/cards/StatsTeamCard.html
<<< @/../components/molecules/cards/SimpleCard.scss
<<< @/../components/atoms/highlights/HighlightBelt.scss
<<< @/../components/atoms/typography/SimpleTextIcon.scss
:::

<style lang="scss">
@import "docs/theme.scss";

$highlight-belt-size: 3em;
$highlight-belt-color: $secondary-color;
$simple-card-color: $primary-color;

@import "components/molecules/cards/SimpleCard.scss";
@import "components/atoms/highlights/HighlightBelt.scss";
@import "components/atoms/typography/SimpleTextIcon.scss";
</style>
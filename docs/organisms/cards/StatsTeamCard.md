# Stats Team Card
<Badge type="tip">Organisms</Badge> <Badge type="info">Card</Badge>

::: tip VARIANT Dependencies
- [SimpleCard](/molecules/cards/SimpleCard.md)
  :::

::: tip INCLUDED
 - [HighlightBelt](/atoms/highlights/HighlightBelt.md)
 - [SimpleTextIcon](/atoms/typography/SimpleTextIcon.md)
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


## Classes
#### Plus [SimpleCard](/molecules/cards/SimpleCard.md) classes

## SCSS variables
##### Plus [SimpleCard](/molecules/cards/SimpleCard.md) variables

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/highlights/HighlightBelt.scss";
@use "components/atoms/typography/SimpleTextIcon.scss";
@use "components/molecules/cards/SimpleCard.scss" as * with (
    $color: theme.$primary-color,
);
</style>
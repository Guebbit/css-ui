# Social buttons
<Badge type="tip">Molecule</Badge> <Badge type="info">buttons</Badge>

They are simple buttons but with the right colors they can be color coded 

::: tip VARIANT Dependencies
- [guebbit-include-colors](/global/includers/colors.md)
- [SimpleButton](/atoms/buttons/SimpleButton)
- [ButtonBrandIcon](/atoms/buttons/ButtonBrandIcon)
:::

## Regular (same as [SimpleButton](/atoms/buttons/SimpleButton))

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/buttons/SocialButton-regular.html -->
</div>
:::

::: code-group
<<< @/public/components-html/molecules/buttons/SocialButton-regular.html#facebook[facebook]
<<< @/public/components-html/molecules/buttons/SocialButton-regular.html#instagram[instagram]
<<< @/public/components-html/molecules/buttons/SocialButton-regular.html#youtube[youtube]
<<< @/public/components-html/molecules/buttons/SocialButton-regular.html#tiktok[tiktok]
<<< @/public/components-html/molecules/buttons/SocialButton-regular.html#twitch[twitch]
:::

## Brand Icon (same as [ButtonBrandIcon](/atoms/buttons/ButtonBrandIcon))

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/buttons/SocialButton-brand-icon.html -->
</div>
:::

::: code-group
<<< @/public/components-html/molecules/buttons/SocialButton-brand-icon.html#facebook[facebook]
<<< @/public/components-html/molecules/buttons/SocialButton-brand-icon.html#instagram[instagram]
<<< @/public/components-html/molecules/buttons/SocialButton-brand-icon.html#youtube[youtube]
<<< @/public/components-html/molecules/buttons/SocialButton-brand-icon.html#tiktok[tiktok]
<<< @/public/components-html/molecules/buttons/SocialButton-brand-icon.html#twitch[twitch]
:::

<style lang="scss">
@import "../../theme.scss";
@include guebbit-include-colors(("brand"), ("border", "pseudo", "hover"));

@import "../../../components/atoms/buttons/SimpleButton.scss";
@import "../../../components/atoms/buttons/ButtonBrandIcon.scss";

</style>
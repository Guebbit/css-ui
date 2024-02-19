# Social buttons
<Badge type="tip">Molecule</Badge> <Badge type="info">buttons</Badge>
Simple buttons with the right colors included. *theme.create-colors(("brand"))* for brands.

::: tip INCLUDED
- [create-colors](/global/includers/colors.md)
- [SimpleButton](/atoms/buttons/SimpleButton)
- [ButtonBrandIcon](/atoms/buttons/ButtonBrandIcon)
:::

## Regular (same as [SimpleButton](/atoms/buttons/SimpleButton))

::: raw
<div class="dev-section">
    <!--@include: ../../molecules/buttons/SocialButton-regular.html -->
</div>
:::

::: code-group
<<< @/molecules/buttons/SocialButton-regular.html#facebook[facebook]
<<< @/molecules/buttons/SocialButton-regular.html#instagram[instagram]
<<< @/molecules/buttons/SocialButton-regular.html#youtube[youtube]
<<< @/molecules/buttons/SocialButton-regular.html#tiktok[tiktok]
<<< @/molecules/buttons/SocialButton-regular.html#twitch[twitch]
:::

## Brand Icon (same as [ButtonBrandIcon](/atoms/buttons/ButtonBrandIcon))

::: raw
<div class="dev-section">
    <!--@include: ../../molecules/buttons/SocialButton-brand-icon.html -->
</div>
:::

::: code-group
<<< @/molecules/buttons/SocialButton-brand-icon.html#facebook[facebook]
<<< @/molecules/buttons/SocialButton-brand-icon.html#instagram[instagram]
<<< @/molecules/buttons/SocialButton-brand-icon.html#youtube[youtube]
<<< @/molecules/buttons/SocialButton-brand-icon.html#tiktok[tiktok]
<<< @/molecules/buttons/SocialButton-brand-icon.html#twitch[twitch]
:::

## Documentation CSS

```scss
@use "docs/theme.scss" as theme;
@use "components/atoms/buttons/SimpleButton.scss";
@use "components/atoms/buttons/ButtonBrandIcon.scss";

@include theme.create-colors(theme.$colors-collection, ("border", "pseudo", "hover"));
```


## Other buttons
Check for other buttons and styles. With these classes or the SCSS variables combinations are infinite

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/buttons/SimpleButton.scss";
@use "components/atoms/buttons/ButtonBrandIcon.scss";

@include theme.create-colors(theme.$colors-collection, ("brand"), ("border", "pseudo", "hover"));
</style>
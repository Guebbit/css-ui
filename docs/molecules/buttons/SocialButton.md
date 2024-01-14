# Social buttons
<Badge type="tip">Molecule</Badge> <Badge type="info">buttons</Badge>
Simple buttons with the right colors included. *theme.include-colors(("brand"))* for brands.

::: tip INCLUDED
- [include-colors](/global/includers/colors.md)
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

## Documentation CSS

```scss
@use "docs/theme.scss" as theme;
@use "components/atoms/buttons/SimpleButton.scss";
@use "components/atoms/buttons/ButtonBrandIcon.scss";

@include theme.include-colors(("brand"), ("border", "pseudo", "hover"));
```


## Other buttons
Check for other buttons and styles. With these classes or the SCSS variables combinations are infinite

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/buttons/SimpleButton.scss";
@use "components/atoms/buttons/ButtonBrandIcon.scss";

@include theme.include-colors(("brand"), ("border", "pseudo", "hover"));
</style>
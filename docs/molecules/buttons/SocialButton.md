# Social buttons
<Badge type="tip">Molecule</Badge> <Badge type="info">buttons</Badge>
Simple buttons with the right colors included. *theme.create-colors(("brand"))* for brands.

::: tip INCLUDED
- "create-colors" from @guebbit/css-toolkit
- [SimpleButton](/atoms/buttons/SimpleButton)
- [ButtonLargeIcon](/atoms/buttons/ButtonLargeIcon)
:::

## Use
```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/buttons/SimpleButton";
@use "@guebbit/css-ui/src/atoms/buttons/ButtonLargeIcon";

@include theme.create-colors(theme.$colors-collection, ("border", "pseudo", "hover"));
```

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

## Brand Icon (same as [ButtonLargeIcon](/atoms/buttons/ButtonLargeIcon))

::: raw
<div class="dev-section">
    <!--@include: ../../molecules/buttons/SocialButton-large-icon.html -->
</div>
:::

::: code-group
<<< @/molecules/buttons/SocialButton-large-icon.html#facebook[facebook]
<<< @/molecules/buttons/SocialButton-large-icon.html#instagram[instagram]
<<< @/molecules/buttons/SocialButton-large-icon.html#youtube[youtube]
<<< @/molecules/buttons/SocialButton-large-icon.html#tiktok[tiktok]
<<< @/molecules/buttons/SocialButton-large-icon.html#twitch[twitch]
:::


## Other buttons
Check for other buttons and styles. With these classes or the SCSS variables combinations are infinite

<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/buttons/SimpleButton";
@use "../src/atoms/buttons/ButtonLargeIcon";

@include theme.create-colors(theme.$colors-collection, ("brand"), ("border", "pseudo", "hover"));
</style>
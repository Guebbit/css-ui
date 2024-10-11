<!--@include: ./SimpleCard-core.md-->

<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/buttons/SimpleButton" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
@use "../src/molecules/cards/SimpleCard" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix,
);
</style>
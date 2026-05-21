# Card Unstyled
<Badge type="tip">Atom</Badge> <Badge type="info">Card</Badge>

Use this page for a minimal and theme-free Card baseline.

## Use

```scss
@use "@guebbit/css-ui/styles" as theme;
@use "@guebbit/css-ui/molecules/card" with (
    $color: rgb(var(--main-color) / .5),
    $active-color: rgb(var(--active-main-color) / .5)
);
```

## Basics

::: raw
<div class="dev-section">
<!--@include: ../../examples/molecules/cards/card-simple-no-theme-basics.html -->
</div>
:::

::: code-group
```html
<div class="card use-brand">
    <div class="card-content">
        <h2 class="card-title">Title of lorem ipsum</h2>
        <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
        <br/>
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
```
:::

## Related

- [Card](/components/atoms/card)
- [Card Variants](/components/atoms/card-variants)
- [Card Media & Icons](/components/atoms/card-media-icons)

<style lang="scss">
@use "../src/components/molecules/card";
</style>

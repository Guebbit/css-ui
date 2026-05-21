# Card Stats Team
<Badge type="tip">Organisms</Badge> <Badge type="info">Card</Badge>

::: tip VARIANT Dependencies
- [Card](/components/molecules/card)
:::

::: tip INCLUDED
 - [HighlightBelt](/components/atoms/highlight-belt)
 - [Text](/components/atoms/text)
:::

## Use

```scss
@use "@guebbit/css-ui/styles" as theme;
@use "@guebbit/css-ui/atoms/highlight-belt" with (
    $size: 60px,
);
@use "@guebbit/css-ui/atoms/text";
@use "@guebbit/css-ui/molecules/card";
```

::: raw
<div class="dev-section">
<!--@include: ../../examples/organisms/cards/card-stats-team-use.html -->
</div>
:::

```html
<div class="card card-outlined grayscale-reverse-on-hover shadow-on-hover use-brand">
    <img class="card-media" alt="" src="https://placedog.net/1000/600" />
    <div class="highlight-belt bend-bottom">
        <b>Lorem Ipsum</b>
    </div>
    <div class="card-content">
        <h2 class="card-title">Title of lorem ipsum</h2>
        <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
        <br/>
        <div class="card-actions card-section-center">
            <span class="text column-mode">
                <span class="text-icon">
                    <svg viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                </span>
                Lorem Ipsum
            </span>
            <span class="text highlight-on-hover column-mode">
                <span class="text-icon">
                    <svg viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                </span>
                Lorem Ipsum
            </span>
            <span class="text column-mode">
                <span class="text-icon">
                    <img alt="" src="https://placedog.net/50/50" />
                </span>
                Lorem Ipsum
            </span>
        </div>
    </div>
</div>
```


## Classes
#### Plus [Card](/components/molecules/card) classes

No extra component-specific classes beyond the inherited items above.

## SCSS variables
#### Plus [Card](/components/molecules/card) variables

No extra component-specific SCSS variables beyond the inherited items above.

<style lang="scss">
@use "../src/components/molecules/card";
</style>

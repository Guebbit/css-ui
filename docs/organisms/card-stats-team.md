# Stats Team Card
<Badge type="tip">Organisms</Badge> <Badge type="info">Card</Badge>

::: tip VARIANT Dependencies
- [SimpleCard](/molecules/card-simple)
:::

::: tip INCLUDED
 - [HighlightBelt](/atoms/highlight-belt)
 - [SimpleTextIcon](/atoms/typography-simple-text-icon)
:::

## Use

```scss
@use "@guebbit/css-ui/styles" as theme;
@use "@guebbit/css-ui/atoms/highlight-belt" with (
    $size: 60px,
);
@use "@guebbit/css-ui/atoms/typography-simple-text-icon";
@use "@guebbit/css-ui/molecules/card-simple";
```

::: raw
<div class="dev-section">
<!--@include: ../examples/organisms/card-stats-team-use.html -->
</div>
:::

```html
<div class="simple-card card-outlined grayscale-reverse-on-hover shadow-on-hover">
    <img class="card-media" alt="" src="https://placedog.net/1000/600" />
    <div class="highlight-belt bend-bottom">
        <b>Lorem Ipsum</b>
    </div>
    <div class="card-content">
        <h2 class="card-title">Title of lorem ipsum</h2>
        <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
        <br/>
        <div class="card-actions card-section-center">
            <span class="simple-text-icon column-mode">
                <span class="text-icon">
                    <svg viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                </span>
                Lorem Ipsum
            </span>
            <span class="simple-text-icon highlight-on-hover column-mode">
                <span class="text-icon">
                    <svg viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                </span>
                Lorem Ipsum
            </span>
            <span class="simple-text-icon column-mode">
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
#### Plus [SimpleCard](/molecules/card-simple) classes

No extra component-specific classes beyond the inherited items above.

## SCSS variables
#### Plus [SimpleCard](/molecules/card-simple) variables

No extra component-specific SCSS variables beyond the inherited items above.

<style lang="scss">
@use "../src/components/molecules/card-simple";
</style>

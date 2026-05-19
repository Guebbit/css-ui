# Card Info Hover
<Badge type="tip">Organisms</Badge> <Badge type="info">Card</Badge>

::: tip VARIANT Dependencies
 - [SimpleCard](/components/molecules/card-simple)
:::

## Use

```scss
@use "@guebbit/css-ui/styles" as theme;
@use "@guebbit/css-ui/organisms/card-info-hover";
```

```scss
@use "@guebbit/css-ui/styles" as theme;
@use "@guebbit/css-ui/organisms/card-info-hover";
```

::: info
- Custom height: 300px
:::

::: raw
<div class="dev-section">
<!--@include: ../../examples/organisms/cards/InfoHoverCard-use.html -->
</div>
:::

::: code-group
```html
<div class="info-hover-card card-plain animate-on-hover border-on-hover card-flat">
    <div class="icon-wrapper">
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </div>
    <div class="card-header">
        <h4 class="card-title">Lorem Ipsum</h4>
    </div>
    <div class="card-content">
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
<div class="info-hover-card animate-on-hover">
    <div class="icon-wrapper">
        <img alt="" src="https://placedog.net/800/600" />
    </div>
    <div class="card-header">
        <h4 class="card-title">Lorem Ipsum</h4>
    </div>
    <div class="card-content">
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
```

:::

## Component CSS

::: code-group
<<< @/../src/components/organisms/card-info-hover/_architecture.scss [_architecture.scss]
<<< @/../src/components/organisms/card-info-hover/index.scss [index.scss]
:::

## Classes
#### Plus [SimpleCard](/components/molecules/card-simple) classes

No extra component-specific classes beyond the inherited items above.

## SCSS variables
#### Plus [SimpleCard](/components/molecules/card-simple) variables

| SCSS Variable | CSS Variable | Description | Accepted Values | Default |
| :--------------|:-------------|:-------------|:-----------------|:---------|
| `$icon-size` | `--info-hover-card-icon-size` | Icon size | `size` | `100px` |
<style lang="scss">
@use "../src/components/organisms/card-info-hover";
</style>

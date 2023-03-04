# Simple User Card
<Badge type="tip">Atom</Badge> <Badge type="info">Card</Badge>

<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/cards/SimpleUserCard.html -->
</div>

::: code-group
<<< @/public/components-html/molecules/cards/SimpleUserCard.html
<<< @/../components/molecules/cards/SimpleUserCard.scss
:::

## SCSS variables

| Variable                        | Description      | Accepted Values | Default       |
|:--------------------------------|:-----------------|:----------------|:--------------|
| `$simple-user-card-color`       | Text color       | `color`         | `#000000`     |
| `$simple-user-card-title-color` | Title color      | `color`         | `#000000`     |
| `$simple-user-card-background`  | Background color | `color`         | `transparent` |




<style lang="scss">
@import "../../theme.scss";

$simple-user-card-title-color: $primary-color;
$simple-user-card-background: #f0f0f0;
.simple-user-card{
    max-width: 300px;
}

.vp-doc {
    .simple-user-card{
        .card-info {
            padding: 0;
        }
    }
}

@import "components/molecules/cards/SimpleUserCard.scss";
</style>
# Icon Text Resources 
<Badge type="tip">Atom</Badge> <Badge type="info">Badge</Badge>

## Code

<div class="dev-section">
    <span class="icon-text-resources">
        <span class="icon">
            IMG
        </span>
        <span class="text">Lorem Ipsum</span>
    </span>
    <span class="icon-text-resources">
        <img class="icon" src="https://placekitten.com/100/100" />
        <span class="text">Lorem Ipsum</span>
    </span>
</div>

```html
    <span class="icon-text-resources">
        <span class="icon">
            IMG
        </span>
        <span class="text">Lorem Ipsum</span>
    </span>

    <span class="icon-text-resources">
        <img class="icon" src="https://placekitten.com/100/100" />
        <span class="text">Lorem Ipsum</span>
    </span>
```

## SCSS variables

| Variable                           | Description           | Accepted Values | Default |
|:-----------------------------------|:----------------------|:----------------|:--------|
| `$icon-text-resources-duration`    | Duration of animation | `time`          | `0.4s`  |

<style lang="scss">
@import "../../theme.scss";
@import "components/atoms/badges/IconTextResources.scss";
</style>
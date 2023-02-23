# Simple Card
<Badge type="tip">Atom</Badge> <Badge type="info">Card</Badge>

<div class="simple-user-card">
    <img
        class="card-background"
        src="http://placekitten.com/1200/800"
    />
    <div class="card-content">
    <img
        class="card-image"
        src="http://placekitten.com/500/600"
    />
    <h4 class="card-title">Lorem Ipsum</h4>
    <p class="card-subtitle">Creative Manager</p>
    <ul class="card-info">
        <li>
            <span class="label">followers</span>
            <span class="value">323</span>
        </li>
        <li>
            <span class="label">following</span>
            <span class="value">290</span>
        </li>
        <li>
            <span class="label">stories</span>
            <span class="value">22</span>
        </li>
    </ul>
    </div>
</div>

```html
<div class="simple-user-card">
    <img
        class="card-background"
        src="http://placekitten.com/1200/800"
    />
    <div class="card-content">
        <img
            class="card-image"
            src="http://placekitten.com/500/600"
        />
        <h4 class="card-title">Lorem Ipsum</h4>
        <p class="card-subtitle">Creative Manager</p>
        <ul class="card-info">
            <li>
                <span class="label">followers</span>
                <span class="value">323</span>
            </li>
            <li>
                <span class="label">following</span>
                <span class="value">290</span>
            </li>
            <li>
                <span class="label">stories</span>
                <span class="value">22</span>
            </li>
        </ul>
    </div>
</div>
```

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
# Simple Text Icon
<Badge type="tip">Atom</Badge> <Badge type="info">Typography</Badge>

## Code

<div class="dev-section">
    <div class="simple-text-icon icon-highlight">
        <div class="icon">
            <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
        Lorem Ipsum Sit Dolor Amet
    </div>
    <span class="simple-text-icon icon-highlight">
        <span class="icon">
            IMG
        </span>
        Lorem Ipsum
    </span>
    <span class="simple-text-icon icon-highlight">
        <div class="icon">
            <img src="https://placekitten.com/50/50" />
        </div>
        Lorem Ipsum
    </span>
    <span class="simple-text-icon icon-highlight">
        <div class="icon">
            <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
        Lorem Ipsum
    </span>
</div>

<div class="dev-section">
    <span class="simple-text-icon icon-highlight">
        <span class="icon">
            IMG
        </span>
        <div>
            <b>Lorem Ipsum</b><br/>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor       
        </div>
    </span>
    <span class="simple-text-icon icon-highlight">
        <div class="icon">
            <img src="https://placekitten.com/50/50" />
        </div>
        <div>
            <b>Lorem Ipsum</b><br/>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor       
        </div>
    </span>
    <span class="simple-text-icon icon-highlight">
        <div class="icon">
            <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
        <div>
            <b>Lorem Ipsum</b><br/>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor       
        </div>
    </span>
</div>

```html
    <span class="simple-text-icon icon-highlight">
        <span class="icon">
            IMG
        </span>
        Lorem Ipsum
    </span>

    <span class="simple-text-icon icon-highlight">
        <img class="icon" src="https://placekitten.com/50/50" />
        Lorem Ipsum
    </span>

    <span class="simple-text-icon icon-highlight">
        <div class="icon">
            <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
        Lorem Ipsum
    </span>
```

<div class="dev-section">
    <span class="simple-text-icon icon-highlight column-mode">
        <span class="icon">
            IMG
        </span>
        Lorem Ipsum
    </span>
    <span class="simple-text-icon icon-highlight column-mode">
        <div class="icon">
            <img src="https://placekitten.com/50/50" />
        </div>
        Lorem Ipsum
    </span>
    <span class="simple-text-icon icon-highlight column-mode">
        <div class="icon">
            <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
        Lorem Ipsum
    </span>
</div>

<div class="dev-section">
    <span class="simple-text-icon icon-highlight column-mode">
        <span class="icon">
            IMG
        </span>
        <div>
            <b>Lorem Ipsum</b><br/>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor       
        </div>
    </span>
    <span class="simple-text-icon icon-highlight column-mode">
        <div class="icon">
            <img src="https://placekitten.com/50/50" />
        </div>
        <div>
            <b>Lorem Ipsum</b><br/>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor       
        </div>
    </span>
    <span class="simple-text-icon icon-highlight column-mode">
        <div class="icon">
            <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
        <div>
            <b>Lorem Ipsum</b><br/>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor       
        </div>
    </span>
</div>

```html
    <span class="simple-text-icon icon-highlight column-mode">
        <span class="icon">
            IMG
        </span>
        Lorem Ipsum
    </span>

    <span class="simple-text-icon icon-highlight column-mode">
        <img class="icon" src="https://placekitten.com/50/50" />
        Lorem Ipsum
    </span>

    <span class="simple-text-icon icon-highlight column-mode">
        <div class="icon">
            <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
        Lorem Ipsum
    </span>
```

## Classes

| Class            | Description                                                 |
|:-----------------|:------------------------------------------------------------|
| `icon-highlight` | Added simple animation (transition) on hover\active to icon |
| `column-mode`    | Position of icon                                            |


## SCSS variables

| Variable                             | Description           | Accepted Values | Default |
|:-------------------------------------|:----------------------|:----------------|:--------|
| `$simple-simple-text-icon-duration`  | Duration of animation | `time`          | `0.4s`  |

<style lang="scss">
@import "../../theme.scss";
@import "components/atoms/typography/SimpleIconText.scss";
</style>
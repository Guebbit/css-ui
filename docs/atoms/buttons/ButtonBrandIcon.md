# Button Brand Icon 
<Badge type="tip">Atom</Badge> <Badge type="info">Button</Badge>

## Code

<div class="dev-section">
    <a
        href="#"
        class="button-brand-icon"
        target="_blank"
    >
        <span class="icon">
            <svg viewBox="0 0 24 24">
                <use xlink:href="#icon"/>
            </svg>
        </span>
    </a> 
    <a
        href="#"
        class="button-brand-icon"
        target="_blank"
    >
        <span class="icon">
            <img src="https://placekitten.com/100/100" />
        </span>
    </a>
    <a
        href="#"
        class="button-brand-icon mini"
        target="_blank"
    >
        <span class="icon">
            <svg viewBox="0 0 24 24">
                <use xlink:href="#icon"/>
            </svg>
        </span>
    </a> 
    <a
        href="#"
        class="button-brand-icon mini"
        target="_blank"
    >
        <span class="icon">
            <img src="https://placekitten.com/100/100" />
        </span>
    </a>
</div>

```html
    <a
        href="#"
        class="button-brand-icon"
        target="_blank"
    >
        <span class="icon">A</span>
    </a>
 
    <a
        href="#"
        class="button-brand-icon"
        target="_blank"
    >
        <span class="icon">
            <img src="https://placekitten.com/100/100" />
        </span>
    </a>
```

## Classes

| Class      | Description                   |
|:-----------|:------------------------------|
| `active`   | As if it's focused or hover   |
| `mini`     | Mini version                  |

## SCSS variables

| Variable                              | Description                                    | Accepted Values | Default           |
|:--------------------------------------|:-----------------------------------------------|:----------------|:------------------|
| `$button-brand-icon-size`             | Size of icon                                   | `size`          | `90px`            |
| `$button-brand-icon-color`            | Color of text                                  | `color`         | `#000`            |
| `$button-brand-icon-hover-color`      | Color of text on **hover** or **active**       | `color`         | `#fff`            |
| `$button-brand-icon-background`       | Color of background                            | `color`         | `#000`            |
| `$button-brand-icon-hover-background` | Color of background on **hover** or **active** | `color`         | `same as regular` |

<!-- ICONS -->

<div style="display: none">
    <svg id="icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
</div>

<style lang="scss">
@import "../../theme.scss";

$button-brand-icon-background: $primary-color;
$button-brand-icon-hover-background: $secondary-color;
// automatic contrast
$button-brand-icon-hover-color: guebbit-contrast($button-brand-icon-hover-background);

@import "components/atoms/buttons/ButtonBrandIcon.scss";
</style>
# Simple Card
<Badge type="tip">Molecules</Badge> <Badge type="info">Card</Badge>

::: tip INCLUDED
- [SimpleButton](/atoms/buttons/SimpleButton)
:::

## Example: basic

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/cards/SimpleCard.html -->
</div>
:::

::: code-group
<<< @/public/components-html/molecules/cards/SimpleCard.html#basic [basic]
<<< @/public/components-html/molecules/cards/SimpleCard.html#box-shadowless [box-shadowless]
<<< @/public/components-html/molecules/cards/SimpleCard.html#elevated [elevated]
:::

## Example: icons

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/cards/SimpleCard-icons.html -->
</div>
:::

::: code-group
<<< @/public/components-html/molecules/cards/SimpleCard-icons.html#icons
<<< @/public/components-html/molecules/cards/SimpleCard-icons.html#icons2
:::

## Example: image

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/cards/SimpleCard-image.html -->
</div>
:::

::: code-group
<<< @/public/components-html/molecules/cards/SimpleCard-image.html#basic-grayscale [basic-grayscale]
<<< @/public/components-html/molecules/cards/SimpleCard-image.html#background [background]
<<< @/public/components-html/molecules/cards/SimpleCard-image.html#left-image [left-image]
<<< @/public/components-html/molecules/cards/SimpleCard-image.html#right-image [right-image]
:::

## Example: alert

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/cards/SimpleCard-alert.html -->
</div>
:::

::: code-group
<<< @/public/components-html/molecules/cards/SimpleCard-alert.html#red-alert [red-alert]
<<< @/public/components-html/molecules/cards/SimpleCard-alert.html#right-icon [right-icon]
<<< @/public/components-html/molecules/cards/SimpleCard-alert.html#left-image [left-image]
<<< @/public/components-html/molecules/cards/SimpleCard-alert.html#icon-center [icon-center]
<<< @/public/components-html/molecules/cards/SimpleCard-alert.html#background [background]
:::


## Example: borders

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/cards/SimpleCard-borders.html -->
</div>
:::

::: code-group
<<< @/public/components-html/molecules/cards/SimpleCard-borders.html#right [right]
<<< @/public/components-html/molecules/cards/SimpleCard-borders.html#full [full]
<<< @/public/components-html/molecules/cards/SimpleCard-borders.html#top-bottom [top-bottom]
<<< @/public/components-html/molecules/cards/SimpleCard-borders.html#left-right [left-right]
:::

## Example: Others

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/cards/SimpleCard-others.html -->
</div>
:::

::: code-group
<<< @/public/components-html/molecules/cards/SimpleCard-others.html#promo-panel [promo-panel]
<<< @/public/components-html/molecules/cards/SimpleCard-others.html#mix [mix]
:::

## Custom CSS
Custom CSS (or SCSS) variables to change style

::: raw
<div class="dev-section">
    <div
        class="simple-card card-elevated border-active"
        style="
            --icon-color: rgb(var(--secondary-color));
            --border-color: rgb(var(--primary-color));
            --shadow-color: var(--secondary-color);
        "
    >
        <div class="card-header">
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
            <span class="card-title">Lorem Ipsum</span>
            <div class="card-actions">
                <svg class="card-icon" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </div>
        </div>
        <div class="card-content">
            <p>
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            </p>
        </div>
    </div>
</div>
:::

```html
<div
    class="simple-card card-elevated border-active"
    style="
        --icon-color: rgb(var(--secondary-color));
        --border-color: rgb(var(--primary-color));
        --shadow-color: var(--secondary-color);
    "
>
    <div class="card-header">
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        <span class="card-title">Lorem Ipsum</span>
        <div class="card-actions">
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
    </div>
    <div class="card-content">
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
```

::: raw
<div class="dev-section">
    <div 
        class="simple-card animate-on-hover"
        style="
            --active-background: red;
            --active-on-background: white;
            --active-title-color: var(--active-on-background);
            --active-icon-color: red;
            --active-shadow-color: var(--primary-color);
        "
    >
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
</div>
:::


```html
<div class="dev-section">
    <div 
        class="simple-card animate-on-hover"
        style="
            --active-background: red;
            --active-on-background: white;
            --active-title-color: var(--active-on-background);
            --active-icon-color: red;
            --active-shadow-color: var(--primary-color);
        "
    >
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
</div>
```

## Custom Advanced
Custom CSS and\or elements that, with a just a little, can heavily customize the card

::: raw
<div class="dev-section">
    <div class="simple-card custom-advanced-1 animate-on-hover effect-mirror-reflection-animate-on-hover">
        <div class="effect-mirror-reflection"></div>
        <img class="card-background" alt="" src="https://placekitten.com/1000/600" />
    </div>
</div>
:::

```scss [reflession]
@use "docs/theme.scss" as theme;

.simple-card {
    &.custom-advanced-1 {
         --shadow-active: 0 7px 9px -4px #{rgba(theme.$secondary-color, .6)},
         0 14px 21px 2px #{rgba(theme.$secondary-color, .4)},
         0 5px 26px 4px #{rgba(theme.$secondary-color, .2)};
         height: 400px;
         width: 300px;
        &:hover {
             transform: translateY(-3px) scale(1.05) rotateX(15deg);
            &:after {
                 transform: rotate(25deg);
                 top: -40%;
                 opacity: 0.15;
             }
        }
    }
}
```

::: raw
<div class="dev-section">
    <div class="simple-card custom-advanced-2">
        <img class="card-background" alt="" src="https://placekitten.com/700/600" />
        <div class="card-content">
            <h3 class="card-title"><span>Lorem Ipsum</span></h3>
            <h4 class="card-subtitle"><span>Dolor sit amet</span></h4>
        </div>
    </div>
</div>
:::

```scss [highlighted titles]
@use "docs/theme.scss" as theme;

.simple-card {
    &.custom-advanced-2{
        min-height: 400px;
        
        & > .card-content {
            position: absolute;
            bottom: 0;
            left: 0;
            display: flex;
            flex-direction: column;
            gap: 24px;
        }
        
        .card-title {
            span {
                background: theme.$primary-color;
                padding: 5px;
            }
        }
        
        .card-subtitle {
            span {
                background: theme.$secondary-color;
                padding: 5px;
            }
        }
    }
}
```

::: raw
<div class="dev-section">
    <div class="simple-card custom-advanced-3">
        <img class="card-image" alt="" src="/logo.svg" />
        <h3 class="card-title"><span>Lorem Ipsum</span></h3>
        <h4 class="card-subtitle"><span>Dolor sit amet</span></h4>
    </div>
    <div class="simple-card custom-advanced-3">
        <h3 class="card-title"><span>Lorem Ipsum</span></h3>
        <hr class="card-divider" />
        <img class="card-image" alt="" src="/logo.svg" />
        <hr class="card-divider" />
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt
        </p>
        <hr class="card-divider" />
        <div class="card-actions">
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
    </div>
</div>
:::

```scss [vertical info]
.simple-card {
    &.custom-advanced-3 {
        --background: #ff9800;
        --on-background: #fff;
        --shadow-color: 0,0,0;
        --divider-color: #fff;
        justify-content: center;
        align-items: center;
        gap: 12px;
        padding: 24px;
        text-shadow: 2px 2px 4px #000;
        .card-image {
            max-width: 200px;
            max-height: 200px;
            margin-bottom: 24px;
        }
    }
}
```

::: raw
<div class="dev-section">
    <div class="simple-card custom-advanced-4 card-shadow">
        <img class="card-background" alt="" src="https://placekitten.com/600/600" />
        <div class="card-content">
            <h3 class="card-title">Lorem Ipsum</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt
            </p>
            <div class="card-actions">
                <div class="simple-button animate-on-hover button-small">
                    1000 €
                </div>
            </div>
        </div>
    </div>
</div>
:::

```scss [left text right image]
.simple-card {
    &.custom-advanced-4 {
        .card-content{
            display: flex;
            flex-direction: column;
            gap: 24px;
            max-width: 40%;
        }
        .simple-button{
            --color: #F44336;
        }
    }
}
```


## Component CSS

<<< @/../components/molecules/cards/SimpleCard.scss


## Classes

| Class                          | Description                                                            |
|:-------------------------------|:-----------------------------------------------------------------------|
| `{effect}-active`              | {effect} active                                                        |
| `{effect}-on-active`           | {effect} active on .active                                             |
| `{effect}-on-hover`            | {effect} active on hover                                               |
| `border-active`                | border (all) active                                                    |
| `border-on-active`             | border (all) active on .active                                         |
| `border-on-hover`              | border (all) active on hover                                           |
| `border-{direction}-active`    | Border active                                                          |
| `border-{direction}-on-active` | Border active on .active                                               |
| `border-{direction}-on-hover`  | Border active on hover                                                 |
| `shadow-active`                | shadow active                                                          |
| `shadow-on-active`             | shadow active on .active                                               |
| `shadow-on-hover`              | shadow active on hover                                                 |
| `grayscale-active`             | grayscale active                                                       |
| `grayscale-on-active`          | grayscale active on .active                                            |
| `grayscale-on-hover`           | grayscale active on hover                                              |
| `grayscale-reverse-active`     | reverse grayscale active                                               |
| `grayscale-reverse-on-active`  | reverse grayscale active on .active                                    |
| `grayscale-reverse-on-hover`   | reverse grayscale active on hover                                      |
| `alert-left-top`               | alert card icon is left top                                            |
| `alert-left-center`            | alert card icon is left center                                         |
| `alert-right-top`              | alert card icon is right top                                           |
| `alert-right-center`           | alert card icon is right center                                        |
| `card-outlined`                | border (all) active at half size + background transparent              |
| `card-shadowless`              | Remove box shadow                                                      |
| `card-shadow`                  | Put a after the background and images and before the text              |
| `card-actions-absolute`        | card-actions `absolute` position, top left. Apply to **.card-actions** |
| `card-actions-center`          | card-actions `center` align, apply to **.card-actions**                |
| `card-actions-end`             | card-actions `end` align, apply to **.card-actions**                   |
| `card-actions-vertical`        | card-actions `column`  direction. Apply to **.card-actions**           |
| `show-on-active`               | [ON ITEM] SHOW on `active`, HIDE on default                            |
| `hide-on-active`               | [ON ITEM] HIDE on `active`                                             |

## SCSS variables

| Variable                  | Description                            | Accepted Values | Default                       |
|:--------------------------|:---------------------------------------|:----------------|:------------------------------|
| `$color`                  | MAIN color (NO CSS var)                | `color`         | `transparent`                 |
| `$on-color`               | MAIN on-color (NO CSS var)             | `color`         | `contrast of {$color}`        |
| `$background`             | Background color                       | `color`         | `same as {$color}`            |
| `$on-background`          | Text color                             | `color`         | `same as {$on-color}`         |
| `$title-color`            | Text color of titles                   | `color`         | `inherit`                     |
| `$icon-color`             | Icon color                             | `color`         | `currentcolor`                |
| `$shadow-color`           | Shadow color (on `var()` MUST be RGB)  | `color`         | `0,0,0`                       |
| `$shadow-on-background`   | Shadow text color of text              | `color`         | `contrast of {$shadow-color}` |
| `$shadow-title-color`     | Shadow text color of titles            | `color`         | `inherit`                     |
| `$shadow-opacity`         | Shadow color                           | `percentage`    | `0.75`                        |
| `$border-color`           | Border color                           | `color`         | `same as {color}`             |
| `$border-width`           | Border width                           | `size`          | `6px`                         |
| `$border-radius`          | Border radius                          | `size`          | `6px`                         |
| `$image-border-radius`    | Border radius                          | `size`          | `same as {$border-radius}`    |
| `$divider-color`          | Divider color                          | `color`         | `same as {$on-background}`    |
| `$divider-height`         | Divider height                         | `size`          | `2px`                         |
| `$padding`                | Padding of content                     | `size`          | `24px`                        |
| `$duration`               | Padding                                | `duration`      | `0.3s`                        |
| `$elevated-shadow`        | Box-shadow instruction                 | `css`           | `box-shadow`                  |
| `$active-*`               | All classes active variants            | `*`             | `*`                           |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/buttons/SimpleButton.scss" as * with (
    $color: theme.$primary-color,
);
@use "components/molecules/cards/SimpleCard.scss" as * with (
    $color: #fff,
    $border-color: theme.$primary-color,
);

// added to show custom use in {Custom Advanced}
@use "components/atoms/animations/EffectMirrorReflection.scss";


.simple-card {
    &.custom-advanced-1 {
        --shadow-active: 0 7px 9px -4px #{rgba(theme.$secondary-color, .6)},
        0 14px 21px 2px #{rgba(theme.$secondary-color, .4)},
        0 5px 26px 4px #{rgba(theme.$secondary-color, .2)};

        height: 400px; 
        width: 300px;
        overflow: hidden;

        &:hover {
            transform: translateY(-3px) scale(1.05) rotateX(15deg);
    
            &:after {
                transform: rotate(25deg);
                top: -40%;
                opacity: 0.15;
            }
        }
    }

    &.custom-advanced-2{
        min-height: 400px;

        & > .card-content {
            position: absolute;
            bottom: 0;
            left: 0;
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        .card-title {
            span {
                background: theme.$primary-color;
                padding: 5px;
            }
        }

        .card-subtitle {
            span {
                background: theme.$secondary-color;
                padding: 5px;
            }
        }
    }

    &.custom-advanced-3 {
        --background: #ff9800;
        --on-background: #fff;
        --shadow-color: 0,0,0;
        --divider-color: #fff;

        justify-content: center;
        align-items: center;
        gap: 12px;
        padding: 24px;
        text-shadow: 2px 2px 4px #000;


        .card-image{
            max-width: 200px;
            max-height: 200px;
            margin-bottom: 24px;
        }
    }

    &.custom-advanced-4 {
        .card-content{
            display: flex;
            flex-direction: column;
            gap: 24px;
            max-width: 40%;
        }
        .simple-button{
            --color: #F44336;
        }
    }
}
</style>
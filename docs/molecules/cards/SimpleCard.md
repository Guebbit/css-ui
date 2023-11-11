# Simple Card
<Badge type="tip">Molecules</Badge> <Badge type="info">Card</Badge>

::: tip MOLECULES Dependencies
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
<<< @/../components/molecules/cards/SimpleCard.scss [CSS]
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
    <!--@include: ../../public/components-html/molecules/cards/SimpleCard-alternate.html -->
</div>
:::

## Custom Advanced
Custom CSS and\or elements that, with a just a little, can heavily customize the card

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/cards/SimpleCard-custom.html -->
</div>
:::

::: code-group
```css [reflession]
.simple-card {
    &.custom-advanced-1 {
         --pricing-card-shadow-active: 0 7px 9px -4px #{rgba($secondary-color, .6)},
         0 14px 21px 2px #{rgba($secondary-color, .4)},
         0 5px 26px 4px #{rgba($secondary-color, .2)};
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
```css [highlighted titles]
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
                background: $primary-color;
                padding: 5px;
            }
        }
        
        .card-subtitle {
            span {
                background: $secondary-color;
                padding: 5px;
            }
        }
    }
}
```
```css [vertical info]
.simple-card {
    &.custom-advanced-3 {
        --simple-card-background: #ff9800;
        --simple-card-text-color: #fff;
        --simple-card-shadow-color: #000;
        --simple-card-divider-color: #fff;
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
```css [left text right image]
.simple-card {
    &.custom-advanced-4 {
        --simple-button-color: #F44336;
        .card-content{
            display: flex;
            flex-direction: column;
            gap: 24px;
            max-width: 40%;
        }
    }
}
```
:::


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
| `card-boxshadowless`           | Remove box shadow                                                      |
| `card-shadow`                  | Put a after the background and images and before the text              |
| `card-actions-absolute`        | card-actions `absolute` position, top left. Apply to **.card-actions** |
| `card-actions-center`          | card-actions `center` align, apply to **.card-actions**                |
| `card-actions-end`             | card-actions `end` align, apply to **.card-actions**                   |
| `card-actions-vertical`        | card-actions `column`  direction. Apply to **.card-actions**           |
| `show-on-active`               | [ON ITEM] SHOW on `active`, HIDE on default                            |
| `hide-on-active`               | [ON ITEM] HIDE on `active`                                             |

## SCSS variables

| Variable                           | Description                 | Accepted Values | Default                           |
|:-----------------------------------|:----------------------------|:----------------|:----------------------------------|
| `$simple-card-background`          | Background color            | `color`         | `transparent`                     |
| `$simple-card-text-color`          | Text color                  | `color`         | `contrast of {$background}`       |
| `$simple-card-title-color`         | Text color of titles        | `color`         | `inherit`                         |
| `$simple-card-shadow-color`        | Shadow color                | `color`         | `#000`                            |
| `$simple-card-shadow-text-color`   | Shadow text color of text   | `color`         | `contrast of {$shadow-color}`     |
| `$simple-card-shadow-title-color`  | Shadow text color of titles | `color`         | `inherit`                         |
| `$simple-card-shadow-opacity`      | Shadow color                | `percentage`    | `0.75`                            |
| `$simple-card-shadow`              | Box-shadow instruction      | `css`           | `box-shadow`                      |
| `$simple-card-icon-color`          | Icon color                  | `color`         | `currentcolor`                    |
| `$simple-card-divider-color`       | Divider color               | `color`         | `same as {$text-color}`           |
| `$simple-card-divider-height`      | Divider height              | `size`          | `2px`                             |
| `$simple-card-border-color`        | Border color                | `color`         | `as {$simple-card-color}`         |
| `$simple-card-border-width`        | Border width                | `size`          | `6px`                             |
| `$simple-card-border-radius`       | Border radius               | `size`          | `6px`                             |
| `$simple-card-image-border-radius` | Border radius               | `size`          | `as {$simple-card-border-radius}` |
| `$simple-card-padding`             | Padding of content          | `size`          | `24px`                            |
| `$simple-card-duration`            | Padding                     | `duration`      | `0.3s`                            |
| `$simple-card-active-*`            | All classes active variants | `*`             | `*`                               |

<style lang="scss">
@import "docs/theme.scss";

$simple-card-color: $primary-color;

@import "components/molecules/cards/SimpleCard.scss";





// alternate test in the same page trick
$scss-library-prefix: "alternate1-";
$simple-card-icon-color: $secondary-color;
$simple-card-border-color: $primary-color;
$simple-card-shadow-color: $primary-color;

// re-calc
$simple-card-shadow:
        0 2px 4px -1px rgba($simple-card-shadow-color, .2),
        0 4px 5px 0 rgba($simple-card-shadow-color, .14),
        0 1px 10px 0 rgba($simple-card-shadow-color, .12);
$simple-card-shadow-elevated:
        0 11px 15px -7px rgba($simple-card-shadow-color, 0.2),
        0 24px 38px 3px rgba($simple-card-shadow-color, 0.14),
        0 9px 46px 8px rgba($simple-card-shadow-color, 0.12);


@import "components/molecules/cards/SimpleCard.scss";



$scss-library-prefix: "alternate2-";
$simple-card-active-background: red;
$simple-card-active-text-color: guebbit-contrast($simple-card-active-background);
$simple-card-active-title-color: $simple-card-active-text-color;
$simple-card-active-icon-color: green;
$simple-card-active-shadow-color: purple;
$simple-card-active-shadow:
        0 7px 9px -4px rgba($simple-card-active-shadow-color, .6),
        0 14px 21px 2px rgba($simple-card-active-shadow-color, .4),
        0 5px 26px 4px rgba($simple-card-active-shadow-color, .2);

@import "components/molecules/cards/SimpleCard.scss";



// added to show custom use
$scss-library-prefix: "";
@import "components/atoms/animations/EffectMirrorReflection.scss";

.simple-card {
    &.custom-advanced-1 {
        --pricing-card-shadow-active: 0 7px 9px -4px #{rgba($secondary-color, .6)},
        0 14px 21px 2px #{rgba($secondary-color, .4)},
        0 5px 26px 4px #{rgba($secondary-color, .2)};

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
                background: $primary-color;
                padding: 5px;
            }
        }

        .card-subtitle {
            span {
                background: $secondary-color;
                padding: 5px;
            }
        }
    }

    &.custom-advanced-3 {
        --simple-card-background: #ff9800;
        --simple-card-text-color: #fff;
        --simple-card-shadow-color: #000;
        --simple-card-divider-color: #fff;

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
        --simple-button-color: #F44336;

        .card-content{
            display: flex;
            flex-direction: column;
            gap: 24px;
            max-width: 40%;
        }
    }
}
</style>
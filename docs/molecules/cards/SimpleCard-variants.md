# Simple Cards (variants)
<Badge type="tip">Molecules</Badge> <Badge type="info">Card</Badge> <Badge type="danger">WORK IN PROGRESS</Badge>

::: tip INCLUDED
- [SimpleButton](/atoms/buttons/SimpleButton)
:::

## Use

```scss
@use "@guebbit/css-ui/src/molecules/cards/SimpleCard" with (
    // custom variables
);
```

## Basics

::: raw
<div class="dev-section">
    <!--@include: ../../molecules/cards/SimpleCard.html -->
</div>
:::

::: code-group
<<< @/molecules/cards/SimpleCard.html#basic [basic]
<<< @/molecules/cards/SimpleCard.html#box-shadowless [box-shadowless]
<<< @/molecules/cards/SimpleCard.html#elevated [elevated]
:::

## Icons

::: raw
<div class="dev-section">
    <!--@include: ../../molecules/cards/SimpleCard-icons.html -->
</div>
:::

::: code-group
<<< @/molecules/cards/SimpleCard-icons.html#icons
<<< @/molecules/cards/SimpleCard-icons.html#icons2
:::

## Images

::: raw
<div class="dev-section">
    <!--@include: ../../molecules/cards/SimpleCard-image.html -->
</div>
:::

::: code-group
<<< @/molecules/cards/SimpleCard-image.html#basic-grayscale [basic-grayscale]
<<< @/molecules/cards/SimpleCard-image.html#background [background]
<<< @/molecules/cards/SimpleCard-image.html#left-image [left-image]
<<< @/molecules/cards/SimpleCard-image.html#right-image [right-image]
:::

## Alert

::: raw
<div class="dev-section">
    <!--@include: ../../molecules/cards/SimpleCard-alert.html -->
</div>
:::

::: code-group
<<< @/molecules/cards/SimpleCard-alert.html#red-alert [red-alert]
<<< @/molecules/cards/SimpleCard-alert.html#right-icon [right-icon]
<<< @/molecules/cards/SimpleCard-alert.html#left-image [left-image]
<<< @/molecules/cards/SimpleCard-alert.html#icon-center [icon-center]
<<< @/molecules/cards/SimpleCard-alert.html#background [background]
:::


## Borders

::: raw
<div class="dev-section">
    <!--@include: ../../molecules/cards/SimpleCard-borders.html -->
</div>
:::

::: code-group
<<< @/molecules/cards/SimpleCard-borders.html#right [right]
<<< @/molecules/cards/SimpleCard-borders.html#full [full]
<<< @/molecules/cards/SimpleCard-borders.html#top-bottom [top-bottom]
<<< @/molecules/cards/SimpleCard-borders.html#left-right [left-right]
:::

## Others

::: raw
<div class="dev-section">
    <!--@include: ../../molecules/cards/SimpleCard-others.html -->
</div>
:::

::: code-group
<<< @/molecules/cards/SimpleCard-others.html#promo-panel [promo-panel]
<<< @/molecules/cards/SimpleCard-others.html#mix [mix]
:::

## Custom CSS
Custom CSS (or SCSS) variables to change style

::: raw
<div class="dev-section">
    <div
        class="simple-card card-elevated border-active"
        style="
            --icon-color: rgb(var(--secondary-500));
            --shadow-color: var(--secondary-500);
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
        --icon-color: rgb(var(--secondary-500));
        --shadow-color: var(--secondary-500);
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
            --active-background: rgba(var(--primary-500) / .4);
            --active-shadow-color: var(--secondary-500);
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
            --active-background: rgba(var(--primary-500) / .4);
            --active-shadow-color: var(--secondary-500);
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
        <img class="card-background" alt="" src="https://placedog.net/1000/600" />
    </div>
</div>
:::

```scss [reflession]
@use "../../theme" as theme;
@use "../src/atoms/animations/EffectMirrorReflection.scss";

.simple-card {
  &.custom-advanced-1 {
    box-shadow: 0 7px 9px -4px #{rgba(theme.$secondary-color, .6)},
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
        <img class="card-background" alt="" src="https://placedog.net/700/600" />
        <div class="card-content">
            <h3 class="card-title"><span>Lorem Ipsum</span></h3>
            <h4 class="card-subtitle"><span>Dolor sit amet</span></h4>
        </div>
    </div>
</div>
:::

```scss [highlighted titles]
@use "../../theme" as theme;

.simple-card {
  &.custom-advanced-2 {
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
        <img class="card-background" alt="" src="https://placedog.net/600/600" />
        <div class="card-content">
            <h3 class="card-title">Lorem Ipsum</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt
            </p>
            <div class="card-actions">
                <div class="simple-button animate-on-hover button-small primary-500-bg">
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
    }
}
```


## Component CSS

#### Same as [SimpleCard](/molecules/cards/SimpleCard.md) classes


## Documentation CSS
$css-ui-root-prefix is "unlinked" because custom code is needed in these documentation example 
to fully represent as much variants as possible.

```scss
@use "../../theme" as theme;
@use "../src/atoms/buttons/SimpleButton.scss";
@use "../src/molecules/cards/SimpleCard" with (
    // $css-ui-root-prefix: theme.$css-ui-root-prefix,
    $border-color: theme.$primary-color,
    $divider-color: theme.$primary-color,
    $active-border-color: theme.$secondary-color,
    $active-background: theme.$primary-color,
    $active-on-background: #fff,

    $border-color--dark: theme.$primary-color,
    $divider-color--dark: theme.$primary-color,
    $active-border-color--dark: theme.$secondary-color,
    $active-background--dark: theme.$primary-color,
    $active-on-background--dark: #fff,
);
```


## Classes
#### Same as [SimpleCard](/molecules/cards/SimpleCard.md) classes

## SCSS variables
#### Same as [SimpleCard](/molecules/cards/SimpleCard.md) variables


<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/buttons/SimpleButton.scss";
@use "../src/molecules/cards/SimpleCard" with (
    $border-color: theme.$primary-color,
    $divider-color: theme.$primary-color,
    $active-border-color: theme.$secondary-color,
    $active-background: theme.$primary-color,
    $active-on-background: #fff,

    $border-color--dark: theme.$primary-color,
    $divider-color--dark: theme.$primary-color,
    $active-border-color--dark: theme.$secondary-color,
    $active-background--dark: theme.$primary-color,
    $active-on-background--dark: #fff,
);

// added to show custom use in {Custom Advanced}
@use "../src/atoms/animations/EffectMirrorReflection.scss";


.simple-card {
    &.custom-advanced-1 {
        box-shadow: 
            0 7px 9px -4px #{rgba(theme.$secondary-color, .6)},
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
    }
}
</style>
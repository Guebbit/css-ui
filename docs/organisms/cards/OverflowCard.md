# Overflow Card
<Badge type="tip">Organisms</Badge> <Badge type="info">Card</Badge>
### [Codepen](https://codepen.io/nathantaylor/pen/WOgBQN)

::: tip INCLUDED
- [ExpressiveButton](/molecules/buttons/ExpressiveButton.md)
- [HighlightLine](/atoms/highlights/HighlightLine.md)
:::

::: tip VARIANT Dependencies
- [SimpleCard](/molecules/cards/SimpleCard.md)
:::

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/molecules/buttons/ExpressiveButton";
@use "@guebbit/css-ui/src/atoms/highlights/HighlightLine";
@use "@guebbit/css-ui/src/organisms/cards/OverflowCard" with (
    $padding: 48px
);
```


## Default

::: raw
<div class="dev-section">
    <div class="overflow-card card-overlay" style="margin-top: 25%; margin-bottom: 25%; --on-background: #fff">
        <img class="card-background" src="https://placedog.net/1000/600">
        <img class="card-media" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/908370/jelly.png">
        <div class="card-content">
            <h2 
                class="card-title highlight-line highlight-line-active middle-highlight"
                style="--active-size: 0.33em; --active-color: rgb(var(--primary-500))"
            >
                Mesmerizing Depths
            </h2>
            <p>
                Nunc orci metus, ornare non molestie ac, ultrices eget dolor. Mauris ac mattis lectus.
                Praesent facilisis malesuada sapien nec pharetra. Fusce eleifend, nisl.
            </p>
            <a 
                class="expressive-button rollup-button button-outlined highlight-rollup-horizontal highlight-rollup-reverse animate-on-hover"
                style="
                    --outlined-on-background: rgb(var(--primary-500));
                    --rollup-color: rgb(var(--primary-500));
                    --active-border-color: rgb(var(--primary-500));
                    box-shadow: 0 2px 4px -1px rgba(var(--primary-500) / .2), 0 4px 5px 0 rgba(var(--primary-500) / .14), 0 1px 10px 0 rgba(var(--primary-500) / .12);
                "
            >Lorem Ipsum</a>
        </div>
    </div>
</div>
:::


```html {1,7,18,19,20,21}
<div class="overflow-card card-overlay" style="margin-top: 25%; margin-bottom: 25%">
    <img class="card-background" src="https://placedog.net/1000/600">
    <img class="card-media" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/908370/jelly.png">
    <div class="card-content">
        <h2
            class="card-title highlight-line highlight-line-active middle-highlight"
            style="--active-size: 0.33em; --active-color: rgb(var(--primary-500))"
        >
            Mesmerizing Depths
        </h2>
        <p>
            Nunc orci metus, ornare non molestie ac, ultrices eget dolor. Mauris ac mattis lectus.
            Praesent facilisis malesuada sapien nec pharetra. Fusce eleifend, nisl.
        </p>
        <a
            class="expressive-button rollup-button button-outlined highlight-rollup-horizontal highlight-rollup-reverse animate-on-hover"
            style="
                --outlined-on-background: rgb(var(--primary-500));
                --rollup-color: rgb(var(--primary-500));
                --active-border-color: rgb(var(--primary-500));
                box-shadow: 0 2px 4px -1px rgba(var(--primary-500) / .2), 0 4px 5px 0 rgba(var(--primary-500) / .14), 0 1px 10px 0 rgba(var(--primary-500) / .12);
            "
        >Lorem Ipsum</a>
    </div>
</div>
```


## Component CSS

<<< @/../src/organisms/cards/OverflowCard.scss

## Classes
#### Plus [SimpleCard](/molecules/cards/SimpleCard.md) classes

## SCSS variables
#### Plus [SimpleCard](/molecules/cards/SimpleCard.md) variables

| Variable            | Description             | Accepted Values | Default |
|:--------------------|:------------------------|:----------------|:--------|
| `$padding`          | Padding                 | `size`          | `48px`  |
| `$threshold-mobile` | :x: Mobile threshold    | `size`          | `600px` |

## Authors

<VPTeamMembers size="small" :members="Authors" />

<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/organisms/cards/OverflowCard" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix,
    $padding: 48px
);
@use "../src/molecules/buttons/ExpressiveButton" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
@use "../src/atoms/highlights/HighlightLine" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
</style>



<script setup>
import { VPTeamMembers } from 'vitepress/theme';

const Authors = [
  {
    avatar: 'https://placedog.net/100/100',
    name: 'Nathan Taylor',
    title: 'Creator',
    links: [
      { 
        icon: 'github', 
        link: 'https://nathan.tokyo/'
      },
      { 
        icon: 'github', 
        link: 'https://codepen.io/nathantaylor/'
      },
    ]
  }
];
</script>
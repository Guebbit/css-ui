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
@use "@guebbit/css-ui/src/molecules/buttons/expressive-button";
@use "@guebbit/css-ui/src/atoms/highlights/highlight-line";
@use "@guebbit/css-ui/src/organisms/cards/overflow-card";
```

Color is now always applied via utility classes (not SCSS color variables):

- `.bg-{role}` → background + on-color
- `.text-{role}` → text color
- `.border-{role}` → border color
- `.use-{role}` → "jolly" class: sets `--main-color` / `--on-main-color` / `--active-main-color` / `--active-on-main-color` for a full single-class semantic color override

```html
<div class="text-primary">...</div>
<button class="bg-primary">...</button>
<button class="border-primary text-primary">...</button>
<button class="use-primary">...</button>
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

<<< @/../src/organisms/cards/overflow-card/index.scss

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
@use "../src/organisms/cards/overflow-card";
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
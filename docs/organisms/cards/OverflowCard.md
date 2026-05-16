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



## Default

::: raw
<div class="dev-section">
<!--@include: ../../examples/organisms/cards/OverflowCard-default.html -->
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
            class="expressive-button use-brand rollup-button button-outlined highlight-rollup-horizontal highlight-rollup-reverse animate-on-hover"
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

::: code-group
<<< @/../src/organisms/cards/overflow-card/_architecture.scss [_architecture.scss]
<<< @/../src/organisms/cards/overflow-card/index.scss [index.scss]
:::

## Classes
#### Plus [SimpleCard](/molecules/cards/SimpleCard.md) classes

No extra component-specific classes beyond the inherited items above.

## SCSS variables
#### Plus [SimpleCard](/molecules/cards/SimpleCard.md) variables

| SCSS Variable | CSS Variable | Description | Accepted Values | Default |
| :--------------|:-------------|:-------------|:-----------------|:---------|
| `$padding` | `--overflow-card-padding` | Padding | `size` | `48px` |
| `$threshold-mobile` | `--overflow-card-threshold-mobile` | :x: Mobile threshold | `size` | `600px` |
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

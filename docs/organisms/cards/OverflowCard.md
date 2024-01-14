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

## Code

::: raw
<div class="dev-section">
    <div class="overflow-card card-shadow" style="margin-top: 25%; margin-bottom: 25%">
        <img class="card-background" src="https://placekitten.com/1000/600">
        <img class="card-image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/908370/jelly.png">
        <div class="card-content">
            <h2 
                class="card-title highlight-line highlight-line-active middle-highlight"
                style="--active-size: 0.33em; --active-color: rgb(var(--primary-color))"
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
                    --outlined-on-background: rgb(var(--primary-color));
                    --rollup-color: rgb(var(--primary-color));
                    --active-outlined-border-color: rgb(var(--primary-color));
                    box-shadow: 0 2px 4px -1px rgba(var(--primary-color), 0.2), 0 4px 5px 0 rgba(var(--primary-color), 0.14), 0 1px 10px 0 rgba(var(--primary-color), 0.12);
                "
            >Lorem Ipsum</a>
        </div>
    </div>
</div>
:::


```html
<div class="overflow-card" style="margin-top: 25%; margin-bottom: 25%">
    <img class="card-background" src="https://placekitten.com/1000/600">
    <img class="card-image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/908370/jelly.png">
    <div class="card-content">
        <h2 class="card-title">Mesmerizing Depths</h2>
        <p>
            Nunc orci metus, ornare non molestie ac, ultrices eget dolor. Mauris ac mattis lectus.
            Praesent facilisis malesuada sapien nec pharetra. Fusce eleifend, nisl.
        </p>
        <a class="card-button"> Lorem Ipsum </a>
    </div>
</div>
```


## Component CSS

<<< @/../components/organisms/cards/OverflowCard.scss

## Documentation CSS

```scss
@use "docs/theme.scss" as theme;
@use "components/organisms/cards/OverflowCard.scss";
@use "components/molecules/buttons/ExpressiveButton.scss";
@use "components/atoms/highlights/HighlightLine.scss";
```

## Classes
#### Plus [SimpleCard](/molecules/cards/SimpleCard.md) classes

## SCSS variables
##### Plus [SimpleCard](/molecules/cards/SimpleCard.md) variables

| Variable                            | Description                       | Accepted Values | Default                           |
|:------------------------------------|:----------------------------------|:----------------|:----------------------------------|
| `$threshold-mobile`                 | :x: Mobile threshold              | `size`          | `600px`                           |

## Authors

<VPTeamMembers size="small" :members="Authors" />


<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/organisms/cards/OverflowCard.scss";
@use "components/molecules/buttons/ExpressiveButton.scss";
@use "components/atoms/highlights/HighlightLine.scss";
</style>



<script setup>
import { VPTeamMembers } from 'vitepress/theme';

const Authors = [
  {
    avatar: 'https://placekitten.com/100/100',
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
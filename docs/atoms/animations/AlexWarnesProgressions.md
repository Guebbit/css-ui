# Alex Warnes's Progressions
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Progression</Badge>
### [Codepen](https://codepen.io/AlexWarnes/pen/jXYYKL)

## Gradient Circles

::: raw
<div class="dev-section">
    <div class="alex-warnes-progression gradient-circles">
        <div></div>
        <div></div>
    </div>
</div>
:::

```html
<div class="alex-warnes-progression gradient-circles">
    <div></div>
    <div></div>
</div>
```


## Gradient Spinners

::: raw
<div class="dev-section">
    <div class="alex-warnes-progression gradient-spinner">
        <div></div>
    </div>
</div>
:::

```html
<div class="alex-warnes-progression gradient-spinner">
    <div></div>
</div>
```


## Rotating Squares

::: raw
<div class="dev-section">
    <div class="alex-warnes-progression rotating-squares">
        <div></div>
        <div></div>
    </div>
</div>
:::

```html
<div class="alex-warnes-progression rotating-squares">
    <div></div>
    <div></div>
</div>
```

# Commons

::: code-group
<<< @/../components/atoms/animations/AlexWarnesProgressions.scss
:::

## SCSS variables

| Variable                                         | Description                                | Accepted Values | Default                             |
|:-------------------------------------------------|:-------------------------------------------|:----------------|:------------------------------------|
| `$alex-warnes-progression-primary`               | Primary color                              | `color`         | `#000`                              |
| `$alex-warnes-progression-secondary`             | Secondary color                            | `color`         | `#000`                              |
| `$alex-warnes-progression-background`            | Background of body (to hide some elements) | `color`         | `#fff`                              |
| `$alex-warnes-progression-size`                  | Main size                                  | `size`          | `200px`                             |
| `$alex-warnes-progression-border-size`           | Border size                                | `size`          | `5px`                               |
| `$alex-warnes-progression-duration`              | Animation duration                         | `time`          | `2s`                                |
| `$alex-warnes-progression-gc-first-background`   | Gradient Circle first color                | `color`         | `linear-gradient with {$primary}`   |
| `$alex-warnes-progression-gc-second-background`  | Gradient Circle second color               | `color`         | `linear-gradient with {$secondary}` |
| `$alex-warnes-progression-gs-background`         | Gradient Spinner color                     | `color`         | `linear-gradient as {$secondary}`   |


## Authors

<VPTeamMembers size="small" :members="Authors" />

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/animations/AlexWarnesProgressions.scss" as * with (
    $alex-warnes-progression-primary: theme.$primary-color,
    $alex-warnes-progression-secondary: theme.$secondary-color,
    $alex-warnes-progression-background: theme.$background-color,
);
</style>

<script setup>
import { VPTeamMembers } from 'vitepress/theme';

const Authors = [
  {
    avatar: 'https://placekitten.com/100/100',
    name: 'Alex Warnes',
    title: 'Creator',
    links: [
      { 
        icon: 'github', 
        link: '#'
      },
      { 
        icon: 'slack', 
        link: 'https://alexwarnes.com/'
      },
      { 
        icon: 'slack',
        link: 'https://codepen.io/AlexWarnes'
      },
    ]
  }
];
</script>
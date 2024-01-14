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

## Documentation CSS

```scss
@use "docs/theme.scss" as theme;
@use "components/atoms/animations/AlexWarnesProgressions.scss" as * with (
    $primary: theme.$primary-color,
    $secondary: theme.$secondary-color,
    $background: theme.$background-color--light,
    $background--dark: theme.$background-color--dark,
);
```

## SCSS variables

| Variable                 | Description                                                               | Accepted Values  | Default                             |
|:-------------------------|:--------------------------------------------------------------------------|:-----------------|:------------------------------------|
| `$primary`               | :first_quarter_moon_with_face: Primary color                              | `color`          | `#000`                              |
| `$secondary`             | :first_quarter_moon_with_face: Secondary color                            | `color`          | `#000`                              |
| `$background`            | :first_quarter_moon_with_face: Background of body (to hide some elements) | `color`          | `#fff`                              |
| `$size`                  | Main size                                                                 | `size`           | `200px`                             |
| `$border-size`           | Border size                                                               | `size`           | `5px`                               |
| `$duration`              | Animation duration                                                        | `time`           | `2s`                                |
| `$gc-first-background`   | :first_quarter_moon_with_face: Gradient Circle first color                | `color`          | `linear-gradient with {$primary}`   |
| `$gc-second-background`  | :first_quarter_moon_with_face: Gradient Circle second color               | `color`          | `linear-gradient with {$secondary}` |
| `$gs-background`         | :first_quarter_moon_with_face: radient Spinner color                      | `color`          | `linear-gradient as {$secondary}`   |


## Authors

<VPTeamMembers size="small" :members="Authors" />

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/animations/AlexWarnesProgressions.scss" as * with (
    $primary: theme.$primary-color,
    $secondary: theme.$secondary-color,
    $background: theme.$background-color--light,
    $background--dark: theme.$background-color--dark,
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
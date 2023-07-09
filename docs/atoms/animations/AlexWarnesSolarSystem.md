# Alex Warnes's Solar System
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Progression</Badge> <Badge type="tip">Customizable</Badge>
### [Codepen](https://codepen.io/AlexWarnes/pen/jXYYKL)

## Code

<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/animations/AlexWarnesSolarSystem.html -->
</div>

::: code-group
<<< @/public/components-html/atoms/animations/AlexWarnesSolarSystem.html
<<< @/../components/atoms/animations/AlexWarnesSolarSystem.scss
:::

## SCSS variables

| Variable                               | Description      | Accepted Values | Default   |
|:---------------------------------------|:-----------------|:----------------|:----------|
| `$alex-warnes-progressions-size`       | Main size        | `size`          | `200`     |
| `$alex-warnes-progressions-primary`    | Primary color    | `color`         | `#3ff9dc` |
| `$alex-warnes-progressions-secondary`  | Secondary color  | `color`         | `#fb5b53` |
| `$alex-warnes-progressions-background` | Background color | `color`         | `#1d2630` |
| `$alex-warnes-progressions-orbit`      | Orbit line color | `color`         | `#ffffff` |


## Authors

<VPTeamMembers size="small" :members="Authors" />

<style lang="scss">
@import "docs/theme.scss";

$alex-warnes-progressions-primary: $primary-color;
$alex-warnes-progressions-secondary: $secondary-color;
$alex-warnes-progressions-background: $background-color;
$alex-warnes-progressions-orbit: guebbit-contrast($alex-warnes-progressions-background);

@import "components/atoms/animations/AlexWarnesSolarSystem.scss";
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
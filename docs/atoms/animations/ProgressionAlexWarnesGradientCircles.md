# Alex Warnes's Gradient Circles 
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Progression</Badge>
### [Codepen](https://codepen.io/AlexWarnes/pen/jXYYKL)

## Code 

<div class="dev-section">
    <div class="progression-alex-warnes gradient-circles">
        <div></div>
        <div></div>
    </div>
</div>

```html
<div class="progression-alex-warnes gradient-circles">
    <div></div>
    <div></div>
</div>
```

## SCSS variables

| Variable                               | Description     | Accepted Values | Default   |
|:---------------------------------------|:----------------|:----------------|:----------|
| `$progression-alex-warnes-size`        | Main size       | `size`          | `200`     |
| `$progression-alex-warnes-border-size` | Border size     | `size`          | `5px`     |
| `$progression-alex-warnes-primary`     | Primary color   | `color`         | `#3ff9dc` |
| `$progression-alex-warnes-secondary`   | Secondary color | `color`         | `#fb5b53` |


## Authors

<VPTeamMembers size="small" :members="Authors" />

<style lang="scss">
@import "../../theme.scss";

$progression-alex-warnes-primary: $primary-color;
$progression-alex-warnes-secondary: $secondary-color;

@import "components/atoms/animations/ProgressionAlexWarnesGradientCircles.scss";
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
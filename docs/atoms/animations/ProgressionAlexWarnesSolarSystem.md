# Alex Warnes's Solar System
<Badge type="tip">Atom</Badge> <Badge type="info">Animation</Badge> <Badge type="info">Progression</Badge> <Badge type="tip">Customizable</Badge>
### [Codepen](https://codepen.io/AlexWarnes/pen/jXYYKL)

## Code

<div class="dev-section">
    <div class="progression-alex-warnes solar-system">
        <div class="earth-orbit orbit">
            <div class="planet earth"></div>
            <div class="venus-orbit orbit">
                <div class="planet venus"></div>
                <div class="mercury-orbit orbit">
                    <div class="planet mercury"></div>
                    <div class="sun"></div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
    <div class="progression-alex-warnes solar-system">
        <div class="earth-orbit orbit">
            <div class="planet earth"></div>
            <div class="venus-orbit orbit">
                <div class="planet venus"></div>
                <div class="mercury-orbit orbit">
                    <div class="planet mercury"></div>
                    <div class="sun"></div>
                </div>
            </div>
        </div>
    </div>
```

## SCSS variables

| Variable                              | Description      | Accepted Values | Default   |
|:--------------------------------------|:-----------------|:----------------|:----------|
| `$progression-alex-warnes-size`       | Main size        | `size`          | `200`     |
| `$progression-alex-warnes-primary`    | Primary color    | `color`         | `#3ff9dc` |
| `$progression-alex-warnes-secondary`  | Secondary color  | `color`         | `#fb5b53` |
| `$progression-alex-warnes-background` | Background color | `color`         | `#1d2630` |
| `$progression-alex-warnes-orbit`      | Orbit line color | `color`         | `#ffffff` |


## Authors

<VPTeamMembers size="small" :members="Authors" />

<style lang="scss">
@import "../../theme.scss";

$progression-alex-warnes-primary: $primary-color;
$progression-alex-warnes-secondary: $secondary-color;
$progression-alex-warnes-background: $background-color;
$progression-alex-warnes-orbit: guebbit-contrast($progression-alex-warnes-background);

@import "components/atoms/animations/ProgressionAlexWarnesSolarSystem.scss";
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
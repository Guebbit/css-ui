# Calendar Card
<Badge type="tip">Atom</Badge> <Badge type="info">Card</Badge>

<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/cards/CalendarCard.html -->
</div>

::: code-group
<<< @/public/components-html/atoms/cards/CalendarCard.html#default [Default]
<<< @/public/components-html/atoms/cards/CalendarCard.html#small [Small]
<<< @/../components/atoms/cards/CalendarCard.scss [CSS]
:::

## SCSS variables

| Variable                             | Description             | Accepted Values | Default                           |
|:-------------------------------------|:------------------------|:----------------|:----------------------------------|
| `$calendar-card-color`               | Card color              | `color`         | `#000`                            |
| `$calendar-card-on-color`            | Text color (header)     | `color`         | `contrast of {$color}`            |
| `$calendar-card-clip-color`          | Clips color             | `color`         | `shade 40% of {$color}`           |
| `$calendar-card-background-color`    | Background color (body) | `color`         | `tint 80% of {$color}`            |
| `$calendar-card-on-background-color` | Text color (body)       | `color`         | `contrast of {$background-color}` |
| `$calendar-card-shadow-color`        | Shadow color            | `color`         | `#000`                            |
| `$calendar-card-shadow`              | Box-shadow instruction  | `css`           | `box-shadow with {$shadow-color}` |
| `$calendar-card-padding`             | Padding size            | `color`         | `24px`                            |

<style lang="scss">
@import "../../theme.scss";

$calendar-card-color: $secondary-color; 
$calendar-card-background-color: #eee;

@import "components/atoms/cards/CalendarCard.scss";
</style>
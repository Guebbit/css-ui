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

| Variable                         | Description                           | Accepted Values | Default                     |
|:---------------------------------|:--------------------------------------|:----------------|:----------------------------|
| `$calendar-card-header-color`    | Header background color               | `color`         | `#000`                      |
| `$calendar-card-header-on-color` | Header text color                     | `color`         | `contrast of {$color}`      |
| `$calendar-card-body-color`      | Body background color                 | `color`         | `tint 80% of {$color}`      |
| `$calendar-card-body-on-color`   | Body text color                       | `color`         | `contrast of {$body-color}` |
| `$calendar-card-clip-color`      | Clips color                           | `color`         | `shade 40% of {$color}`     |
| `$calendar-card-shadow-color`    | Shadow color (on `var()` MUST be RGB) | `color`         | `#000`                      |
| `$calendar-card-padding`         | Padding size                          | `color`         | `24px`                      |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/cards/CalendarCard.scss" as * with (
    $calendar-card-header-color: theme.$secondary-color,
    $calendar-card-body-color: #eee,
);
</style>
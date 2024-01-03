# Highlight popup

<Badge type="tip">Atom</Badge> <Badge type="info">Highlight</Badge>

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/highlights/HighlightPopup.html -->
</div>
:::

## Code

::: code-group
<<< @/public/components-html/atoms/highlights/HighlightPopup.html#no-effect [no-effect]
<<< @/public/components-html/atoms/highlights/HighlightPopup.html#horizontal [horizontal]
<<< @/public/components-html/atoms/highlights/HighlightPopup.html#vertical [vertical]
<<< @/public/components-html/atoms/highlights/HighlightPopup.html#explosion [explosion]
<<< @/public/components-html/atoms/highlights/HighlightPopup.html#fill [fill]
<<< @/public/components-html/atoms/highlights/HighlightPopup.html#drop [drop]
<<< @/public/components-html/atoms/highlights/HighlightPopup.html#bounce [bounce]
<<< @/../components/atoms/highlights/HighlightPopup.scss [SCSS]
```css [custom css for this MD file]
.highlight-popup {
    padding: 1em 2em;
}
```
:::

## Classes

| Class                        | Description                                           |
|:-----------------------------|:------------------------------------------------------|
| `animate-active`             | Animation active                                      |
| `animate-on-active`          | Animation active on .active                           |
| `animate-on-hover`           | Animation active on hover                             |
| `highlight-popup-horizontal` | Horizontal toggle animation                           |
| `highlight-popup-vertical`   | Vertical toggle animation                             |
| `highlight-popup-explosion`  | Border implosion, then background explosion animation |
| `highlight-popup-fill`       | Fill from within animation                            |
| `highlight-popup-drop`       | Drop from above animation                             |
| `highlight-popup-bounce`     | Bounce fill animation                                 |


## SCSS variables

| Variable                    | Description                                            | Accepted Values | Default             |
|:----------------------------|:-------------------------------------------------------|:----------------|:--------------------|
| `$highlight-popup-color`    | Background color                                       | `color`         | `#000000`           |
| `$highlight-popup-duration` | Animation duration                                     | `time`          | `0.2s`              |
| `$highlight-popup-delay`    | Animation delay (necessary for highlight-popup-bounce) | `time`          | `{$duration} * 0.9` |

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/highlights/HighlightPopup.scss" as * with (
    $highlight-popup-color: theme.$primary-color,
);

.highlight-popup {
    padding: 1em 2em;
}
</style>
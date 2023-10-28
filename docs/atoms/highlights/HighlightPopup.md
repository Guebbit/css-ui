# Highlight popup

<Badge type="tip">Atom</Badge> <Badge type="info">Highlight</Badge>

<div class="dev-section">
    <!--@include: ../../public/components-html/atoms/highlights/HighlightPopup.html -->
</div>

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

| Class                        | Description                 |
|:-----------------------------|:----------------------------|
| `animate-active`             | Animation active            |
| `animate-on-active`          | Animation active on .active |
| `animate-on-hover`           | Animation active on hover   |
| `highlight-popup-horizontal` | Horizontal toggle           |
| `highlight-popup-vertical`   | Vertical toggle             |
| `highlight-popup-explosion`  | ----                        |
| `highlight-popup-fill`       | ----                        |
| `highlight-popup-drop`       | ----                        |
| `highlight-popup-bounce`     | ----                        |


## SCSS variables

| Variable                          | Description                                            | Accepted Values | Default                             |
|:----------------------------------|:-------------------------------------------------------|:----------------|:------------------------------------|
| `$highlight-popup-color`          | Background color                                       | `color`         | `#000000`                           |
| `$highlight-popup-duration`       | Animation duration                                     | `time`          | `0.2s`                              |
| `$highlight-popup-duration-delay` | Animation delay (necessary for highlight-popup-bounce) | `time`          | `{$highlight-popup-duration} * 0.9` |

<style lang="scss">
@import "docs/theme.scss";

.highlight-popup {
    padding: 1em 2em;
}

$highlight-popup-color: $primary-color;

@import "components/atoms/highlights/HighlightPopup.scss";
</style>
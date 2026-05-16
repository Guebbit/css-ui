# Button Large Icon 
<Badge type="tip">Atom</Badge> <Badge type="info">Button</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/components/atoms/button-large-icon";
```



## Default

::: raw
<div class="dev-section">
<!--@include: ../../examples/atoms/buttons/ButtonLargeIcon.html -->
</div>
:::

::: code-group
<<< @/examples/atoms/buttons/ButtonLargeIcon.html#default [default]
<<< @/examples/atoms/buttons/ButtonLargeIcon.html#image [image]
<<< @/examples/atoms/buttons/ButtonLargeIcon.html#small [small]
<<< @/examples/atoms/buttons/ButtonLargeIcon.html#rounded [rounded]
<<< @/examples/atoms/buttons/ButtonLargeIcon.html#circular [circular]
<<< @/examples/atoms/buttons/ButtonLargeIcon.html#flat [flat]
<<< @/examples/atoms/buttons/ButtonLargeIcon.html#plain [plain]
<<< @/examples/atoms/buttons/ButtonLargeIcon.html#outlined [outlined]
:::

## Component CSS

::: code-group
<<< @/../src/components/atoms/button-large-icon/_architecture.scss [_architecture.scss]
<<< @/../src/components/atoms/button-large-icon/index.scss [index.scss]
:::

## Classes

No extra component-specific classes beyond the inherited items above.

## CSS Custom Properties

Component color is inherited from utility classes (`.use-{role}`, `.text-{role}`, `.border-{role}`).

| Property | Default |
|:---------|:--------|
| `--button-large-icon-size` | `90px` |
| `--button-large-icon-duration` | `0.3s` |


## SCSS variables

| SCSS Variable | CSS Variable | Description | Default |
|:--------------|:-------------|:------------|:--------|
| `$icon-size` | `--button-large-icon-size` | Component size | `90px` |
| `$duration` | `--button-large-icon-duration` | Animation duration | `0.3s` |

<style lang="scss">
@use "../src/components/atoms/button-large-icon";
</style>

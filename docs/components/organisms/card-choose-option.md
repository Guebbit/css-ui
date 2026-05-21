# Card Choose Option
<Badge type="tip">Organism</Badge> <Badge type="info">buttons</Badge>

::: tip VARIANT Dependencies
- [Card](/components/atoms/card)
- [Button](/components/atoms/button)
- [List](/components/molecules/list)
:::

## Use

```scss
@use "@guebbit/css-ui/styles" as theme;
@use "@guebbit/css-ui/organisms/card-choose-option";
```

```scss
@use "@guebbit/css-ui/styles" as theme;
@use "@guebbit/css-ui/organisms/card-choose-option";
```


## Default
::: raw
<div class="dev-section">
<!--@include: ../../examples/organisms/cards/card-choose-option.html -->
</div>
:::

<<< @/examples/organisms/cards/card-choose-option.html

## Component CSS

::: code-group
<<< @/../src/components/organisms/card-choose-option/_architecture.scss [_architecture.scss]
<<< @/../src/components/organisms/card-choose-option/index.scss [index.scss]
:::

## Classes
#### Plus [Card](/components/atoms/card) classes

| Class      | Description                      |
|:-----------|:---------------------------------|
| `active`   | on `{li}`, selected option       |
| `disabled` | on `{li}`, non selectable option |

## SCSS variables
#### Plus [Card](/components/atoms/card) variables
#### Plus [Button](/components/atoms/button) variables (prefix: "button-")
#### Plus [List](/components/molecules/list) variables (prefix: "list-")

| SCSS Variable | CSS Variable | Description | Accepted Values | Default |
| :--------------|:-------------|:-------------|:-----------------|:---------|
| `$selected-color` | — | background color | `color` | `inherited from Card {$active-color}` |
| `$selected-on-color` | — | text color | `color` | `inherited from Card {$active-on-color}` |
| `$hover-color` | — | background color | `color` | `rgba({$selected-color}, 0.2)` |
| `$hover-on-color` | — | text color | `color` | `same as {$selected-on-color}` |
| `$inactive-color` | — | background color | `color` | `#ccc` |
| `$inactive-on-color` | — | text color | `color` | `contrast of {$inactive-color}` |
| `$disabled-opacity` | `--choose-option-card-disabled-opacity` | Opacity of disabled option | `number` | `0.5` |
<style lang="scss">
@use "../src/components/organisms/card-choose-option";
</style>

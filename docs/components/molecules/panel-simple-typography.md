# Panel Simple Typography
<Badge type="tip">Molecule</Badge> <Badge type="info">Panel</Badge>
::: danger TODO
Base per le varie versioni "blog" non ancora importate
:::

## Use

```scss
@use "@guebbit/css-ui/styles" as theme;
@use "@guebbit/css-ui/molecules/panel-simple-typography";
```

```scss
@use "@guebbit/css-ui/styles" as theme;
@use "@guebbit/css-ui/molecules/panel-simple-typography";
```


## Default

::: raw
<div class="dev-section">
<!--@include: ../../examples/molecules/panels/SimpleTypography-default.html -->
</div>
:::

::: code-group
```html
<div class="simple-typography animate-on-hover">
    <div class="panel-category">Lorem Ipsum</div>
    <h3 class="panel-title">
        Lorem ipsum dolor sit amet, <b class="text-primary">consectetur</b> adipiscing elit
    </h3>
    <p class="panel-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud <b class="text-secondary">exercitation ullamco</b> laboris
        nisi ut aliquip ex ea commodo consequat.
    </p>
    <p class="panel-text">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</div>
```
:::


## Component CSS

::: code-group
<<< @/../src/components/molecules/panel-simple-typography/_architecture.scss [_architecture.scss]
<<< @/../src/components/molecules/panel-simple-typography/index.scss [index.scss]
:::

## Documentation CSS

```scss
.simple-typography {
  font-size: 1.2em;
}
```

## Classes

| Class                              | Description                                |
|:-----------------------------------|:-------------------------------------------|
| `animate-active`                   | Animation active                           |
| `animate-on-active`                | Animation active on .active                |
| `animate-on-hover`                 | Animation active on hover                  |

## SCSS variables

| SCSS Variable | CSS Variable | Description | Accepted Values | Default |
| :--------------|:-------------|:-------------|:-----------------|:---------|
| `$color` | `--simple-typography-main-color` | :x: :zap: :first_quarter_moon_with_face: Main color | `color` | `transparent` |
| `$background` | — | :zap: :first_quarter_moon_with_face: Background color | `color` | `same as {$color}` |
| `$on-background` | `--simple-typography-on-main-color` | :zap: :first_quarter_moon_with_face: Text color | `color` | `contrast of {$background}` |
| `$category-color` | — | :zap: :first_quarter_moon_with_face: Category (top) text color (and line) | `color` | `inherit` |
| `$title-color` | — | :zap: :first_quarter_moon_with_face: Title text color | `color` | `inherit` |
| `$duration` | `--simple-typography-duration` | Transition duration | `time` | `0.3s` |
<style lang="scss">
@use "../src/components/molecules/panel-simple-typography";
</style>

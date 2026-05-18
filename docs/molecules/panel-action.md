# Action Panel
<Badge type="tip">Molecule</Badge> <Badge type="info">Panel</Badge>

::: tip VARIANT Dependencies
- [SimplePanel](/molecules/panel-simple)
:::

::: tip INCLUDED
- [SimpleButton](/atoms/button-simple)
:::

# Use

```scss
@use "@guebbit/css-ui/molecules/panel-action";
```


## Default

::: raw
<!--@include: ../examples/molecules/panel-action-default.html -->
:::

```html
<div class="action-panel">
    <div class="panel-overlay"></div>
    <img class="panel-background" src="https://placedog.net/1000/1000" alt="" title="">
    <div class="panel-content">
        <h3 class="panel-title">LOREM IPSUM SIT DOLOR AMET</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="panel-actions">
            <button class="simple-button">Lorem</button>
            <button class="simple-button" style="--background: rgb(var(--secondary-500))">Ipsum</button>
        </div>
    </div>
</div>
```

## With panel-left-actions and panel-right-actions
::: warning
Same as before, but all content within .panel-content, except .panel-actions, must be inside a container
:::

::: raw
<!--@include: ../examples/molecules/panel-action-with-panel-left-actions-and-panel-right-actions.html -->
:::

## Component CSS

::: code-group
<<< @/../src/components/molecules/panel-action/_architecture.scss [_architecture.scss]
<<< @/../src/components/molecules/panel-action/index.scss [index.scss]
:::

## Documentation CSS

```scss
@use "../docs/theme" as theme;
@use "../src/components/molecules/panel-action";
@use "../src/components/atoms/button-simple";

.action-panel{
  .simple-button{
    --shadow-color: var(--secondary-500);
    --background: rgb(var(--primary-500));
    --on-background: #fff;
  }
}
```

## Classes
#### Plus [SimplePanel](/molecules/panel-simple) classes

| Class                   | Description              |
|:------------------------|:-------------------------|
| `panel-left-actions`    | Actions positioned left  |
| `panel-right-actions`   | Actions positioned right |

## SCSS variables
#### Plus [SimplePanel](/molecules/panel-simple) variables

No extra component-specific SCSS variables beyond the inherited items above.
<style lang="scss">
@use "../src/components/molecules/panel-action";
</style>

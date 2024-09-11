# Action Panel
<Badge type="tip">Molecule</Badge> <Badge type="info">Panel</Badge>

::: tip VARIANT Dependencies
- [SimplePanel](/molecules/panels/SimplePanel)
:::

::: tip INCLUDED
- [SimpleButton](/atoms/buttons/SimpleButton)
:::

# Use

```scss
@use "@guebbit/css-ui/src/molecules/cards/ActionPanel";
```

## Default

::: raw
<div class="dev-section with-overflow">
    <div class="action-panel">
        <div class="panel-shadow"></div>
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
</div>
:::

```html
<div class="action-panel">
    <div class="panel-shadow"></div>
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
<div class="dev-section with-overflow">
    <div class="action-panel panel-left-actions">
        <div class="panel-shadow"></div>
        <img class="panel-background" src="https://placedog.net/1000/1000" alt="" title="">
        <div class="panel-content">
            <div>
                <h3 class="panel-title">LOREM IPSUM SIT DOLOR AMET</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div class="panel-actions">
                <button class="simple-button">Lorem</button>
                <button class="simple-button" style="--background: rgb(var(--secondary-500))">Ipsum</button>
            </div>
        </div>
    </div>
    <br/>
    <div class="action-panel panel-right-actions">
        <div class="panel-shadow"></div>
        <img class="panel-background" src="https://placedog.net/1000/1000" alt="" title="">
        <div class="panel-content">
            <div>
                <h3 class="panel-title">LOREM IPSUM SIT DOLOR AMET</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div class="panel-actions">
                <button class="simple-button">Lorem</button>
                <button class="simple-button" style="--background: rgb(var(--secondary-500))">Ipsum</button>
            </div>
        </div>
    </div>
</div>
:::

## Component CSS

<<< @/../src/molecules/panels/ActionPanel.scss

## Documentation CSS

```scss
@use "../docs/theme" as theme;
@use "../src/molecules/panels/ActionPanel";
@use "../src/atoms/buttons/SimpleButton";

.action-panel{
  .simple-button{
    --shadow-color: var(--secondary-500);
    --background: rgb(var(--primary-500));
    --on-background: #fff;
  }
}
```

## Classes
#### Plus [SimplePanel](/molecules/panels/SimplePanel) classes

| Class                   | Description              |
|:------------------------|:-------------------------|
| `panel-left-actions`    | Actions positioned left  |
| `panel-right-actions`   | Actions positioned right |

## SCSS variables
#### Plus [SimplePanel](/molecules/panels/SimplePanel) variables

<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/molecules/panels/ActionPanel";
@use "../src/atoms/buttons/SimpleButton";

.action-panel{
  .simple-button{
    --shadow-color: var(--secondary-500);
    --background: rgb(var(--primary-500));
    --on-background: #fff;
  }
}
</style>
# Stats Team Card

<Badge type="tip">Organisms</Badge> <Badge type="info">Card</Badge>

::: tip VARIANT Dependencies

- [SimpleCard](/molecules/cards/SimpleCard.md)
  :::

::: tip INCLUDED

- [HighlightBelt](/atoms/highlights/HighlightBelt.md)
  :::

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/atoms/highlights/HighlightBelt" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix,
    $size: 60px,
);
@use "@guebbit/css-ui/src/molecules/cards/SimpleCard" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
```

::: raw
<div class="dev-section">
  <div class="simple-card card-outlined grayscale-reverse-on-hover shadow-on-hover">
      <img class="card-media" alt="" src="https://placedog.net/1000/600" />
      <div class="highlight-belt bend-bottom">
          <b>Lorem Ipsum</b>
      </div>
      <div class="card-content">
          <h2 class="card-title">Title of lorem ipsum</h2>
          <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
          <br/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <div class="card-actions card-section-end">
              <svg class="card-icon" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
              </svg>
              <svg class="card-icon" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
              </svg>
              <svg class="card-icon" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
              </svg>
          </div>
      </div>
  </div>
</div>
:::

```html
<div class="simple-card card-outlined grayscale-reverse-on-hover shadow-on-hover">
    <img class="card-media" alt="" src="https://placedog.net/1000/600"/>
    <div class="highlight-belt bend-bottom">
        <b>Lorem Ipsum</b>
    </div>
    <div class="card-content">
        <h2 class="card-title">Title of lorem ipsum</h2>
        <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
        <br/>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <div class="card-actions card-section-center">
            <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/>
            </svg>
            <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/>
            </svg>
            <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/>
            </svg>
        </div>
    </div>
</div>
```

## Classes

#### Plus [SimpleCard](/molecules/cards/SimpleCard.md) classes

## SCSS variables

#### Plus [SimpleCard](/molecules/cards/SimpleCard.md) variables

<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/atoms/highlights/HighlightBelt" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix,
    $size: 60px,
);
@use "../src/molecules/cards/SimpleCard" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
</style>
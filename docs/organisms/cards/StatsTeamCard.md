# Stats Team Card
<Badge type="tip">Organisms</Badge> <Badge type="info">Card</Badge>

::: danger TODO
Re-do UI
:::

::: tip VARIANT Dependencies
- [SimpleCard](/molecules/cards/SimpleCard.md)
:::

::: tip INCLUDED
 - [HighlightBelt](/atoms/highlights/HighlightBelt.md)
 - [SimpleTextIcon](/atoms/typography/SimpleTextIcon.md)
:::

::: raw
<div class="dev-section">
  <div class="simple-card">
      <img class="card-image" alt="" src="https://placekitten.com/900/600" />
      <div class="card-content">
          <h2 class="card-title">Title of lorem ipsum</h2>
          <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
          <hr class="card-divider" />
          <p>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              Vestibulum tortor quam, feugiat vitae,
              ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
              Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
          </p>
          <div class="card-actions card-actions-end">
              <div class="card-button button-icon-only button-rounded">
                  <svg class="button-icon" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                  </svg>
              </div>
              <div class="card-button button-icon-only button-rounded">
                  <svg class="button-icon" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                  </svg>
              </div>
              <div class="card-button button-icon-only button-rounded">
                  <svg class="button-icon" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                  </svg>
              </div>
          </div>
      </div>
  </div>
</div>
:::

```html
<div class="simple-card">
    <img class="card-image" alt="" src="https://placekitten.com/900/600" />
    <div class="card-content">
        <h2 class="card-title">Title of lorem ipsum</h2>
        <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
        <hr class="card-divider" />
        <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
            Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
        </p>
        <div class="card-actions card-actions-end">
            <div class="card-button button-icon-only button-rounded">
                <svg class="button-icon" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </div>
            <div class="card-button button-icon-only button-rounded">
                <svg class="button-icon" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </div>
            <div class="card-button button-icon-only button-rounded">
                <svg class="button-icon" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </div>
        </div>
    </div>
</div>
```

::: raw
<div class="dev-section">
  <div class="simple-card grayscale-active grayscale-reverse-on-hover shadow-on-hover">
      <img class="card-image" alt="" src="https://placekitten.com/1000/600" />
      <div class="highlight-belt bend-bottom">
          <b>Lorem Ipsum</b>
      </div>
      <div class="card-content">
          <h2 class="card-title">Title of lorem ipsum</h2>
          <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
          <br/>
          <div class="card-actions card-actions-center">
              <span class="simple-text-icon column-mode">
                  <span class="text-icon">
                      <svg viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" />
                      </svg>
                  </span>
                  Lorem Ipsum
              </span>
              <span class="simple-text-icon highlight-on-hover column-mode">
                  <span class="text-icon">
                      <svg viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" />
                      </svg>
                  </span>
                  Lorem Ipsum
              </span>
              <span class="simple-text-icon column-mode">
                  <span class="text-icon">
                      <img alt="" src="https://placekitten.com/50/50" />
                  </span>
                  Lorem Ipsum
              </span>
          </div>
      </div>
  </div>
</div>
:::

```html
<div class="simple-card grayscale-active grayscale-reverse-on-hover shadow-on-hover">
    <img class="card-image" alt="" src="https://placekitten.com/1000/600" />
    <div class="highlight-belt bend-bottom">
        <b>Lorem Ipsum</b>
    </div>
    <div class="card-content">
        <h2 class="card-title">Title of lorem ipsum</h2>
        <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
        <br/>
        <div class="card-actions card-actions-center">
            <span class="simple-text-icon column-mode">
                <span class="text-icon">
                    <svg viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                </span>
                Lorem Ipsum
            </span>
            <span class="simple-text-icon highlight-on-hover column-mode">
                <span class="text-icon">
                    <svg viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                </span>
                Lorem Ipsum
            </span>
            <span class="simple-text-icon column-mode">
                <span class="text-icon">
                    <img alt="" src="https://placekitten.com/50/50" />
                </span>
                Lorem Ipsum
            </span>
        </div>
    </div>
</div>
```


## Classes
#### Plus [SimpleCard](/molecules/cards/SimpleCard.md) classes

## SCSS variables
##### Plus [SimpleCard](/molecules/cards/SimpleCard.md) variables

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/atoms/highlights/HighlightBelt.scss";
@use "components/atoms/typography/SimpleTextIcon.scss";
@use "components/molecules/cards/SimpleCard.scss" as * with (
    $color: theme.$primary-color,
);
</style>
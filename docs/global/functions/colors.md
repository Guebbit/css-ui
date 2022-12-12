# Colors

## guebbit-brightness

Gives %, less than 50 darker is better, less than 50, lighter.

```scss
@if(guebbit-brightness($color))
```

```scss
@function guebbit-brightness($color) {
  @return math.div(((red($color) * .299) + (green($color) * .587) + (blue($color) * .114)), 255 * 100%);
}
```

| Variable  | Description    | Accepted Values | Default |
|:----------|:---------------|:----------------|:--------|
| `$color`  | Color to check | `color`         | `none`  |



## guebbit-contrast

Compares contrast of a given color to the light/dark arguments and returns whichever is most "contrasty"

```scss
background-color: $background;
color: guebbit-contrast($background);
```

```scss
@function guebbit-contrast($color: #fff, $dark: #000, $light: #fff) {
  $color-brightness: guebbit-brightness($color);
  $light-text-brightness: guebbit-brightness($light);
  $dark-text-brightness: guebbit-brightness($dark);

  @return if(abs($color-brightness - $light-text-brightness) > abs($color-brightness - $dark-text-brightness), $light, $dark);
}
```


| Variable | Description          | Accepted Values | Default |
|:---------|:---------------------|:----------------|:--------|
| `$color` | Color to check       | `color`         | `4px`   |
| `$dark`  | Dark color to apply  | `color`         | `#000`  |
| `$light` | White color to apply | `color`         | `#fff`  |
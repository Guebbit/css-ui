# Scrollbar

Scrollbars of element

```scss
    @include guebbit-builder-scrollbar(4px, #fff, #000, 10px);
```

```scss
@mixin guebbit-builder-scrollbar($size: "4px", $color: "#fff", $bg: "auto", $radius: "10px") {
  $fallback-color: #fff;
  $fallback-bg: transparent;

  @if $bg == "auto" {
    $bg: $fallback-bg;
  }

  &::-webkit-scrollbar {
    width: $size;
    height: $size;
    background-color: $fallback-bg;
    background-color: $bg;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: $radius;
    background-color: $fallback-color;
    background-color: $color;
  }

  &::-webkit-scrollbar-corner {
    background-color: $fallback-bg;
    background-color: $bg;
  }
}
```

| Variable  | Description             | Accepted Values | Default |
|:----------|:------------------------|:----------------|:--------|
| `$size`   | Size of scrollbar       | `size`          | `4px`   |
| `$color`  | Color of scrollbar      | `color`         | `#fff`  |
| `$bg`     | Color in the background | `color`         | `auto`  |
| `$radius` | Radius of scrollbar     | `size`          | `10px`  |
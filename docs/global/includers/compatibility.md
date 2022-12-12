# Compatibility

## Code

Compatibility mode for browsers
Firefox, Internet Explorer, Microsoft Edge, Opera (TODO), Safari (TODO)

```scss
@include guebbit-compatibility{
    ...
}
```

```scss
@mixin guebbit-compatibility($browser) {
  // INTERNET EXPLORER
  @if $browser == "ie" {
    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      @content;
    }
  }
  // MICROSOFT EDGE
  @if $browser == "edge" {
    @supports (-ms-ime-align:auto) {
      @content;
    }
  }
  // FIREFOX
  @if $browser == "firefox" {
    @supports (-moz-appearance:none) {
      @content;
    }
  }

  // OPERA TODO
}
```

## SCSS variables

| Variable     | Description        | Accepted Values | Default |
|:-------------|:-------------------|:----------------|:--------|
| `@content`   | CSS Style to apply | `content`       | ``      |
| `$browser`   | browser name       | `string`        | `none`  |
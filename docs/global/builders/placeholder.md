# Placeholder

## Code

Easy edit a placeholder with all the compatibility required

```scss
@include guebbit-builder-placeholder{
    ...
}
```

```scss
@mixin guebbit-builder-placeholder() {
  &::placeholder {
    @content;
  }
  &:-ms-input-placeholder {
    @content;
  }
  &::-ms-input-placeholder {
    @content;
  }
}
```

## SCSS variables

| Variable     | Description        | Accepted Values | Default |
|:-------------|:-------------------|:----------------|:--------|
| `@content`   | CSS Style to apply | `content`       | ``      |

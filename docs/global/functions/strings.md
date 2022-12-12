# Strings

## guebbit-string-ends-with

Check if $string ends with $find

```scss
@if guebbit-string-ends-with($sname, "-fallback"){}
```

```scss
@function guebbit-string-ends-with($string, $find) {
  @return str-length($string) >= str-length($find) AND str-slice($string, (str-length($string) - str-length($find) + 1)) == $find;
}
```

| Variable    | Description     | Accepted Values | Default |
|:------------|:----------------|:----------------|:--------|
| `$string`   | String to check | `string`        | `none`  |
| `$find`     | String to find  | `string`        | `none`  |


## guebbit-split

Split string into lists.
[color]-fallback: remove "fallback" and use "[color]" variable

```scss
    .#{$prefix}#{list.nth(guebbit-split($sname, "-"), 1)}-color {
      color: $scolor !important;
    }
```

```scss
@function guebbit-split($string, $separator: "-") {
  $split-arr: ();
  $index : str-index($string, $separator);
  @while $index != null {
    $item: str-slice($string, 1, $index - 1);
    $split-arr: append($split-arr, $item);
    $string: str-slice($string, $index + 1);
    $index : str-index($string, $separator);
  }
  $split-arr: append($split-arr, $string);
  @return $split-arr;
}
```


| Variable     | Description           | Accepted Values | Default |
|:-------------|:----------------------|:----------------|:--------|
| `$string`    | String to split       | `string`        | `none`  |
| `$separator` | Separator's substring | `string`        | `-`     |

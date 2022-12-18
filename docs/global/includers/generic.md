# Generic Include

Width and min-width
@param {Array<name,value>[]} measure-list - postfix name and value

## Code

```scss
@include guebbit-include-instruction("width", (
    (25, 25%),
    (50, 50%),
    (75, 75%),
    (100, 100%),
    (p25, 25px),
    (p50, 50px),
    (p75, 75px),
    (p100, 100px)
), true);
```

```scss
@mixin guebbit-include-instruction($instruction, $measure-list: (), $important: false, $prefix: "", $delimiter: "-") {
  @each $name, $val in $measure-list {
    .#{$prefix}#{$instruction}#{$delimiter}#{$name} {
      #{$instruction}: #{$val} #{if($important == true, "!important", "")}
    }
  }
}
```

## SCSS variables

| Variable          | Description                                              | Accepted Values       | Default |
|:------------------|:---------------------------------------------------------|:----------------------|:--------|
| `$instruction`    | CSS instruction to insert                                | `string`              | `none`  |
| `$measure-list`   | List of pairs <name, value>                              | `Array<name,value>[]` | `[]`    |
| `$important`      | If instruction is !important                             | `boolean`             | `false` |
| `$prefix`         | Eventual prefix (like `guebbit-`), to prevent collisions | `string`              | ``      |
| `$delimiter`      | Custom delimeter of the final classnames                 | `string`              | `-`     |
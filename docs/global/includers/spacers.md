# Spacers

## Guebbit Include Margin

t - applies the spacing for margin-top
b - applies the spacing for margin-bottom
l - applies the spacing for margin-left
r - applies the spacing for margin-right
x - applies the spacing for both *-left and *-right
y - applies the spacing for both *-top and *-bottom
a - applies the spacing for the property in all directions
@param {Array<name,value>[]} measure-list - postfix name and value

```scss
@include guebbit-include-margin((
    (auto, auto),
    (6, 6px),
    (12, 12px),
    (24, 24px),
    (36, 36px),
    (48, 48px),
), true);
```

```scss
@mixin guebbit-include-margin($measure-list: (), $important: false, $prefix: "", $delimiter: "-") {
  @each $name, $val in $measure-list {
    .#{$prefix}mt#{$delimiter}#{$name} {
      margin-top: #{$val} #{if($important == true, "!important", "")};
    }
    .#{$prefix}mb#{$delimiter}#{$name} {
      margin-bottom: #{$val} #{if($important == true, "!important", "")};
    }
    .#{$prefix}ml#{$delimiter}#{$name} {
      margin-left: #{$val} #{if($important == true, "!important", "")};
    }
    .#{$prefix}mr#{$delimiter}#{$name} {
      margin-right: #{$val} #{if($important == true, "!important", "")};
    }
    .#{$prefix}mx#{$delimiter}#{$name} {
      margin-right: #{$val} #{if($important == true, "!important", "")};
      margin-left: #{$val} #{if($important == true, "!important", "")};
    }
    .#{$prefix}my#{$delimiter}#{$name} {
      margin-top: #{$val} #{if($important == true, "!important", "")};
      margin-bottom: #{$val} #{if($important == true, "!important", "")};
    }
    .#{$prefix}ma#{$delimiter}#{$name} {
      margin: #{$val} #{if($important == true, "!important", "")};
    }
  }
}
```

| Variable          | Description                                              | Accepted Values       | Default |
|:------------------|:---------------------------------------------------------|:----------------------|:--------|
| `$measure-list`   | List of pairs <name, value>                              | `Array<name,value>[]` | `[]`    |
| `$important`      | If instruction is !important                             | `boolean`             | `false` |
| `$prefix`         | Eventual prefix (like `guebbit-`), to prevent collisions | `string`              | ``      |
| `$delimiter`      | Custom delimeter of the final classnames                 | `string`              | `-`     |


## Guebbit Include Padding

t - applies the spacing for padding-top
b - applies the spacing for padding-bottom
l - applies the spacing for padding-left
r - applies the spacing for padding-right
x - applies the spacing for both *-left and *-right
y - applies the spacing for both *-top and *-bottom
a - applies the spacing for the property in all directions
@param {Array<name,value>[]} measure-list - postfix name and value

```scss
@include guebbit-include-padding((
    (6, 6px),
    (12, 12px),
    (24, 24px),
    (36, 36px),
    (48, 48px),
), true);
```

```scss
@mixin guebbit-include-padding($measure-list: (), $important: false, $prefix: "", $delimiter: "-") {
  @each $name, $val in $measure-list {
    .#{$prefix}pt-#{$name} {
      padding-#{$delimiter}top: #{$val} #{if($important == true, "!important", "")};
    }
    .#{$prefix}pb-#{$name} {
      padding-#{$delimiter}bottom: #{$val} #{if($important == true, "!important", "")};
    }
    .#{$prefix}pl-#{$name} {
      padding-#{$delimiter}left: #{$val} #{if($important == true, "!important", "")};
    }
    .#{$prefix}pr-#{$name} {
      padding-#{$delimiter}right: #{$val} #{if($important == true, "!important", "")};
    }
    .#{$prefix}px-#{$name} {
      padding-#{$delimiter}right: #{$val} #{if($important == true, "!important", "")};
      padding-#{$delimiter}left: #{$val} #{if($important == true, "!important", "")};
    }
    .#{$prefix}py-#{$name} {
      padding-#{$delimiter}top: #{$val} #{if($important == true, "!important", "")};
      padding-#{$delimiter}bottom: #{$val} #{if($important == true, "!important", "")};
    }
    .#{$prefix}pa-#{$name} {
      padding: #{$val} #{if($important == true, "!important", "")};
    }
  }
}
```

| Variable          | Description                                              | Accepted Values       | Default |
|:------------------|:---------------------------------------------------------|:----------------------|:--------|
| `$measure-list`   | List of pairs <name, value>                              | `Array<name,value>[]` | `[]`    |
| `$important`      | If instruction is !important                             | `boolean`             | `false` |
| `$prefix`         | Eventual prefix (like `guebbit-`), to prevent collisions | `string`              | ``      |
| `$delimiter`      | Custom delimeter of the final classnames                 | `string`              | `-`     |
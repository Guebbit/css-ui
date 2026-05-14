# Simple List
<Badge type="tip">Atom</Badge> <Badge type="info">Lists</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/molecules/lists/simple-list";
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/molecules/lists/simple-list";
```


## Default

::: raw
<div class="dev-section">
    <!--@include: ../../examples/molecules/lists/SimpleList.html -->
</div>
:::

<<< @/examples/molecules/lists/SimpleList.html


## With links

::: raw
    <!--@include: ../../examples/molecules/lists/SimpleList-with-links.html -->
:::

```html
<ul class="simple-list">
    <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a></li>
    <li><a href="#">Tempor incididunt Reversed</a></li>
</ul>
```

## With shadow, margin and changed background

::: raw
    <!--@include: ../../examples/molecules/lists/SimpleList-with-shadow-margin-and-changed-background.html -->
:::

```html
<ul class="simple-list animate-on-hover with-shadow">
    <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a></li>
    <li><a href="#">Tempor incididunt Reversed</a></li>
</ul>
```

## Nested

::: raw
    <!--@include: ../../examples/molecules/lists/SimpleList-nested.html -->
:::

```html
<ul class="simple-list animate-on-hover">
    <li>
        <img alt="" src="https://placedog.net/100/100" />
        Sublist
    </li>
    <li>
        <span>
            <ul class="simple-list">
                <li>
                    <img alt="" src="https://placedog.net/100/100" />
                    With image
                </li>
                <li>
                    <svg class="icon" viewBox="0 0 24 24">
                        <use xlink:href="#icon"/>
                    </svg>
                    With icon
                </li>
            </ul>
        </span>
    </li>
</ul>
```

## Horizontal

::: raw
    <!--@include: ../../examples/molecules/lists/SimpleList-horizontal.html -->
:::

```html
<ul class="simple-list horizontal-list animate-on-hover">
    <li>
        <a href="#">
            horizonal (is link)
            <svg class="icon" viewBox="0 0 24 24">
                <use xlink:href="#icon"/>
            </svg>
        </a>
    </li>
    <li>
        <a href="#">
            Consectetur adipiscing elit
            <svg class="icon" viewBox="0 0 24 24">
                <use xlink:href="#icon"/>
            </svg>
        </a>
    </li>
    <li>
        <a href="#">
            <svg class="icon" viewBox="0 0 24 24">
                <use xlink:href="#icon"/>
            </svg>
            Lorem Ipsum <br /> Lorem Ipsum
        </a>
    </li>
</ul>
```

## Spring

::: raw
    <!--@include: ../../examples/molecules/lists/SimpleList-spring.html -->
:::

```html
<ul class="simple-list spring-list animate-on-hover">
    <li class="core-red-bg">
        <img alt="" src="https://placedog.net/100/100" />
        Lorem ipsum dolor sit amet
    </li>
    <li class="core-blue-bg">
        Consectetur adipiscing elit
        <img alt="" src="https://placedog.net/100/100" />
    </li>
    <li class="core-green-bg">
        Sed do eiusmod tempor incididun
    </li>
    <li class="core-yellow-bg">
        <svg class="icon" viewBox="0 0 24 24">
            <use xlink:href="#icon"/>
        </svg>
        Ut labore et dolore magna aliqua
    </li>
</ul>
```

## Component CSS

<<< @/../src/molecules/lists/simple-list/index.scss

## Classes

| Class               | Description                 |
|:--------------------|:----------------------------|
| `horizontal-list`   | Horizontal mode             |
| `spring-list`       | Horizontal mode             |
| `animate-active`    | Animation active            |
| `animate-on-active` | Animation active on .active |
| `animate-on-hover`  | Animation active on hover   |

## SCSS variables

| Variable               | Description                                                                        | Accepted Values | Default                     |
|:-----------------------|:-----------------------------------------------------------------------------------|:----------------|:----------------------------|
| `$color`               | :x: :first_quarter_moon_with_face: MAIN color                                      | `color`         | `transparent`               |
| `$background`          | :first_quarter_moon_with_face: Background color                                    | `color`         | `same as {$color}`          |
| `$on-background`       | :first_quarter_moon_with_face: Text color                                          | `color`         | `contrast of {$background}` |
| `$icon-color`          | :first_quarter_moon_with_face: Icon color                                          | `color`         | `inherit`                   |
| `$shadow-color`        | :first_quarter_moon_with_face: Shadow color (with-shadow) (on `var()` MUST be RGB) | `color`         | `0,0,0`                     |
| `$padding`             | Padding of LI elements                                                             | `size`          | `0.5em`                     |
| `$margin`              | Margin of LI elements                                                              | `size`          | `0`                         |
| `$duration`            | Transition's duration                                                              | `duration`      | `0.2`                       |

<!-- ICONS -->

<div style="display: none">
    <svg id="icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
</div>

<style lang="scss">
@use "../src/molecules/lists/simple-list";
</style>

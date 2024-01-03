# Simple List
<Badge type="tip">Atom</Badge> <Badge type="info">Lists</Badge>

## Default

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/lists/SimpleList.html -->
</div>
:::

<<< @/public/components-html/molecules/lists/SimpleList.html


## With links

::: raw
<div class="dev-section">
    <ul class="simple-list animate-on-hover">
        <li><a href="#">Lorem ipsum dolor sit amet</a></li>
        <li><a href="#">Consectetur adipiscing elit</a></li>
    </ul>
</div>
:::

``` html
<ul class="simple-list">
    <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a></li>
    <li><a href="#">Tempor incididunt Reversed</a></li>
</ul>
```

## With shadow, margin and changed background

::: raw
<div class="dev-section">
    <ul 
        class="simple-list animate-on-hover with-shadow"
        style="--shadow-color: 0,255,0; --active-shadow-color: 255,0,0; --margin: 1em; --color: rgb(var(--primary-color))"
    >
        <li><a href="#">Lorem ipsum dolor sit amet</a></li>
        <li><a href="#">Consectetur adipiscing elit</a></li>
    </ul>
</div>
:::

``` html
<ul class="simple-list animate-on-hover with-shadow">
    <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a></li>
    <li><a href="#">Tempor incididunt Reversed</a></li>
</ul>
```

## Nested

::: raw
<div class="dev-section">
    <ul class="simple-list animate-on-hover">
        <li>
            <img alt="" src="https://placekitten.com/100/100" />
            Sublist
        </li>
        <li>
            <span>
                <ul class="simple-list">
                    <li>
                        <img alt="" src="https://placekitten.com/100/100" />
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
</div>
:::

``` html
<ul class="simple-list animate-on-hover">
    <li>
        <img alt="" src="https://placekitten.com/100/100" />
        Sublist
    </li>
    <li>
        <span>
            <ul class="simple-list">
                <li>
                    <img alt="" src="https://placekitten.com/100/100" />
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
<div class="dev-section">
    <ul class="simple-list horizontal-list animate-on-hover">
        <li>
            <a href="#">Lorem ipsum (is link)</a>
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
                Lorem ipsum dolor 
                <br />
                sit amet
            </a>
        </li>
    </ul>
</div>
:::

``` html
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
<ul class="simple-list spring-list animate-on-hover">
    <li class="core-red-bg">
        <img alt="" src="https://placekitten.com/100/100" />
        Lorem ipsum dolor sit amet
    </li>
    <li class="core-blue-bg">
        Consectetur adipiscing elit
        <img alt="" src="https://placekitten.com/100/100" />
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
:::

``` html
<ul class="simple-list spring-list animate-on-hover">
    <li class="core-red-bg">
        <img alt="" src="https://placekitten.com/100/100" />
        Lorem ipsum dolor sit amet
    </li>
    <li class="core-blue-bg">
        Consectetur adipiscing elit
        <img alt="" src="https://placekitten.com/100/100" />
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

## Common CSS

<<< @/../components/molecules/lists/SimpleList.scss

## Classes

| Class               | Description                 |
|:--------------------|:----------------------------|
| `horizontal-list`   | Horizontal mode             |
| `spring-list`       | Horizontal mode             |
| `animate-active`    | Animation active            |
| `animate-on-active` | Animation active on .active |
| `animate-on-hover`  | Animation active on hover   |

## SCSS variables

| Variable                           | Description                                                | Accepted Values | Default                       |
|:-----------------------------------|:-----------------------------------------------------------|:----------------|:------------------------------|
| `$simple-list-color`               | Background color                                           | `color`         | `#000`                        |
| `$simple-list-on-color`            | Text color                                                 | `color`         | `contrast of {$color}`        |
| `$simple-list-icon-color`          | Icon color                                                 | `color`         | `inherit`                     |
| `$simple-list-shadow-color`        | Shadow color (with-shadow) (on `var()` MUST be RGB)        | `color`         | `0,0,0`                       |
| `$simple-list-active-color`        | ACTIVE Background color                                    | `color`         | `same as {$color}`            |
| `$simple-list-active-on-color`     | ACTIVE Text color                                          | `color`         | `contrast of {$active-color}` |
| `$simple-list-active-icon-color`   | ACTIVE Icon color                                          | `color`         | `same as {$icon-color}`       |
| `$simple-list-active-shadow-color` | ACTIVE Shadow color (with-shadow) (on `var()` MUST be RGB) | `color`         | `0,0,0`                       |
| `$simple-list-padding`             | Padding of LI elements                                     | `size`          | `0.5em`                       |
| `$simple-list-margin`              | Margin of LI elements                                      | `size`          | `0`                           |
| `$simple-list-duration`            | Transition's duration                                      | `duration`      | `0.2`                         |

<!-- ICONS -->

<div style="display: none">
    <svg id="icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
</div>

<style lang="scss">
@use "docs/theme.scss" as theme;
@use "components/molecules/lists/SimpleList.scss" as * with (
    $simple-list-on-color: #fff,
    $simple-list-icon-color: theme.$primary-color,
    $simple-list-active-color: theme.$secondary-color,
);
</style>
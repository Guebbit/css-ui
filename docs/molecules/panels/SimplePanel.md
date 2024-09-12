# Simple Panel
<Badge type="tip">Molecule</Badge> <Badge type="tip">Basic</Badge> <Badge type="info">Panel</Badge>

## Use

```scss
@use "@guebbit/css-ui/src/molecules/panels/SimplePanel";
```

## Basic
::: info
- Custom panel height: 500px
  :::

::: raw
<div class="simple-panel" style="height: 500px">
    <img class="panel-background" src="https://placedog.net/1000/1000" alt="" title="">
    <div class="panel-content">
        <div class="content-example">Regular</div>
    </div>
</div>
:::

```html
<div class="simple-panel" style="height: 500px">
    <img class="panel-background" src="https://placedog.net/1000/1000" alt="" title="">
    <div class="panel-content">
        <div class="content-example">Regular</div>
    </div>
</div>
```

## With overlay (better readability)
::: info
- Custom panel height: 500px
:::

::: raw
<div class="simple-panel" style="height: 500px">
    <div class="panel-overlay"></div>
    <img class="panel-background" src="https://placedog.net/1000/1000" alt="" title="">
    <div class="panel-content">
        <div class="content-example">.panel-overlay element</div>
    </div>
</div>
<div class="simple-panel panel-overlay" style="height: 500px">
    <img class="panel-background" src="https://placedog.net/1000/1000" alt="" title="">
    <div class="panel-content">
        <div class="content-example">.panel-overlay class added to simple-panel</div>
    </div>
</div>
:::

::: code-group
```html [element]
<div class="simple-panel" style="height: 500px">
    <div class="panel-overlay"></div>
    <img class="panel-background" src="https://placedog.net/1000/1000" alt="" title="">
    <div class="panel-content">
        <div class="content-example">Regular</div>
    </div>
</div>
```
```html [class]
<div class="simple-panel panel-overlay" style="height: 500px">
    <img class="panel-background" src="https://placedog.net/1000/1000" alt="" title="">
    <div class="panel-content">
        <div class="content-example">Regular</div>
    </div>
</div>
```
:::

## Basic (stretched image)
::: info
 - Custom panel height: 500px
:::

<div class="simple-panel" style="height: 500px">
    <div class="panel-overlay"></div>
    <img class="panel-background" src="https://placedog.net/400/1000" alt="" title="">
    <div class="panel-content">
        <div class="content-example">Regular</div>
    </div>
</div>
<div class="simple-panel" style="height: 500px">
    <div class="panel-overlay"></div>
    <img class="panel-background" src="https://placedog.net/1000/400" alt="" title="">
    <div class="panel-content">
        <div class="content-example">Regular</div>
    </div>
</div>

## Basic (class .shadow-text-mode)
::: info
- Custom panel height: 500px
:::

::: raw
<div class="simple-panel shadow-text-mode" style="height: 500px">
    <div class="panel-overlay"></div>
    <img class="panel-background" src="https://placedog.net/1000/1000" alt="" title="">
    <div class="panel-content">
        <div style="font-size: 3em; line-height: 1.5;">
            This text has a shadow to make it more visible
            <br />
            (panel-overlay help a lot too)
        </div>
    </div>
</div>
:::

```html
<div class="simple-panel" style="height: 500px">
    <div class="panel-overlay"></div>
    <img class="panel-background" src="https://placedog.net/1000/1000" alt="" title="">
    <div class="panel-content">
        <div class="content-example">Regular</div>
    </div>
</div>
```

## Basic (class .centered-mode)
::: info
- Custom panel height: 500px
:::

<div class="simple-panel centered-mode" style="height: 500px">
    <div class="panel-overlay"></div>
    <img class="panel-background" src="https://placedog.net/1000/1000" alt="" title="">
    <div class="panel-content">
        <div class="content-example">Regular</div>
    </div>
</div>


## Basic (class .bottom-mode)
::: info
- Custom panel height: 500px
:::

<div class="simple-panel bottom-mode" style="height: 500px">
    <div class="panel-overlay"></div>
    <img class="panel-background" src="https://placedog.net/1000/1000" alt="" title="">
    <div class="panel-content">
        <div class="content-example">Regular</div>
    </div>
</div>

## Basic (class .content-size-mode)
::: info
- No need to set custom panel height, since .content-size-mode use the content to set the size
:::

<div class="simple-panel content-size-mode">
    <div class="panel-overlay"></div>
    <img class="panel-background" src="https://placedog.net/1000/1000" alt="" title="">
    <div class="panel-content">
        <div class="content-example"></div>
    </div>
</div>

## Background (via CSS)
::: info
- Custom panel height: 500px
- CSS var: --background-image: url('https://placedog.net/800/800')
:::

::: raw
<div class="simple-panel" style="height: 500px; --background-image: url('https://placedog.net/800/800')">
    <div class="panel-background"></div>
    <div class="panel-content">
        <div class="content-example">Background CSS</div>
    </div>
</div>
:::

```html {5}
<div 
    class="simple-panel" 
    style="
        height: 500px; 
        --background-image: url('https://placedog.net/800/800')
    "
>
    <div class="panel-background"></div>
    <div class="panel-content">
        <div class="content-example">Background CSS</div>
    </div>
</div>
```


## Color (via CSS)
::: info
- Custom panel height: 500px
- CSS var: --overlay: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)
:::
    
::: raw
<div class="simple-panel" style="height: 500px; --overlay: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)">
    <div class="panel-overlay"></div>
    <img class="panel-background" src="https://placedog.net/1000/1000" alt="" title="">
    <div class="panel-content">
        <div class="content-example">CSS color</div>
    </div>
</div>
:::

```html {5}
<div 
    class="simple-panel" 
    style="
        height: 500px; 
        --overlay: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)
    "
>
    <div class="panel-overlay"></div>
    <img class="panel-background" src="https://placedog.net/1000/1000" alt="" title="">
    <div class="panel-content">
        <div class="content-example">CSS color</div>
    </div>
</div>
```


## Video
::: info
- Custom panel height: 500px
:::

::: raw
<div class="simple-panel" style="height: 500px">
    <video class="panel-background" preload="metadata" playsinline="" loop="" autoplay="" alt="" title="" muted="">
        <source src="http://assets.guebbit.com/guebbit/video/normal.mp4" type="video/mp4">
    </video>
    <div class="panel-content">
        <div class="content-example">Video element</div>
    </div>
</div>
:::

```html
<div class="simple-panel" style="height: 500px">
    <video preload="metadata" playsinline="" loop="" autoplay="" alt="" title="" muted="" class="panel-background">
        <source src="http://assets.guebbit.com/guebbit/video/normal.mp4" type="video/mp4">
    </video>
    <div class="panel-content">
        <div class="content-example">Video element</div>
    </div>
</div>
```

## Iframe (regular)
::: warning
Iframe are difficult to handle: custom css may be needed to make them fit perfectly without black border bars
:::

::: raw
<div class="simple-panel" style="height: 500px">
    <div class="panel-background">
        <iframe src="http://assets.guebbit.com/guebbit/video/normal.mp4" frameborder="0" allowfullscreen="" autoplay="" mute="" loop="" alt="" title=""></iframe>
    </div>
    <div class="panel-content">
        <div class="content-example">Iframe element</div>
    </div>
</div>
:::

```html
<div class="simple-panel" style="height: 500px">
    <div class="panel-background">
        <iframe src="http://assets.guebbit.com/guebbit/video/normal.mp4" frameborder="0" allowfullscreen="" autoplay="" mute="" loop="" alt="" title=""></iframe>
    </div>
    <div class="panel-content">
        <div class="content-example">Iframe element</div>
    </div>
</div>
```

## Iframe (class .content-size-mode)
::: warning
Iframe need custom CSS (or even javascript) to apply correct aspect ratio
<br/>
In this case, 56.25% is 16/9 aspect ratio
:::

::: info
- CSS var: --aspect-ratio: 56.25%
:::

::: raw
<div class="simple-panel content-size-mode" style="--aspect-ratio: 56.25%">
    <div class="panel-background">
        <iframe src="http://assets.guebbit.com/guebbit/video/normal.mp4" frameborder="0" allowfullscreen="" autoplay="" mute="" loop="" alt="" title=""></iframe>
    </div>
    <div class="panel-content">
        <div class="content-example">Iframe element</div>
    </div>
</div>
:::

```html {3}
<div 
    class="simple-panel content-size-mode" 
    style="--aspect-ratio: 56.25%"
>
    <div class="panel-background">
        <iframe src="http://assets.guebbit.com/guebbit/video/normal.mp4" frameborder="0" allowfullscreen="" autoplay="" mute="" loop="" alt="" title=""></iframe>
    </div>
    <div class="panel-content">
        <div class="content-example">Iframe element</div>
    </div>
</div>
```

## Custom multiple backgrounds and linear-gradient shadow
::: info
- Custom panel height: 500px
- First background: 
- Second background:
- Center image:
- CSS var: --overlay: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
:::

::: raw
<div class="simple-panel" style="height: 500px; --overlay: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)">
    <div class="panel-overlay"></div>
    <div class="panel-background" style="background-image: url('https://placedog.net/800/800')"></div>
    <div class="panel-background" style="background-image: url('/logotype.svg'); background-attachment: fixed; background-size: contain;"></div>
    <div class="panel-background" style="background-image: url('https://placedog.net/200/200'); background-size: auto; background-size: 30%;"></div>
    <div class="panel-content">
        <div class="content-example">Lorem Ipsum</div>
    </div>
</div>
:::

```html
<div class="simple-panel" style="height: 500px; --overlay: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)">
    <div class="panel-overlay"></div>
    <div class="panel-background" style="background-image: url('https://placedog.net/800/800')"></div>
    <div class="panel-background" style="background-image: url('/logotype.svg'); background-attachment: fixed; background-size: contain;"></div>
    <div class="panel-background" style="background-image: url('https://placedog.net/200/200'); background-size: auto; background-size: 30%;"></div>
    <div class="panel-content">
        <div class="content-example">Lorem Ipsum</div>
    </div>
</div>
```


## Component CSS

<<< @/../src/molecules/panels/SimplePanel.scss

## Documentation CSS

```scss
@use "../../theme" as theme;
@use "../src/molecules/panels/SimplePanel";

.content-example {
  height: 300px;
  width: 300px;
  background-color: rgba(theme.$primary-color, 0.5);
  border: 4px solid theme.$secondary-color;
  color: #fff;
  font-weight: 600;
  font-size: 2em;
  line-height: 1.5;
  padding: 24px;
}
```

## Additional elements

| Prop            | Description                         |
|:----------------|:------------------------------------|
| `.panel-overlay` | Shadow added to better readability  |

## Classes

| Prop                | Description                                                         |
|:--------------------|:--------------------------------------------------------------------|
| `shadow-text-mode`  | Text shadow is added to panel-content                               |
| `centered-mode`     | Content is centered                                                 |
| `bottom-mode`       | Content will be bottom                                              |
| `content-size-mode` | Size of panel will be based on panel-background                     |

## SCSS variables

| Variable             | Description                                                                     | Accepted Values | Default                   |
|:---------------------|:--------------------------------------------------------------------------------|:----------------|:--------------------------|
| `$duration`          | Transitions duration                                                            | `time`          | `0.3s`                    |
| `$overlay`           | Overlay\shadow over image (under text) for legibility (on `var()` MUST be RGB)  | `color`         | `#000`                    |
| `$on-overlay`        | Text color for further legibility                                               | `color`         | `contrast of {$overlay}`  |
| `$overlay-opacity`   | Overlay opacity                                                                 | `percentage`    | `0.75`                    |
| `--background-image` | :x: background-image of .panel-background (can be put in .panel-background)     | `color`         | `none`                    |
| `--aspect-ratio`     | :x: Padding-bottom of .panel-background                                         | `color`         | `0`                       |

<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/molecules/panels/SimplePanel";

.content-example{
    height: 300px;
    width: 300px;
    background-color: rgba(theme.$primary-color, 0.5);
    border: 4px solid theme.$secondary-color;
    color: #fff;
    font-weight: 600;
    font-size: 2em;
    line-height: 1.5;
    padding: 24px;
}
</style>
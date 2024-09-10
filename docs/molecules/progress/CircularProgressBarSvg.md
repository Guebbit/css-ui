# Circular Progress Bar Svg
<Badge type="tip">Molecule</Badge> <Badge type="info">Progress</Badge>

::: danger TODO 
Edit SVG file to remove the external empty space
:::

## Use

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/molecules/progress/CircularProgressBarSvg" with (
    $css-ui-root-prefix: theme.$css-ui-root-prefix
);
```

```scss
@use "@guebbit/css-ui/src/theme" as theme;
@use "@guebbit/css-ui/src/molecules/progress/CircularProgressBarSvg" with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);
```

## Default
::: info
- CSS var: --value: 60;
- CSS var in [image]: --shadow-color: rgba(0,0,0, 0.7);
:::

::: raw
<div class="dev-section">
    <div class="circular-progress-bar-svg animate-on-hover" style="--value: 60;">
        <div class="progress-bar-header"></div>
        <svg class="progress-bar-body" viewBox="0 0 36 36">
            <path
                d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
                d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
        </svg>
    </div>
    <div class="circular-progress-bar-svg animate-on-hover" style="--value: 60; --shadow-color: rgba(0,0,0, 0.7);">
        <div class="progress-bar-header">
            <img alt="" src="https://placedog.net/400/400" />
        </div>
        <svg class="progress-bar-body" viewBox="0 0 36 36">
            <path
                d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
                d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
        </svg>
    </div>
</div>
:::

::: code-group
```html [default]
<div class="circular-progress-bar-svg animate-on-hover" style="--value: 60;">
    <div class="progress-bar-header"></div>
    <svg class="progress-bar-body" viewBox="0 0 36 36">
        <path
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
    </svg>
</div>
```
```html [image]
<div class="circular-progress-bar-svg animate-on-hover" style="--value: 60; --shadow-color: rgba(0,0,0, 0.7);">
    <div class="progress-bar-header">
        <img alt="" src="https://placedog.net/400/400" />
    </div>
    <svg class="progress-bar-body" viewBox="0 0 36 36">
        <path
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
    </svg>
</div>
```
:::

## Custom variant

::: raw
<div class="dev-section">
    <div class="circular-progress-bar-svg fantasy-color" style="--value: 60">
        <div class="progress-bar-header"></div>
        <svg class="progress-bar-body" viewBox="0 0 36 36">
            <path
                d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
                d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
        </svg>
    </div>
</div>
:::

::: code-group
```scss [Fantasy (custom SCSS)]
// or parent container
.circular-progress-bar-svg{
  &.fantasy-color{
    .progress-bar-header{
      &::after{
        animation: circular-progress-bar-svg-special-animation-b 2s linear infinite alternate;
        background: linear-gradient(to bottom right, $secondary-color, #fff, $primary-color);
      }
    }
    .progress-bar-body{
      & > *{
        &:first-child{
          stroke: transparent;
        }
        &:last-child{
          animation: circular-progress-bar-svg-special-animation-a 2s linear infinite alternate;
        }
      }
    }
  }
}

@keyframes circular-progress-bar-svg-special-animation-a {
  0%{   stroke: $secondary-color;  }
  50%{  stroke: #fff;  }
  100%{ stroke: $primary-color;  }
}
@keyframes circular-progress-bar-svg-special-animation-b {
  0%  { box-shadow: 0 0 50px $secondary-color; }
  50% { box-shadow: 0 0 50px #fff; }
  100%{ box-shadow: 0 0 50px $primary-color; }
}
```
:::



## Component CSS

<<< @/../src/molecules/progress/CircularProgressBarSvg.scss

## Classes

| Class                | Description                      |
|:---------------------|:---------------------------------|
| `animate-active`     | Animation active                 |
| `animate-on-active`  | Animation active on .active      |
| `animate-on-hover`   | Animation active on hover        |

## SCSS variables

| Variable          | Description                                          | Accepted Values | Default                |
|:------------------|:-----------------------------------------------------|:----------------|:-----------------------|
| `$value`          | Starting number, better use css variable --value     | `number`        | `0`                    |
| `$color`          | :zap: Body background (transparency not available)   | `color`         | `same as {$on-color}`  |
| `$on-color`       | :zap: Body text color                                | `color`         | `same as {$color}`     |
| `$shadow-color`   | :zap: Header background color (overlay)              | `color`         | `transparent`          |
| `$header-color`   | :zap: Header text color                              | `color`         | `same as {$color}`     |
| `$size`           | Stroke size (inner path)                             | `size`          | `3%`                   |
| `$wrapper-size`   | Stroke size (outer path)                             | `size`          | `4%`                   |
| `$duration`       | Fill speed                                           | `time`          | `0.5'`                 |

<style lang="scss">
@use "../docs/theme" as theme;
@use "../src/molecules/progress/CircularProgressBarSvg" with (
    $color: theme.$primary-color,
    $active-color: theme.$secondary-color,
);

.circular-progress-bar-svg{
  &.fantasy-color{
    .progress-bar-header{
      &::after{
        animation: circular-progress-bar-svg-special-animation-b 2s linear infinite alternate;
        background: linear-gradient(to bottom right, theme.$secondary-color, #fff, theme.$primary-color);
      }
    }
    .progress-bar-body{
      & > *{
        &:first-child{
          stroke: transparent;
        }
        &:last-child{
          animation: circular-progress-bar-svg-special-animation-a 2s linear infinite alternate;
        }
      }
    }
  }
}

@keyframes circular-progress-bar-svg-special-animation-a {
  0%{   stroke: theme.$secondary-color;  }
  50%{  stroke: #fff;  }
  100%{ stroke: theme.$primary-color;  }
}
@keyframes circular-progress-bar-svg-special-animation-b {
  0%  { box-shadow: 0 0 50px theme.$secondary-color; }
  50% { box-shadow: 0 0 50px #fff; }
  100%{ box-shadow: 0 0 50px theme.$primary-color; }
}
</style>
# Circular Progress Bar Svg
<Badge type="tip">Molecule</Badge> <Badge type="info">Progress</Badge>

::: danger TODO 
Edit SVG file to remove the external empty space
:::

## Code

::: raw
<div class="dev-section">
    <!--@include: ../../public/components-html/molecules/progress/CircularProgressBarSvg.html -->
</div>
:::

::: code-group
<<< @/public/components-html/molecules/progress/CircularProgressBarSvg.html#default [default]
<<< @/public/components-html/molecules/progress/CircularProgressBarSvg.html#image [image]
<<< @/../components/molecules/progress/CircularProgressBarSvg.scss [CSS]
:::


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


## SCSS variables

| Variable                                       | Description                                      | Accepted Values | Default                |
|:-----------------------------------------------|:-------------------------------------------------|:----------------|:-----------------------|
| `$circular-progress-bar-svg-value`             | Starting number, better use css variable --value | `number`        | `0`                    |
| `$circular-progress-bar-svg-duration`          | Fill speed                                       | `time`          | `0.5'`                 |
| `$circular-progress-bar-svg-color`             | Main color                                       | `color`         | `#000`                 |
| `$circular-progress-bar-svg-on-color`          | Main wrapper color                               | `color`         | `contrast of {$color}` |
| `$circular-progress-bar-svg-header-background` | Header background                                | `color`         | `transparent`          |
| `$circular-progress-bar-svg-header-color`      | Header text color                                | `color`         | `as {$color}`          |
| `$circular-progress-bar-svg-body-background`   | Body background                                  | `color`         | `as {$on-color}`       |
| `$circular-progress-bar-svg-body-color`        | Body color                                       | `color`         | `as {$color}`          |
| `$circular-progress-bar-svg-size`              | Stroke size (inner path)                         | `size`          | `3%`                   |
| `$circular-progress-bar-svg-wrapper-size`      | Stroke size (outer path)                         | `size`          | `4%`                   |

<style lang="scss">
@import "docs/theme.scss";

$circular-progress-bar-svg-color: $primary-color;

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

@import "components/molecules/progress/CircularProgressBarSvg.scss";
</style>
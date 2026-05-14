import { createDocsScenario } from '../../_helpers.js';

export const expressiveButtonScenarios = [
    createDocsScenario("elevation", `
<!-- #region default -->
<div class="expressive-button use-brand strong-elevation animate-on-hover">
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
    DEFAULT
</div>
<!-- #endregion default -->
<!-- #region image -->
<div class="expressive-button use-brand strong-elevation animate-on-hover">
    <img alt="" class="button-image" src="https://placedog.net/100/100">
    IMAGE
</div>
<!-- #endregion image -->
<!-- #region small -->
<div class="expressive-button use-brand strong-elevation animate-on-hover button-small">
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
    SMALL
</div>
<!-- #endregion small -->
<!-- #region rounded -->
<div class="expressive-button use-brand strong-elevation animate-on-hover button-rounded">
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
    ROUNDED
</div>
<!-- #endregion rounded -->
<!-- #region circular -->
<div class="expressive-button use-brand strong-elevation animate-on-hover button-circular">
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
    CIRCULAR
</div>
<!-- #endregion circular -->
<!-- #region outlined -->
<div class="expressive-button use-brand strong-elevation animate-on-hover button-outlined">
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
    OUTLINED
</div>
<!-- #endregion outlined -->
<!-- #region custom -->
<div class="expressive-button use-brand strong-elevation animate-on-hover button-rounded" style="width: 150px; height: 150px">
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
    CUSTOM
</div>
<!-- #endregion custom -->
    `),
    createDocsScenario("popup", `
<!-- #region horizontal-invalid -->
<div class="expressive-button use-brand popup-button animate-on-hover highlight-popup-horizontal">
    Horizontal
</div>
<!-- #endregion horizontal-invalid -->
<!-- #region vertical-invalid -->
<div class="expressive-button use-brand popup-button animate-on-hover highlight-popup-vertical">
    Vertical
</div>
<!-- #endregion vertical-invalid -->
<!-- #region horizontal -->
<div class="expressive-button use-brand popup-button animate-on-hover highlight-popup-horizontal" style="background: transparent">
    Horizontal
</div>
<!-- #endregion horizontal -->
<!-- #region vertical -->
<div class="expressive-button use-brand popup-button animate-on-hover highlight-popup-vertical" style="background: transparent">
    Vertical
</div>
<!-- #endregion vertical -->
<!-- #region explosion -->
<div class="expressive-button use-brand popup-button button-outlined animate-on-hover highlight-popup-explosion">
    Explosion
</div>
<!-- #endregion explosion -->
<!-- #region fill -->
<div class="expressive-button use-brand popup-button button-outlined animate-on-hover highlight-popup-fill">
    Fill
</div>
<!-- #endregion fill -->
<!-- #region fill-circle -->
<div class="expressive-button use-brand popup-button button-outlined button-rounded animate-on-hover highlight-popup-fill">
    Fill Rounded
</div>
<!-- #endregion fill-circle -->
<!-- #region fill-circle -->
<div class="expressive-button use-brand popup-button button-outlined button-circular animate-on-hover highlight-popup-fill">
    Fill Circle
</div>
<!-- #endregion fill-circle -->
<!-- #region fill-icon -->
<div class="expressive-button use-brand popup-button button-outlined button-rounded button-icon-only animate-on-hover highlight-popup-fill">
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
</div>
<!-- #endregion fill-icon -->
<!-- #region drop -->
<div class="expressive-button use-brand popup-button button-outlined animate-on-hover highlight-popup-drop">
    Drop
</div>
<!-- #endregion drop -->
<!-- #region bounce -->
<div class="expressive-button use-brand popup-button button-outlined animate-on-hover highlight-popup-bounce">
    Bounce
</div>
<!-- #endregion bounce -->
    `),
    createDocsScenario("rollup", `
<!-- #region down-to-up -->
<div class="expressive-button use-brand rollup-button button-flat animate-on-hover">
    Default, down to up
</div>
<!-- #endregion down-to-up -->
<!-- #region right-to-left -->
<div class="expressive-button use-brand rollup-button highlight-rollup-horizontal animate-on-hover">
    Right to left
</div>
<!-- #endregion right-to-left -->
<!-- #region up-to-down -->
<div class="expressive-button use-brand rollup-button button-outlined highlight-rollup-reverse animate-on-hover">
    Up to down
</div>
<!-- #endregion up-to-down -->
<!-- #region left-to-right -->
<div class="expressive-button use-brand rollup-button button-outlined highlight-rollup-horizontal highlight-rollup-reverse animate-on-hover">
    Left to right
</div>
<!-- #endregion left-to-right -->
<!-- #region skew-left-to-right -->
<div class="expressive-button use-brand rollup-button button-outlined highlight-rollup highlight-rollup-skew animate-on-hover">
    Skew left to right
</div>
<!-- #endregion skew-left-to-right -->
<!-- #region skew-right-to-left -->
<div class="expressive-button use-brand rollup-button button-outlined highlight-rollup highlight-rollup-skew highlight-rollup-reverse animate-on-hover">
    Skew right to left
</div>
<!-- #endregion skew-right-to-left -->
    `),
];

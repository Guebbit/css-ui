import { createDocsScenario } from "./_helpers.js";

// Fixtures in this file are intentionally derived from the existing docs examples.
// css-ui 1.3 is the migration oracle, so the docs snippets give the parity lab a
// broad, component-oriented fixture catalog without introducing a second source
// of truth for the legacy markup surface.

// Source: docs/atoms/highlights/HighlightLine*.html
export const highlightLineScenarios = [
    createDocsScenario("afar-default", `
<!-- #region full -->
<div class="highlight-line full-highlight from-afar-highlight highlight-line-on-hover">Full</div>
<div class="highlight-line full-highlight from-start-highlight from-afar-highlight highlight-line-on-hover">Full</div>
<!-- #endregion full -->
<!-- #region left -->
<div class="highlight-line from-afar-highlight highlight-line-on-hover left-highlight">Left</div>
<div class="highlight-line from-start-highlight from-afar-highlight highlight-line-on-hover left-highlight">Left</div>
<!-- #endregion left -->
<!-- #region right -->
<div class="highlight-line from-afar-highlight highlight-line-on-hover right-highlight">Right</div>
<div class="highlight-line from-start-highlight from-afar-highlight highlight-line-on-hover right-highlight">Right</div>
<!-- #endregion right -->
<!-- #region bottom -->
<div class="highlight-line from-afar-highlight highlight-line-on-hover bottom-highlight">Bottom</div>
<div class="highlight-line from-start-highlight from-afar-highlight highlight-line-on-hover bottom-highlight">Bottom</div>
<!-- #endregion bottom -->
<!-- #region top -->
<div class="highlight-line from-afar-highlight highlight-line-on-hover top-highlight">Top</div>
<div class="highlight-line from-start-highlight from-afar-highlight highlight-line-on-hover top-highlight">Top</div>
<!-- #endregion top -->
<!-- #region middle -->
<div class="highlight-line from-afar-highlight highlight-line-on-hover middle-highlight">Middle</div>
<div class="highlight-line from-start-highlight from-afar-highlight highlight-line-on-hover middle-highlight">Middle</div>
<!-- #endregion middle -->
    `),
    createDocsScenario("afar-primary", `
<!-- #region full -->
<div class="highlight-line full-highlight from-afar-highlight highlight-line-on-hover use-primary">Full</div>
<div class="highlight-line full-highlight from-start-highlight from-afar-highlight highlight-line-on-hover use-primary">Full</div>
<!-- #endregion full -->
<!-- #region left -->
<div class="highlight-line from-afar-highlight highlight-line-on-hover left-highlight use-primary">Left</div>
<div class="highlight-line from-start-highlight from-afar-highlight highlight-line-on-hover left-highlight use-primary">Left</div>
<!-- #endregion left -->
<!-- #region right -->
<div class="highlight-line from-afar-highlight highlight-line-on-hover right-highlight use-primary">Right</div>
<div class="highlight-line from-start-highlight from-afar-highlight highlight-line-on-hover right-highlight use-primary">Right</div>
<!-- #endregion right -->
<!-- #region bottom -->
<div class="highlight-line from-afar-highlight highlight-line-on-hover bottom-highlight use-primary">Bottom</div>
<div class="highlight-line from-start-highlight from-afar-highlight highlight-line-on-hover bottom-highlight use-primary">Bottom</div>
<!-- #endregion bottom -->
<!-- #region top -->
<div class="highlight-line from-afar-highlight highlight-line-on-hover top-highlight use-primary">Top</div>
<div class="highlight-line from-start-highlight from-afar-highlight highlight-line-on-hover top-highlight use-primary">Top</div>
<!-- #endregion top -->
<!-- #region middle -->
<div class="highlight-line from-afar-highlight highlight-line-on-hover middle-highlight use-primary">Middle</div>
<div class="highlight-line from-start-highlight from-afar-highlight highlight-line-on-hover middle-highlight use-primary">Middle</div>
<!-- #endregion middle -->
    `),
    createDocsScenario("default", `
<!-- #region full -->
<div class="highlight-line highlight-line-on-hover full-highlight">Full</div>
<div class="highlight-line highlight-line-active full-highlight">Full</div>
<!-- #endregion full -->
<!-- #region left -->
<div class="highlight-line highlight-line-on-hover left-highlight">Left</div>
<div class="highlight-line highlight-line-active left-highlight">Left</div>
<!-- #endregion left -->
<!-- #region right -->
<div class="highlight-line highlight-line-on-hover right-highlight">Right</div>
<div class="highlight-line highlight-line-active right-highlight">Right</div>
<!-- #endregion right -->
<!-- #region bottom -->
<div class="highlight-line highlight-line-on-hover bottom-highlight">Bottom</div>
<div class="highlight-line highlight-line-active bottom-highlight">Bottom</div>
<!-- #endregion bottom -->
<!-- #region top -->
<div class="highlight-line highlight-line-on-hover top-highlight">Top</div>
<div class="highlight-line highlight-line-active top-highlight">Top</div>
<!-- #endregion top -->
<!-- #region middle -->
<div class="highlight-line highlight-line-on-hover middle-highlight">Middle</div>
<div class="highlight-line highlight-line-active middle-highlight">Middle</div>
<!-- #endregion middle -->
    `),
    createDocsScenario("primary", `
<!-- #region full -->
<div class="highlight-line highlight-line-on-hover full-highlight use-primary">Full</div>
<div class="highlight-line highlight-line-active full-highlight use-primary">Full</div>
<!-- #endregion full -->
<!-- #region left -->
<div class="highlight-line highlight-line-on-hover left-highlight use-primary">Left</div>
<div class="highlight-line highlight-line-active left-highlight use-primary">Left</div>
<!-- #endregion left -->
<!-- #region right -->
<div class="highlight-line highlight-line-on-hover right-highlight use-primary">Right</div>
<div class="highlight-line highlight-line-active right-highlight use-primary">Right</div>
<!-- #endregion right -->
<!-- #region bottom -->
<div class="highlight-line highlight-line-on-hover bottom-highlight use-primary">Bottom</div>
<div class="highlight-line highlight-line-active bottom-highlight use-primary">Bottom</div>
<!-- #endregion bottom -->
<!-- #region top -->
<div class="highlight-line highlight-line-on-hover top-highlight use-primary">Top</div>
<div class="highlight-line highlight-line-active top-highlight use-primary">Top</div>
<!-- #endregion top -->
<!-- #region middle -->
<div class="highlight-line highlight-line-on-hover middle-highlight use-primary">Middle</div>
<div class="highlight-line highlight-line-active middle-highlight use-primary">Middle</div>
<!-- #endregion middle -->
    `),
    createDocsScenario("start-default", `
<!-- #region full -->
<div class="highlight-line from-start-highlight highlight-line-on-hover full-highlight">Full</div>
<!-- #endregion full -->
<!-- #region left -->
<div class="highlight-line from-start-highlight highlight-line-on-hover left-highlight">Left</div>
<!-- #endregion left -->
<!-- #region right -->
<div class="highlight-line from-start-highlight highlight-line-on-hover right-highlight">Right</div>
<!-- #endregion right -->
<!-- #region bottom -->
<div class="highlight-line from-start-highlight highlight-line-on-hover bottom-highlight">Bottom</div>
<!-- #endregion bottom -->
<!-- #region top -->
<div class="highlight-line from-start-highlight highlight-line-on-hover top-highlight">Top</div>
<!-- #endregion top -->
<!-- #region middle -->
<div class="highlight-line from-start-highlight highlight-line-on-hover middle-highlight">Middle</div>
<!-- #endregion middle -->
    `),
    createDocsScenario("start-primary", `
<!-- #region full -->
<div class="highlight-line from-start-highlight highlight-line-on-hover full-highlight use-primary">Full</div>
<!-- #endregion full -->
<!-- #region left -->
<div class="highlight-line from-start-highlight highlight-line-on-hover left-highlight use-primary">Left</div>
<!-- #endregion left -->
<!-- #region right -->
<div class="highlight-line from-start-highlight highlight-line-on-hover right-highlight use-primary">Right</div>
<!-- #endregion right -->
<!-- #region bottom -->
<div class="highlight-line from-start-highlight highlight-line-on-hover bottom-highlight use-primary">Bottom</div>
<!-- #endregion bottom -->
<!-- #region top -->
<div class="highlight-line from-start-highlight highlight-line-on-hover top-highlight use-primary">Top</div>
<!-- #endregion top -->
<!-- #region middle -->
<div class="highlight-line from-start-highlight highlight-line-on-hover middle-highlight use-primary">Middle</div>
<!-- #endregion middle -->
    `),
    createDocsScenario("default-2", `
<!-- #region full -->
<div class="highlight-line highlight-line-on-hover full-highlight use-primary">Full</div>
<div class="highlight-line highlight-line-active full-highlight use-primary">Full</div>
<!-- #endregion full -->
<!-- #region left -->
<div class="highlight-line highlight-line-on-hover left-highlight use-primary">Left</div>
<div class="highlight-line highlight-line-active left-highlight use-primary">Left</div>
<!-- #endregion left -->
<!-- #region right -->
<div class="highlight-line highlight-line-on-hover right-highlight use-primary">Right</div>
<div class="highlight-line highlight-line-active right-highlight use-primary">Right</div>
<!-- #endregion right -->
<!-- #region bottom -->
<div class="highlight-line highlight-line-on-hover bottom-highlight use-primary">Bottom</div>
<div class="highlight-line highlight-line-active bottom-highlight use-primary">Bottom</div>
<!-- #endregion bottom -->
<!-- #region top -->
<div class="highlight-line highlight-line-on-hover top-highlight use-primary">Top</div>
<div class="highlight-line highlight-line-active top-highlight use-primary">Top</div>
<!-- #endregion top -->
<!-- #region middle -->
<div class="highlight-line highlight-line-on-hover middle-highlight use-primary">Middle</div>
<div class="highlight-line highlight-line-active middle-highlight use-primary">Middle</div>
<!-- #endregion middle -->
    `),
];

// Source: docs/atoms/highlights/HighlightBorder*.html
export const highlightBorderScenarios = [
    createDocsScenario("default", `
<!-- #region top-bottom -->
<div class="highlight-border animate-on-hover">
    <span class="highlight-border-top"></span>
    <span class="highlight-border-bottom"></span>
    Top bottom
</div>
<!-- #endregion top-bottom -->
<!-- #region left-right -->
<div class="highlight-border animate-on-hover">
    <span class="highlight-border-left"></span>
    <span class="highlight-border-right"></span>
    Left right
</div>
<!-- #endregion left-right -->
<!-- #region corners -->
<div class="highlight-border animate-on-hover">
    <span class="highlight-border-top"></span>
    <span class="highlight-border-bottom highlight-border-reverse"></span>
    <span class="highlight-border-left highlight-border-reverse"></span>
    <span class="highlight-border-right"></span>
    Corners
</div>
<!-- #endregion corners -->
<!-- #region spiral -->
<div class="highlight-border animate-on-hover">
    <span class="highlight-border-top"></span>
    <span class="highlight-border-bottom highlight-border-reverse"></span>
    <span class="highlight-border-left"></span>
    <span class="highlight-border-right highlight-border-reverse"></span>
    Spiral
</div>
<!-- #endregion spiral -->
<!-- #region reveal -->
<div class="highlight-border animate-on-hover">
    <span class="highlight-border-top highlight-border-reveal"></span>
    <span class="highlight-border-bottom highlight-border-reveal"></span>
    <span class="highlight-border-left highlight-border-reveal"></span>
    <span class="highlight-border-right highlight-border-reveal"></span>
    Reveal
</div>
<!-- #endregion reveal -->
<!-- #region special-background -->
<div class="highlight-border animate-on-hover" style="--color: linear-gradient(-45deg, #00bcd4, #ff9800)">
    <span class="highlight-border-top"></span>
    <span class="highlight-border-bottom highlight-border-reverse"></span>
    <span class="highlight-border-left highlight-border-reverse"></span>
    <span class="highlight-border-right"></span>
    Special
</div>
<!-- #endregion special-background -->
    `),
    createDocsScenario("primary", `
<!-- #region top-bottom -->
<div class="highlight-border animate-on-hover use-primary">
    <span class="highlight-border-top"></span>
    <span class="highlight-border-bottom"></span>
    Top bottom
</div>
<!-- #endregion top-bottom -->
<!-- #region left-right -->
<div class="highlight-border animate-on-hover use-primary">
    <span class="highlight-border-left"></span>
    <span class="highlight-border-right"></span>
    Left right
</div>
<!-- #endregion left-right -->
<!-- #region corners -->
<div class="highlight-border animate-on-hover use-primary">
    <span class="highlight-border-top"></span>
    <span class="highlight-border-bottom highlight-border-reverse"></span>
    <span class="highlight-border-left highlight-border-reverse"></span>
    <span class="highlight-border-right"></span>
    Corners
</div>
<!-- #endregion corners -->
<!-- #region spiral -->
<div class="highlight-border animate-on-hover use-primary">
    <span class="highlight-border-top"></span>
    <span class="highlight-border-bottom highlight-border-reverse"></span>
    <span class="highlight-border-left"></span>
    <span class="highlight-border-right highlight-border-reverse"></span>
    Spiral
</div>
<!-- #endregion spiral -->
<!-- #region reveal -->
<div class="highlight-border animate-on-hover use-primary">
    <span class="highlight-border-top highlight-border-reveal"></span>
    <span class="highlight-border-bottom highlight-border-reveal"></span>
    <span class="highlight-border-left highlight-border-reveal"></span>
    <span class="highlight-border-right highlight-border-reveal"></span>
    Reveal
</div>
<!-- #endregion reveal -->
<!-- #region special-background -->
<div class="highlight-border animate-on-hover use-primary" style="--color: linear-gradient(-45deg, #00bcd4, #ff9800)">
    <span class="highlight-border-top"></span>
    <span class="highlight-border-bottom highlight-border-reverse"></span>
    <span class="highlight-border-left highlight-border-reverse"></span>
    <span class="highlight-border-right"></span>
    Special
</div>
<!-- #endregion special-background -->
    `),
    createDocsScenario("default-2", `
<!-- #region top-bottom -->
<div class="highlight-border animate-on-hover use-primary">
    <span class="highlight-border-top use-primary"></span>
    <span class="highlight-border-bottom use-primary"></span>
    Top bottom
</div>
<!-- #endregion top-bottom -->
<!-- #region left-right -->
<div class="highlight-border animate-on-hover use-primary">
    <span class="highlight-border-left use-primary"></span>
    <span class="highlight-border-right use-primary"></span>
    Left right
</div>
<!-- #endregion left-right -->
<!-- #region corners -->
<div class="highlight-border animate-on-hover use-primary">
    <span class="highlight-border-top use-primary"></span>
    <span class="highlight-border-bottom highlight-border-reverse use-primary"></span>
    <span class="highlight-border-left highlight-border-reverse use-primary"></span>
    <span class="highlight-border-right use-primary"></span>
    Corners
</div>
<!-- #endregion corners -->
<!-- #region spiral -->
<div class="highlight-border animate-on-hover use-primary">
    <span class="highlight-border-top use-primary"></span>
    <span class="highlight-border-bottom highlight-border-reverse use-primary"></span>
    <span class="highlight-border-left use-primary"></span>
    <span class="highlight-border-right highlight-border-reverse use-primary"></span>
    Spiral
</div>
<!-- #endregion spiral -->
<!-- #region reveal -->
<div class="highlight-border animate-on-hover use-primary">
    <span class="highlight-border-top highlight-border-reveal use-primary"></span>
    <span class="highlight-border-bottom highlight-border-reveal use-primary"></span>
    <span class="highlight-border-left highlight-border-reveal use-primary"></span>
    <span class="highlight-border-right highlight-border-reveal use-primary"></span>
    Reveal
</div>
<!-- #endregion reveal -->
<!-- #region special-background -->
<div class="highlight-border animate-on-hover use-primary" style="--color: linear-gradient(-45deg, #00bcd4, #ff9800)">
    <span class="highlight-border-top use-primary"></span>
    <span class="highlight-border-bottom highlight-border-reverse use-primary"></span>
    <span class="highlight-border-left highlight-border-reverse use-primary"></span>
    <span class="highlight-border-right use-primary"></span>
    Special
</div>
<!-- #endregion special-background -->
    `),
];

// Source: docs/atoms/highlights/HighlightRollup*.html
export const highlightRollupScenarios = [
    createDocsScenario("default", `
<!-- #region down-to-up -->
<div class="highlight-rollup animate-on-hover">
    Default, down to up
</div>
<!-- #endregion down-to-up -->
<!-- #region right-to-left -->
<div class="highlight-rollup highlight-rollup-horizontal animate-on-hover">
    Right to left
</div>
<!-- #endregion right-to-left -->
<!-- #region up-to-down -->
<div class="highlight-rollup highlight-rollup-reverse animate-on-hover">
    Up to down
</div>
<!-- #endregion up-to-down -->
<!-- #region left-to-right -->
<div class="highlight-rollup highlight-rollup-horizontal highlight-rollup-reverse animate-on-hover">
    Left to right
</div>
<!-- #endregion left-to-right -->
<!-- #region skew-left-to-right -->
<div class="highlight-rollup highlight-rollup-skew animate-on-hover">
    Skew left to right
</div>
<!-- #endregion skew-left-to-right -->
<!-- #region skew-right-to-left -->
<div class="highlight-rollup highlight-rollup-skew highlight-rollup-reverse animate-on-hover">
    Skew right to left
</div>
<!-- #endregion skew-right-to-left -->
    `),
    createDocsScenario("primary", `
<!-- #region down-to-up -->
<div class="highlight-rollup animate-on-hover use-primary">
    Default, down to up
</div>
<!-- #endregion down-to-up -->
<!-- #region right-to-left -->
<div class="highlight-rollup highlight-rollup-horizontal animate-on-hover use-primary">
    Right to left
</div>
<!-- #endregion right-to-left -->
<!-- #region up-to-down -->
<div class="highlight-rollup highlight-rollup-reverse animate-on-hover use-primary">
    Up to down
</div>
<!-- #endregion up-to-down -->
<!-- #region left-to-right -->
<div class="highlight-rollup highlight-rollup-horizontal highlight-rollup-reverse animate-on-hover use-primary">
    Left to right
</div>
<!-- #endregion left-to-right -->
<!-- #region skew-left-to-right -->
<div class="highlight-rollup highlight-rollup-skew animate-on-hover use-primary">
    Skew left to right
</div>
<!-- #endregion skew-left-to-right -->
<!-- #region skew-right-to-left -->
<div class="highlight-rollup highlight-rollup-skew highlight-rollup-reverse animate-on-hover use-primary">
    Skew right to left
</div>
<!-- #endregion skew-right-to-left -->
    `),
];

// Source: docs/atoms/highlights/HighlightPopup*.html
export const highlightPopupScenarios = [
    createDocsScenario("default", `
<!-- #region no-effect -->
<div class="highlight-popup">
    No effect
</div>
<!-- #endregion no-effect -->
<!-- #region horizontal -->
<div class="highlight-popup animate-on-hover highlight-popup-horizontal">
    Horizontal
</div>
<!-- #endregion horizontal -->
<!-- #region vertical -->
<div class="highlight-popup animate-on-hover highlight-popup-vertical">
    Vertical
</div>
<!-- #endregion vertical -->
<!-- #region explosion -->
<div class="highlight-popup animate-on-hover highlight-popup-explosion">
    Explosion
</div>
<!-- #endregion explosion -->
<!-- #region fill -->
<div class="highlight-popup animate-on-hover highlight-popup-fill">
    Fill
</div>
<!-- #endregion fill -->
<!-- #region drop -->
<div class="highlight-popup animate-on-hover highlight-popup-drop">
    Drop
</div>
<!-- #endregion drop -->
<!-- #region bounce -->
<div class="highlight-popup animate-on-hover highlight-popup-bounce">
    Bounce
</div>
<!-- #endregion bounce -->
    `),
];

// Source: docs/molecules/buttons/ExpressiveButton*.html
export const expressiveButtonScenarios = [
    createDocsScenario("elevation", `
<!-- #region default -->
<div class="expressive-button strong-elevation animate-on-hover">
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
    DEFAULT
</div>
<!-- #endregion default -->
<!-- #region image -->
<div class="expressive-button strong-elevation animate-on-hover">
    <img alt="" class="button-image" src="https://placedog.net/100/100">
    IMAGE
</div>
<!-- #endregion image -->
<!-- #region small -->
<div class="expressive-button strong-elevation animate-on-hover button-small">
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
    SMALL
</div>
<!-- #endregion small -->
<!-- #region rounded -->
<div class="expressive-button strong-elevation animate-on-hover button-rounded">
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
    ROUNDED
</div>
<!-- #endregion rounded -->
<!-- #region circular -->
<div class="expressive-button strong-elevation animate-on-hover button-circular">
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
    CIRCULAR
</div>
<!-- #endregion circular -->
<!-- #region outlined -->
<div class="expressive-button strong-elevation animate-on-hover button-outlined">
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
    OUTLINED
</div>
<!-- #endregion outlined -->
<!-- #region custom -->
<div class="expressive-button strong-elevation animate-on-hover button-rounded" style="width: 150px; height: 150px">
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
    CUSTOM
</div>
<!-- #endregion custom -->
    `),
    createDocsScenario("popup", `
<!-- #region horizontal-invalid -->
<div class="expressive-button popup-button animate-on-hover highlight-popup-horizontal">
    Horizontal
</div>
<!-- #endregion horizontal-invalid -->
<!-- #region vertical-invalid -->
<div class="expressive-button popup-button animate-on-hover highlight-popup-vertical">
    Vertical
</div>
<!-- #endregion vertical-invalid -->
<!-- #region horizontal -->
<div class="expressive-button popup-button animate-on-hover highlight-popup-horizontal" style="background: transparent">
    Horizontal
</div>
<!-- #endregion horizontal -->
<!-- #region vertical -->
<div class="expressive-button popup-button animate-on-hover highlight-popup-vertical" style="background: transparent">
    Vertical
</div>
<!-- #endregion vertical -->
<!-- #region explosion -->
<div class="expressive-button popup-button button-outlined animate-on-hover highlight-popup-explosion">
    Explosion
</div>
<!-- #endregion explosion -->
<!-- #region fill -->
<div class="expressive-button popup-button button-outlined animate-on-hover highlight-popup-fill">
    Fill
</div>
<!-- #endregion fill -->
<!-- #region fill-circle -->
<div class="expressive-button popup-button button-outlined button-rounded animate-on-hover highlight-popup-fill">
    Fill Rounded
</div>
<!-- #endregion fill-circle -->
<!-- #region fill-circle -->
<div class="expressive-button popup-button button-outlined button-circular animate-on-hover highlight-popup-fill">
    Fill Circle
</div>
<!-- #endregion fill-circle -->
<!-- #region fill-icon -->
<div class="expressive-button popup-button button-outlined button-rounded button-icon-only animate-on-hover highlight-popup-fill">
    <svg class="button-icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
</div>
<!-- #endregion fill-icon -->
<!-- #region drop -->
<div class="expressive-button popup-button button-outlined animate-on-hover highlight-popup-drop">
    Drop
</div>
<!-- #endregion drop -->
<!-- #region bounce -->
<div class="expressive-button popup-button button-outlined animate-on-hover highlight-popup-bounce">
    Bounce
</div>
<!-- #endregion bounce -->
    `),
    createDocsScenario("rollup", `
<!-- #region down-to-up -->
<div class="expressive-button rollup-button button-flat animate-on-hover">
    Default, down to up
</div>
<!-- #endregion down-to-up -->
<!-- #region right-to-left -->
<div class="expressive-button rollup-button highlight-rollup-horizontal animate-on-hover">
    Right to left
</div>
<!-- #endregion right-to-left -->
<!-- #region up-to-down -->
<div class="expressive-button rollup-button button-outlined highlight-rollup-reverse animate-on-hover">
    Up to down
</div>
<!-- #endregion up-to-down -->
<!-- #region left-to-right -->
<div class="expressive-button rollup-button button-outlined highlight-rollup-horizontal highlight-rollup-reverse animate-on-hover">
    Left to right
</div>
<!-- #endregion left-to-right -->
<!-- #region skew-left-to-right -->
<div class="expressive-button rollup-button button-outlined highlight-rollup highlight-rollup-skew animate-on-hover">
    Skew left to right
</div>
<!-- #endregion skew-left-to-right -->
<!-- #region skew-right-to-left -->
<div class="expressive-button rollup-button button-outlined highlight-rollup highlight-rollup-skew highlight-rollup-reverse animate-on-hover">
    Skew right to left
</div>
<!-- #endregion skew-right-to-left -->
    `),
];

// Source: docs/molecules/buttons/IconFocusButton*.html
export const iconFocusButtonScenarios = [
    createDocsScenario("outlined", `
<!-- #region default -->
<a href="#" class="icon-focus-button button-outlined animate-on-hover">
    <span>This is a <b>Long Call</b> to Action<br> with a <b>Line Break</b></span>
    <span>
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </span>
</a>
<div class="icon-focus-button button-outlined animate-on-hover">
    <span>Call To Action (hover)</span>
    <span>
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </span>
</div>
<!-- #endregion default -->
<!-- #region image -->
<div class="icon-focus-button button-outlined animate-on-hover">
    <span>Image</span>
    <span>
        <img alt="" class="button-image" src="https://placedog.net/100/100">
    </span>
</div>
<!-- #endregion image -->
<!-- #region small -->
<div class="icon-focus-button button-outlined animate-on-hover button-small">
    <span>Small</span>
    <span>
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </span>
</div>
<!-- #endregion small -->
<!-- #region rounded -->
<div class="icon-focus-button button-outlined animate-on-hover button-rounded">
    <span>Rounded</span>
    <span>
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </span>
</div>
<!-- #endregion rounded -->
<!-- #region plain -->
<div class="icon-focus-button button-outlined animate-on-hover button-plain">
    <span>Plain</span>
    <span>
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </span>
</div>
<!-- #endregion plain -->
<!-- #region outlined -->
<div class="icon-focus-button button-outlined animate-on-hover">
    <span>Outlined</span>
    <span>
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </span>
</div>
<!-- #endregion outlined -->
    `),
    createDocsScenario("default", `
<!-- #region default -->
<a href="#" class="icon-focus-button animate-on-hover">
    <span>This is a <b>Long Call</b> to Action<br> with a <b>Line Break</b></span>
    <span>
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </span>
</a>
<div class="icon-focus-button animate-on-hover">
    <span>Call To Action (hover)</span>
    <span>
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </span>
</div>
<!-- #endregion default -->
<!-- #region image -->
<div class="icon-focus-button animate-on-hover">
    <span>Image</span>
    <span>
        <img alt="" class="button-image" src="https://placedog.net/100/100">
    </span>
</div>
<!-- #endregion image -->
<!-- #region small -->
<div class="icon-focus-button animate-on-hover button-small">
    <span>Small</span>
    <span>
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </span>
</div>
<!-- #endregion small -->
<!-- #region rounded -->
<div class="icon-focus-button animate-on-hover button-rounded">
    <span>Rounded</span>
    <span>
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </span>
</div>
<!-- #endregion rounded -->
<!-- #region plain -->
<div class="icon-focus-button animate-on-hover button-plain">
    <span>Plain</span>
    <span>
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </span>
</div>
<!-- #endregion plain -->
<!-- #region outlined -->
<div class="icon-focus-button animate-on-hover">
    <span>Outlined</span>
    <span>
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </span>
</div>
<!-- #endregion outlined -->
    `),
];

// Source: docs/molecules/cards/SimpleCard*.html
export const simpleCardScenarios = [
    createDocsScenario("alert", `
<!-- #region left-icon -->
<div class="simple-card card-direction-row animate-on-hover">
    <div class="card-header">
        <div class="card-actions">
            <img alt="" class="card-icon card-icon-lg" src="https://placedog.net/400/400" />
        </div>
    </div>
    <div>
        <div class="card-header">
            <h2 class="card-title">Title of Left Icon</h2>
        </div>
        <div class="card-content">
            <p>
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            </p>
        </div>
    </div>
</div>
<!-- #endregion left-icon -->
<!-- #region right-icon -->
<div class="simple-card card-direction-row-reverse animate-on-hover" style="--background: darkred; --on-background: white;">
    <div class="card-header">
        <div class="card-actions">
            <svg class="card-icon card-icon-lg"  viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
    </div>
    <div class="card-content">
        <h2 class="card-title">Title of Right (and red!) Icon</h2>
        <br/>
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
<!-- #endregion right-icon -->
<!-- #region right-icon-centered -->
<div class="simple-card card-direction-row animate-on-hover">
    <div class="card-header card-section-start card-section-center">
        <div class="card-actions">
            <svg class="card-icon card-icon-lg"  viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
    </div>
    <div class="card-content">
        <h2 class="card-title">Title of Center Right Icon</h2>
        <br/>
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
<!-- #endregion right-icon-centered -->
<!-- #region top-center-icon -->
<div class="simple-card animate-on-hover">
    <div class="card-header card-section-center">
        <div class="card-actions">
            <svg class="card-icon card-icon-lg"  viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
            <svg class="card-icon" style="font-size:7em;" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
            <svg class="card-icon card-icon-lg"  viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
    </div>
    <div class="card-content">
        <h2 class="card-title">Title of Top Center Icon</h2>
        <br/>
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
<!-- #endregion top-center-icon -->
<!-- #region bottom-right-icon -->
<div class="simple-card animate-on-hover">
    <div class="card-content">
        <h2 class="card-title">Title of Bottom Right Icon</h2>
        <br/>
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
    <div class="card-footer card-section-end">
        <div class="card-actions">
            <svg class="card-icon card-icon-lg"  viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
            <svg class="card-icon card-icon-lg"  viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
    </div>
</div>
<!-- #endregion bottom-right-icon -->
<!-- #region background -->
<div class="simple-card card-direction-row card-overlay animate-on-hover">
    <div class="card-header">
        <div class="card-actions card-section-left card-section-center">
            <svg class="card-icon card-icon-lg"  viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
    </div>
    <img alt="" class="card-background" src="https://placedog.net/1000/600" />
    <div class="card-content">
        <h2 class="card-title">Title of lorem ipsum</h2>
        <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
    </div>
</div>
<!-- #endregion background -->
<!-- #region some-customization -->
<div class="simple-card alert-center card-flat animate-on-hover" style="--background: transparent; --active-on-background: white">
    <div class="card-header card-section-center">
        <div class="card-actions">
            <svg class="card-icon" style="font-size:7em;" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
    </div>
    <div class="card-content" style="text-align: center">
        <h2 class="card-title">Title of lorem ipsum</h2>
        <br/>
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
<!-- #endregion some-customization -->
    `),
    createDocsScenario("borders", `
<!-- #region right -->
<div class="simple-card card-transparent animate-on-hover border-left-active">
    <div class="card-header">
        Lorem Ipsum
    </div>
    <div class="card-content">
        <h2 class="card-title">Title of lorem ipsum</h2>
        <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
        <br/>
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
    <div class="card-footer">
        Lorem Ipsum
    </div>
</div>
<!-- #endregion right -->
<!-- #region full -->
<div class="simple-card card-transparent animate-on-hover border-active">
    <div class="card-header">
        Lorem Ipsum
    </div>
    <div class="card-content">
        <h2 class="card-title">Title of lorem ipsum</h2>
        <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
    </div>
    <div class="card-footer">
        Lorem Ipsum
    </div>
</div>
<!-- #endregion full -->
<!-- #region top-bottom -->
<div class="simple-card card-transparent animate-on-hover border-top-active border-bottom-active">
    <div class="card-header">
        Lorem Ipsum
    </div>
    <div class="card-content">
        <h2 class="card-title">Title of lorem ipsum</h2>
        <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
    </div>
    <div class="card-footer">
        Lorem Ipsum
    </div>
</div>
<!-- #endregion top-bottom -->
<!-- #region left-right -->
<div class="simple-card card-transparent animate-on-hover border-left-active border-right-active">
    <div class="card-header">
        Lorem Ipsum
    </div>
    <div class="card-content">
        <h2 class="card-title">Title of lorem ipsum</h2>
        <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
    </div>
    <div class="card-footer">
        Lorem Ipsum
    </div>
</div>
<!-- #endregion left-right -->
    `),
    createDocsScenario("icons", `
<!-- #region icons -->
<div class="simple-card animate-on-hover">
    <div class="card-header">
        <img alt="" class="card-icon" src="https://placedog.net/400/400" />
        <span class="card-title">Lorem Ipsum</span>
    </div>
    <div class="card-content">
        <small>Ut enim ad minim veniam</small>
        <small>Jan 1997 - Mar 2000</small>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
    </div>
    <div class="card-footer">
        <div class="card-actions">
            <button class="simple-button animate-on-hover">lorem</button>
            <button class="simple-button animate-on-hover">ipsum</button>
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
    </div>
    <div class="card-actions card-section-absolute">
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </div>
</div>
<!-- #endregion icons -->
<!-- #region icons2 -->
<div class="simple-card animate-on-hover">
    <div class="card-header">
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        <span class="card-title">Lorem Ipsum</span>
    </div>
    <div class="card-content">
        <small>Ut enim ad minim veniam</small>
        <small>Jan 1997 - Mar 2000</small>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
    </div>
    <div class="card-actions card-section-absolute card-section-column">
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </div>
</div>
<!-- #endregion icons2 -->
<!-- #region icons3 -->
<div class="simple-card animate-on-hover">
    <div class="card-header">
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        <span class="card-title">Lorem Ipsum</span>
    </div>
    <div class="card-content">
        <small>Ut enim ad minim veniam</small>
        <small>Jan 1997 - Mar 2000</small>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="card-actions card-section-end">
            <button class="simple-button animate-on-hover">lorem</button>
            <button class="simple-button animate-on-hover">ipsum</button>
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
    </div>
    <div class="card-footer">
        <div class="card-actions">
            <button class="simple-button animate-on-hover">lorem</button>
            <button class="simple-button animate-on-hover">ipsum</button>
            <img alt="" class="card-icon" src="https://placedog.net/400/400" />
            <img alt="" class="card-icon" src="https://placedog.net/400/400" />
        </div>
    </div>
    <div class="card-actions card-section-absolute">
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </div>
</div>
<!-- #endregion icons3 -->
    `),
    createDocsScenario("media", `
<!-- #region default -->
<div class="simple-card shadow-on-hover animate-on-hover" style="--image-aspect-ratio: 3 / 1">
    <img class="card-media" alt="" src="https://placedog.net/1000/1000" />
    <div class="card-content">
        <h2 class="card-title">Title of lorem ipsum</h2>
        <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
        <hr class="card-divider" />
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
<!-- #endregion default -->
<!-- #region default-bottom -->
<div class="simple-card shadow-on-hover animate-on-hover" style="--image-aspect-ratio: 33%">
    <div class="card-content">
        <h2 class="card-title">Title of lorem ipsum</h2>
        <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
        <hr class="card-divider" />
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
    <div class="card-media">
        <img alt="" src="https://placedog.net/1000/1000" />
    </div>
</div>
<!-- #endregion default-bottom -->
<!-- #region background -->
<div class="simple-card card-flat card-overlay animate-on-hover">
    <img class="card-background" alt="" src="https://placedog.net/1000/1000" />
    <div class="card-content">
        <h2 class="card-title">Title of lorem ipsum</h2>
        <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
        <br/>
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
<!-- #endregion background -->
<!-- #region left-image -->
<div class="simple-card card-media-left animate-on-hover">
    <img class="card-media" alt="" src="https://placedog.net/1000/1000" />
    <div>
        <div class="card-header">
            <h2 class="card-title">Title of lorem ipsum <span class="card-subtitle">Subtitle of lorem ipsum</span></h2>
        </div>
        <div class="card-content">
            <p>
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            </p>
        </div>
    </div>
</div>
<!-- #endregion left-image -->
<!-- #region right-image -->
<div class="simple-card card-media-right animate-on-hover">
    <img class="card-media" alt="" src="https://placedog.net/1000/1000" />
    <div>
        <div class="card-header">
            <h2 class="card-title">Title of lorem ipsum <span class="card-subtitle">Subtitle of lorem ipsum</span></h2>
        </div>
        <div class="card-content">
            <p>
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            </p>
        </div>
    </div>
</div>
<!-- #endregion right-image -->
<!-- #region background-hover -->
<div class="simple-card card-flat card-overlay animate-on-hover">
    <img class="card-background" alt="" src="https://placedog.net/1000/1000" />
    <img class="card-background show-on-active" alt="" src="https://placedog.net/800/800" />
    <div class="card-content">
        <h2 class="card-title">Hover me to change the image</h2>
        <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
        <br/>
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
<!-- #endregion background-hover -->
<!-- #region image-hover -->
<div class="simple-card card-media-left animate-on-hover">
    <div class="card-media">
        <img alt="" src="https://placedog.net/1000/1000" />
        <img class="show-on-active" alt="" src="https://placedog.net/800/800" />
    </div>
    <div>
        <div class="card-header">
            <h2 class="card-title">Hover me to change the image <span class="card-subtitle">Subtitle of lorem ipsum</span></h2>
        </div>
        <div class="card-content">
            <p>
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            </p>
        </div>
    </div>
</div>
<!-- #endregion image-hover -->
<!-- #region video -->
<div class="simple-card shadow-on-hover animate-on-hover">
    <video class="card-media" preload="metadata" playsinline="" loop="" autoplay="" alt="" title="" muted="">
        <source src="http://assets.guebbit.com/guebbit/video/normal.mp4" type="video/mp4">
    </video>
    <div class="card-content">
        <h2 class="card-title">Title of lorem ipsum</h2>
        <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
        <hr class="card-divider" />
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
<!-- #endregion video -->
<!-- #region video-background -->
<div class="simple-card card-overlay shadow-on-hover animate-on-hover">
    <video class="card-background" preload="metadata" playsinline="" loop="" autoplay="" alt="" title="" muted="">
        <source src="http://assets.guebbit.com/guebbit/video/normal.mp4" type="video/mp4">
    </video>
    <div class="card-content">
        <h2 class="card-title">Title of lorem ipsum</h2>
        <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
        <hr class="card-divider" />
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
<!-- #endregion video-background -->
<!-- #region mix -->
<div class="simple-card border-active card-overlay animate-on-hover">
    <img class="card-media" alt="" src="https://placedog.net/1000/600" />
    <div class="card-container">
        <img class="card-background" alt="" src="https://placedog.net/800/400" />
        <div class="card-header">
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
            <span class="card-title">Lorem Ipsum</span>
            <div class="card-actions">
                <svg class="card-icon" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </div>
        </div>
        <div class="card-content">
            <p>
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            </p>
        </div>
        <div class="card-footer">
            Footer
        </div>
    </div>
</div>
<!-- #endregion mix -->
    `),
    createDocsScenario("default", `
<!-- #region outlined -->
<div class="simple-card card-outlined animate-on-hover">
    <div class="card-content">
        <h2 class="card-title">Title of Outlined</h2>
        <h5 class="card-subtitle">Subtitle of Outlined</h5>
        <br/>
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
<!-- #endregion outlined -->
<!-- #region flat -->
<div class="simple-card card-flat animate-on-hover">
    <div class="card-content">
        <h2 class="card-title">Title of Flat</h2>
        <h5 class="card-subtitle">Subtitle of Flat</h5>
        <br/>
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
<!-- #endregion flat -->
<!-- #region plain -->
<div class="simple-card card-plain animate-on-hover">
    <div class="card-content">
        <h2 class="card-title">Title of Plain</h2>
        <h5 class="card-subtitle">Subtitle of Plain</h5>
        <br/>
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
<!-- #endregion plain -->
<!-- #region plain-flat -->
<div class="simple-card card-plain card-flat animate-on-hover">
    <div class="card-content">
        <h2 class="card-title">Title of Plain and Flat</h2>
        <h5 class="card-subtitle">Subtitle of Plain and Flat</h5>
        <br/>
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
<!-- #endregion plain-flat -->
<!-- #region elevated -->
<div class="simple-card card-elevated animate-on-hover">
    <div class="card-content">
        <h2 class="card-title">Title of Elevated</h2>
        <h5 class="card-subtitle">Subtitle of Elevated</h5>
        <br/>
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
<!-- #endregion elevated -->
<!-- #region rounded -->
<div class="simple-card card-rounded animate-on-hover">
    <div class="card-content">
        <h2 class="card-title">Title of Rounded</h2>
        <h5 class="card-subtitle">Subtitle of Rounded</h5>
        <br/>
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
<!-- #endregion rounded -->
<!-- #region blurred -->
<div style="padding: 50px; background-image: url(http://placedog.net/500/500);">
    <div class="simple-card card-transparent card-blurred animate-on-hover">
        <div class="card-content">
            <h2 class="card-title">Title of Blurred</h2>
            <h5 class="card-subtitle">Subtitle of Blurred</h5>
            <br/>
            <p>
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            </p>
        </div>
    </div>
</div>
<!-- #endregion blurred -->
<!-- #region monoline -->
<div class="simple-card animate-on-hover">
    <div class="card-content">
        <h2 class="card-title">Title only</h2>
    </div>
</div>
<!-- #endregion monoline -->
    `),
];

// Source: docs/molecules/cards/CreditCard*.html
export const creditCardScenarios = [
    createDocsScenario("default", `
<!-- #region front-card -->
<div class="credit-card">
    <div class="credit-card-true">
        <div class="front">
            <svg class="credit-card-logo" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
            <svg version="1.1" class="credit-card-front" x="0px" y="0px" viewBox="0 0 750 471" xml:space="preserve">
                <g>
                   <g>
                      <g>
                         <g>
                            <path class="top-card" d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40 C0,17.9,17.9,0,40,0z"></path>
                         </g>
                      </g>
                       <path class="bottom-card" d="M750,431V193.2c-217.6-57.5-556.4-13.5-750,24.9V431c0,22.1,17.9,40,40,40h670C732.1,471,750,453.1,750,431z"></path>
                   </g>
                    <text transform="matrix(1 0 0 1 60.106 295.0121)" class="svg-label-identification st2 st3 st4">5200 8282 8282 8210</text>
                    <text transform="matrix(1 0 0 1 54.1064 428.1723)" class="svg-label-name st2 st5 st6">owner's name</text>
                    <text transform="matrix(1 0 0 1 54.1074 389.8793)" class="svg-label-holder st7 st5 st8"> cardholder name </text>
                    <text transform="matrix(1 0 0 1 479.7754 388.8793)" class="svg-label-expiration st7 st5 st8"> expiration </text>
                    <text transform="matrix(1 0 0 1 65.1054 241.5)" class="st7 st5 st8">card number</text>
                    <g>
                      <text transform="matrix(1 0 0 1 574.4219 433.8095)" class="svg-value-expiration st2 st5 st9">10/25</text>
                        <text transform="matrix(1 0 0 1 479.3848 417.0097)" class="svg-label-expiration st2 st10 st11">VALID</text>
                        <text transform="matrix(1 0 0 1 479.3848 435.6762)" class="svg-label-expiration st2 st10 st11">THRU</text>
                        <polygon class="svg-label-expiration st2" points="554.5,421 540.4,414.2 540.4,427.9"></polygon>
                   </g>
                    <g class="credit-card-chip">
                      <g>
                         <path class="st2" d="M168.1,143.6H82.9c-10.2,0-18.5-8.3-18.5-18.5V74.9c0-10.2,8.3-18.5,18.5-18.5h85.3 c10.2,0,18.5,8.3,18.5,18.5v50.2C186.6,135.3,178.3,143.6,168.1,143.6z"></path>
                      </g>
                        <g>
                         <g>
                            <rect x="82" y="70" class="st12" width="1.5" height="60"></rect>
                         </g>
                            <g>
                            <rect x="167.4" y="70" class="st12" width="1.5" height="60"></rect>
                         </g>
                            <g>
                            <path class="st12" d="M125.5,130.8c-10.2,0-18.5-8.3-18.5-18.5c0-4.6,1.7-8.9,4.7-12.3c-3-3.4-4.7-7.7-4.7-12.3 c0-10.2,8.3-18.5,18.5-18.5s18.5,8.3,18.5,18.5c0,4.6-1.7,8.9-4.7,12.3c3,3.4,4.7,7.7,4.7,12.3 C143.9,122.5,135.7,130.8,125.5,130.8z M125.5,70.8c-9.3,0-16.9,7.6-16.9,16.9c0,4.4,1.7,8.6,4.8,11.8l0.5,0.5l-0.5,0.5 c-3.1,3.2-4.8,7.4-4.8,11.8c0,9.3,7.6,16.9,16.9,16.9s16.9-7.6,16.9-16.9c0-4.4-1.7-8.6-4.8-11.8l-0.5-0.5l0.5-0.5 c3.1-3.2,4.8-7.4,4.8-11.8C142.4,78.4,134.8,70.8,125.5,70.8z"></path>
                         </g>
                            <g>
                            <rect x="82.8" y="82.1" class="st12" width="25.8" height="1.5"></rect>
                         </g>
                            <g>
                            <rect x="82.8" y="117.9" class="st12" width="26.1" height="1.5"></rect>
                         </g>
                            <g>
                            <rect x="142.4" y="82.1" class="st12" width="25.8" height="1.5"></rect>
                         </g>
                            <g>
                            <rect x="142" y="117.9" class="st12" width="26.2" height="1.5"></rect>
                         </g>
                      </g>
                   </g>
                </g>
                <g></g>
             </svg>
        </div>
        <div class="back">
            <svg version="1.1" class="credit-card-back" x="0px" y="0px" viewBox="0 0 750 471" xml:space="preserve">
                <g>
                   <line class="st0" x1="35.3" y1="10.4" x2="36.7" y2="11"></line>
                </g>
                <g>
                   <g>
                      <g>
                         <path class="back-card" d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40 C0,17.9,17.9,0,40,0z"></path>
                      </g>
                   </g>
                    <rect y="61.6" class="st2" width="750" height="78"></rect>
                    <g>
                      <path class="st3" d="M701.1,249.1H48.9c-3.3,0-6-2.7-6-6v-52.5c0-3.3,2.7-6,6-6h652.1c3.3,0,6,2.7,6,6v52.5 C707.1,246.4,704.4,249.1,701.1,249.1z"></path>
                        <path class="svg-label-expiration st5" d="M701.1,184.6H618h-8h-10v64.5h10h8h83.1c3.3,0,6-2.7,6-6v-52.5C707.1,187.3,704.4,184.6,701.1,184.6z"></path>
                   </g>
                    <text transform="matrix(1 0 0 1 621.999 227.2734)" class="svg-value-security st6 st7">XXX</text>
                    <g class="st8">
                      <text transform="matrix(1 0 0 1 518.083 280.0879)" class="svg-label-security st9 st6 st10">security code</text>
                   </g>
                    <rect x="58.1" y="378.6" class="st11" width="375.5" height="13.5"></rect>
                    <rect x="58.1" y="405.6" class="st11" width="421.7" height="13.5"></rect>
                    <text transform="matrix(1 0 0 1 59.5073 228.6099)" class="st12 st13">owner's name</text>
                </g>
             </svg>
        </div>
    </div>
</div>
<!-- #endregion front-card -->
<!-- #region back-card -->
<div class="credit-card animate-active">
    <div class="credit-card-true">
        <div class="front">
            <svg class="credit-card-logo" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
            <svg class="credit-card-front" x="0px" y="0px" viewBox="0 0 750 471" xml:space="preserve">
                <g>
                   <g>
                      <g>
                         <g>
                            <path class="top-card" d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40 C0,17.9,17.9,0,40,0z"></path>
                         </g>
                      </g>
                       <path class="bottom-card" d="M750,431V193.2c-217.6-57.5-556.4-13.5-750,24.9V431c0,22.1,17.9,40,40,40h670C732.1,471,750,453.1,750,431z"></path>
                   </g>
                    <text transform="matrix(1 0 0 1 60.106 295.0121)" class="svg-label-identification st2 st3 st4">5200 8282 8282 8210</text>
                    <text transform="matrix(1 0 0 1 54.1064 428.1723)" class="svg-label-name st2 st5 st6">owner's name</text>
                    <text transform="matrix(1 0 0 1 54.1074 389.8793)" class="svg-label-holder st7 st5 st8"> cardholder name </text>
                    <text transform="matrix(1 0 0 1 479.7754 388.8793)" class="svg-label-expiration st7 st5 st8"> expiration </text>
                    <text transform="matrix(1 0 0 1 65.1054 241.5)" class="st7 st5 st8">card number</text>
                    <g>
                      <text transform="matrix(1 0 0 1 574.4219 433.8095)" class="svg-value-expiration st2 st5 st9">10/25</text>
                        <text transform="matrix(1 0 0 1 479.3848 417.0097)" class="svg-label-expiration st2 st10 st11">VALID</text>
                        <text transform="matrix(1 0 0 1 479.3848 435.6762)" class="svg-label-expiration st2 st10 st11">THRU</text>
                        <polygon class="svg-label-expiration st2" points="554.5,421 540.4,414.2 540.4,427.9"></polygon>
                   </g>
                    <g class="credit-card-chip">
                      <g>
                         <path class="st2" d="M168.1,143.6H82.9c-10.2,0-18.5-8.3-18.5-18.5V74.9c0-10.2,8.3-18.5,18.5-18.5h85.3 c10.2,0,18.5,8.3,18.5,18.5v50.2C186.6,135.3,178.3,143.6,168.1,143.6z"></path>
                      </g>
                        <g>
                         <g>
                            <rect x="82" y="70" class="st12" width="1.5" height="60"></rect>
                         </g>
                            <g>
                            <rect x="167.4" y="70" class="st12" width="1.5" height="60"></rect>
                         </g>
                            <g>
                            <path class="st12" d="M125.5,130.8c-10.2,0-18.5-8.3-18.5-18.5c0-4.6,1.7-8.9,4.7-12.3c-3-3.4-4.7-7.7-4.7-12.3 c0-10.2,8.3-18.5,18.5-18.5s18.5,8.3,18.5,18.5c0,4.6-1.7,8.9-4.7,12.3c3,3.4,4.7,7.7,4.7,12.3 C143.9,122.5,135.7,130.8,125.5,130.8z M125.5,70.8c-9.3,0-16.9,7.6-16.9,16.9c0,4.4,1.7,8.6,4.8,11.8l0.5,0.5l-0.5,0.5 c-3.1,3.2-4.8,7.4-4.8,11.8c0,9.3,7.6,16.9,16.9,16.9s16.9-7.6,16.9-16.9c0-4.4-1.7-8.6-4.8-11.8l-0.5-0.5l0.5-0.5 c3.1-3.2,4.8-7.4,4.8-11.8C142.4,78.4,134.8,70.8,125.5,70.8z"></path>
                         </g>
                            <g>
                            <rect x="82.8" y="82.1" class="st12" width="25.8" height="1.5"></rect>
                         </g>
                            <g>
                            <rect x="82.8" y="117.9" class="st12" width="26.1" height="1.5"></rect>
                         </g>
                            <g>
                            <rect x="142.4" y="82.1" class="st12" width="25.8" height="1.5"></rect>
                         </g>
                            <g>
                            <rect x="142" y="117.9" class="st12" width="26.2" height="1.5"></rect>
                         </g>
                      </g>
                   </g>
                </g>
                <g></g>
             </svg>
        </div>
        <div class="back">
            <svg version="1.1" class="credit-card-back" x="0px" y="0px" viewBox="0 0 750 471" xml:space="preserve">
                <g>
                   <line class="st0" x1="35.3" y1="10.4" x2="36.7" y2="11"></line>
                </g>
                <g>
                   <g>
                      <g >
                         <path class="back-card" d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40 C0,17.9,17.9,0,40,0z"></path>
                      </g>
                   </g>
                    <rect y="61.6" class="st2" width="750" height="78"></rect>
                    <g>
                      <path class="st3" d="M701.1,249.1H48.9c-3.3,0-6-2.7-6-6v-52.5c0-3.3,2.7-6,6-6h652.1c3.3,0,6,2.7,6,6v52.5 C707.1,246.4,704.4,249.1,701.1,249.1z"></path>
                        <path class="svg-label-expiration st5" d="M701.1,184.6H618h-8h-10v64.5h10h8h83.1c3.3,0,6-2.7,6-6v-52.5C707.1,187.3,704.4,184.6,701.1,184.6z"></path>
                   </g>
                    <text transform="matrix(1 0 0 1 621.999 227.2734)" class="svg-value-security st6 st7">XXX</text>
                    <g class="st8">
                      <text transform="matrix(1 0 0 1 518.083 280.0879)" class="svg-label-security st9 st6 st10">security code</text>
                   </g>
                    <rect x="58.1" y="378.6" class="st11" width="375.5" height="13.5"></rect>
                    <rect x="58.1" y="405.6" class="st11" width="421.7" height="13.5"></rect>
                    <text transform="matrix(1 0 0 1 59.5073 228.6099)" class="st12 st13">owner's name</text>
                </g>
             </svg>
        </div>
    </div>
</div>
<!-- #endregion back-card -->
    `),
];

// Source: docs/molecules/lists/SimpleList*.html
export const simpleListScenarios = [
    createDocsScenario("default", `
<ul class="simple-list animate-on-hover">
    <li>
        <img alt="" src="https://placedog.net/100/100" />
        With image
    </li>
    <li>
        Reversed
        <img alt="" src="https://placedog.net/100/100" />
    </li>
    <li>
        Text only
    </li>
    <li class="animate-active">
        <svg class="icon" viewBox="0 0 24 24">
            <use xlink:href="#icon"/>
        </svg>
        With icon
    </li>
    <li>
        Reversed
        <svg class="icon" viewBox="0 0 24 24">
            <use xlink:href="#icon"/>
        </svg>
    </li>
    <li>
        <span class="icon">AAA</span>
        With simple text
    </li>
    <li>
        Reversed
        <span class="icon">AAA</span>
    </li>
    <li>
        <svg class="icon" viewBox="0 0 24 24">
            <use xlink:href="#icon"/>
        </svg>
        Long text: lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
    </li>
    <li>
        <svg class="icon" viewBox="0 0 24 24">
            <use xlink:href="#icon"/>
        </svg>
        With BR: lorem ipsum sit dolor <br /> lorem ipsum sit dolor
    </li>
</ul>
    `),
];

// Source: docs/atoms/animations/BookSideLoad*.html
export const bookSideLoadScenarios = [
    createDocsScenario("default", `
<div class="book-side-load animate-active">
    <div class="book">
        <div></div>
        <div></div>
        <div></div>
    </div>
    <ul class="pages">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</div>
    `),
];

// Source: docs/organisms/panels/TimelineTree*.html
export const timelineTreeScenarios = [
    createDocsScenario("balloon", `
<!-- #region default -->
<div class="timeline-tree animate-on-hover timeline-with-balloon" style="--timeline-tree-slot-color: rgba(var(--flatrica-green-500) / .5); --timeline-tree-active-slot-color: rgba(var(--flatrica-green-800) / .5); --timeline-tree-slot-on-color: #000">
    <div class="timeline-tree-slot">
        <div class="timeline-tree-icon">
            <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
        <div class="timeline-tree-item simple-card shadow-on-hover">
            <div class="card-content">
                <h2 class="card-title">Title of lorem ipsum</h2>
                <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
                <br/>
                <p>
                    lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                    lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                </p>
            </div>
        </div>
        <time class="timeline-tree-slot-date" datetime="xxxx">
            Apr. 2016
            <br/>
            <small>Time slot can be OUT with its CSS</small>
        </time>
    </div>
    <div class="timeline-tree-slot">
        <div class="timeline-tree-icon">
            <b>A</b>
        </div>
        <div class="timeline-tree-item simple-card shadow-on-hover">
            <div class="card-content">
                <h2 class="card-title">Title of lorem ipsum</h2>
                <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
                <br/>
                <p>
                    lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                    lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                </p>
                <br/>
                <time style="opacity: 0.5" class="timeline-tree-slot-date" datetime="xxxx">
                    Apr. 2016
                    <br/>
                    <small>Time slot can be IN with custom CSS</small>
                </time>
            </div>
        </div>
    </div>
</div>
<!-- #endregion default -->
<!-- #region alternate -->
<div class="timeline-tree animate-on-hover timeline-tree-alternate timeline-with-balloon" style="--timeline-tree-slot-color: rgba(var(--flatrica-green-500) / .5); --timeline-tree-active-slot-color: rgba(var(--flatrica-green-800) / .5); --timeline-tree-slot-on-color: #000">
    <div class="timeline-tree-slot">
        <div class="timeline-tree-icon">
            <b>B</b>
        </div>
        <div class="timeline-tree-item simple-card shadow-on-hover">
            <div class="card-content">
                <h2 class="card-title">Title of lorem ipsum</h2>
                <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
                <br/>
                <p>
                    lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                    lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                </p>
            </div>
        </div>
        <time class="timeline-tree-slot-date" datetime="xxxx">
            Apr. 2016
            <br/>
            <small>Time slot can be OUT with its CSS</small>
        </time>
    </div>
    <div class="timeline-tree-slot">
        <div class="timeline-tree-icon">
            <b>C</b>
        </div>
        <div class="timeline-tree-item simple-card shadow-on-hover">
            <div class="card-content">
                <h2 class="card-title">Title of lorem ipsum</h2>
                <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
                <br/>
                <p>
                    lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                    lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                </p>
            </div>
        </div>
        <time class="timeline-tree-slot-date" datetime="xxxx">
            Apr. 2016
            <br/>
            <small>Time slot can be IN with custom CSS</small>
        </time>
    </div>
    <div class="timeline-tree-slot">
        <div class="timeline-tree-icon">
            <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
        <div class="timeline-tree-item simple-card shadow-on-hover">
            <div class="card-content">
                <h2 class="card-title">Title of lorem ipsum</h2>
                <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
                <br/>
                <p>
                    lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                    lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                </p>
                <br />
                <time style="opacity: 0.5" class="timeline-tree-slot-date" datetime="xxxx">
                    Apr. 2016
                    <br/>
                    <small>Time slot can be IN with custom CSS</small>
                </time>
            </div>
        </div>
    </div>
</div>
<!-- #endregion alternate -->
    `),
    createDocsScenario("border", `
<div class="timeline-tree animate-on-hover timeline-with-border">
    <div class="timeline-tree-slot">
        <div class="timeline-tree-icon">
            <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
        <time class="timeline-tree-slot-date" datetime="xxxx">
            Apr. 2016
            <br/>
            <small>Time slot can be OUT with its CSS</small>
        </time>
        <div class="timeline-tree-item simple-card card-flat">
            <div class="card-content">
                <h2 class="card-title">Title of lorem ipsum</h2>
                <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
                <br/>
                <p>
                    lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                    lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                </p>
            </div>
        </div>
    </div>
    <div class="timeline-tree-slot">
        <div class="timeline-tree-icon">
            <b>A</b>
        </div>
        <time class="timeline-tree-slot-date" datetime="xxxx">
            Apr. 2016
            <br/>
            <small>Time slot can be IN with custom CSS</small>
        </time>
        <div class="timeline-tree-item simple-card card-flat">
            <div class="card-content">
                <h2 class="card-title">Title of lorem ipsum</h2>
                <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
                <br/>
                <p>
                    lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                    lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                </p>
            </div>
        </div>
    </div>
</div>
    `),
    createDocsScenario("line", `
<!-- #region default -->
<div class="timeline-tree animate-on-hover timeline-with-line">
    <div class="timeline-tree-slot">
        <div class="timeline-tree-icon">
            <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
        <div class="timeline-tree-item simple-card shadow-on-hover">
            <div class="card-content">
                <h2 class="card-title">Title of lorem ipsum</h2>
                <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
                <br/>
                <p>
                    lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                    lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                </p>
            </div>
        </div>
        <time class="timeline-tree-slot-date" datetime="xxxx">
            Apr. 2016
            <br/>
            <small>Time slot can be OUT with its CSS</small>
        </time>
    </div>
    <div class="timeline-tree-slot">
        <div class="timeline-tree-icon">
            <b>A</b>
        </div>
        <div class="timeline-tree-item simple-card shadow-on-hover">
            <div class="card-content">
                <h2 class="card-title">Title of lorem ipsum</h2>
                <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
                <br/>
                <p>
                    lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                    lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                </p>
                <br/>
                <time style="opacity: 0.5" class="timeline-tree-slot-date" datetime="xxxx">
                    Apr. 2016
                    <br/>
                    <small>Time slot can be IN with custom CSS</small>
                </time>
            </div>
        </div>
    </div>
</div>
<!-- #endregion default -->
<!-- #region alternate -->
<div class="timeline-tree animate-on-hover timeline-tree-alternate timeline-with-line">
    <div class="timeline-tree-slot">
        <div class="timeline-tree-icon">
            <b>B</b>
        </div>
        <div class="timeline-tree-item simple-card shadow-on-hover">
            <div class="card-content">
                <h2 class="card-title">Title of lorem ipsum</h2>
                <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
                <br/>
                <p>
                    lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                    lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                </p>
            </div>
        </div>
        <time class="timeline-tree-slot-date" datetime="xxxx">
            Apr. 2016
            <br/>
            <small>Time slot can be OUT with its CSS</small>
        </time>
    </div>
    <div class="timeline-tree-slot">
        <div class="timeline-tree-icon">
            <b>C</b>
        </div>
        <div class="timeline-tree-item simple-card shadow-on-hover">
            <div class="card-content">
                <h2 class="card-title">Title of lorem ipsum</h2>
                <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
                <br/>
                <p>
                    lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                    lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                </p>
            </div>
        </div>
        <time class="timeline-tree-slot-date" datetime="xxxx">
            Apr. 2016
            <br/>
            <small>Time slot can be IN with custom CSS</small>
        </time>
    </div>
    <div class="timeline-tree-slot">
        <div class="timeline-tree-icon">
            <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
        <div class="timeline-tree-item simple-card shadow-on-hover">
            <div class="card-content">
                <h2 class="card-title">Title of lorem ipsum</h2>
                <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
                <br/>
                <p>
                    lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                    lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                </p>
                <br />
                <time style="opacity: 0.5" class="timeline-tree-slot-date" datetime="xxxx">
                    Apr. 2016
                    <br/>
                    <small>Time slot can be IN with custom CSS</small>
                </time>
            </div>
        </div>
    </div>
</div>
<!-- #endregion alternate -->
    `),
    createDocsScenario("default", `
<!-- #region default -->
<div class="timeline-tree">
    <div class="timeline-tree-slot">
        <div class="timeline-tree-icon">
            <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
        <div class="timeline-tree-item">
            <h2>Title of lorem ipsum</h2>
            <h5>Subtitle of lorem ipsum</h5>
            <p>
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            </p>
        </div>
        <time class="timeline-tree-slot-date" datetime="xxxx">
            Apr. 2016
            <br/>
            <small>Time slot can be OUT with its CSS</small>
        </time>
    </div>
    <div class="timeline-tree-slot">
        <div class="timeline-tree-icon">
            <b>A</b>
        </div>
        <div class="timeline-tree-item">
            <h2>Title of lorem ipsum</h2>
            <h5>Subtitle of lorem ipsum</h5>
            <p>
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            </p>
            <time style="opacity: 0.5" class="timeline-tree-slot-date" datetime="xxxx">
                Apr. 2016
                <br/>
                <small>Time slot can be IN with custom CSS</small>
            </time>
        </div>
    </div>
</div>
<!-- #endregion default -->
<!-- #region alternate -->
<div class="timeline-tree timeline-tree-alternate">
    <div class="timeline-tree-slot">
        <div class="timeline-tree-icon">
            <b>B</b>
        </div>
        <div class="timeline-tree-item" style="text-align: right">
            <h2>Title of lorem ipsum</h2>
            <h5>Subtitle of lorem ipsum</h5>
            <p>
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            </p>
        </div>
        <time class="timeline-tree-slot-date" datetime="xxxx">
            Apr. 2016
            <br/>
            <small>Time slot can be OUT with its CSS</small>
        </time>
    </div>
    <div class="timeline-tree-slot">
        <div class="timeline-tree-icon">
            <b>C</b>
        </div>
        <div class="timeline-tree-item">
            <h2>Title of lorem ipsum</h2>
            <h5>Subtitle of lorem ipsum</h5>
            <p>
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            </p>
        </div>
        <time class="timeline-tree-slot-date" datetime="xxxx">
            Apr. 2016
            <br/>
            <small>Time slot can be IN with custom CSS</small>
        </time>
    </div>
    <div class="timeline-tree-slot">
        <div class="timeline-tree-icon">
            <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
        <div class="timeline-tree-item" style="text-align: right">
            <h2>Title of lorem ipsum</h2>
            <h5>Subtitle of lorem ipsum</h5>
            <p>
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            </p>
            <time style="opacity: 0.5" class="timeline-tree-slot-date" datetime="xxxx">
                Apr. 2016
                <br/>
                <small>Time slot can be IN with custom CSS</small>
            </time>
        </div>
    </div>
</div>
<!-- #endregion alternate -->
    `),
];

// Source: docs/organisms/cards/ChooseOptionCard*.html
export const chooseOptionCardScenarios = [
    createDocsScenario("default", `
<div class="choose-option-card">
    <div class="card-content">
        <h2 class="card-title">Choose account</h2>
        <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
        <ul class="list-container">
            <li class="active">
                <div>
                    <div class="list-icon">
                        <svg class="button-icon" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" />
                        </svg>
                    </div>
                    <div class="list-content">
                        <h4 class="item-title">Recommended</h4>
                        <p class="item-sub-title">Best Lorem Ipsum</p>
                    </div>
                </div>
                <div class="list-button">
                    <svg class="icon" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                </div>
            </li>
        </ul>
        <h5 class="card-subtitle">Login a another account</h5>
        <ul class="list-container">
            <li>
                <div>
                    <div class="list-icon">
                        <svg class="button-icon" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" />
                        </svg>
                    </div>
                    <div class="list-content">
                        <h4 class="item-title">Lorem Ipsum</h4>
                        <p class="item-sub-title">Sign in to Lorem Ipsum</p>
                    </div>
                </div>
                <div class="list-button">
                    <svg class="icon" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                </div>
            </li>
            <li>
                <div>
                    <div class="list-icon">
                        <svg class="button-icon" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" />
                        </svg>
                    </div>
                    <div class="list-content">
                        <h4 class="item-title">Lorem Ipsum</h4>
                        <p class="item-sub-title">Sign in to Lorem Ipsum</p>
                    </div>
                </div>
                <div class="list-button">
                    <svg class="icon" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                </div>
            </li>
            <li class="disabled">
                <div>
                    <div class="list-icon">
                        <svg class="button-icon" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" />
                        </svg>
                    </div>
                    <div class="list-content">
                        <h4 class="item-title">Disabled</h4>
                        <p class="item-sub-title">Disabled Lorem Ipsum</p>
                    </div>
                </div>
                <div class="list-button">
                    <svg class="icon" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                </div>
            </li>
        </ul>
    </div>
</div>
    `),
];

// Source: docs/organisms/cards/ImageSlashCard*.html
export const imageSlashCardScenarios = [
    createDocsScenario("default", `
<!-- #region default -->
<div class="image-slash-card">
    <div class="card-media-wrapper">
        <img class="card-background" alt="" src="https://placedog.net/1000/600" />
        <div class="card-actions">
            <div class="simple-button button-icon-only button-rounded animate-on-hover" style="--background: red">
                <svg class="button-icon" viewBox="0 0 24 24">
                    <svg id="icon" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                </svg>
            </div>
            <div class="simple-button button-icon-only button-rounded animate-on-hover">
                <svg class="button-icon" viewBox="0 0 24 24">
                    <svg id="icon" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                </svg>
            </div>
            <div class="simple-button button-icon-only button-rounded animate-on-hover">
                <svg class="button-icon" viewBox="0 0 24 24">
                    <svg id="icon" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                </svg>
            </div>
        </div>
    </div>
    <div class="card-content">
        <h2 class="card-title">Title of lorem ipsum</h2>
        <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
        <br/>
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
<!-- #endregion default -->
<!-- #region right -->
<div class="image-slash-card card-media-right">
    <div class="card-media-wrapper">
        <img class="card-background" alt="" src="https://placedog.net/1000/600" />
        <div class="card-actions">
            <div class="simple-button button-icon-only button-rounded animate-on-hover">
                <svg class="button-icon" viewBox="0 0 24 24">
                    <svg id="icon" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                </svg>
            </div>
            <div class="simple-button button-icon-only button-rounded animate-on-hover">
                <svg class="button-icon" viewBox="0 0 24 24">
                    <svg id="icon" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                </svg>
            </div>
            <div class="simple-button button-icon-only button-rounded animate-on-hover">
                <svg class="button-icon" viewBox="0 0 24 24">
                    <svg id="icon" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                </svg>
            </div>
            <div class="simple-button button-icon-only button-rounded animate-on-hover">
                <svg class="button-icon" viewBox="0 0 24 24">
                    <svg id="icon" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                </svg>
            </div>
        </div>
    </div>
    <div class="card-content">
        <h2 class="card-title">Title of lorem ipsum</h2>
        <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
        <br/>
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
<!-- #endregion right -->
    `),
];

// Source: docs/atoms/animations/AdvancingMoon.md
export const advancingMoonScenarios = [
    createDocsScenario("default", `
<img class="advancing-moon animate-on-hover" src="https://placedog.net/400/400"/>
<img
    class="advancing-moon animate-on-hover"
    src="https://placedog.net/400/400"
    style="--advancing-moon-opacity-start: 1; --advancing-moon-scale-end: 1.5"
/>
    `),
    createDocsScenario("fade-in-to-left", `
<img
    class="advancing-moon animate-on-hover"
    style="
        --advancing-moon-slide-x-start: 0;
        --advancing-moon-slide-x-end: -60%;
    "
    src="https://placedog.net/400/400"
/>
    `),
    createDocsScenario("fade-out", `
<img class="advancing-moon animate-on-hover animation-inverted" src="https://placedog.net/400/400" />
    `),
];

// Source: docs/atoms/animations/BookFrontLoad.md
export const bookFrontLoadScenarios = [
    createDocsScenario("default", `
<div class="book-front-load">
    <span></span>
    <span></span>
    <span></span>
</div>
    `),
];

// Source: docs/atoms/animations/EffectColorPopup.md
export const effectColorPopupScenarios = [
    createDocsScenario("default", `
<div class="text-primary">...</div>
<button class="use-primary">...</button>
<button class="use-primary">...</button>
    `),
    createDocsScenario("default-2", `
<div style="position: relative; overflow: hidden;">
    <span class="effect-color-popup animate-on-hover use-primary"></span>
    Content here
</div>
    `),
    createDocsScenario("default-3", `
<button
    class="effect-color-popup-animate-on-hover use-primary"
    style="position: relative; overflow: hidden;"
>
    <span class="effect-color-popup"></span>
    Hover me
</button>
    `),
];

// Source: docs/atoms/animations/EffectMirrorReflection.md
export const effectMirrorReflectionScenarios = [
    createDocsScenario("default", `
<div class="effect-mirror-reflection-animate-on-hover" style="position:relative; overflow:hidden;">
    <div class="effect-mirror-reflection"></div>
    <img class="card-background" alt="" src="https://placedog.net/1000/600" />
</div>
    `),
];

// Source: docs/atoms/animations/ShapeSlashContainer.md
export const shapeSlashContainerScenarios = [
    createDocsScenario("default", `
<div class="shape-slash-container animate-on-hover text-primary">
  Hover me
</div>
    `),
];

// Source: docs/atoms/animations/GearLoad.md
export const gearLoadScenarios = [
    createDocsScenario("default", `
<div class="gear-load animate-on-hover"></div>
<div class="gear-load animate-active"></div>
    `),
];

// Source: docs/atoms/animations/IconShowcaseLoad.md
export const iconShowcaseLoadScenarios = [
    createDocsScenario("default", `
<div class="icon-showcase-load">
    <div>A</div>
    <img alt="" src="https://placedog.net/50/50" />
    <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
</div>
    `),
];

// Source: docs/atoms/animations/MapPinPulse.md
export const mapPinPulseScenarios = [
    createDocsScenario("default", `
<div class="map-pin-pulse">
    <div></div>
    <div></div>
</div>
    `),
    createDocsScenario("default-2", `
<div class="map-pin-pulse animation-bounce">
    <div></div>
    <div></div>
</div>
    `),
    createDocsScenario("default-3", `
<div class="map-pin-pulse animation-drop">
    <div></div>
    <div></div>
</div>
    `),
];

// Source: docs/atoms/animations/PanelAskewDoors.md
export const panelAskewDoorsScenarios = [
    createDocsScenario("default", `
<section class="panel-askew-doors animate-on-hover" style="height:300px;"></section>
    `),
    createDocsScenario("default-2", `
<section class="panel-askew-doors animate-open-on-hover animate-on-hover" style="height:300px;"></section>
    `),
    createDocsScenario("default-3", `
<section class="panel-askew-doors animate-open-on-hover askew-doors-vertical animate-on-hover" style="height:300px;"></section>
    `),
];

// Source: docs/atoms/animations/RotatingSquares.md
export const rotatingSquaresScenarios = [
    createDocsScenario("rotating-squares", `
<div class="rotating-squares">
    <div></div>
    <div></div>
</div>
    `),
];

// Source: docs/atoms/animations/ScrollDownArrow.md
export const scrollDownArrowScenarios = [
    createDocsScenario("default", `
<div class="scroll-down-arrow">
    <div></div>
    <div></div>
    <div></div>
    <span class="scroll-down-text">Scroll down</span>
</div>
<div class="scroll-down-arrow animate-active">
    <div></div>
    <div></div>
    <div></div>
    <span class="scroll-down-text">Scroll down</span>
</div>
    `),
];

// Source: docs/atoms/animations/ScrollDownMouse.md
export const scrollDownMouseScenarios = [
    createDocsScenario("default", `
<div class="scroll-down-mouse">
    <span></span>
</div>
<div class="scroll-down-mouse animate-active">
    <span></span>
</div>
    `),
    createDocsScenario("default-2", `
<div class="scroll-down-mouse mouse-with-chevron">
    <span></span>
</div>
<div class="scroll-down-mouse mouse-with-chevron animate-active">
    <span></span>
</div>
    `),
    createDocsScenario("default-3", `
<div class="scroll-down-mouse mouse-custom-dot">
    <span data-label="↓"></span>
</div>
<div class="scroll-down-mouse mouse-custom-dot animate-active">
    <span data-label="↓"></span>
</div>
    `),
];

// Source: docs/atoms/animations/SolarSystemLoad.md
export const solarSystemLoadScenarios = [
    createDocsScenario("default", `
<div class="solar-system-load">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
    `),
];

// Source: docs/atoms/animations/StatusCircle.md
export const statusCircleScenarios = [
    createDocsScenario("default", `
<span class="status-circle animate-on-hover"></span>
<span class="status-circle animate-active"></span>
    `),
];

// Source: docs/atoms/animations/TrapezoidForm.md
export const trapezoidFormScenarios = [
    createDocsScenario("regular", `
<div style="position:relative; width: 200px; height: 50px;">
    <span class="trapezoid-form"></span>
</div>
    `),
    createDocsScenario("regular-2", `
<div class="trapezoid-form-animate-on-hover" style="position:relative; width: 50px; height: 200px;">
    <span class="trapezoid-form" style="--active-transform-scale: 1.2;"></span>
</div>
    `),
    createDocsScenario("regular-3", `
<div style="position:relative; width: 200px; height: 50px;">
    <span
        class="trapezoid-form"
        style="--active-transform-rotate: -2deg;"
    ></span>
    <span
        class="trapezoid-form trapezoid-form-outlined"
        style="
            --transform-rotate: -2deg; 
            --active-transform-rotate: 2deg;  
            --active-border-size: 4px;
            "
    ></span>
</div>
    `),
];

// Source: docs/atoms/buttons/CyberpunkButton.md
export const cyberpunkButtonScenarios = [
    createDocsScenario("default", `
<button
    class="cyberpunk-button animate-on-hover"
    data-flicker-text="test toast"
>
    Lorem Ipsum
</button>
    `),
];

// Source: docs/atoms/buttons/ButtonParallelogram.md
export const buttonParallelogramScenarios = [
    createDocsScenario("default", `
<button class="button-parallelogram animate-on-hover">
    Lorem Ipsum
</button>
    `),
    createDocsScenario("default-2", `
<button class="button-parallelogram animate-on-hover focus-on-hover">
    Focus
</button>
    `),
];

// Source: docs/atoms/cards/CalendarCard.md
export const calendarCardScenarios = [
    createDocsScenario("default", `
<div class="calendar-card animate-on-hover" style="font-size: 2em;">
    <header class="calendar-head">
        May
        <small>2019</small>
    </header>
    <time class="calendar-body" datetime="2019-05-27">
        <div class="calendar-info-label">Monday</div>
        <div class="calendar-info-day">27</div>
        <div class="calendar-info-time">
            <span>21</span>
            <span>05</span>
        </div>
    </time>
</div>
    `),
    createDocsScenario("default-2", `
<div class="calendar-card animate-on-hover" style="font-size: 2em;">
    <time class="calendar-body" datetime="2019-05-27">
        <div class="calendar-info-label">Monday</div>
        <div class="calendar-info-day">27</div>
    </time>
</div>
    `),
];

// Source: docs/atoms/highlights/CornerRibbon.md
export const cornerRibbonScenarios = [
    createDocsScenario("default", `
<div class="corner-ribbon ribbon-top-left"><span>ribbon</span></div>
    `),
    createDocsScenario("default-2", `
<div class="corner-ribbon ribbon-top-right"><span>ribbon</span></div>
    `),
    createDocsScenario("default-3", `
<div class="corner-ribbon ribbon-bottom-left"><span><span>ribbon</span></span></div>
    `),
];

// Source: docs/atoms/highlights/HighlightBelt.md
export const highlightBeltScenarios = [
    createDocsScenario("default", `
<div class="highlight-belt bend-top">
    <b>Lorem Ipsum</b>
</div>
    `),
    createDocsScenario("default-2", `
<div class="highlight-belt">
    <b>Lorem Ipsum</b>
</div>
    `),
    createDocsScenario("default-3", `
<div class="highlight-belt bend-bottom">
    <b>Lorem Ipsum</b>
</div>
    `),
];

// Source: docs/atoms/typography/SpecialTitle.md
export const specialTitleScenarios = [
    createDocsScenario("default", `
<h2 class="special-title">
    <span class="special-title-enlarge special-title-color">--</span>
    <span><b>Lorem</b> Ipsum</span>
    <span class="special-title-enlarge special-title-color">/></span>
</h2>
    `),
    createDocsScenario("default-2", `
<h2 class="special-title title-with-line">
    <span class="special-title-enlarge">--</span>
    <span><b class="special-title-highlight">Lorem</b> Ipsum</span>
    <span class="special-title-enlarge">/></span>
</h2>
    `),
    createDocsScenario("default-3", `
<h2 class="special-title title-with-shadow">Shadow</h2>
    `),
];

// Source: docs/atoms/typography/SvgTitle.md
export const svgTitleScenarios = [
    createDocsScenario("default", `
<h1 class="svg-title svg-title-line" style="font-size:4em; line-height: 4">
    Default
    <svg style="height: 300px; width: 300px;" class="svg-title-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 288 164.67" xml:space="preserve">
         <polyline style="stroke: currentColor; fill:none; stroke-width: 14; stroke-miterlimit: 10" points="0,82.188 54,82.188 108,1.188 152.75,163.063 207.25,19.25 234,82.188 288,82.188 "/>
    </svg>
</h1>
    `),
    createDocsScenario("default-2", `
<h1 class="svg-title svg-title-line" style="font-size:4em; line-height: 4">
    Default
    <svg style="height: 300px; width: 300px;" class="svg-title-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 281.164 800 37.671" >
        <path d="M800,281.164c-49.44,25.182-225.332,56.213-440.436,14.134C144.461,253.221,0,318.835,0,318.835h800V281.164z"/>
    </svg>
</h1>
    `),
    createDocsScenario("custom-bg-image", `
<h1 class="svg-title svg-title-custom-bg" style="font-size:4em; line-height: 4; --image: url('https://assets.guebbit.com/guebbit/images/beatline.svg')">Custom BG image</h1>
    `),
];

// Source: docs/molecules/progress/CircularProgressBarCss.md
export const circularProgressBarCssScenarios = [
    createDocsScenario("default", `
<div 
    class="circular-progress-bar-css" 
    role="progressbar" 
    aria-valuenow="60" 
    aria-valuemin="0" 
    aria-valuemax="100" 
    style="--value: 50"
></div>
    `),
    createDocsScenario("default-2", `
<div 
    class="circular-progress-bar-css numberless-mode simplified-mode" 
    role="progressbar" 
    aria-valuenow="60" 
    aria-valuemin="0" 
    aria-valuemax="100" 
    style="--value: 50"
></div>
    `),
];

// Source: docs/molecules/progress/CircularProgressBarSvg.md
export const circularProgressBarSvgScenarios = [
    createDocsScenario("default", `
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
    `),
    createDocsScenario("default-2", `
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
    `),
];

// Source: docs/molecules/buttons/NeonButton.md
export const neonButtonScenarios = [
    createDocsScenario("default", `
<button class="neon-button button-flat animate-on-hover use-primary">
    <span></span><span></span><span></span><span></span>
    Lorem Ipsum
</button>
    `),
    createDocsScenario("default-2", `
<button class="neon-button button-flat animate-on-hover">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    Lorem Ipsum
</button>
    `),
    createDocsScenario("plus-simplebutton-variables", `
<button class="neon-button use-primary">...</button>
    `),
];

// Source: docs/molecules/cards/BookCard.md
export const bookCardScenarios = [
    createDocsScenario("default", `
<div class="book-card animate-on-hover">
    <div>
        <div class="book-cover">
            <div class="card-content">
                <h1>Lorem Ipsum Sit Dolor</h1>
            </div>
            <img class="book-cover-image" alt="" src="https://placedog.net/400/600">
            <div class="card-bottom">
                <img alt="" src="https://placedog.net/100/100">
            </div>
        </div>
        <div class="book-spine">
            <div class="card-content">
                <h1>Lorem Ipsum Sit Dolor</h1>
            </div>
            <img class="card-background" alt="" src="https://placedog.net/100/600">
            <div class="card-bottom">
                <svg class="card-icon" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </div>
        </div>
    </div>
</div>
    `),
];

// Source: docs/molecules/cards/CountdownCard.md
export const countdownCardScenarios = [
    createDocsScenario("default", `
<time class="countdown-card animate-on-hover" datetime="2021-11-20">
    <span class="timer">10</span>
    <span class="label">Hours</span>
</time>
<time class="countdown-card card-outlined animate-on-hover" datetime="2021-11-20">
    <span class="timer">10</span>
    <span class="label">Hours</span>
</time>
    `),
];

// Source: docs/molecules/cards/SimpleBlockquote.md
export const simpleBlockquoteScenarios = [
    createDocsScenario("default", `
<blockquote class="blockquote-simple animate-on-hover">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>default</cite>
</blockquote>
    `),
    createDocsScenario("cite-tag", `
<blockquote class="blockquote-simple animate-on-hover cite-tag">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <br/><cite>default</cite>
</blockquote>
    `),
    createDocsScenario("quote-left", `
<blockquote class="blockquote-simple animate-on-hover quote-left">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>quote-left</cite>
</blockquote>
    `),
];

// Source: docs/molecules/panels/ActionPanel.md
export const actionPanelScenarios = [
    createDocsScenario("default", `
<div class="action-panel">
    <div class="panel-overlay"></div>
    <img class="panel-background" src="https://placedog.net/1000/1000" alt="" title="">
    <div class="panel-content">
        <h3 class="panel-title">LOREM IPSUM SIT DOLOR AMET</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="panel-actions">
            <button class="simple-button">Lorem</button>
            <button class="simple-button" style="--background: rgb(var(--secondary-500))">Ipsum</button>
        </div>
    </div>
</div>
    `),
];

// Source: docs/molecules/lists/OpeningHoursList.md
export const openingHoursListScenarios = [
    createDocsScenario("regular", `
<ul class="opening-hours-list background-infinite animate-on-hover">
    <li class="today">
        <span class="label">Domenica</span>
        <span class="hours">9.00 - 23.30</span>
    </li>
    <li class="closed">
        <span class="label">Lunedì</span>
        <span class="hours">Chiuso</span>
    </li>
    <li>
        <span class="label">Martedì</span>
        <span class="hours">10.00 - 24.00</span>
    </li>
    <li>
        <span class="label">Mercoledì</span>
        <span class="hours">12.00 - 20.00</span>
    </li>
    <li>
        <span class="label">Giovedì</span>
        <span class="hours">10.00 - 24.00</span>
    </li>
    <li>
        <span class="label">Venerdì</span>
        <span class="hours">10.00 - 24.00</span>
    </li>
    <li>
        <span class="label">Sabato</span>
        <span class="hours">10.00 - 12.00</span>
    </li>
</ul>
    `),
];

// Source: docs/molecules/panels/SimplePanel.md
export const simplePanelScenarios = [
    createDocsScenario("basic", `
<div class="simple-panel" style="height: 500px">
    <img class="panel-background" src="https://placedog.net/1000/1000" alt="" title="">
    <div class="panel-content">
        <div class="content-example">Regular</div>
    </div>
</div>
    `),
    createDocsScenario("with-overlay", `
<div class="simple-panel" style="height: 500px">
    <div class="panel-overlay"></div>
    <img class="panel-background" src="https://placedog.net/1000/1000" alt="" title="">
    <div class="panel-content">
        <div class="content-example">Regular</div>
    </div>
</div>
    `),
    createDocsScenario("with-overlay-2", `
<div class="simple-panel panel-overlay" style="height: 500px">
    <img class="panel-background" src="https://placedog.net/1000/1000" alt="" title="">
    <div class="panel-content">
        <div class="content-example">Regular</div>
    </div>
</div>
    `),
];

// Source: docs/organisms/cards/EventLiteCard.md
export const eventLiteCardScenarios = [
    createDocsScenario("with-border-active-and-mobile-active", `
<div class="event-lite-card animate-on-hover">
    <img alt="" class="event-image" src="https://placedog.net/600/400">
    <time class="event-date" datetime="2014-02-14">
        <span class="event-date-day">14</span>
        <span class="event-date-month">Feb</span>
        <span class="event-date-year">2014</span>
    </time>
    <div class="event-place">
        <h5 class="event-title">Conference in Amsterdam</h5>
        <h6>08 AM - 04 PM</h6>
        <p>Speaker: Daniel Hill</p>
    </div>
    <div class="event-actions">
        <div class="simple-button button-pill animate-on-hover core-cyan-bg">
            <svg class="button-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
            Button
        </div>
        <div class="simple-button button-pill animate-on-hover core-orange-bg">
            <svg class="button-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
            Button
        </div>
    </div>
</div>
    `),
];

// Source: docs/organisms/cards/EventLongCard.md
export const eventLongCardScenarios = [
    createDocsScenario("default", `
<div class="event-long-card animate-on-hover">
    <time class="event-date">
        <span class="day-number">3</span>
        <span class="month-label">SET</span>
        <span class="year-number">1991</span>
        <span class="day-label">MON</span>
    </time>
    <div class="card-media">
        <img alt="" src="https://placedog.net/500/500" />
    </div>
    <div class="card-content">
        <div>
            <h3 class="card-title">Independence Day</h3>
            <h5 class="card-subtitle">United States Holiday</h5>
        </div>
        <p class="card-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="card-actions card-section-end">
            <button class="simple-button button-small cyan-500-bg">
                lorem
            </button>
            <button class="simple-button button-small orange-500-bg">
                ipsum
            </button>
        </div>
    </div>
    <div class="card-actions card-section-absolute">
        <a href="#">
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </a>
        <a href="#">
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </a>
    </div>
</div>
    `),
];

// Source: docs/organisms/cards/EventMinimalCard.md
export const eventMinimalCardScenarios = [
    createDocsScenario("default", `
<div class="event-minimal-card animate-on-hover">
    <time class="event-date" datetime="2014-02-14">
        <span>16</span>
        <span>Mon</span>
        <span>Feb</span>
    </time>
    <h4 class="event-title">Lorem Ipsum, Dolor sit Amet</h4>
    <div class="simple-button button-pill animate-on-hover core-white-color core-orange-bg">
        <svg class="button-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        Buy
    </div>
</div>
    `),
];

// Source: docs/organisms/cards/InfoHoverCard.md
export const infoHoverCardScenarios = [
    createDocsScenario("default", `
<div class="info-hover-card card-plain animate-on-hover border-on-hover card-flat">
    <div class="icon-wrapper">
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </div>
    <div class="card-header">
        <h4 class="card-title">Lorem Ipsum</h4>
    </div>
    <div class="card-content">
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
<div class="info-hover-card animate-on-hover">
    <div class="icon-wrapper">
        <img alt="" src="https://placedog.net/800/600" />
    </div>
    <div class="card-header">
        <h4 class="card-title">Lorem Ipsum</h4>
    </div>
    <div class="card-content">
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
    `),
];

// Source: docs/organisms/cards/OverflowCard.md
export const overflowCardScenarios = [
    createDocsScenario("default", `
<div class="overflow-card card-overlay" style="margin-top: 25%; margin-bottom: 25%">
    <img class="card-background" src="https://placedog.net/1000/600">
    <img class="card-media" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/908370/jelly.png">
    <div class="card-content">
        <h2
            class="card-title highlight-line highlight-line-active middle-highlight"
            style="--active-size: 0.33em; --active-color: rgb(var(--primary-500))"
        >
            Mesmerizing Depths
        </h2>
        <p>
            Nunc orci metus, ornare non molestie ac, ultrices eget dolor. Mauris ac mattis lectus.
            Praesent facilisis malesuada sapien nec pharetra. Fusce eleifend, nisl.
        </p>
        <a
            class="expressive-button rollup-button button-outlined highlight-rollup-horizontal highlight-rollup-reverse animate-on-hover"
            style="
                --outlined-on-background: rgb(var(--primary-500));
                --rollup-color: rgb(var(--primary-500));
                --active-border-color: rgb(var(--primary-500));
                box-shadow: 0 2px 4px -1px rgba(var(--primary-500) / .2), 0 4px 5px 0 rgba(var(--primary-500) / .14), 0 1px 10px 0 rgba(var(--primary-500) / .12);
            "
        >Lorem Ipsum</a>
    </div>
</div>
    `),
];

// Source: docs/organisms/cards/PricingCard.md
export const pricingCardScenarios = [
    createDocsScenario("default", `
<div class="pricing-card animate-on-hover">
    <div class="card-content">
        <h3 class="card-title">Lorem Ipsum</h3>
        <div class="card-price">
            <span class="card-currency">€</span>
            10
        </div>
    </div>
    <div class="card-content">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
    </div>
    <div class="card-actions">
        <button class="simple-button">
            Lorem Ipsum
        </button>
    </div>
</div>
    `),
    createDocsScenario("header-and-footer-highlighted", `
<div class="pricing-card animate-on-hover card-elevated">
    <div class="card-header">
        Header
    </div>
    <div class="card-content">
        <h3 class="card-title">Lorem Ipsum</h3>
        <div class="card-price">
            <span class="card-currency">€</span>
            10
        </div>
    </div>
    <div class="card-content">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
    </div>
    <div class="card-actions">
        <button class="simple-button">
            Lorem Ipsum
        </button>
    </div>
    <div class="card-footer">
        Footer
    </div>
</div>
    `),
    createDocsScenario("custom", `
<div 
    class="pricing-card animate-on-hover card-elevated card-blurred" 
    style="
        --background: transparent; 
        --shadow-color: var(--primary-500);
        --on-background: #fff;
    "
>
    <div>
        <h3 class="card-title">Lorem Ipsum</h3>
        <div class="card-price">
            <span class="card-currency">€</span>
            10
        </div>
    </div>
    <p class="card-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <div class="card-actions">
        <button class="simple-button">
            Lorem Ipsum
        </button>
    </div>
</div>
    `),
];

// Central registry of visual fixtures.
//
// HOW IT WORKS
// Each key is a fixture ID used as the ?fixture= URL parameter.
// render.js reads that parameter and injects the matching HTML string into
// [data-testid="fixture-root"] on both the v1.html and v2.html pages.
// The Playwright spec then screenshots that element from both versions and
// diffs them pixel-by-pixel with pixelmatch.
//
// HOW TO ADD A NEW FIXTURE
// 1. Add a new key + HTML snippet here.
// 2. If the fixture covers a new component, add its @use rule to both
//    styles-v1.scss and styles-v2.scss so the CSS is loaded in both pages.
// 3. Add a { id, maxDiffRatio } entry to the fixtures array in the spec file.
//
// NAMING CONVENTION
// "<component>-<group>" — group describes the axis being tested (sizes, shapes,
// elevation, active …) so failures are immediately self-describing.

export const fixtures = {

    // ── SimpleButton ──────────────────────────────────────────────────────────

    // Default button at rest plus the disabled state.  Baseline smoke-test that
    // the component renders at all and that opacity-only states work.
    "simple-button-defaults": `
        <div class="fixture-stack">
            <div class="simple-button">DEFAULT</div>
            <div class="simple-button button-disabled">DISABLED</div>
        </div>
    `,

    // Outlined variant: transparent fill, coloured border.
    "simple-button-outlined": `
        <div class="fixture-stack">
            <div class="simple-button button-outlined">OUTLINED</div>
            <div class="simple-button button-outlined button-disabled">OUTLINED DISABLED</div>
        </div>
    `,

    // Plain variant: no background, coloured text only.
    "simple-button-plain": `
        <div class="fixture-stack">
            <div class="simple-button button-plain">PLAIN</div>
            <div class="simple-button button-plain button-disabled">PLAIN DISABLED</div>
        </div>
    `,

    // Five size tiers xs → xl plus the implicit medium default.
    // A dimension mismatch here means a size-modifier selector is wrong in one build.
    "simple-button-sizes": `
        <div class="fixture-stack">
            <div class="simple-button button-xs">
                <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                XS
            </div>
            <div class="simple-button button-sm">
                <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                SM
            </div>
            <div class="simple-button">
                <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                MD
            </div>
            <div class="simple-button button-lg">
                <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                LG
            </div>
            <div class="simple-button button-xl">
                <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                XL
            </div>
        </div>
    `,

    // Border-radius shape modifiers: rounded (28%), circular (50%), pill (5em).
    "simple-button-shapes": `
        <div class="fixture-stack">
            <div class="simple-button button-rounded">
                <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                ROUNDED
            </div>
            <div class="simple-button button-circular">
                <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                CIRCULAR
            </div>
            <div class="simple-button button-pill">
                <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                PILL
            </div>
        </div>
    `,

    // Elevation variants: flat (no shadow), default (elevation 2), elevated (elevation 4+).
    "simple-button-elevation": `
        <div class="fixture-stack">
            <div class="simple-button button-flat">
                <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                FLAT
            </div>
            <div class="simple-button">
                <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                DEFAULT
            </div>
            <div class="simple-button button-elevated">
                <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                ELEVATED
            </div>
        </div>
    `,

    // Active/interaction state frozen with animate-active (no hover needed).
    // Tests the active colour, shadow step-up, and per-variant overrides
    // (outlined and plain must stay transparent in active state).
    "simple-button-active": `
        <div class="fixture-stack">
            <div class="simple-button animate-active">
                <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                ACTIVE
            </div>
            <div class="simple-button animate-active button-flat">
                <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                FLAT ACTIVE
            </div>
            <div class="simple-button animate-active button-elevated">
                <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                ELEVATED ACTIVE
            </div>
            <div class="simple-button animate-active button-outlined">
                <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                OUTLINED ACTIVE
            </div>
            <div class="simple-button animate-active button-plain">
                <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                PLAIN ACTIVE
            </div>
        </div>
    `,

    // Icon-only layout: square padding regardless of shape modifier.
    "simple-button-icon-only": `
        <div class="fixture-stack">
            <div class="simple-button button-icon-only">
                <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
            </div>
            <div class="simple-button button-icon-only button-rounded">
                <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
            </div>
            <div class="simple-button button-icon-only button-circular">
                <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
            </div>
            <div class="simple-button button-icon-only button-pill">
                <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
            </div>
        </div>
    `,
};

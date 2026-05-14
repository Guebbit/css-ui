import { createDocsScenario } from '../../_helpers.js';

// The v2 component was renamed from "advancing-moon-reveal" (v1.3) to
// "advancing-moon". The visual parity harness renders the same fixture markup
// under both stylesheets, so we apply BOTH class names: v1.3 styles match
// `.advancing-moon-reveal`, v2 styles match `.advancing-moon`. This keeps the
// public API change explicit while still allowing pixel parity to be enforced.
export const advancingMoonScenarios = [
    createDocsScenario("default", `
<img class="advancing-moon advancing-moon-reveal animate-on-hover" src="https://placedog.net/400/400"/>
<img
    class="advancing-moon advancing-moon-reveal animate-on-hover"
    src="https://placedog.net/400/400"
    style="--advancing-moon-opacity-start: 1; --advancing-moon-scale-end: 1.5; --advancing-moon-reveal-opacity-start: 1; --advancing-moon-reveal-scale-end: 1.5"
/>
    `),
    createDocsScenario("fade-in-to-left", `
<img
    class="advancing-moon advancing-moon-reveal animate-on-hover"
    style="
        --advancing-moon-slide-x-start: 0;
        --advancing-moon-slide-x-end: -60%;
        --advancing-moon-reveal-slide-x-start: 0;
        --advancing-moon-reveal-slide-x-end: -60%;
    "
    src="https://placedog.net/400/400"
/>
    `),
    createDocsScenario("fade-out", `
<img class="advancing-moon advancing-moon-reveal animate-on-hover animation-inverted" src="https://placedog.net/400/400" />
    `),
];

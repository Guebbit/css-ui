import { createDocsScenario } from '../../_helpers.js';

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

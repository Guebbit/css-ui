import { createDocsScenario } from '../_helpers.js';

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

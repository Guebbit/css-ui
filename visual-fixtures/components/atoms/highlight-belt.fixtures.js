import { createDocsScenario } from '../_helpers.js';

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

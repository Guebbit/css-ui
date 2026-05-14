import { createDocsScenario } from '../../_helpers.js';

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

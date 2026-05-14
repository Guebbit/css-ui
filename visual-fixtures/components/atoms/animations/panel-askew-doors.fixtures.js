import { createDocsScenario } from '../../_helpers.js';

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

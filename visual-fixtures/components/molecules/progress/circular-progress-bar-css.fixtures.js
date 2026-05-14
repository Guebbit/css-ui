import { createDocsScenario } from '../../_helpers.js';

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

import { createDocsScenario } from '../../_helpers.js';

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

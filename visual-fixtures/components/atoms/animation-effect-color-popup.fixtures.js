import { createDocsScenario } from '../_helpers.js';

export const effectColorPopupScenarios = [
    createDocsScenario("default", `
<div class="text-primary">...</div>
<button class="use-brand">...</button>
<button class="use-brand">...</button>
    `),
    createDocsScenario("default-2", `
<div style="position: relative; overflow: hidden;">
    <span class="effect-color-popup animate-on-hover use-brand"></span>
    Content here
</div>
    `),
    createDocsScenario("default-3", `
<button
    class="effect-color-popup-animate-on-hover use-brand"
    style="position: relative; overflow: hidden;"
>
    <span class="effect-color-popup"></span>
    Hover me
</button>
    `),
];

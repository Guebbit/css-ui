import { createDocsScenario } from '../../_helpers.js';

export const scrollDownArrowScenarios = [
    createDocsScenario("default", `
<div class="scroll-down-arrow">
    <div></div>
    <div></div>
    <div></div>
    <span class="scroll-down-text">Scroll down</span>
</div>
<div class="scroll-down-arrow animate-active">
    <div></div>
    <div></div>
    <div></div>
    <span class="scroll-down-text">Scroll down</span>
</div>
    `),
];

import { createDocsScenario } from '../../_helpers.js';

export const neonButtonScenarios = [
    createDocsScenario("default", `
<button class="neon-button button-flat animate-on-hover use-primary">
    <span></span><span></span><span></span><span></span>
    Lorem Ipsum
</button>
    `),
    createDocsScenario("default-2", `
<button class="neon-button button-flat animate-on-hover">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    Lorem Ipsum
</button>
    `),
    createDocsScenario("plus-simplebutton-variables", `
<button class="neon-button use-primary">...</button>
    `),
];

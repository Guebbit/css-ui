import { createDocsScenario } from '../../_helpers.js';

export const buttonParallelogramScenarios = [
    createDocsScenario("default", `
<button class="button-parallelogram animate-on-hover">
    Lorem Ipsum
</button>
    `),
    createDocsScenario("default-2", `
<button class="button-parallelogram animate-on-hover focus-on-hover">
    Focus
</button>
    `),
];

import { createDocsScenario } from '../../_helpers.js';

export const simpleTypographyScenarios = [
    createDocsScenario("default", `
<div class="simple-typography animate-on-hover">
    <div class="panel-category">Lorem Ipsum</div>
    <h3 class="panel-title">
        Lorem ipsum dolor sit amet, <b class="text-primary">consectetur</b> adipiscing elit
    </h3>
    <p class="panel-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud <b class="text-secondary">exercitation ullamco</b> laboris
        nisi ut aliquip ex ea commodo consequat.
    </p>
</div>
    `),
];

import { createDocsScenario } from '../_helpers.js';

export const countdownCardScenarios = [
    createDocsScenario("default", `
<time class="countdown-card animate-on-hover" datetime="2021-11-20">
    <span class="timer">10</span>
    <span class="label">Hours</span>
</time>
<time class="countdown-card card-outlined animate-on-hover" datetime="2021-11-20">
    <span class="timer">10</span>
    <span class="label">Hours</span>
</time>
    `),
];

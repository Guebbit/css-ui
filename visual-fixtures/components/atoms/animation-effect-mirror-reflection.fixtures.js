import { createDocsScenario } from '../_helpers.js';

export const effectMirrorReflectionScenarios = [
    createDocsScenario("default", `
<div class="effect-mirror-reflection-animate-on-hover" style="position:relative; overflow:hidden;">
    <div class="effect-mirror-reflection"></div>
    <img class="card-background" alt="" src="https://placedog.net/1000/600" />
</div>
    `),
];

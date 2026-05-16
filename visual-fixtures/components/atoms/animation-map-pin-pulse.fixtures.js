import { createDocsScenario } from '../_helpers.js';

export const mapPinPulseScenarios = [
    createDocsScenario("default", `
<div class="map-pin-pulse">
    <div></div>
    <div></div>
</div>
    `),
    createDocsScenario("default-2", `
<div class="map-pin-pulse animation-bounce">
    <div></div>
    <div></div>
</div>
    `),
    createDocsScenario("default-3", `
<div class="map-pin-pulse animation-drop">
    <div></div>
    <div></div>
</div>
    `),
];

import { createDocsScenario } from '../_helpers.js';

export const simplePanelScenarios = [
    createDocsScenario("basic", `
<div class="simple-panel" style="height: 500px">
    <img class="panel-background" src="https://placedog.net/1000/1000" alt="" title="">
    <div class="panel-content">
        <div class="content-example">Regular</div>
    </div>
</div>
    `),
    createDocsScenario("with-overlay", `
<div class="simple-panel" style="height: 500px">
    <div class="panel-overlay"></div>
    <img class="panel-background" src="https://placedog.net/1000/1000" alt="" title="">
    <div class="panel-content">
        <div class="content-example">Regular</div>
    </div>
</div>
    `),
    createDocsScenario("with-overlay-2", `
<div class="simple-panel panel-overlay" style="height: 500px">
    <img class="panel-background" src="https://placedog.net/1000/1000" alt="" title="">
    <div class="panel-content">
        <div class="content-example">Regular</div>
    </div>
</div>
    `),
];

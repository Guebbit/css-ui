import { createDocsScenario } from '../_helpers.js';

export const actionPanelScenarios = [
    createDocsScenario("default", `
<div class="action-panel">
    <div class="panel-overlay"></div>
    <img class="panel-background" src="https://placedog.net/1000/1000" alt="" title="">
    <div class="panel-content">
        <h3 class="panel-title">LOREM IPSUM SIT DOLOR AMET</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="panel-actions">
            <button class="simple-button">Lorem</button>
            <button class="simple-button" style="--background: rgb(var(--secondary-500))">Ipsum</button>
        </div>
    </div>
</div>
    `),
];

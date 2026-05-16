import { createDocsScenario } from '../_helpers.js';

export const overflowCardScenarios = [
    createDocsScenario("default", `
<div class="overflow-card card-overlay" style="margin-top: 25%; margin-bottom: 25%">
    <img class="card-background" src="https://placedog.net/1000/600">
    <img class="card-media" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/908370/jelly.png">
    <div class="card-content">
        <h2
            class="card-title highlight-line highlight-line-active middle-highlight"
            style="--active-size: 0.33em; --active-color: rgb(var(--primary-500))"
        >
            Mesmerizing Depths
        </h2>
        <p>
            Nunc orci metus, ornare non molestie ac, ultrices eget dolor. Mauris ac mattis lectus.
            Praesent facilisis malesuada sapien nec pharetra. Fusce eleifend, nisl.
        </p>
        <a
            class="expressive-button use-brand rollup-button button-outlined highlight-rollup-horizontal highlight-rollup-reverse animate-on-hover"
            style="
                --outlined-on-background: rgb(var(--primary-500));
                --rollup-color: rgb(var(--primary-500));
                --active-border-color: rgb(var(--primary-500));
                box-shadow: 0 2px 4px -1px rgba(var(--primary-500) / .2), 0 4px 5px 0 rgba(var(--primary-500) / .14), 0 1px 10px 0 rgba(var(--primary-500) / .12);
            "
        >Lorem Ipsum</a>
    </div>
</div>
    `),
];

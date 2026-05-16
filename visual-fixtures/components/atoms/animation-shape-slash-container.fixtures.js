import { createDocsScenario } from '../_helpers.js';

// The v2 component was renamed from "effect-shape-slash" (v1.3) to
// "shape-slash-container". Apply both class names so the parity harness can
// match both stylesheets against the same fixture markup.
export const shapeSlashContainerScenarios = [
    createDocsScenario("default", `
<div class="shape-slash-container effect-shape-slash animate-on-hover text-primary">
  Hover me
</div>
    `),
];

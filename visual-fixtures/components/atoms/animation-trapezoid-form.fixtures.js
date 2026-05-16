import { createDocsScenario } from '../_helpers.js';

export const trapezoidFormScenarios = [
    createDocsScenario("regular", `
<div style="position:relative; width: 200px; height: 50px;">
    <span class="trapezoid-form"></span>
</div>
    `),
    createDocsScenario("regular-2", `
<div class="trapezoid-form-animate-on-hover" style="position:relative; width: 50px; height: 200px;">
    <span class="trapezoid-form" style="--active-transform-scale: 1.2;"></span>
</div>
    `),
    createDocsScenario("regular-3", `
<div style="position:relative; width: 200px; height: 50px;">
    <span
        class="trapezoid-form"
        style="--active-transform-rotate: -2deg;"
    ></span>
    <span
        class="trapezoid-form trapezoid-form-outlined"
        style="
            --transform-rotate: -2deg; 
            --active-transform-rotate: 2deg;  
            --active-border-size: 4px;
            "
    ></span>
</div>
    `),
];

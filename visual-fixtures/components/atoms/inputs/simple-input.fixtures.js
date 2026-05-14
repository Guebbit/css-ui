import { createDocsScenario } from '../../_helpers.js';

export const simpleInputScenarios = [
    createDocsScenario("default", `
<input class="simple-input" type="text" value="Default input" />
<input class="simple-input input-outlined" type="text" value="Outlined input" />
<input class="simple-input input-underlined" type="text" value="Underlined input" />
<input class="simple-input input-filled" type="text" value="Filled input" />
<input class="simple-input" type="text" value="Disabled input" disabled />
    `),
    createDocsScenario("primary", `
<input class="simple-input use-primary" type="text" value="Default input" />
<input class="simple-input input-outlined use-primary" type="text" value="Outlined input" />
<input class="simple-input input-underlined use-primary" type="text" value="Underlined input" />
<input class="simple-input input-filled use-primary" type="text" value="Filled input" />
<input class="simple-input use-primary" type="text" value="Disabled input" disabled />
    `),
];

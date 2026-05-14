import { createDocsScenario } from '../../_helpers.js';

export const simpleTextIconScenarios = [
    createDocsScenario("default", `
<span class="simple-text-icon animate-on-hover">
    <span class="text-icon">
        <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </span>
    Lorem Ipsum Sit Dolor Amet
</span>
<span class="simple-text-icon animate-on-hover">
    <span class="text-icon">IMG</span>
    Lorem Ipsum
</span>
<span class="simple-text-icon animate-on-hover">
    <span class="text-icon">
        <img alt="" src="https://placedog.net/50/50" />
    </span>
    <span>
        <b>Lorem Ipsum</b><br>
        lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
    </span>
</span>
    `),
    createDocsScenario("column-primary", `
<span class="simple-text-icon column-mode icon-highlight use-primary">
    <span class="text-icon">
        <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </span>
    Lorem Ipsum Sit Dolor Amet
</span>
<span class="simple-text-icon column-mode icon-highlight use-primary">
    <span class="text-icon">IMG</span>
    Lorem Ipsum
</span>
<span class="simple-text-icon column-mode icon-highlight use-primary">
    <div class="text-icon">
        <img alt="" src="https://placedog.net/50/50" />
    </div>
    Lorem Ipsum
</span>
    `),
];

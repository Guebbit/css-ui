import { createDocsScenario } from '../../_helpers.js';

export const simpleChipScenarios = [
    createDocsScenario("default", `
<span class="simple-chip animate-on-hover">
    <span class="text-icon">
        <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </span>
    Lorem Ipsum Sit Dolor Amet
</span>
<span class="simple-chip animate-on-hover">
    <span class="text-icon">IMG</span>
    Lorem Ipsum
</span>
<span class="simple-chip chip-rounded animate-on-hover">
    <span class="text-icon">
        <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </span>
    Rounded
</span>
<span class="simple-chip chip-xs animate-on-hover">
    <span class="text-icon">
        <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </span>
    Extra Small
</span>
<span class="simple-chip chip-xl animate-on-hover">
    <span class="text-icon">
        <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </span>
    Extra Large
</span>
    `),
    createDocsScenario("column-primary", `
<span class="simple-chip column-mode animate-on-hover use-primary">
    <span class="text-icon">
        <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </span>
    Lorem Ipsum Sit Dolor Amet
</span>
<span class="simple-chip column-mode animate-on-hover use-primary">
    <span class="text-icon">IMG</span>
    Lorem Ipsum
</span>
<span class="simple-chip column-mode animate-on-hover use-primary">
    <div class="text-icon">
        <img alt="" src="https://placedog.net/50/50" />
    </div>
    Lorem Ipsum
</span>
    `),
];

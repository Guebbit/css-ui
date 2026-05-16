import { createDocsScenario } from '../_helpers.js';

export const simpleBlockquoteScenarios = [
    createDocsScenario("default", `
<blockquote class="blockquote-simple animate-on-hover">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>default</cite>
</blockquote>
    `),
    createDocsScenario("cite-tag", `
<blockquote class="blockquote-simple animate-on-hover cite-tag">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <br/><cite>default</cite>
</blockquote>
    `),
    createDocsScenario("quote-left", `
<blockquote class="blockquote-simple animate-on-hover quote-left">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <cite>quote-left</cite>
</blockquote>
    `),
];

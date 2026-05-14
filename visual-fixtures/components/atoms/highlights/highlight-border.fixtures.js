import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'HighlightBorder',
        examplePath: 'docs/examples/atoms/highlights/HighlightBorder.html'
    }),
    createSharedExampleScenario({
        name: 'HighlightBorder-custom',
        examplePath: 'docs/examples/atoms/highlights/HighlightBorder-custom.html'
    }),
    createSharedExampleScenario({
        name: 'HighlightBorder-default',
        examplePath: 'docs/examples/atoms/highlights/HighlightBorder-default.html'
    }),
    createSharedExampleScenario({
        name: 'HighlightBorder-primary',
        examplePath: 'docs/examples/atoms/highlights/HighlightBorder-primary.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'atoms/highlights/highlight-border',
    sourceFile: 'src/atoms/highlights/highlight-border/index.scss',
    scenarios
});

export default fixture;

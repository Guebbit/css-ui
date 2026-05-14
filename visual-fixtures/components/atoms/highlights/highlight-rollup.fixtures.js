import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'HighlightRollup',
        examplePath: 'docs/examples/atoms/highlights/HighlightRollup.html'
    }),
    createSharedExampleScenario({
        name: 'HighlightRollup-default',
        examplePath: 'docs/examples/atoms/highlights/HighlightRollup-default.html'
    }),
    createSharedExampleScenario({
        name: 'HighlightRollup-primary',
        examplePath: 'docs/examples/atoms/highlights/HighlightRollup-primary.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'atoms/highlights/highlight-rollup',
    sourceFile: 'src/atoms/highlights/highlight-rollup/index.scss',
    scenarios
});

export default fixture;

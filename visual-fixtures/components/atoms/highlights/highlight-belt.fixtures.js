import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'HighlightBelt-default',
        examplePath: 'docs/examples/atoms/highlights/HighlightBelt-default.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'atoms/highlights/highlight-belt',
    sourceFile: 'src/atoms/highlights/highlight-belt/index.scss',
    scenarios
});

export default fixture;

import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'HighlightLine',
        examplePath: 'docs/examples/atoms/highlights/HighlightLine.html'
    }),
    createSharedExampleScenario({
        name: 'HighlightLine-afar',
        examplePath: 'docs/examples/atoms/highlights/HighlightLine-afar.html'
    }),
    createSharedExampleScenario({
        name: 'HighlightLine-afar-default',
        examplePath: 'docs/examples/atoms/highlights/HighlightLine-afar-default.html'
    }),
    createSharedExampleScenario({
        name: 'HighlightLine-afar-primary',
        examplePath: 'docs/examples/atoms/highlights/HighlightLine-afar-primary.html'
    }),
    createSharedExampleScenario({
        name: 'HighlightLine-default',
        examplePath: 'docs/examples/atoms/highlights/HighlightLine-default.html'
    }),
    createSharedExampleScenario({
        name: 'HighlightLine-primary',
        examplePath: 'docs/examples/atoms/highlights/HighlightLine-primary.html'
    }),
    createSharedExampleScenario({
        name: 'HighlightLine-start',
        examplePath: 'docs/examples/atoms/highlights/HighlightLine-start.html'
    }),
    createSharedExampleScenario({
        name: 'HighlightLine-start-default',
        examplePath: 'docs/examples/atoms/highlights/HighlightLine-start-default.html'
    }),
    createSharedExampleScenario({
        name: 'HighlightLine-start-primary',
        examplePath: 'docs/examples/atoms/highlights/HighlightLine-start-primary.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'atoms/highlights/highlight-line',
    sourceFile: 'src/atoms/highlights/highlight-line/index.scss',
    scenarios
});

export default fixture;

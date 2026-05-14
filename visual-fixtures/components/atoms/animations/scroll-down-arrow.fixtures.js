import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'ScrollDownArrow-default',
        examplePath: 'docs/examples/atoms/animations/ScrollDownArrow-default.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'atoms/animations/scroll-down-arrow',
    sourceFile: 'src/atoms/animations/scroll-down-arrow/index.scss',
    scenarios
});

export default fixture;

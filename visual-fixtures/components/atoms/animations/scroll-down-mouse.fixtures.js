import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'ScrollDownMouse-default',
        examplePath: 'docs/examples/atoms/animations/ScrollDownMouse-default.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'atoms/animations/scroll-down-mouse',
    sourceFile: 'src/atoms/animations/scroll-down-mouse/index.scss',
    scenarios
});

export default fixture;

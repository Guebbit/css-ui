import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'AdvancingMoon-default',
        examplePath: 'docs/examples/atoms/animations/AdvancingMoon-default.html'
    }),
    createSharedExampleScenario({
        name: 'AdvancingMoon-fade-in-from-center',
        examplePath: 'docs/examples/atoms/animations/AdvancingMoon-fade-in-from-center.html'
    }),
    createSharedExampleScenario({
        name: 'AdvancingMoon-fade-in-to-left',
        examplePath: 'docs/examples/atoms/animations/AdvancingMoon-fade-in-to-left.html'
    }),
    createSharedExampleScenario({
        name: 'AdvancingMoon-fade-out-animation-inverted',
        examplePath: 'docs/examples/atoms/animations/AdvancingMoon-fade-out-animation-inverted.html'
    }),
    createSharedExampleScenario({
        name: 'AdvancingMoon-fade-out-from-right',
        examplePath: 'docs/examples/atoms/animations/AdvancingMoon-fade-out-from-right.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'atoms/animations/advancing-moon',
    sourceFile: 'src/atoms/animations/advancing-moon/index.scss',
    scenarios
});

export default fixture;

import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'SolarSystemLoad-default',
        examplePath: 'docs/examples/atoms/animations/SolarSystemLoad-default.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'atoms/animations/solar-system-load',
    sourceFile: 'src/atoms/animations/solar-system-load/index.scss',
    scenarios
});

export default fixture;

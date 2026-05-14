import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'MapPinPulse-default',
        examplePath: 'docs/examples/atoms/animations/MapPinPulse-default.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'atoms/animations/map-pin-pulse',
    sourceFile: 'src/atoms/animations/map-pin-pulse/index.scss',
    scenarios
});

export default fixture;

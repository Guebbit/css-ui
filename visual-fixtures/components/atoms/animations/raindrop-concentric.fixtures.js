import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'RaindropConcentric-default',
        examplePath: 'docs/examples/atoms/animations/RaindropConcentric-default.html'
    }),
    createSharedExampleScenario({
        name: 'RaindropConcentric-primary-secondary',
        examplePath: 'docs/examples/atoms/animations/RaindropConcentric-primary-secondary.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'atoms/animations/raindrop-concentric',
    sourceFile: 'src/atoms/animations/raindrop-concentric/index.scss',
    scenarios
});

export default fixture;

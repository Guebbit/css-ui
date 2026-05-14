import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'NeonButton-default',
        examplePath: 'docs/examples/molecules/buttons/NeonButton-default.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'molecules/buttons/neon-button',
    sourceFile: 'src/molecules/buttons/neon-button/index.scss',
    scenarios
});

export default fixture;

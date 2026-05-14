import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'CyberpunkButton-default',
        examplePath: 'docs/examples/atoms/buttons/CyberpunkButton-default.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'atoms/buttons/cyberpunk-button',
    sourceFile: 'src/atoms/buttons/cyberpunk-button/index.scss',
    scenarios
});

export default fixture;

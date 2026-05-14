import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'CountdownCard-use',
        examplePath: 'docs/examples/molecules/cards/CountdownCard-use.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'molecules/cards/countdown-card',
    sourceFile: 'src/molecules/cards/countdown-card/index.scss',
    scenarios
});

export default fixture;

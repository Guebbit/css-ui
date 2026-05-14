import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'OverflowCard-default',
        examplePath: 'docs/examples/organisms/cards/OverflowCard-default.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'organisms/cards/overflow-card',
    sourceFile: 'src/organisms/cards/overflow-card/index.scss',
    scenarios
});

export default fixture;

import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'EventMinimalCard-default',
        examplePath: 'docs/examples/organisms/cards/EventMinimalCard-default.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'organisms/cards/event-minimal-card',
    sourceFile: 'src/organisms/cards/event-minimal-card/index.scss',
    scenarios
});

export default fixture;

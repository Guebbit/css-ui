import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'EventLongCard-default',
        examplePath: 'docs/examples/organisms/cards/EventLongCard-default.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'organisms/cards/event-long-card',
    sourceFile: 'src/organisms/cards/event-long-card/index.scss',
    scenarios
});

export default fixture;

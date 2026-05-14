import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'EventLiteCard-default',
        examplePath: 'docs/examples/organisms/cards/EventLiteCard-default.html'
    }),
    createSharedExampleScenario({
        name: 'EventLiteCard-with-border-active',
        examplePath: 'docs/examples/organisms/cards/EventLiteCard-with-border-active.html'
    }),
    createSharedExampleScenario({
        name: 'EventLiteCard-with-mobile-active',
        examplePath: 'docs/examples/organisms/cards/EventLiteCard-with-mobile-active.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'organisms/cards/event-lite-card',
    sourceFile: 'src/organisms/cards/event-lite-card/index.scss',
    scenarios
});

export default fixture;

import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'CalendarCard-default',
        examplePath: 'docs/examples/atoms/cards/CalendarCard-default.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'atoms/cards/calendar-card',
    sourceFile: 'src/atoms/cards/calendar-card/index.scss',
    scenarios
});

export default fixture;

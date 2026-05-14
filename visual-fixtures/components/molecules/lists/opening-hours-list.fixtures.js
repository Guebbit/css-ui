import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'OpeningHoursList-regular',
        examplePath: 'docs/examples/molecules/lists/OpeningHoursList-regular.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'molecules/lists/opening-hours-list',
    sourceFile: 'src/molecules/lists/opening-hours-list/index.scss',
    scenarios
});

export default fixture;

import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'InfoHoverCard-use',
        examplePath: 'docs/examples/organisms/cards/InfoHoverCard-use.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'organisms/cards/info-hover-card',
    sourceFile: 'src/organisms/cards/info-hover-card/index.scss',
    scenarios
});

export default fixture;

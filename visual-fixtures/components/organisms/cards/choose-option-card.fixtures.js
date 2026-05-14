import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'ChooseOptionCard',
        examplePath: 'docs/examples/organisms/cards/ChooseOptionCard.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'organisms/cards/choose-option-card',
    sourceFile: 'src/organisms/cards/choose-option-card/index.scss',
    scenarios
});

export default fixture;

import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'CreditCard',
        examplePath: 'docs/examples/molecules/cards/CreditCard.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'molecules/cards/credit-card',
    sourceFile: 'src/molecules/cards/credit-card/index.scss',
    scenarios
});

export default fixture;

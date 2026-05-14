import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'PricingCard-custom',
        examplePath: 'docs/examples/organisms/cards/PricingCard-custom.html'
    }),
    createSharedExampleScenario({
        name: 'PricingCard-custom-2',
        examplePath: 'docs/examples/organisms/cards/PricingCard-custom-2.html'
    }),
    createSharedExampleScenario({
        name: 'PricingCard-default',
        examplePath: 'docs/examples/organisms/cards/PricingCard-default.html'
    }),
    createSharedExampleScenario({
        name: 'PricingCard-header-footer-highlighted',
        examplePath: 'docs/examples/organisms/cards/PricingCard-header-footer-highlighted.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'organisms/cards/pricing-card',
    sourceFile: 'src/organisms/cards/pricing-card/index.scss',
    scenarios
});

export default fixture;

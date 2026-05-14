import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'SimpleCard',
        examplePath: 'docs/examples/molecules/cards/SimpleCard.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleCard-alert',
        examplePath: 'docs/examples/molecules/cards/SimpleCard-alert.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleCard-basics',
        examplePath: 'docs/examples/molecules/cards/SimpleCard-basics.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleCard-borders',
        examplePath: 'docs/examples/molecules/cards/SimpleCard-borders.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleCard-icons',
        examplePath: 'docs/examples/molecules/cards/SimpleCard-icons.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleCard-media',
        examplePath: 'docs/examples/molecules/cards/SimpleCard-media.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleCard-no-theme-basics',
        examplePath: 'docs/examples/molecules/cards/SimpleCard-no-theme-basics.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleCard-variants-business-card',
        examplePath: 'docs/examples/molecules/cards/SimpleCard-variants-business-card.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleCard-variants-glossy-hover-card',
        examplePath: 'docs/examples/molecules/cards/SimpleCard-variants-glossy-hover-card.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleCard-variants-highlighted-title',
        examplePath: 'docs/examples/molecules/cards/SimpleCard-variants-highlighted-title.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleCard-variants-simple',
        examplePath: 'docs/examples/molecules/cards/SimpleCard-variants-simple.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'molecules/cards/simple-card',
    sourceFile: 'src/molecules/cards/simple-card/index.scss',
    scenarios
});

export default fixture;

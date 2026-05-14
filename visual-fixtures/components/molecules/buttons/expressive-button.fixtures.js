import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'ExpressiveButton-elevation',
        examplePath: 'docs/examples/molecules/buttons/ExpressiveButton-elevation.html'
    }),
    createSharedExampleScenario({
        name: 'ExpressiveButton-popup',
        examplePath: 'docs/examples/molecules/buttons/ExpressiveButton-popup.html'
    }),
    createSharedExampleScenario({
        name: 'ExpressiveButton-rollup',
        examplePath: 'docs/examples/molecules/buttons/ExpressiveButton-rollup.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'molecules/buttons/expressive-button',
    sourceFile: 'src/molecules/buttons/expressive-button/index.scss',
    scenarios
});

export default fixture;

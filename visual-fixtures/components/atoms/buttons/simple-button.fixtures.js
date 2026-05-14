import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'SimpleButton-icons-default',
        examplePath: 'docs/examples/atoms/buttons/SimpleButton-icons-default.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleButton-icons-primary',
        examplePath: 'docs/examples/atoms/buttons/SimpleButton-icons-primary.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleButton-regular-default',
        examplePath: 'docs/examples/atoms/buttons/SimpleButton-regular-default.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleButton-regular-primary',
        examplePath: 'docs/examples/atoms/buttons/SimpleButton-regular-primary.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleButton-sizes-default',
        examplePath: 'docs/examples/atoms/buttons/SimpleButton-sizes-default.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleButton-sizes-icons',
        examplePath: 'docs/examples/atoms/buttons/SimpleButton-sizes-icons.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleButton-sizes-icons-default',
        examplePath: 'docs/examples/atoms/buttons/SimpleButton-sizes-icons-default.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleButton-sizes-icons-primary',
        examplePath: 'docs/examples/atoms/buttons/SimpleButton-sizes-icons-primary.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleButton-sizes-primary',
        examplePath: 'docs/examples/atoms/buttons/SimpleButton-sizes-primary.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleButton-socials',
        examplePath: 'docs/examples/atoms/buttons/SimpleButton-socials.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'atoms/buttons/simple-button',
    sourceFile: 'src/atoms/buttons/simple-button/index.scss',
    scenarios
});

export default fixture;

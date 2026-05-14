import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'IconFocusButton',
        examplePath: 'docs/examples/molecules/buttons/IconFocusButton.html'
    }),
    createSharedExampleScenario({
        name: 'IconFocusButton-outlined',
        examplePath: 'docs/examples/molecules/buttons/IconFocusButton-outlined.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'molecules/buttons/icon-focus-button',
    sourceFile: 'src/molecules/buttons/icon-focus-button/index.scss',
    scenarios
});

export default fixture;

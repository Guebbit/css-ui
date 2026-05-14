import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'ButtonLargeIcon',
        examplePath: 'docs/examples/atoms/buttons/ButtonLargeIcon.html'
    }),
    createSharedExampleScenario({
        name: 'ButtonLargeIcon-default',
        examplePath: 'docs/examples/atoms/buttons/ButtonLargeIcon-default.html'
    }),
    createSharedExampleScenario({
        name: 'ButtonLargeIcon-primary',
        examplePath: 'docs/examples/atoms/buttons/ButtonLargeIcon-primary.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'atoms/buttons/button-large-icon',
    sourceFile: 'src/atoms/buttons/button-large-icon/index.scss',
    scenarios
});

export default fixture;

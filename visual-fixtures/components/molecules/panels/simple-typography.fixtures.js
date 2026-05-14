import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'SimpleTypography-default',
        examplePath: 'docs/examples/molecules/panels/SimpleTypography-default.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'molecules/panels/simple-typography',
    sourceFile: 'src/molecules/panels/simple-typography/index.scss',
    scenarios
});

export default fixture;

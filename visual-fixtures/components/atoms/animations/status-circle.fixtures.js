import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'StatusCircle-default',
        examplePath: 'docs/examples/atoms/animations/StatusCircle-default.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'atoms/animations/status-circle',
    sourceFile: 'src/atoms/animations/status-circle/index.scss',
    scenarios
});

export default fixture;

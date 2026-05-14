import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'IconShowcaseLoad-default',
        examplePath: 'docs/examples/atoms/animations/IconShowcaseLoad-default.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'atoms/animations/icon-showcase-load',
    sourceFile: 'src/atoms/animations/icon-showcase-load/index.scss',
    scenarios
});

export default fixture;

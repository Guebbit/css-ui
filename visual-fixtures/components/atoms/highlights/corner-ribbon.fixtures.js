import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'CornerRibbon-default',
        examplePath: 'docs/examples/atoms/highlights/CornerRibbon-default.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'atoms/highlights/corner-ribbon',
    sourceFile: 'src/atoms/highlights/corner-ribbon/index.scss',
    scenarios
});

export default fixture;

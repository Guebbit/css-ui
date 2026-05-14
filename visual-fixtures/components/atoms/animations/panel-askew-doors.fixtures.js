import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'PanelAskewDoors-default',
        examplePath: 'docs/examples/atoms/animations/PanelAskewDoors-default.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'atoms/animations/panel-askew-doors',
    sourceFile: 'src/atoms/animations/panel-askew-doors/index.scss',
    scenarios
});

export default fixture;

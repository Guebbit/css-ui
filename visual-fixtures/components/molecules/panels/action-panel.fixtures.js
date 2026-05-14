import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'ActionPanel-default',
        examplePath: 'docs/examples/molecules/panels/ActionPanel-default.html'
    }),
    createSharedExampleScenario({
        name: 'ActionPanel-with-panel-left-actions-and-panel-right-actions',
        examplePath: 'docs/examples/molecules/panels/ActionPanel-with-panel-left-actions-and-panel-right-actions.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'molecules/panels/action-panel',
    sourceFile: 'src/molecules/panels/action-panel/index.scss',
    scenarios
});

export default fixture;

import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'CircularProgressBarCss-default',
        examplePath: 'docs/examples/molecules/progress/CircularProgressBarCss-default.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'molecules/progress/circular-progress-bar-css',
    sourceFile: 'src/molecules/progress/circular-progress-bar-css/index.scss',
    scenarios
});

export default fixture;

import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'CircularProgressBarSvg-custom-variant',
        examplePath: 'docs/examples/molecules/progress/CircularProgressBarSvg-custom-variant.html'
    }),
    createSharedExampleScenario({
        name: 'CircularProgressBarSvg-default',
        examplePath: 'docs/examples/molecules/progress/CircularProgressBarSvg-default.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'molecules/progress/circular-progress-bar-svg',
    sourceFile: 'src/molecules/progress/circular-progress-bar-svg/index.scss',
    scenarios
});

export default fixture;

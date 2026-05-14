import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'SimplePanel-background-via-css',
        examplePath: 'docs/examples/molecules/panels/SimplePanel-background-via-css.html'
    }),
    createSharedExampleScenario({
        name: 'SimplePanel-basic',
        examplePath: 'docs/examples/molecules/panels/SimplePanel-basic.html'
    }),
    createSharedExampleScenario({
        name: 'SimplePanel-basic-class-shadow-text-mode',
        examplePath: 'docs/examples/molecules/panels/SimplePanel-basic-class-shadow-text-mode.html'
    }),
    createSharedExampleScenario({
        name: 'SimplePanel-color-via-css',
        examplePath: 'docs/examples/molecules/panels/SimplePanel-color-via-css.html'
    }),
    createSharedExampleScenario({
        name: 'SimplePanel-custom-multiple-backgrounds-and-linear-gradient-shadow',
        examplePath: 'docs/examples/molecules/panels/SimplePanel-custom-multiple-backgrounds-and-linear-gradient-shadow.html'
    }),
    createSharedExampleScenario({
        name: 'SimplePanel-iframe-class-content-size-mode',
        examplePath: 'docs/examples/molecules/panels/SimplePanel-iframe-class-content-size-mode.html'
    }),
    createSharedExampleScenario({
        name: 'SimplePanel-iframe-regular',
        examplePath: 'docs/examples/molecules/panels/SimplePanel-iframe-regular.html'
    }),
    createSharedExampleScenario({
        name: 'SimplePanel-video',
        examplePath: 'docs/examples/molecules/panels/SimplePanel-video.html'
    }),
    createSharedExampleScenario({
        name: 'SimplePanel-with-overlay-better-readability',
        examplePath: 'docs/examples/molecules/panels/SimplePanel-with-overlay-better-readability.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'molecules/panels/simple-panel',
    sourceFile: 'src/molecules/panels/simple-panel/index.scss',
    scenarios
});

export default fixture;

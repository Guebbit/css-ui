import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'HighlightPopup',
        examplePath: 'docs/examples/atoms/highlights/HighlightPopup.html'
    }),
    createSharedExampleScenario({
        name: 'HighlightPopup-regular',
        examplePath: 'docs/examples/atoms/highlights/HighlightPopup-regular.html'
    }),
    createSharedExampleScenario({
        name: 'HighlightPopup-with-border-highlight-border',
        examplePath: 'docs/examples/atoms/highlights/HighlightPopup-with-border-highlight-border.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'atoms/highlights/highlight-popup',
    sourceFile: 'src/atoms/highlights/highlight-popup/index.scss',
    scenarios
});

export default fixture;

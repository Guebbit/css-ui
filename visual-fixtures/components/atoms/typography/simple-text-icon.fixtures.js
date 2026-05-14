import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'SimpleTextIcon',
        examplePath: 'docs/examples/atoms/typography/SimpleTextIcon.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleTextIcon-column',
        examplePath: 'docs/examples/atoms/typography/SimpleTextIcon-column.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleTextIcon-column-default',
        examplePath: 'docs/examples/atoms/typography/SimpleTextIcon-column-default.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleTextIcon-column-primary',
        examplePath: 'docs/examples/atoms/typography/SimpleTextIcon-column-primary.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleTextIcon-default',
        examplePath: 'docs/examples/atoms/typography/SimpleTextIcon-default.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleTextIcon-primary',
        examplePath: 'docs/examples/atoms/typography/SimpleTextIcon-primary.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'atoms/typography/simple-text-icon',
    sourceFile: 'src/atoms/typography/simple-text-icon/index.scss',
    scenarios
});

export default fixture;

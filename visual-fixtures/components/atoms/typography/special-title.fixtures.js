import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'SpecialTitle-custom',
        examplePath: 'docs/examples/atoms/typography/SpecialTitle-custom.html'
    }),
    createSharedExampleScenario({
        name: 'SpecialTitle-default',
        examplePath: 'docs/examples/atoms/typography/SpecialTitle-default.html'
    }),
    createSharedExampleScenario({
        name: 'SpecialTitle-lines',
        examplePath: 'docs/examples/atoms/typography/SpecialTitle-lines.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'atoms/typography/special-title',
    sourceFile: 'src/atoms/typography/special-title/index.scss',
    scenarios
});

export default fixture;

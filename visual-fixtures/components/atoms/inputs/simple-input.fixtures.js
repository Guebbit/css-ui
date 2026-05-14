import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'SimpleInput-default',
        examplePath: 'docs/examples/atoms/inputs/SimpleInput-default.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleInput-primary',
        examplePath: 'docs/examples/atoms/inputs/SimpleInput-primary.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'atoms/inputs/simple-input',
    sourceFile: 'src/atoms/inputs/simple-input/index.scss',
    scenarios
});

export default fixture;

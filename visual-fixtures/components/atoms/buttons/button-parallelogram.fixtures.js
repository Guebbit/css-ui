import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'ButtonParallelogram-default',
        examplePath: 'docs/examples/atoms/buttons/ButtonParallelogram-default.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'atoms/buttons/button-parallelogram',
    sourceFile: 'src/atoms/buttons/button-parallelogram/index.scss',
    scenarios
});

export default fixture;

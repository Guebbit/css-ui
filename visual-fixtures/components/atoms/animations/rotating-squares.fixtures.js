import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'RotatingSquares-default',
        examplePath: 'docs/examples/atoms/animations/RotatingSquares-default.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'atoms/animations/rotating-squares',
    sourceFile: 'src/atoms/animations/rotating-squares/index.scss',
    scenarios
});

export default fixture;

import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'ShapeSlashContainer-default',
        examplePath: 'docs/examples/atoms/animations/ShapeSlashContainer-default.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'atoms/animations/shape-slash-container',
    sourceFile: 'src/atoms/animations/shape-slash-container/index.scss',
    scenarios
});

export default fixture;

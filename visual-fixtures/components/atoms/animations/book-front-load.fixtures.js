import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'BookFrontLoad-default',
        examplePath: 'docs/examples/atoms/animations/BookFrontLoad-default.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'atoms/animations/book-front-load',
    sourceFile: 'src/atoms/animations/book-front-load/index.scss',
    scenarios
});

export default fixture;

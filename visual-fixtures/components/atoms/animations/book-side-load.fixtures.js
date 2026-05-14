import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'BookSideLoad',
        examplePath: 'docs/examples/atoms/animations/BookSideLoad.html'
    }),
    createSharedExampleScenario({
        name: 'BookSideLoad-default',
        examplePath: 'docs/examples/atoms/animations/BookSideLoad-default.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'atoms/animations/book-side-load',
    sourceFile: 'src/atoms/animations/book-side-load/index.scss',
    scenarios
});

export default fixture;

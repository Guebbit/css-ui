import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'BookCard-use',
        examplePath: 'docs/examples/molecules/cards/BookCard-use.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'molecules/cards/book-card',
    sourceFile: 'src/molecules/cards/book-card/index.scss',
    scenarios
});

export default fixture;

import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'SimpleBlockquote-all-around-border',
        examplePath: 'docs/examples/molecules/cards/SimpleBlockquote-all-around-border.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleBlockquote-border-left-background',
        examplePath: 'docs/examples/molecules/cards/SimpleBlockquote-border-left-background.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleBlockquote-border-right-and-left',
        examplePath: 'docs/examples/molecules/cards/SimpleBlockquote-border-right-and-left.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleBlockquote-border-top-and-bottom',
        examplePath: 'docs/examples/molecules/cards/SimpleBlockquote-border-top-and-bottom.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleBlockquote-cite-center',
        examplePath: 'docs/examples/molecules/cards/SimpleBlockquote-cite-center.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleBlockquote-cite-right',
        examplePath: 'docs/examples/molecules/cards/SimpleBlockquote-cite-right.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleBlockquote-cite-tag',
        examplePath: 'docs/examples/molecules/cards/SimpleBlockquote-cite-tag.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleBlockquote-default',
        examplePath: 'docs/examples/molecules/cards/SimpleBlockquote-default.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleBlockquote-double-quote',
        examplePath: 'docs/examples/molecules/cards/SimpleBlockquote-double-quote.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleBlockquote-double-quote-at-sides',
        examplePath: 'docs/examples/molecules/cards/SimpleBlockquote-double-quote-at-sides.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleBlockquote-mixed-border-and-quotes',
        examplePath: 'docs/examples/molecules/cards/SimpleBlockquote-mixed-border-and-quotes.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleBlockquote-mixed-quotes-and-cite-tag',
        examplePath: 'docs/examples/molecules/cards/SimpleBlockquote-mixed-quotes-and-cite-tag.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleBlockquote-quote-left',
        examplePath: 'docs/examples/molecules/cards/SimpleBlockquote-quote-left.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleBlockquote-quote-right',
        examplePath: 'docs/examples/molecules/cards/SimpleBlockquote-quote-right.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'molecules/cards/simple-blockquote',
    sourceFile: 'src/molecules/cards/simple-blockquote/index.scss',
    scenarios
});

export default fixture;

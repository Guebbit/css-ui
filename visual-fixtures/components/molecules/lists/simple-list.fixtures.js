import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'SimpleList',
        examplePath: 'docs/examples/molecules/lists/SimpleList.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleList-horizontal',
        examplePath: 'docs/examples/molecules/lists/SimpleList-horizontal.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleList-nested',
        examplePath: 'docs/examples/molecules/lists/SimpleList-nested.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleList-spring',
        examplePath: 'docs/examples/molecules/lists/SimpleList-spring.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleList-with-links',
        examplePath: 'docs/examples/molecules/lists/SimpleList-with-links.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleList-with-shadow-margin-and-changed-background',
        examplePath: 'docs/examples/molecules/lists/SimpleList-with-shadow-margin-and-changed-background.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'molecules/lists/simple-list',
    sourceFile: 'src/molecules/lists/simple-list/index.scss',
    scenarios
});

export default fixture;

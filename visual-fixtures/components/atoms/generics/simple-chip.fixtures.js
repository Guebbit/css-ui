import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'SimpleChip',
        examplePath: 'docs/examples/atoms/generics/SimpleChip.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleChip-column',
        examplePath: 'docs/examples/atoms/generics/SimpleChip-column.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleChip-column-default',
        examplePath: 'docs/examples/atoms/generics/SimpleChip-column-default.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleChip-column-primary',
        examplePath: 'docs/examples/atoms/generics/SimpleChip-column-primary.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleChip-default',
        examplePath: 'docs/examples/atoms/generics/SimpleChip-default.html'
    }),
    createSharedExampleScenario({
        name: 'SimpleChip-primary',
        examplePath: 'docs/examples/atoms/generics/SimpleChip-primary.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'atoms/generics/simple-chip',
    sourceFile: 'src/atoms/generics/simple-chip/index.scss',
    scenarios
});

export default fixture;

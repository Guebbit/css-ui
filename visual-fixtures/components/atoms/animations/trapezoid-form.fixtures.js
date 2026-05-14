import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'TrapezoidForm-buttons',
        examplePath: 'docs/examples/atoms/animations/TrapezoidForm-buttons.html'
    }),
    createSharedExampleScenario({
        name: 'TrapezoidForm-buttons-2',
        examplePath: 'docs/examples/atoms/animations/TrapezoidForm-buttons-2.html'
    }),
    createSharedExampleScenario({
        name: 'TrapezoidForm-buttons-3',
        examplePath: 'docs/examples/atoms/animations/TrapezoidForm-buttons-3.html'
    }),
    createSharedExampleScenario({
        name: 'TrapezoidForm-buttons-4',
        examplePath: 'docs/examples/atoms/animations/TrapezoidForm-buttons-4.html'
    }),
    createSharedExampleScenario({
        name: 'TrapezoidForm-buttons-5',
        examplePath: 'docs/examples/atoms/animations/TrapezoidForm-buttons-5.html'
    }),
    createSharedExampleScenario({
        name: 'TrapezoidForm-cards',
        examplePath: 'docs/examples/atoms/animations/TrapezoidForm-cards.html'
    }),
    createSharedExampleScenario({
        name: 'TrapezoidForm-regular',
        examplePath: 'docs/examples/atoms/animations/TrapezoidForm-regular.html'
    }),
    createSharedExampleScenario({
        name: 'TrapezoidForm-regular-2',
        examplePath: 'docs/examples/atoms/animations/TrapezoidForm-regular-2.html'
    }),
    createSharedExampleScenario({
        name: 'TrapezoidForm-regular-3',
        examplePath: 'docs/examples/atoms/animations/TrapezoidForm-regular-3.html'
    }),
    createSharedExampleScenario({
        name: 'TrapezoidForm-regular-4',
        examplePath: 'docs/examples/atoms/animations/TrapezoidForm-regular-4.html'
    }),
    createSharedExampleScenario({
        name: 'TrapezoidForm-regular-5',
        examplePath: 'docs/examples/atoms/animations/TrapezoidForm-regular-5.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'atoms/animations/trapezoid-form',
    sourceFile: 'src/atoms/animations/trapezoid-form/index.scss',
    scenarios
});

export default fixture;

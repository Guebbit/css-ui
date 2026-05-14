import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'TimelineTree',
        examplePath: 'docs/examples/organisms/panels/TimelineTree.html'
    }),
    createSharedExampleScenario({
        name: 'TimelineTree-balloon',
        examplePath: 'docs/examples/organisms/panels/TimelineTree-balloon.html'
    }),
    createSharedExampleScenario({
        name: 'TimelineTree-border',
        examplePath: 'docs/examples/organisms/panels/TimelineTree-border.html'
    }),
    createSharedExampleScenario({
        name: 'TimelineTree-line',
        examplePath: 'docs/examples/organisms/panels/TimelineTree-line.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'organisms/panels/timeline-tree',
    sourceFile: 'src/organisms/panels/timeline-tree/index.scss',
    scenarios
});

export default fixture;

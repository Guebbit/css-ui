import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'ImageHoverCard-default',
        examplePath: 'docs/examples/molecules/cards/ImageHoverCard-default.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'molecules/cards/image-hover-card',
    sourceFile: 'src/molecules/cards/image-hover-card/index.scss',
    scenarios
});

export default fixture;

import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'ImageSlashCard',
        examplePath: 'docs/examples/organisms/cards/ImageSlashCard.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'organisms/cards/image-slash-card',
    sourceFile: 'src/organisms/cards/image-slash-card/index.scss',
    scenarios
});

export default fixture;

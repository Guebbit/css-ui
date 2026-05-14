import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'SvgTitle-custom-bg-image',
        examplePath: 'docs/examples/atoms/typography/SvgTitle-custom-bg-image.html'
    }),
    createSharedExampleScenario({
        name: 'SvgTitle-custom-line-css',
        examplePath: 'docs/examples/atoms/typography/SvgTitle-custom-line-css.html'
    }),
    createSharedExampleScenario({
        name: 'SvgTitle-default',
        examplePath: 'docs/examples/atoms/typography/SvgTitle-default.html'
    }),
    createSharedExampleScenario({
        name: 'SvgTitle-default-different-svg',
        examplePath: 'docs/examples/atoms/typography/SvgTitle-default-different-svg.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'atoms/typography/svg-title',
    sourceFile: 'src/atoms/typography/svg-title/index.scss',
    scenarios
});

export default fixture;

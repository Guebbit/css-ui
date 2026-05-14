import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'EffectColorPopup-always-active',
        examplePath: 'docs/examples/atoms/animations/EffectColorPopup-always-active.html'
    }),
    createSharedExampleScenario({
        name: 'EffectColorPopup-default',
        examplePath: 'docs/examples/atoms/animations/EffectColorPopup-default.html'
    }),
    createSharedExampleScenario({
        name: 'EffectColorPopup-self-triggered-animate-on-hover-on-the-element',
        examplePath: 'docs/examples/atoms/animations/EffectColorPopup-self-triggered-animate-on-hover-on-the-element.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'atoms/animations/effect-color-popup',
    sourceFile: 'src/atoms/animations/effect-color-popup/index.scss',
    scenarios
});

export default fixture;

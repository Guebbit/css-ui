import { createSharedExampleScenario, defineComponentFixture } from '../../_helpers.js';

const scenarios = [
    createSharedExampleScenario({
        name: 'EffectMirrorReflection-default',
        examplePath: 'docs/examples/atoms/animations/EffectMirrorReflection-default.html'
    })
];

const fixture = defineComponentFixture({
    componentId: 'atoms/animations/effect-mirror-reflection',
    sourceFile: 'src/atoms/animations/effect-mirror-reflection/index.scss',
    scenarios
});

export default fixture;

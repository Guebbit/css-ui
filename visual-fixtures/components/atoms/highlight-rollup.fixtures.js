import { createSharedExampleScenario } from '../_helpers.js';

export const highlightRollupScenarios = [
    createSharedExampleScenario('default', 'atoms/highlight-rollup-default.html'),
    createSharedExampleScenario('primary', 'atoms/highlight-rollup-primary.html'),
    /// Doors variant (merged from animation-panel-askew-doors)
    createSharedExampleScenario('doors-default', 'atoms/highlight-rollup-doors.html#doors-default'),
    createSharedExampleScenario('doors-open', 'atoms/highlight-rollup-doors.html#doors-open'),
    createSharedExampleScenario('doors-open-vertical', 'atoms/highlight-rollup-doors.html#doors-open-vertical'),
    createSharedExampleScenario('doors-primary', 'atoms/highlight-rollup-doors.html#doors-primary'),
    /// Mirror variant (merged from animation-effect-mirror-reflection)
    createSharedExampleScenario('mirror-default', 'atoms/highlight-rollup-mirror.html#mirror-default'),
    createSharedExampleScenario('mirror-primary', 'atoms/highlight-rollup-mirror.html#mirror-primary'),
];

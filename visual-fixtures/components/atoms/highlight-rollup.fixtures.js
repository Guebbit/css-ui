import { createSharedExampleScenario } from '../_helpers.js';

export const highlightRollupScenarios = [
    createSharedExampleScenario('default', 'atoms/HighlightRollup-default.html'),
    createSharedExampleScenario('primary', 'atoms/HighlightRollup-primary.html'),
    /// Doors variant (merged from animation-panel-askew-doors)
    createSharedExampleScenario('doors-default', 'atoms/HighlightRollup-doors.html#doors-default'),
    createSharedExampleScenario('doors-open', 'atoms/HighlightRollup-doors.html#doors-open'),
    createSharedExampleScenario('doors-open-vertical', 'atoms/HighlightRollup-doors.html#doors-open-vertical'),
    createSharedExampleScenario('doors-primary', 'atoms/HighlightRollup-doors.html#doors-primary'),
    /// Mirror variant (merged from animation-effect-mirror-reflection)
    createSharedExampleScenario('mirror-default', 'atoms/HighlightRollup-mirror.html#mirror-default'),
    createSharedExampleScenario('mirror-primary', 'atoms/HighlightRollup-mirror.html#mirror-primary'),
];

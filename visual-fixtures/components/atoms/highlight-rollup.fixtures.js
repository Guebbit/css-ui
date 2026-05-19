import { createSharedExampleScenario } from '../_helpers.js';

export const highlightRollupScenarios = [
    createSharedExampleScenario('default', 'atoms/highlights/HighlightRollup-default.html'),
    createSharedExampleScenario('primary', 'atoms/highlights/HighlightRollup-primary.html'),
    /// Doors variant (merged from animation-panel-askew-doors)
    createSharedExampleScenario('doors-default', 'atoms/highlights/HighlightRollup-doors.html#doors-default'),
    createSharedExampleScenario('doors-open', 'atoms/highlights/HighlightRollup-doors.html#doors-open'),
    createSharedExampleScenario('doors-open-vertical', 'atoms/highlights/HighlightRollup-doors.html#doors-open-vertical'),
    createSharedExampleScenario('doors-primary', 'atoms/highlights/HighlightRollup-doors.html#doors-primary'),
    /// Mirror variant (merged from animation-effect-mirror-reflection)
    createSharedExampleScenario('mirror-default', 'atoms/highlights/HighlightRollup-mirror.html#mirror-default'),
    createSharedExampleScenario('mirror-primary', 'atoms/highlights/HighlightRollup-mirror.html#mirror-primary'),
];

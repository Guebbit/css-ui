import { simpleButtonScenarios } from "./components/simple-button.fixtures.js";
import { animationRaindropConcentricScenarios } from "./components/raindrop-concentric.fixtures.js";
import * as docsDerived from "./components/docs-derived.fixtures.js";

function createFixtureId(componentId, scenarioId){
    return `${componentId}-${scenarioId}`;
}

/**
 * Manifest-driven parity catalog.
 * css-ui 1.3 is the canonical oracle and every practical shared fixture lives
 * here, even when the v2 component is still a draft. Finished components are
 * compared in the default Playwright run; draft components stay visible in the
 * manifest and smoke tests, and can be opt-in compared with VISUAL_INCLUDE_DRAFTS=1.
 */
export const visualManifest = {
    /**
     * Version 2 expands the old parity-only catalog into a broader migration
     * inventory: parityEnabled is now represented by parityMode, notes can explain
     * blocked legacy components, and inventory-only entries document 1.3 coverage
     * that cannot yet render safely in the harness. Consumers upgrading from the
     * v1 schema should replace parityEnabled checks with parityMode handling and
     * allow the expanded status values used for blocked or inventory-only entries.
     */
    manifestVersion: 2,
    defaultUnlistedV2Status: "draft",
    components: [
        {
            componentId: "simple-button",
            status: "finished",
            parityMode: "enforced",
            fixtureGroup: "atoms/buttons",
            defaultMaxDiffRatio: 0.03,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/atoms/buttons/SimpleButton.scss",
                v2: "../src/components/atoms/button-simple/index.scss",
            },
            scenarios: simpleButtonScenarios,
        },
        {
            componentId: "animation-raindrop-concentric",
            status: "finished",
            parityMode: "enforced",
            fixtureGroup: "atoms/animations",
            defaultMaxDiffRatio: 0.03,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/atoms/animations/RaindropConcentric.scss",
                v2: "../src/components/atoms/animation-raindrop-concentric/index.scss",
            },
            scenarios: animationRaindropConcentricScenarios,
        },
        {
            componentId: "reveal-advancing-moon",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "atoms/animations",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/atoms/animations/AdvancingMoonReveal.scss",
                v2: "../src/components/atoms/reveal-advancing-moon/index.scss",
            },
            notes: "v1 AdvancingMoonReveal maps to the v2 draft reveal-advancing-moon implementation.",
            scenarios: docsDerived.revealAdvancingMoonScenarios,
        },
        {
            componentId: "progression-book-front",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "atoms/animations",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/atoms/animations/BookFrontLoad.scss",
                v2: "../src/components/atoms/progression-book-front/index.scss",
            },
            scenarios: docsDerived.progressionBookFrontScenarios,
        },
        {
            componentId: "progression-book-side",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "atoms/animations",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/atoms/animations/BookSideLoad.scss",
                v2: "../src/components/atoms/progression-book-side/index.scss",
            },
            scenarios: docsDerived.progressionBookSideScenarios,
        },
        {
            componentId: "animation-effect-color-popup",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "atoms/animations",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/atoms/animations/EffectColorPopup.scss",
                v2: "../src/components/atoms/animation-effect-color-popup/index.scss",
            },
            scenarios: docsDerived.animationEffectColorPopupScenarios,
        },
        {
            componentId: "reveal-slash-container",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "atoms/animations",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/atoms/animations/EffectShapeSlash.scss",
                v2: "../src/components/atoms/reveal-slash-container/index.scss",
            },
            notes: "v1 EffectShapeSlash is the legacy oracle for the v2 reveal-slash-container draft.",
            scenarios: docsDerived.revealSlashContainerScenarios,
        },
        {
            componentId: "progression-gear",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "atoms/animations",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/atoms/animations/GearLoad.scss",
                v2: "../src/components/atoms/progression-gear/index.scss",
            },
            scenarios: docsDerived.progressionGearScenarios,
        },
        {
            componentId: "progression-icon-showcase",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "atoms/animations",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/atoms/animations/IconShowcaseLoad.scss",
                v2: "../src/components/atoms/progression-icon-showcase/index.scss",
            },
            scenarios: docsDerived.progressionIconShowcaseScenarios,
        },
        {
            componentId: "animation-map-pin-pulse",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "atoms/animations",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/atoms/animations/MapPinPulse.scss",
                v2: "../src/components/atoms/animation-map-pin-pulse/index.scss",
            },
            scenarios: docsDerived.animationMapPinPulseScenarios,
        },
        {
            componentId: "animation-rotating-squares",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "atoms/animations",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/atoms/animations/RotatingSquares.scss",
                v2: "../src/components/atoms/animation-rotating-squares/index.scss",
            },
            scenarios: docsDerived.animationRotatingSquaresScenarios,
        },
        {
            componentId: "animation-scroll-down-arrow",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "atoms/animations",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/atoms/animations/ScrollDownArrow.scss",
                v2: "../src/components/atoms/animation-scroll-down-arrow/index.scss",
            },
            scenarios: docsDerived.animationScrollDownArrowScenarios,
        },
        {
            componentId: "animation-scroll-down-mouse",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "atoms/animations",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/atoms/animations/ScrollDownMouse.scss",
                v2: "../src/components/atoms/animation-scroll-down-mouse/index.scss",
            },
            scenarios: docsDerived.animationScrollDownMouseScenarios,
        },
        {
            componentId: "progression-solar-system",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "atoms/animations",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/atoms/animations/SolarSystemLoad.scss",
                v2: "../src/components/atoms/progression-solar-system/index.scss",
            },
            scenarios: docsDerived.progressionSolarSystemScenarios,
        },
        {
            componentId: "animation-status-circle",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "atoms/animations",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/atoms/animations/StatusCircle.scss",
                v2: "../src/components/atoms/animation-status-circle/index.scss",
            },
            scenarios: docsDerived.animationStatusCircleScenarios,
        },
        {
            componentId: "animation-trapezoid",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "atoms/animations",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/atoms/animations/TrapezoidForm.scss",
                v2: "../src/components/atoms/animation-trapezoid/index.scss",
            },
            scenarios: docsDerived.animationTrapezoidScenarios,
        },
        {
            componentId: "cyberpunk-button",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "atoms/buttons",
            defaultMaxDiffRatio: 0.06,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/atoms/buttons/CyberpunkButton.scss",
                v2: "../src/components/atoms/button-cyberpunk/index.scss",
            },
            scenarios: docsDerived.cyberpunkButtonScenarios,
        },
        {
            componentId: "button-parallelogram",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "atoms/buttons",
            defaultMaxDiffRatio: 0.06,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/atoms/buttons/ParallelogramButton.scss",
                v2: "../src/components/atoms/button-parallelogram/index.scss",
            },
            notes: "v1 ParallelogramButton maps to the v2 button-parallelogram draft.",
            scenarios: docsDerived.buttonParallelogramScenarios,
        },
        {
            componentId: "button-large-icon",
            status: "missing-equivalent",
            parityMode: "inventory-only",
            fixtureGroup: "atoms/buttons",
            defaultMaxDiffRatio: 0.06,
            styleImports: {
                v1: null,
                v2: "../src/components/atoms/button-large-icon/index.scss",
            },
            notes: "Documented in v2 but not shipped as a standalone component stylesheet in css-ui 1.3.",
            scenarios: docsDerived.buttonLargeIconScenarios,
        },
        {
            componentId: "calendar-card",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "atoms/cards",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/atoms/cards/CalendarCard.scss",
                v2: "../src/components/atoms/card-calendar/index.scss",
            },
            scenarios: docsDerived.calendarCardScenarios,
        },
        {
            componentId: "simple-list",
            status: "blocked-oracle",
            parityMode: "inventory-only",
            fixtureGroup: "molecules/lists",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/atoms/generics/SimpleList.scss",
                v2: "../src/components/molecules/list-simple/index.scss",
            },
            notes: "v1 SimpleList moved from atoms/generics to molecules/lists in v2, but the published 1.3 stylesheet hard-codes a broken node_modules import and cannot be rendered safely in the harness yet.",
            scenarios: docsDerived.simpleListScenarios,
        },
        {
            componentId: "simple-chip",
            status: "missing-equivalent",
            parityMode: "inventory-only",
            fixtureGroup: "atoms/generics",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: null,
                v2: "../src/components/atoms/generic-simple-chip/index.scss",
            },
            notes: "Documented in v2 but not shipped as a standalone component stylesheet in css-ui 1.3.",
            scenarios: docsDerived.simpleChipScenarios,
        },
        {
            componentId: "simple-input",
            status: "missing-equivalent",
            parityMode: "inventory-only",
            fixtureGroup: "atoms/inputs",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: null,
                v2: "../src/components/atoms/input-simple/index.scss",
            },
            notes: "Documented in v2 but not shipped as a standalone component stylesheet in css-ui 1.3.",
            scenarios: docsDerived.simpleInputScenarios,
        },
        {
            componentId: "special-title",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "atoms/typography",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/atoms/generics/SpecialTitle.scss",
                v2: "../src/components/atoms/typography-special-title/index.scss",
            },
            notes: "v1 SpecialTitle moved from atoms/generics to atoms/typography in v2.",
            scenarios: docsDerived.specialTitleScenarios,
        },
        {
            componentId: "svg-title",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "atoms/typography",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/atoms/generics/SvgTitle.scss",
                v2: "../src/components/atoms/typography-svg-title/index.scss",
            },
            notes: "v1 SvgTitle moved from atoms/generics to atoms/typography in v2.",
            scenarios: docsDerived.svgTitleScenarios,
        },
        {
            componentId: "simple-text-icon",
            status: "missing-equivalent",
            parityMode: "inventory-only",
            fixtureGroup: "atoms/typography",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: null,
                v2: "../src/components/atoms/typography-simple-text-icon/index.scss",
            },
            notes: "Documented in v2 but not shipped as a standalone component stylesheet in css-ui 1.3.",
            scenarios: docsDerived.simpleTextIconScenarios,
        },
        {
            componentId: "corner-ribbon",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "atoms/highlights",
            defaultMaxDiffRatio: 0.06,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/atoms/highlights/CornerRibbon.scss",
                v2: "../src/components/atoms/highlight-corner-ribbon/index.scss",
            },
            scenarios: docsDerived.cornerRibbonScenarios,
        },
        {
            componentId: "highlight-belt",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "atoms/highlights",
            defaultMaxDiffRatio: 0.06,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/atoms/highlights/HighlightBelt.scss",
                v2: "../src/components/atoms/highlight-belt/index.scss",
            },
            scenarios: docsDerived.highlightBeltScenarios,
        },
        {
            componentId: "highlight-border",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "atoms/highlights",
            defaultMaxDiffRatio: 0.06,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/atoms/highlights/HighlightBorder.scss",
                v2: "../src/components/atoms/highlight-border/index.scss",
            },
            scenarios: docsDerived.highlightBorderScenarios,
        },
        {
            componentId: "highlight-line",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "atoms/highlights",
            defaultMaxDiffRatio: 0.06,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/atoms/highlights/HighlightLine.scss",
                v2: "../src/components/atoms/highlight-line/index.scss",
            },
            scenarios: docsDerived.highlightLineScenarios,
        },
        {
            componentId: "highlight-popup",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "atoms/highlights",
            defaultMaxDiffRatio: 0.06,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/atoms/highlights/HighlightPopup.scss",
                v2: "../src/components/atoms/highlight-popup/index.scss",
            },
            scenarios: docsDerived.highlightPopupScenarios,
        },
        {
            componentId: "highlight-rollup",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "atoms/highlights",
            defaultMaxDiffRatio: 0.06,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/atoms/highlights/HighlightRollup.scss",
                v2: "../src/components/atoms/highlight-rollup/index.scss",
            },
            scenarios: docsDerived.highlightRollupScenarios,
        },
        {
            componentId: "simple-panel",
            status: "blocked-oracle",
            parityMode: "inventory-only",
            fixtureGroup: "molecules/panels",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/atoms/panels/SimplePanel.scss",
                v2: "../src/components/molecules/panel-simple/index.scss",
            },
            notes: "v1 SimplePanel moved from atoms/panels to molecules/panels in v2, but the published 1.3 stylesheet hard-codes a broken node_modules import and cannot be rendered safely in the harness yet.",
            scenarios: docsDerived.simplePanelScenarios,
        },
        {
            componentId: "simple-typography",
            status: "missing-equivalent",
            parityMode: "inventory-only",
            fixtureGroup: "molecules/panels",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: null,
                v2: "../src/components/molecules/panel-simple-typography/index.scss",
            },
            notes: "Documented in v2 but not shipped as a standalone component stylesheet in css-ui 1.3.",
            scenarios: docsDerived.simpleTypographyScenarios,
        },
        {
            componentId: "circular-progress-bar-css",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "molecules/progress",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/molecules/animations/CircularProgressBarCss.scss",
                v2: "../src/components/molecules/progress-circular-css/index.scss",
            },
            scenarios: docsDerived.circularProgressBarCssScenarios,
        },
        {
            componentId: "circular-progress-bar-svg",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "molecules/progress",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/molecules/animations/CircularProgressBarSvg.scss",
                v2: "../src/components/molecules/progress-circular-svg/index.scss",
            },
            scenarios: docsDerived.circularProgressBarSvgScenarios,
        },
        {
            componentId: "expressive-button",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "molecules/buttons",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/molecules/buttons/ExpressiveButton.scss",
                v2: "../src/components/molecules/button-expressive/index.scss",
            },
            scenarios: docsDerived.expressiveButtonScenarios,
        },
        {
            componentId: "icon-focus-button",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "molecules/buttons",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/molecules/buttons/IconFocusButton.scss",
                v2: "../src/components/molecules/button-icon-focus/index.scss",
            },
            scenarios: docsDerived.iconFocusButtonScenarios,
        },
        {
            componentId: "neon-button",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "molecules/buttons",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/molecules/buttons/NeonButton.scss",
                v2: "../src/components/molecules/button-neon/index.scss",
            },
            scenarios: docsDerived.neonButtonScenarios,
        },
        {
            componentId: "book-card",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "molecules/cards",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/molecules/cards/BookCard.scss",
                v2: "../src/components/molecules/card-book/index.scss",
            },
            scenarios: docsDerived.bookCardScenarios,
        },
        {
            componentId: "countdown-card",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "molecules/cards",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/molecules/cards/CountdownCard.scss",
                v2: "../src/components/molecules/card-countdown/index.scss",
            },
            scenarios: docsDerived.countdownCardScenarios,
        },
        {
            componentId: "credit-card",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "molecules/cards",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/molecules/cards/CreditCard.scss",
                v2: "../src/components/molecules/card-credit/index.scss",
            },
            scenarios: docsDerived.creditCardScenarios,
        },
        {
            componentId: "simple-blockquote",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "molecules/cards",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/molecules/cards/SimpleBlockquote.scss",
                v2: "../src/components/molecules/card-simple-blockquote/index.scss",
            },
            scenarios: docsDerived.simpleBlockquoteScenarios,
        },
        {
            componentId: "simple-card",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "molecules/cards",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/molecules/cards/SimpleCard.scss",
                v2: "../src/components/molecules/card-simple/index.scss",
            },
            scenarios: docsDerived.simpleCardScenarios,
        },
        {
            componentId: "image-hover-card",
            status: "missing-equivalent",
            parityMode: "inventory-only",
            fixtureGroup: "molecules/cards",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: null,
                v2: "../src/components/molecules/card-image-hover/index.scss",
            },
            notes: "Documented in v2 but not shipped as a standalone component stylesheet in css-ui 1.3.",
            scenarios: docsDerived.imageHoverCardScenarios,
        },
        {
            componentId: "action-panel",
            status: "blocked-oracle",
            parityMode: "inventory-only",
            fixtureGroup: "molecules/panels",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/molecules/panels/ActionPanel.scss",
                v2: "../src/components/molecules/panel-action/index.scss",
            },
            notes: "ActionPanel depends on the broken published v1 SimplePanel import chain, so it is inventoried but not rendered in the harness yet.",
            scenarios: docsDerived.actionPanelScenarios,
        },
        {
            componentId: "opening-hours-list",
            status: "blocked-oracle",
            parityMode: "inventory-only",
            fixtureGroup: "molecules/lists",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/molecules/panels/OpeningHoursList.scss",
                v2: "../src/components/molecules/list-opening-hours/index.scss",
            },
            notes: "v1 OpeningHoursList moved from molecules/panels to molecules/lists in v2, but the published 1.3 stylesheet hard-codes a broken node_modules import and cannot be rendered safely in the harness yet.",
            scenarios: docsDerived.openingHoursListScenarios,
        },
        {
            componentId: "choose-option-card",
            status: "blocked-oracle",
            parityMode: "inventory-only",
            fixtureGroup: "organisms/cards",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/organisms/cards/ChooseOptionCard.scss",
                v2: "../src/components/organisms/card-choose-option/index.scss",
            },
            notes: "ChooseOptionCard depends on the broken published v1 SimpleList import chain, so it is inventoried but not rendered in the harness yet.",
            scenarios: docsDerived.chooseOptionCardScenarios,
        },
        {
            componentId: "event-lite-card",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "organisms/cards",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/organisms/cards/EventLiteCard.scss",
                v2: "../src/components/organisms/card-event-lite/index.scss",
            },
            scenarios: docsDerived.eventLiteCardScenarios,
        },
        {
            componentId: "event-long-card",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "organisms/cards",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/organisms/cards/EventLongCard.scss",
                v2: "../src/components/organisms/card-event-long/index.scss",
            },
            scenarios: docsDerived.eventLongCardScenarios,
        },
        {
            componentId: "event-minimal-card",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "organisms/cards",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/organisms/cards/EventMinimalCard.scss",
                v2: "../src/components/organisms/card-event-minimal/index.scss",
            },
            scenarios: docsDerived.eventMinimalCardScenarios,
        },
        {
            componentId: "image-slash-card",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "organisms/cards",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/organisms/cards/ImageSlashCard.scss",
                v2: "../src/components/organisms/card-image-slash/index.scss",
            },
            scenarios: docsDerived.imageSlashCardScenarios,
        },
        {
            componentId: "info-hover-card",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "organisms/cards",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/organisms/cards/InfoHoverCard.scss",
                v2: "../src/components/organisms/card-info-hover/index.scss",
            },
            scenarios: docsDerived.infoHoverCardScenarios,
        },
        {
            componentId: "overflow-card",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "organisms/cards",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/organisms/cards/OverflowCard.scss",
                v2: "../src/components/organisms/card-overflow/index.scss",
            },
            scenarios: docsDerived.overflowCardScenarios,
        },
        {
            componentId: "pricing-card",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "organisms/cards",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/organisms/cards/PricingCard.scss",
                v2: "../src/components/organisms/card-pricing/index.scss",
            },
            scenarios: docsDerived.pricingCardScenarios,
        },
        {
            componentId: "timeline-tree",
            status: "draft",
            parityMode: "draft",
            fixtureGroup: "organisms/panels",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/organisms/panels/TimelineTree.scss",
                v2: "../src/components/organisms/panel-timeline-tree/index.scss",
            },
            scenarios: docsDerived.timelineTreeScenarios,
        },
        {
            componentId: "popup-card",
            status: "missing-equivalent",
            parityMode: "inventory-only",
            fixtureGroup: "molecules/cards",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/molecules/cards/PopupCard.scss",
                v2: null,
            },
            notes: "Documented as a 1.3 component with no workable v2 fixture/equivalent yet.",
            scenarios: [],
        },
        {
            componentId: "blog-post-card",
            status: "missing-equivalent",
            parityMode: "inventory-only",
            fixtureGroup: "molecules/panels",
            defaultMaxDiffRatio: 0.08,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/molecules/panels/BlogPostCard.scss",
                v2: null,
            },
            notes: "Documented as a 1.3 component with no workable v2 fixture/equivalent yet.",
            scenarios: [],
        },
    ],
};

export const allFixtureScenarios = visualManifest.components.flatMap((component) => (
    component.scenarios.map((scenario) => ({
        componentId: component.componentId,
        status: component.status,
        parityMode: component.parityMode,
        fixtureGroup: scenario.fixtureGroup ?? component.fixtureGroup,
        scenarioId: scenario.scenarioId,
        fixtureId: createFixtureId(component.componentId, scenario.scenarioId),
        maxDiffRatio: scenario.maxDiffRatio ?? component.defaultMaxDiffRatio,
        markup: scenario.markup,
        v2Equivalent: Boolean(component.styleImports.v2),
    }))
));

export const renderableFixtureScenarios = allFixtureScenarios.filter((scenario) => scenario.v2Equivalent);

export const enforcedParityFixtureScenarios = renderableFixtureScenarios.filter(
    (scenario) => scenario.parityMode === "enforced",
);

export const draftParityFixtureScenarios = renderableFixtureScenarios.filter(
    (scenario) => scenario.parityMode === "draft",
);

export const inventoryOnlyComponents = visualManifest.components.filter(
    (component) => component.parityMode === "inventory-only",
);

export const fixturesById = Object.fromEntries(
    allFixtureScenarios.map((scenario) => [scenario.fixtureId, scenario.markup]),
);

import { describe, it } from 'mocha';
import { expect } from 'chai';

import {
    createSharedExampleScenario,
    loadSharedExample,
} from '../visual-fixtures/components/_helpers.js';

describe('SHARED EXAMPLES', function () {
    it('loads migrated shared example assets by path and region', function () {
        /**
         * Shared examples are reusable docs assets, so the loader must support both full-file and region reads.
         */
        const fullMarkup = loadSharedExample('molecules/buttons/NeonButton.html');
        const regionMarkup = loadSharedExample('molecules/buttons/NeonButton.html#default');

        expect(fullMarkup).to.contain('button-neon');
        expect(regionMarkup).to.contain('Lorem Ipsum');
        expect(regionMarkup).to.not.contain('#region default');
    });

    it('creates sanitized fixture scenarios from shared example assets', function () {
        /**
         * Fixture helpers should reuse docs markup while stripping unstable remote details from test input.
         */
        const scenario = createSharedExampleScenario('svg-image', 'molecules/progress/CircularProgressBarSvg.html#image');

        expect(scenario.fixtureGroup).to.equal('docs');
        expect(scenario.markup).to.contain('fixture-section');
        expect(scenario.markup).to.contain('fixture image');
        expect(scenario.markup).to.not.contain('https://placedog.net/400/400');
    });
});

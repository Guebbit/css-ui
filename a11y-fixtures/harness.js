/**
 * A11y fixture harness entry point.
 *
 * Imports all component styles (via the shared visual-fixtures SCSS bundle)
 * and renders the fixture identified by the `?fixture=` URL parameter into
 * [data-testid="fixture-root"]. The readiness handshake (`dataset.ready`)
 * mirrors the pattern used by the visual fixture harness so the same
 * Playwright helper can wait for both harnesses.
 */
import "../visual-fixtures/styles-v2.scss";

import { a11yFixturesById } from "./manifest.js";

/**
 * Read the fixture to render from the URL query string.
 */
const searchParams = new URLSearchParams(window.location.search);
const fixtureId = searchParams.get("fixture");
const root = document.querySelector('[data-testid="fixture-root"]');

const markup = a11yFixturesById[fixtureId];

if (!markup) {
    /**
     * Signal a fixture-level error so Playwright can report the specific cause.
     */
    document.documentElement.dataset.ready = "error";
    document.documentElement.dataset.renderError = `Unknown a11y fixture "${fixtureId}"`;
} else {
    root.innerHTML = markup;

    /**
     * Wait for a full paint cycle before signalling readiness so CSS custom
     * properties and cascade layers are fully applied before axe or Playwright
     * inspects the DOM.
     */
    requestAnimationFrame(() => {
        document.documentElement.dataset.ready = "true";
    });
}

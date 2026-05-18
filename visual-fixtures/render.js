/**
 * render.js — shared fixture renderer, imported by both v1.js and v2.js.
 *
 * WHAT IT DOES
 * Reads the ?fixture= URL parameter, looks up the matching HTML snippet in
 * manifest.js, and injects it into [data-testid="fixture-root"] so that
 * Playwright can screenshot just that element.
 *
 * READY HANDSHAKE
 * Playwright waits for document.documentElement.dataset.ready === "true" before
 * taking the screenshot (see captureFixture() in the spec).  We set that flag
 * inside requestAnimationFrame so the browser has completed at least one full
 * paint cycle first.  Without this guard, screenshots can be taken before fonts
 * and CSS custom properties have been applied, producing false-positive diffs.
 */

import "./harness.css";
import { fixturesById, renderableFixtureScenarios } from "./manifest.js";

const firstFixtureId = renderableFixtureScenarios[0]?.fixtureId;
const searchParams = new URLSearchParams(window.location.search);
const fixtureId = searchParams.get("fixture") || firstFixtureId;
const direction = searchParams.get("dir");
const root = document.querySelector('[data-testid="fixture-root"]');

try{
    const fixtureMarkup = fixturesById[fixtureId];

    if(!fixtureMarkup){
        throw new Error(`Unknown fixture "${fixtureId}". Available: ${Object.keys(fixturesById).join(", ")}`);
    }

    if(direction === "rtl" || direction === "ltr"){
        document.documentElement.setAttribute("dir", direction);
    }

    root.innerHTML = fixtureMarkup;

    /**
     * Signal readiness after the first paint so CSS is fully resolved.
     */
    requestAnimationFrame(() => {
        document.documentElement.dataset.ready = "true";
    });
} catch(error){
    document.documentElement.dataset.ready = "error";
    document.documentElement.dataset.renderError = error instanceof Error ? error.message : String(error);
    console.error(error);
}

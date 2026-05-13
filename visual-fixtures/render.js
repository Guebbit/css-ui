// render.js — shared fixture renderer, imported by both v1.js and v2.js.
//
// WHAT IT DOES
// Reads the ?fixture= URL parameter, looks up the matching HTML snippet in
// fixtures.js, and injects it into [data-testid="fixture-root"] so that
// Playwright can screenshot just that element.
//
// READY HANDSHAKE
// Playwright waits for document.documentElement.dataset.ready === "true" before
// taking the screenshot (see captureFixture() in the spec).  We set that flag
// inside requestAnimationFrame so the browser has completed at least one full
// paint cycle first.  Without this guard, screenshots can be taken before fonts
// and CSS custom properties have been applied, producing false-positive diffs.

import "./harness.css";
import { fixtures } from "./fixtures.js";

// Default to "simple-button-defaults" so the page is useful when opened
// manually in a browser without a query parameter.
const fixtureId = new URLSearchParams(window.location.search).get("fixture") || "simple-button-defaults";
const fixtureMarkup = fixtures[fixtureId];

if(!fixtureMarkup){
    throw new Error(`Unknown fixture "${fixtureId}". Available: ${Object.keys(fixtures).join(", ")}`);
}

const root = document.querySelector('[data-testid="fixture-root"]');
root.innerHTML = fixtureMarkup;

// Signal readiness after the first paint so CSS is fully resolved.
requestAnimationFrame(() => {
    document.documentElement.dataset.ready = "true";
});

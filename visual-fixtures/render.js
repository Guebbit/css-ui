import "./harness.css";
import { fixtures } from "./fixtures.js";

// Read which fixture to render from the URL.
// Example: /visual-fixtures/v2.html?fixture=simple-button-defaults
const fixtureId = new URLSearchParams(window.location.search).get("fixture") || "simple-button-defaults";
const fixtureMarkup = fixtures[fixtureId];

if(!fixtureMarkup){
    throw new Error(`Unknown fixture "${fixtureId}". Available fixtures: ${Object.keys(fixtures).join(", ")}`);
}

// Inject the selected HTML snippet into the dedicated fixture container.
const root = document.querySelector('[data-testid="fixture-root"]');
root.innerHTML = fixtureMarkup;

// Tell Playwright the page is ready only after the browser had one paint pass.
// This avoids taking screenshots too early.
requestAnimationFrame(() => {
    document.documentElement.dataset.ready = "true";
});

import "./harness.css";
import { fixtures } from "./fixtures.js";

const fixtureId = new URLSearchParams(window.location.search).get("fixture") || "simple-button-defaults";
const fixtureMarkup = fixtures[fixtureId];

if(!fixtureMarkup){
    throw new Error(`Unknown fixture "${fixtureId}". Available fixtures: ${Object.keys(fixtures).join(", ")}`);
}

const root = document.querySelector('[data-testid="fixture-root"]');
root.innerHTML = fixtureMarkup;

requestAnimationFrame(() => {
    document.documentElement.dataset.ready = "true";
});

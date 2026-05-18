/**
 * A11y fixture catalog.
 *
 * Every fixture here uses semantic, keyboard-accessible HTML — the pattern
 * consumers should follow to keep the library accessible. The visual-fixture
 * catalog uses `<div>` elements for layout stability; this catalog uses native
 * interactive elements (`<button>`, `<a>`, `<input>`) so Playwright and axe
 * can test actual accessibility properties.
 *
 * Fixture IDs must be unique. The harness renders the fixture matching the
 * `?fixture=` URL parameter.
 */

/**
 * button-simple — native `<button>` and `<a>` variants.
 *
 * Tests: default, disabled, icon-only (with aria-label), link variant.
 */
const buttonSimpleStates = `
    <div style="display:flex;flex-wrap:wrap;gap:1rem;padding:2rem;">
        <button class="simple-button">Default button</button>
        <button class="simple-button button-outlined">Outlined button</button>
        <button class="simple-button button-plain">Plain button</button>
        <button class="simple-button" disabled>Disabled button</button>
        <button class="simple-button button-outlined" disabled>Outlined disabled</button>
        <a href="#content" class="simple-button">Link button</a>
    </div>
`;

/**
 * button-simple-icon — icon-only buttons that must carry an accessible label.
 */
const buttonSimpleIconOnly = `
    <div style="display:flex;flex-wrap:wrap;gap:1rem;padding:2rem;">
        <button class="simple-button button-icon-only" aria-label="Search">
            <svg class="button-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </button>
        <button class="simple-button button-icon-only button-rounded" aria-label="Add item">
            <svg class="button-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </button>
        <button class="simple-button button-icon-only" aria-label="Close" disabled>
            <svg class="button-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </button>
    </div>
`;

/**
 * button-simple-keyboard — a focused sequence for keyboard navigation tests.
 * Contains exactly three tabbable buttons so tests can predict tab order.
 */
const buttonSimpleKeyboard = `
    <div style="display:flex;flex-wrap:wrap;gap:1rem;padding:2rem;">
        <button class="simple-button" id="btn-first">First</button>
        <button class="simple-button" id="btn-second">Second</button>
        <button class="simple-button" id="btn-disabled" disabled>Disabled (skipped)</button>
        <button class="simple-button" id="btn-third">Third</button>
    </div>
`;

/**
 * input-simple — labeled inputs covering default, disabled, outlined, and
 * filled variants.
 */
const inputSimpleStates = `
    <div style="display:flex;flex-direction:column;gap:1.5rem;padding:2rem;max-width:400px;">
        <div>
            <label for="input-default" style="display:block;margin-bottom:0.25rem;">Full name</label>
            <input id="input-default" class="simple-input" type="text" placeholder="Jane Doe" />
        </div>
        <div>
            <label for="input-outlined" style="display:block;margin-bottom:0.25rem;">Email</label>
            <input id="input-outlined" class="simple-input input-outlined" type="email" placeholder="jane@example.com" />
        </div>
        <div>
            <label for="input-underlined" style="display:block;margin-bottom:0.25rem;">Username</label>
            <input id="input-underlined" class="simple-input input-underlined" type="text" placeholder="janedoe" />
        </div>
        <div>
            <label for="input-filled" style="display:block;margin-bottom:0.25rem;">Bio</label>
            <input id="input-filled" class="simple-input input-filled" type="text" placeholder="About me…" />
        </div>
        <div>
            <label for="input-disabled" style="display:block;margin-bottom:0.25rem;">Read-only field</label>
            <input id="input-disabled" class="simple-input" type="text" value="Cannot be changed" disabled />
        </div>
        <div>
            <label for="input-required" style="display:block;margin-bottom:0.25rem;">
                Required field <span aria-hidden="true">*</span>
            </label>
            <input id="input-required" class="simple-input" type="text" required aria-required="true" />
        </div>
    </div>
`;

/**
 * input-simple-keyboard — minimal set of inputs for keyboard/focus tests.
 */
const inputSimpleKeyboard = `
    <div style="display:flex;flex-direction:column;gap:1rem;padding:2rem;max-width:300px;">
        <label for="kbdinput-first" style="display:block;">First name</label>
        <input id="kbdinput-first" class="simple-input" type="text" />
        <label for="kbdinput-second" style="display:block;">Last name</label>
        <input id="kbdinput-second" class="simple-input" type="text" />
        <label for="kbdinput-disabled" style="display:block;">Disabled</label>
        <input id="kbdinput-disabled" class="simple-input" type="text" disabled />
        <label for="kbdinput-third" style="display:block;">Email</label>
        <input id="kbdinput-third" class="simple-input" type="email" />
    </div>
`;

/**
 * card-simple — card with proper heading structure and landmark semantics.
 */
const cardSimpleStates = `
    <div style="display:flex;flex-wrap:wrap;gap:1.5rem;padding:2rem;">
        <article class="simple-card">
            <div class="card-content">
                <h2 class="card-title">Article heading</h2>
                <p class="card-subtitle">Subtitle text</p>
                <p>Card body content with enough text to be meaningful.</p>
            </div>
        </article>
        <article class="simple-card card-outlined">
            <div class="card-content">
                <h2 class="card-title">Outlined card</h2>
                <p>Card body content.</p>
                <button class="simple-button" style="margin-top:0.5rem;">Read more</button>
            </div>
        </article>
    </div>
`;

/**
 * icon-focus-button — call-to-action button with icon; uses an `<a>` for
 * link semantics or `<button>` when no navigation is involved.
 */
const iconFocusButtonStates = `
    <div style="display:flex;flex-wrap:wrap;gap:1.5rem;padding:2rem;">
        <a href="#content" class="icon-focus-button">
            <span>Visit page</span>
            <span aria-hidden="true">
                <svg class="button-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </span>
        </a>
        <button class="icon-focus-button">
            <span>Perform action</span>
            <span aria-hidden="true">
                <svg class="button-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </span>
        </button>
    </div>
`;

/**
 * dark-theme-buttons — same button states under the dark theme class, used to
 * verify that theme switching does not introduce new a11y violations.
 */
const darkThemeButtons = `
    <div class="theme--dark" style="background:#1a1a2e;display:flex;flex-wrap:wrap;gap:1rem;padding:2rem;">
        <button class="simple-button">Dark default</button>
        <button class="simple-button button-outlined">Dark outlined</button>
        <button class="simple-button" disabled>Dark disabled</button>
    </div>
`;

/**
 * reduced-motion-buttons — layout identical to the default button fixture, used
 * by tests that emulate `prefers-reduced-motion: reduce`. The fixture itself
 * is the same markup; media emulation is applied in the test.
 */
const reducedMotionButtons = buttonSimpleStates;

/**
 * Flat lookup map consumed by harness.js.
 */
export const a11yFixturesById = {
    "button-simple-states":      buttonSimpleStates,
    "button-simple-icon-only":   buttonSimpleIconOnly,
    "button-simple-keyboard":    buttonSimpleKeyboard,
    "input-simple-states":       inputSimpleStates,
    "input-simple-keyboard":     inputSimpleKeyboard,
    "card-simple-states":        cardSimpleStates,
    "icon-focus-button-states":  iconFocusButtonStates,
    "dark-theme-buttons":        darkThemeButtons,
    "reduced-motion-buttons":    reducedMotionButtons,
};

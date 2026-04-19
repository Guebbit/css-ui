// Central list of visual fixtures.
// Each key becomes a `?fixture=...` value used by the harness and the tests.
export const fixtures = {
    // Compares a few common "mode" variants of the same button.
    "simple-button-defaults": `
        <div class="fixture-stack">
            <div class="simple-button animate-on-hover">
                <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                DEFAULT
            </div>
            <div class="simple-button animate-on-hover button-disabled">
                <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                DISABLED
            </div>
            <div class="simple-button animate-on-hover button-rounded">
                <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                ROUNDED
            </div>
            <div class="simple-button animate-on-hover button-plain">
                <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                PLAIN
            </div>
            <div class="simple-button animate-on-hover button-outlined">
                <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                OUTLINED
            </div>
        </div>
    `,
    // Compares the same button across size modifiers.
    "simple-button-sizes": `
        <div class="fixture-stack">
            <div class="simple-button animate-on-hover button-xs">
                <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                EXTRA SMALL
            </div>
            <div class="simple-button animate-on-hover button-sm">
                <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                SMALL
            </div>
            <div class="simple-button animate-on-hover">
                <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                MEDIUM
            </div>
            <div class="simple-button animate-on-hover button-lg">
                <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                LARGE
            </div>
            <div class="simple-button animate-on-hover button-xl">
                <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                EXTRA LARGE
            </div>
        </div>
    `,
};

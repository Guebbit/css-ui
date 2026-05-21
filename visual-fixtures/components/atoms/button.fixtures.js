export const buttonScenarios = [
    {
        scenarioId: "defaults",
        fixtureGroup: "appearance",
        markup: `
            <div class="fixture-stack">
                <div class="button">DEFAULT</div>
                <div class="button disabled" aria-disabled="true">DISABLED</div>
            </div>
        `,
    },
    {
        scenarioId: "outlined",
        fixtureGroup: "appearance",
        markup: `
            <div class="fixture-stack">
                <div class="button button-outlined">OUTLINED</div>
                <div class="button button-outlined disabled" aria-disabled="true">OUTLINED DISABLED</div>
            </div>
        `,
    },
    {
        scenarioId: "plain",
        fixtureGroup: "appearance",
        markup: `
            <div class="fixture-stack">
                <div class="button button-plain">PLAIN</div>
                <div class="button button-plain disabled" aria-disabled="true">PLAIN DISABLED</div>
            </div>
        `,
    },
    {
        scenarioId: "sizes",
        fixtureGroup: "sizes",
        markup: `
            <div class="fixture-stack">
                <div class="button button-xs">
                    <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                    XS
                </div>
                <div class="button button-sm">
                    <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                    SM
                </div>
                <div class="button">
                    <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                    MD
                </div>
                <div class="button button-lg">
                    <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                    LG
                </div>
                <div class="button button-xl">
                    <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                    XL
                </div>
            </div>
        `,
    },
    {
        scenarioId: "shapes",
        fixtureGroup: "shape",
        markup: `
            <div class="fixture-stack">
                <div class="button button-rounded">
                    <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                    ROUNDED
                </div>
                <div class="button button-circular">
                    <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                    CIRCULAR
                </div>
                <div class="button button-pill">
                    <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                    PILL
                </div>
            </div>
        `,
    },
    {
        scenarioId: "elevation",
        fixtureGroup: "elevation",
        markup: `
            <div class="fixture-stack">
                <div class="button button-flat">
                    <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                    FLAT
                </div>
                <div class="button">
                    <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                    DEFAULT
                </div>
                <div class="button button-elevated">
                    <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                    ELEVATED
                </div>
            </div>
        `,
    },
    {
        scenarioId: "active",
        fixtureGroup: "state",
        maxDiffRatio: 0.09,
        markup: `
            <div class="fixture-stack">
                <div class="button animate-active">
                    <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                    ACTIVE
                </div>
                <div class="button animate-active button-flat">
                    <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                    FLAT ACTIVE
                </div>
                <div class="button animate-active button-elevated">
                    <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                    ELEVATED ACTIVE
                </div>
                <div class="button animate-active button-outlined">
                    <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                    OUTLINED ACTIVE
                </div>
                <div class="button animate-active button-plain">
                    <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                    PLAIN ACTIVE
                </div>
            </div>
        `,
    },
    {
        scenarioId: "icon-only",
        fixtureGroup: "layout",
        markup: `
            <div class="fixture-stack">
                <div class="button button-icon-only">
                    <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                </div>
                <div class="button button-icon-only button-rounded">
                    <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                </div>
                <div class="button button-icon-only button-circular">
                    <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                </div>
                <div class="button button-icon-only button-pill">
                    <svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                </div>
            </div>
        `,
    },
];

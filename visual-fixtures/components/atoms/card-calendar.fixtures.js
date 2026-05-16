import { createDocsScenario } from '../_helpers.js';

export const calendarCardScenarios = [
    createDocsScenario("default", `
<div class="calendar-card animate-on-hover" style="font-size: 2em;">
    <header class="calendar-head">
        May
        <small>2019</small>
    </header>
    <time class="calendar-body" datetime="2019-05-27">
        <div class="calendar-info-label">Monday</div>
        <div class="calendar-info-day">27</div>
        <div class="calendar-info-time">
            <span>21</span>
            <span>05</span>
        </div>
    </time>
</div>
    `),
    createDocsScenario("default-2", `
<div class="calendar-card animate-on-hover" style="font-size: 2em;">
    <time class="calendar-body" datetime="2019-05-27">
        <div class="calendar-info-label">Monday</div>
        <div class="calendar-info-day">27</div>
    </time>
</div>
    `),
];

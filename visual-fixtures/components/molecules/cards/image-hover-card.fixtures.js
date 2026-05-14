import { createDocsScenario } from '../../_helpers.js';

export const imageHoverCardScenarios = [
    createDocsScenario("default", `
<div class="image-hover-card animate-on-hover fixture-image-hover-stage">
    <div class="card-media">
        <img alt="" src="https://placedog.net/1000/1000" />
    </div>
    <div class="card-content">
        <div class="simple-card shadow-on-hover">
            <div class="card-content">
                <h2 class="card-title">Title of lorem ipsum</h2>
                <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
                <br>
                <p>
                    lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                    lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                </p>
            </div>
        </div>
    </div>
</div>
    `),
];

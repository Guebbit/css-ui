import { createDocsScenario } from '../_helpers.js';

export const pricingCardScenarios = [
    createDocsScenario("default", `
<div class="pricing-card animate-on-hover">
    <div class="card-content">
        <h3 class="card-title">Lorem Ipsum</h3>
        <div class="card-price">
            <span class="card-currency">€</span>
            10
        </div>
    </div>
    <div class="card-content">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
    </div>
    <div class="card-actions">
        <button class="simple-button">
            Lorem Ipsum
        </button>
    </div>
</div>
    `),
    createDocsScenario("header-and-footer-highlighted", `
<div class="pricing-card animate-on-hover card-elevated">
    <div class="card-header">
        Header
    </div>
    <div class="card-content">
        <h3 class="card-title">Lorem Ipsum</h3>
        <div class="card-price">
            <span class="card-currency">€</span>
            10
        </div>
    </div>
    <div class="card-content">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
    </div>
    <div class="card-actions">
        <button class="simple-button">
            Lorem Ipsum
        </button>
    </div>
    <div class="card-footer">
        Footer
    </div>
</div>
    `),
    createDocsScenario("custom", `
<div 
    class="pricing-card animate-on-hover card-elevated card-blurred" 
    style="
        --background: transparent; 
        --shadow-color: var(--primary-500);
        --on-background: #fff;
    "
>
    <div>
        <h3 class="card-title">Lorem Ipsum</h3>
        <div class="card-price">
            <span class="card-currency">€</span>
            10
        </div>
    </div>
    <p class="card-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <div class="card-actions">
        <button class="simple-button">
            Lorem Ipsum
        </button>
    </div>
</div>
    `),
];

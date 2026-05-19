import { fileURLToPath } from 'url';
import { defineConfig } from 'vitepress';

export default defineConfig({
    lang: "en-US",
    title: "Guebbit CSS UI",
    titleTemplate: ":title - base SCSS plus components",
    description: "Guebbit's personal CSS UI.",
    vite: {
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('../', import.meta.url)),
                '@guebbit/css-ui': fileURLToPath(new URL('../../src/', import.meta.url)),
            }
        }
    },
    themeConfig: {
        logo: "/logotype.svg",
        siteTitle: "CSS UI",
        search: {
            provider: 'local'
        },
        nav: [
            {
                text: 'Github',
                link: 'https://github.com/Guebbit/css-ui',
            },
            {
                text: 'Helper libraries',
                items: [
                    {
                        text: 'Animate CSS',
                        link: 'https://animate.style/'
                    },
                    {
                        text: 'CSS Shake',
                        link: 'https://elrumordelaluz.github.io/csshake/'
                    },
                ]
            }
        ],
        sidebar: [
            {
                text: 'Library guide',
                collapsed: false,
                items: [
                    {
                        text: 'Overview',
                        link: '/library/',
                    },
                    {
                        text: 'Global patterns',
                        link: '/library/global-patterns',
                    },
                    {
                        text: 'Observability',
                        link: '/library/observability',
                    },
                    {
                        text: 'Test suite',
                        link: '/library/test-suite',
                    },
                    {
                        text: 'Quality workflow',
                        link: '/library/quality-workflow',
                    },
                    {
                        text: 'CI/CD pipelines',
                        link: '/library/ci-cd-pipelines',
                    },
                ]
            },
            {
                text: 'Atoms',
                collapsed: true,
                items: [
                    { text: 'Animation Effect Color Popup', link: '/atoms/animation-effect-color-popup' },
                    { text: 'Animation Map Pin Pulse', link: '/atoms/animation-map-pin-pulse' },
                    { text: 'Animation Raindrop Concentric', link: '/atoms/animation-raindrop-concentric' },
                    { text: 'Animation Rotating Squares', link: '/atoms/animation-rotating-squares' },
                    { text: 'Animation Scroll Down Arrow', link: '/atoms/animation-scroll-down-arrow' },
                    { text: 'Animation Scroll Down Mouse', link: '/atoms/animation-scroll-down-mouse' },
                    { text: 'Animation Status Circle', link: '/atoms/animation-status-circle' },
                    { text: 'Animation Trapezoid', link: '/atoms/animation-trapezoid' },
                    { text: 'Button Cyberpunk', link: '/atoms/button-cyberpunk' },
                    { text: 'Button Large Icon', link: '/atoms/button-large-icon' },
                    { text: 'Button Parallelogram', link: '/atoms/button-parallelogram' },
                    { text: 'Button Simple', link: '/atoms/button-simple' },
                    { text: 'Card Calendar', link: '/atoms/card-calendar' },
                    { text: 'Generic Simple Chip', link: '/atoms/generic-simple-chip' },
                    { text: 'Highlight Belt', link: '/atoms/highlight-belt' },
                    { text: 'Highlight Border', link: '/atoms/highlight-border' },
                    { text: 'Highlight Corner Ribbon', link: '/atoms/highlight-corner-ribbon' },
                    { text: 'Highlight Line', link: '/atoms/highlight-line' },
                    { text: 'Highlight Popup', link: '/atoms/highlight-popup' },
                    { text: 'Highlight Rollup', link: '/atoms/highlight-rollup' },
                    { text: 'Input Simple', link: '/atoms/input-simple' },
                    { text: 'Progression Book Front', link: '/atoms/progression-book-front' },
                    { text: 'Progression Book Side', link: '/atoms/progression-book-side' },
                    { text: 'Progression Gear', link: '/atoms/progression-gear' },
                    { text: 'Progression Icon Showcase', link: '/atoms/progression-icon-showcase' },
                    { text: 'Progression Solar System', link: '/atoms/progression-solar-system' },
                    { text: 'Reveal Advancing Moon', link: '/atoms/reveal-advancing-moon' },
                    { text: 'Reveal Slash Container', link: '/atoms/reveal-slash-container' },
                    { text: 'Typography Simple Text Icon', link: '/atoms/typography-simple-text-icon' },
                    { text: 'Typography Special Title', link: '/atoms/typography-special-title' },
                    { text: 'Typography SVG Title', link: '/atoms/typography-svg-title' },
                ]
            },
            {
                text: 'Molecules',
                collapsed: true,
                items: [
                    { text: 'Button Expressive', link: '/molecules/button-expressive' },
                    { text: 'Button Icon Focus', link: '/molecules/button-icon-focus' },
                    { text: 'Button Neon', link: '/molecules/button-neon' },
                    { text: 'Button Social', link: '/molecules/button-social' },
                    { text: 'Card Book', link: '/molecules/card-book' },
                    { text: 'Card Countdown', link: '/molecules/card-countdown' },
                    { text: 'Card Credit', link: '/molecules/card-credit' },
                    { text: 'Card Image Hover', link: '/molecules/card-image-hover' },
                    { text: 'Card Simple', link: '/molecules/card-simple' },
                    { text: 'Card Simple Blockquote', link: '/molecules/card-simple-blockquote' },
                    { text: 'Card Simple No Theme', link: '/molecules/card-simple-no-theme' },
                    { text: 'Card Simple Variants', link: '/molecules/card-simple-variants' },
                    { text: 'List Opening Hours', link: '/molecules/list-opening-hours' },
                    { text: 'List Simple', link: '/molecules/list-simple' },
                    { text: 'Panel Action', link: '/molecules/panel-action' },
                    { text: 'Panel Simple', link: '/molecules/panel-simple' },
                    { text: 'Panel Simple Typography', link: '/molecules/panel-simple-typography' },
                    { text: 'Progress Circular CSS', link: '/molecules/progress-circular-css' },
                    { text: 'Progress Circular SVG', link: '/molecules/progress-circular-svg' },
                ]
            },
            {
                text: 'Organisms',
                collapsed: true,
                items: [
                    { text: 'Card Choose Option', link: '/organisms/card-choose-option' },
                    { text: 'Card Event Lite', link: '/organisms/card-event-lite' },
                    { text: 'Card Event Long', link: '/organisms/card-event-long' },
                    { text: 'Card Event Minimal', link: '/organisms/card-event-minimal' },
                    { text: 'Card Image Slash', link: '/organisms/card-image-slash' },
                    { text: 'Card Info Hover', link: '/organisms/card-info-hover' },
                    { text: 'Card Overflow', link: '/organisms/card-overflow' },
                    { text: 'Card Pricing', link: '/organisms/card-pricing' },
                    { text: 'Card Stats Team', link: '/organisms/card-stats-team' },
                    { text: 'Panel Timeline Tree', link: '/organisms/panel-timeline-tree' },
                ]
            }
        ]
    }
})

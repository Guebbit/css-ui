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
                text: 'Core',
                collapsed: false,
                items: [
                    { text: 'Button', link: '/components/atoms/button' },
                    { text: 'Input', link: '/components/atoms/input' },
                    { text: 'Text', link: '/components/atoms/text' },
                    {
                        text: 'Card',
                        collapsed: false,
                        items: [
                            { text: 'Overview', link: '/components/atoms/card' },
                            { text: 'Variants', link: '/components/atoms/card-variants' },
                            { text: 'Media & Icons', link: '/components/atoms/card-media-icons' },
                            { text: 'Unstyled', link: '/components/atoms/card-unstyled' },
                            { text: 'Showcase', link: '/components/atoms/card-showcase' },
                        ]
                    },
                    { text: 'List', link: '/components/molecules/list' },
                    { text: 'Panel', link: '/components/molecules/panel' },
                ]
            },
            {
                text: 'Atoms',
                collapsed: true,
                items: [
                    { text: 'Animation Map Pin Pulse', link: '/components/atoms/animation-map-pin-pulse' },
                    { text: 'Animation Raindrop Concentric', link: '/components/atoms/animation-raindrop-concentric' },
                    { text: 'Animation Rotating Squares', link: '/components/atoms/animation-rotating-squares' },
                    { text: 'Animation Scroll Down Arrow', link: '/components/atoms/animation-scroll-down-arrow' },
                    { text: 'Animation Scroll Down Mouse', link: '/components/atoms/animation-scroll-down-mouse' },
                    { text: 'Animation Status Circle', link: '/components/atoms/animation-status-circle' },
                    { text: 'Animation Trapezoid', link: '/components/atoms/animation-trapezoid' },
                    { text: 'Button Cyberpunk', link: '/components/atoms/button-cyberpunk' },
                    { text: 'Button Parallelogram', link: '/components/atoms/button-parallelogram' },
                    { text: 'Blockquote', link: '/components/atoms/blockquote' },
                    { text: 'Card Calendar', link: '/components/atoms/card-calendar' },
                    { text: 'Highlight Belt', link: '/components/atoms/highlight-belt' },
                    { text: 'Highlight Border', link: '/components/atoms/highlight-border' },
                    { text: 'Highlight Corner Ribbon', link: '/components/atoms/highlight-corner-ribbon' },
                    { text: 'Highlight Line', link: '/components/atoms/highlight-line' },
                    { text: 'Highlight Popup', link: '/components/atoms/highlight-popup' },
                    { text: 'Highlight Rollup', link: '/components/atoms/highlight-rollup' },
                    { text: 'Progression Book Front', link: '/components/atoms/progression-book-front' },
                    { text: 'Progression Book Side', link: '/components/atoms/progression-book-side' },
                    { text: 'Progression Gear', link: '/components/atoms/progression-gear' },
                    { text: 'Progression Icon Showcase', link: '/components/atoms/progression-icon-showcase' },
                    { text: 'Progression Solar System', link: '/components/atoms/progression-solar-system' },
                    { text: 'Reveal Advancing Moon', link: '/components/atoms/reveal-advancing-moon' },
                    { text: 'Reveal Slash Container', link: '/components/atoms/reveal-slash-container' },
                    { text: 'Typography Special Title', link: '/components/atoms/typography-special-title' },
                    { text: 'Typography SVG Title', link: '/components/atoms/typography-svg-title' },
                ]
            },
            {
                text: 'Molecules',
                collapsed: true,
                items: [
                    { text: 'Button Expressive', link: '/components/molecules/button-expressive' },
                    { text: 'Button Icon Focus', link: '/components/molecules/button-icon-focus' },
                    { text: 'Button Neon', link: '/components/molecules/button-neon' },
                    { text: 'Button Social', link: '/components/molecules/button-social' },
                    { text: 'Card Book', link: '/components/molecules/card-book' },
                    { text: 'Card Countdown', link: '/components/molecules/card-countdown' },
                    { text: 'Card Credit', link: '/components/molecules/card-credit' },
                    { text: 'Card Image Hover', link: '/components/molecules/card-image-hover' },
                    { text: 'List Opening Hours', link: '/components/molecules/list-opening-hours' },
                    { text: 'Panel Action', link: '/components/molecules/panel-action' },
                    { text: 'Panel Simple Typography', link: '/components/molecules/panel-simple-typography' },
                    { text: 'Progress Circular CSS', link: '/components/molecules/progress-circular-css' },
                    { text: 'Progress Circular SVG', link: '/components/molecules/progress-circular-svg' },
                ]
            },
            {
                text: 'Organisms',
                collapsed: true,
                items: [
                    { text: 'Card Choose Option', link: '/components/organisms/card-choose-option' },
                    { text: 'Card Event Lite', link: '/components/organisms/card-event-lite' },
                    { text: 'Card Event Long', link: '/components/organisms/card-event-long' },
                    { text: 'Card Event Minimal', link: '/components/organisms/card-event-minimal' },
                    { text: 'Card Image Slash', link: '/components/organisms/card-image-slash' },
                    { text: 'Card Info Hover', link: '/components/organisms/card-info-hover' },
                    { text: 'Card Overflow', link: '/components/organisms/card-overflow' },
                    { text: 'Card Pricing', link: '/components/organisms/card-pricing' },
                    { text: 'Card Stats Team', link: '/components/organisms/card-stats-team' },
                    { text: 'Panel Timeline Tree', link: '/components/organisms/panel-timeline-tree' },
                ]
            }
        ]
    }
})

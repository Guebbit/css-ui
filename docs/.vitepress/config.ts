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
                    {
                        text: 'Animations',
                        collapsed: false,
                        items: [
                            {
                                text: 'Wallpaper',
                                collapsed: true,
                                items: [
                                    {
                                        text: 'Raindrop Concentric',
                                        link: '/atoms/animation-raindrop-concentric',
                                    },
                                ]
                            },
                            {
                                text: 'Reveal',
                                collapsed: true,
                                items: [
                                    {
                                        text: 'Advancing Moon',
                                        link: '/atoms/animation-advancing-moon',
                                    },
                                ]
                            },
                            {
                                text: 'Pages scroll',
                                collapsed: true,
                                items: [
                                    {
                                        text: 'Scroll Down Arrow',
                                        link: '/atoms/animation-scroll-down-arrow',
                                    },
                                    {
                                        text: 'Scroll Down Mouse',
                                        link: '/atoms/animation-scroll-down-mouse',
                                    }
                                ]
                            },
                            {
                                text: 'Map Pins',
                                collapsed: true,
                                items: [
                                    {
                                        text: 'Pin pulse',
                                        link: '/atoms/animation-map-pin-pulse',
                                    }
                                ]
                            },
                            {
                                text: 'Progression',
                                collapsed: true,
                                items: [
                                    {
                                        text: 'Book Front Load',
                                        link: '/atoms/animation-book-front-load',
                                    },
                                    {
                                        text: 'Book Side Load',
                                        link: '/atoms/animation-book-side-load',
                                    },
                                    {
                                        text: 'Gear Load',
                                        link: '/atoms/animation-gear-load',
                                    },
                                    {
                                        text: 'Icon Showcase Load',
                                        link: '/atoms/animation-icon-showcase-load',
                                    },
                                    {
                                        text: 'Rotating Squares',
                                        link: '/atoms/animation-rotating-squares',
                                    },
                                    {
                                        text: 'Solar System Load',
                                        link: '/atoms/animation-solar-system-load',
                                    },
                                ]
                            },
                            {
                                text: 'Effects and forms',
                                collapsed: true,
                                items: [
                                    {
                                        text: 'Status Circle',
                                        link: '/atoms/animation-status-circle',
                                    },
                                    {
                                        text: 'Shape Slash Container',
                                        link: '/atoms/animation-shape-slash-container',
                                    },
                                    {
                                        text: 'Trapezoid Form',
                                        link: '/atoms/animation-trapezoid-form',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        text: 'Buttons',
                        collapsed: false,
                        items: [
                            {
                                text: 'Cyberpunk Button',
                                link: '/atoms/button-cyberpunk',
                            },
                            {
                                text: 'Button Large Icon',
                                link: '/atoms/button-large-icon',
                            },
                            {
                                text: 'Button Parallelogram',
                                link: '/atoms/button-parallelogram',
                            },
                            {
                                text: 'Simple Button',
                                link: '/atoms/button-simple',
                            },
                        ]
                    },
                    {
                        text: 'Cards',
                        collapsed: false,
                        items: [
                            {
                                text: 'Calendar Card',
                                link: '/atoms/card-calendar',
                            },
                        ]
                    },
                    {
                        text: 'Highlights',
                        collapsed: false,
                        items: [
                            {
                                text: 'Corner Ribbon',
                                link: '/atoms/highlight-corner-ribbon',
                            },
                            {
                                text: 'Highlight Belt',
                                link: '/atoms/highlight-belt',
                            },
                            {
                                text: 'Highlight Border',
                                link: '/atoms/highlight-border',
                            },
                            {
                                text: 'Highlight Line',
                                link: '/atoms/highlight-line',
                            },
                            {
                                text: 'Highlight Popup',
                                link: '/atoms/highlight-popup',
                            },
                            {
                                text: 'Highlight Rollup',
                                link: '/atoms/highlight-rollup',
                            },
                        ]
                    },
                    {
                        text: 'Generics',
                        collapsed: false,
                        items: [
                            {
                                text: 'Simple Chip',
                                link: '/atoms/generic-simple-chip',
                            },
                        ]
                    },
                    {
                        text: 'Inputs',
                        collapsed: false,
                        items: [
                            {
                                text: 'Simple Input',
                                link: '/atoms/input-simple',
                            },
                        ]
                    },
                    {
                        text: 'Typography',
                        collapsed: false,
                        items: [
                            {
                                text: 'Simple Icon Text',
                                link: '/atoms/typography-simple-text-icon',
                            },
                            {
                                text: 'Special Title',
                                link: '/atoms/typography-special-title',
                            },
                            {
                                text: 'Svg Title',
                                link: '/atoms/typography-svg-title',
                            },
                        ]
                    },
                ]
            },
            {
                text: 'Molecules',
                collapsed: true,
                items: [
                    {
                        text: 'Buttons',
                        collapsed: false,
                        items: [
                            {
                                text: 'Expressive Button',
                                link: '/molecules/button-expressive',
                            },
                            {
                                text: 'Icon Focus Button',
                                link: '/molecules/button-icon-focus',
                            },
                            {
                                text: 'Neon Button',
                                link: '/molecules/button-neon',
                            },
                            {
                                text: 'Social Button',
                                link: '/molecules/button-social',
                            },
                        ]
                    },
                    {
                        text: 'Cards',
                        collapsed: false,
                        items: [
                            {
                                text: 'Blockquote Simple',
                                link: '/molecules/card-simple-blockquote',
                            },
                            {
                                text: 'Book Card',
                                link: '/molecules/card-book',
                            },
                            {
                                text: 'Countdown Card',
                                link: '/molecules/card-countdown',
                            },
                            {
                                text: 'Credit Card',
                                link: '/molecules/card-credit',
                            },
                            {
                                text: 'Image Hover Card',
                                link: '/molecules/card-image-hover',
                            },
                            {
                                text: 'Simple Cards (theme)',
                                link: '/molecules/card-simple',
                            },
                            {
                                text: 'Simple Cards (without theme)',
                                link: '/molecules/card-simple-no-theme',
                            },
                            {
                                text: 'Simple Cards (variants)',
                                link: '/molecules/card-simple-variants',
                            },
                        ]
                    },
                    {
                        text: 'Lists',
                        collapsed: false,
                        items: [
                            {
                                text: 'Simple List',
                                link: '/molecules/list-simple',
                            },
                            {
                                text: 'Opening Hours List',
                                link: '/molecules/list-opening-hours',
                            },
                        ]
                    },
                    {
                        text: 'Panels',
                        collapsed: false,
                        items: [
                            {
                                text: 'Typography Panel',
                                link: '/molecules/panel-simple-typography',
                            },
                            {
                                text: 'SimplePanel',
                                link: '/molecules/panel-simple',
                            },
                            {
                                text: 'ActionPanel',
                                link: '/molecules/panel-action',
                            },
                        ]
                    },
                    {
                        text: 'Lists',
                        collapsed: false,
                        items: [
                            {
                                text: 'Circular Progress Bar CSS',
                                link: '/molecules/progress-circular-css',
                            },
                            {
                                text: 'Circular Progress Bar SVG',
                                link: '/molecules/progress-circular-svg',
                            },
                        ]
                    },
                ]
            },
            {
                text: 'Organisms',
                collapsed: true,
                items: [
                    {
                        text: 'Cards',
                        collapsed: false,
                        items: [
                            {
                                text: 'Choose Option Card',
                                link: '/organisms/card-choose-option',
                            },
                            {
                                text: 'Event Lite Card',
                                link: '/organisms/card-event-lite',
                            },
                            {
                                text: 'Event Long Card',
                                link: '/organisms/card-event-long',
                            },
                            {
                                text: 'Event Minimal Card',
                                link: '/organisms/card-event-minimal',
                            },
                            {
                                text: 'Info Hover Card',
                                link: '/organisms/card-info-hover',
                            },
                            {
                                text: 'Image Slash Card',
                                link: '/organisms/card-image-slash',
                            },
                            {
                                text: 'Overflow Card',
                                link: '/organisms/card-overflow',
                            },
                            {
                                text: 'Pricing Card',
                                link: '/organisms/card-pricing',
                            },
                            {
                                text: 'Stats Team Card',
                                link: '/organisms/card-stats-team',
                            },
                        ]
                    },
                    {
                        text: 'Panels',
                        collapsed: false,
                        items: [
                            {
                                text: 'Timeline Tree',
                                link: '/organisms/panel-timeline-tree',
                            },
                        ]
                    }
                ]
            }
        ]
    }
})

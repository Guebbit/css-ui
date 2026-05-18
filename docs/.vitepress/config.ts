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
                                        link: '/components/atoms/animations/RaindropConcentric.md',
                                    },
                                ]
                            },
                            {
                                text: 'Reveal',
                                collapsed: true,
                                items: [
                                    {
                                        text: 'Advancing Moon',
                                        link: '/components/atoms/animations/AdvancingMoon.md',
                                    },
                                ]
                            },
                            {
                                text: 'Pages scroll',
                                collapsed: true,
                                items: [
                                    {
                                        text: 'Scroll Down Arrow',
                                        link: '/components/atoms/animations/ScrollDownArrow.md',
                                    },
                                    {
                                        text: 'Scroll Down Mouse',
                                        link: '/components/atoms/animations/ScrollDownMouse.md',
                                    }
                                ]
                            },
                            {
                                text: 'Map Pins',
                                collapsed: true,
                                items: [
                                    {
                                        text: 'Pin pulse',
                                        link: '/components/atoms/animations/MapPinPulse.md',
                                    }
                                ]
                            },
                            {
                                text: 'Progression',
                                collapsed: true,
                                items: [
                                    {
                                        text: 'Book Front Load',
                                        link: '/components/atoms/animations/BookFrontLoad.md',
                                    },
                                    {
                                        text: 'Book Side Load',
                                        link: '/components/atoms/animations/BookSideLoad.md',
                                    },
                                    {
                                        text: 'Gear Load',
                                        link: '/components/atoms/animations/GearLoad.md',
                                    },
                                    {
                                        text: 'Icon Showcase Load',
                                        link: '/components/atoms/animations/IconShowcaseLoad.md',
                                    },
                                    {
                                        text: 'Rotating Squares',
                                        link: '/components/atoms/animations/RotatingSquares.md',
                                    },
                                    {
                                        text: 'Solar System Load',
                                        link: '/components/atoms/animations/SolarSystemLoad.md',
                                    },
                                ]
                            },
                            {
                                text: 'Effects and forms',
                                collapsed: true,
                                items: [
                                    {
                                        text: 'Effect Mirror Reflection',
                                        link: '/components/atoms/animations/EffectMirrorReflection.md',
                                    },
                                    {
                                        text: 'Status Circle',
                                        link: '/components/atoms/animations/StatusCircle.md',
                                    },
                                    {
                                        text: 'Shape Slash Container',
                                        link: '/components/atoms/animations/ShapeSlashContainer.md',
                                    },
                                    {
                                        text: 'Trapezoid Form',
                                        link: '/components/atoms/animations/TrapezoidForm.md',
                                    },
                                ],
                            },
                            {
                                text: 'Panel Askew Doors',
                                link: '/components/atoms/animations/PanelAskewDoors.md',
                            },
                        ],
                    },
                    {
                        text: 'Buttons',
                        collapsed: false,
                        items: [
                            {
                                text: 'Cyberpunk Button',
                                link: '/components/atoms/buttons/CyberpunkButton.md',
                            },
                            {
                                text: 'Button Large Icon',
                                link: '/components/atoms/buttons/ButtonLargeIcon.md',
                            },
                            {
                                text: 'Button Parallelogram',
                                link: '/components/atoms/buttons/ButtonParallelogram.md',
                            },
                            {
                                text: 'Simple Button',
                                link: '/components/atoms/buttons/SimpleButton.md',
                            },
                        ]
                    },
                    {
                        text: 'Cards',
                        collapsed: false,
                        items: [
                            {
                                text: 'Calendar Card',
                                link: '/components/atoms/cards/CalendarCard.md',
                            },
                        ]
                    },
                    {
                        text: 'Highlights',
                        collapsed: false,
                        items: [
                            {
                                text: 'Corner Ribbon',
                                link: '/components/atoms/highlights/CornerRibbon.md',
                            },
                            {
                                text: 'Highlight Belt',
                                link: '/components/atoms/highlights/HighlightBelt.md',
                            },
                            {
                                text: 'Highlight Border',
                                link: '/components/atoms/highlights/HighlightBorder.md',
                            },
                            {
                                text: 'Highlight Line',
                                link: '/components/atoms/highlights/HighlightLine.md',
                            },
                            {
                                text: 'Highlight Popup',
                                link: '/components/atoms/highlights/HighlightPopup.md',
                            },
                            {
                                text: 'Highlight Rollup',
                                link: '/components/atoms/highlights/HighlightRollup.md',
                            },
                        ]
                    },
                    {
                        text: 'Generics',
                        collapsed: false,
                        items: [
                            {
                                text: 'Simple Chip',
                                link: '/components/atoms/generics/SimpleChip.md',
                            },
                        ]
                    },
                    {
                        text: 'Inputs',
                        collapsed: false,
                        items: [
                            {
                                text: 'Simple Input',
                                link: '/components/atoms/inputs/SimpleInput.md',
                            },
                        ]
                    },
                    {
                        text: 'Typography',
                        collapsed: false,
                        items: [
                            {
                                text: 'Simple Icon Text',
                                link: '/components/atoms/typography/SimpleTextIcon.md',
                            },
                            {
                                text: 'Special Title',
                                link: '/components/atoms/typography/SpecialTitle.md',
                            },
                            {
                                text: 'Svg Title',
                                link: '/components/atoms/typography/SvgTitle.md',
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
                                link: '/components/molecules/buttons/ExpressiveButton.md',
                            },
                            {
                                text: 'Icon Focus Button',
                                link: '/components/molecules/buttons/IconFocusButton.md',
                            },
                            {
                                text: 'Neon Button',
                                link: '/components/molecules/buttons/NeonButton.md',
                            },
                            {
                                text: 'Social Button',
                                link: '/components/molecules/buttons/SocialButton.md',
                            },
                        ]
                    },
                    {
                        text: 'Cards',
                        collapsed: false,
                        items: [
                            {
                                text: 'Blockquote Simple',
                                link: '/components/molecules/cards/SimpleBlockquote.md',
                            },
                            {
                                text: 'Book Card',
                                link: '/components/molecules/cards/BookCard.md',
                            },
                            {
                                text: 'Countdown Card',
                                link: '/components/molecules/cards/CountdownCard.md',
                            },
                            {
                                text: 'Credit Card',
                                link: '/components/molecules/cards/CreditCard.md',
                            },
                            {
                                text: 'Image Hover Card',
                                link: '/components/molecules/cards/ImageHoverCard.md',
                            },
                            {
                                text: 'Simple Cards (theme)',
                                link: '/components/molecules/cards/SimpleCard.md',
                            },
                            {
                                text: 'Simple Cards (without theme)',
                                link: '/components/molecules/cards/SimpleCard-no-theme.md',
                            },
                            {
                                text: 'Simple Cards (variants)',
                                link: '/components/molecules/cards/SimpleCard-variants.md',
                            },
                        ]
                    },
                    {
                        text: 'Lists',
                        collapsed: false,
                        items: [
                            {
                                text: 'Simple List',
                                link: '/components/molecules/lists/SimpleList.md',
                            },
                            {
                                text: 'Opening Hours List',
                                link: '/components/molecules/lists/OpeningHoursList.md',
                            },
                        ]
                    },
                    {
                        text: 'Panels',
                        collapsed: false,
                        items: [
                            {
                                text: 'Typography Panel',
                                link: '/components/molecules/panels/SimpleTypography.md',
                            },
                            {
                                text: 'SimplePanel',
                                link: '/components/molecules/panels/SimplePanel.md',
                            },
                            {
                                text: 'ActionPanel',
                                link: '/components/molecules/panels/ActionPanel.md',
                            },
                        ]
                    },
                    {
                        text: 'Lists',
                        collapsed: false,
                        items: [
                            {
                                text: 'Circular Progress Bar CSS',
                                link: '/components/molecules/progress/CircularProgressBarCss.md',
                            },
                            {
                                text: 'Circular Progress Bar SVG',
                                link: '/components/molecules/progress/CircularProgressBarSvg.md',
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
                                link: '/components/organisms/cards/ChooseOptionCard.md',
                            },
                            {
                                text: 'Event Lite Card',
                                link: '/components/organisms/cards/EventLiteCard.md',
                            },
                            {
                                text: 'Event Long Card',
                                link: '/components/organisms/cards/EventLongCard.md',
                            },
                            {
                                text: 'Event Minimal Card',
                                link: '/components/organisms/cards/EventMinimalCard.md',
                            },
                            {
                                text: 'Info Hover Card',
                                link: '/components/organisms/cards/InfoHoverCard.md',
                            },
                            {
                                text: 'Image Slash Card',
                                link: '/components/organisms/cards/ImageSlashCard.md',
                            },
                            {
                                text: 'Overflow Card',
                                link: '/components/organisms/cards/OverflowCard.md',
                            },
                            {
                                text: 'Pricing Card',
                                link: '/components/organisms/cards/PricingCard.md',
                            },
                            {
                                text: 'Stats Team Card',
                                link: '/components/organisms/cards/StatsTeamCard.md',
                            },
                        ]
                    },
                    {
                        text: 'Panels',
                        collapsed: false,
                        items: [
                            {
                                text: 'Timeline Tree',
                                link: '/components/organisms/panels/TimelineTree.md',
                            },
                        ]
                    }
                ]
            }
        ]
    }
})

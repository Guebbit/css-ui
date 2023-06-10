import { defineConfig } from 'vitepress';

export default defineConfig({
    lang: 'en-US',
    title: 'Guebbit Vue Library',
    description: "Guebbit's personal SCSS Library (MIT license, free to use)",
    themeConfig: {
        logo: "/logotype.svg",
        siteTitle: "SCSS Library",
        search: {
            provider: 'local'
        },
        nav: [
            {
                text: 'Github',
                link: 'https://github.com/Guebbit/scss-library',
            },
            {
                text: 'TODO absorb',
                items: [
                    {
                        text: 'Enodeclipse',
                        link: 'https://codepen.io/shshaw/pen/WyoozY'
                    }
                ]
            },
            {
                text: 'TODO separate projects / showcases',
                items: [
                    {
                        text: 'hyperSpace1',
                        link: 'https://guebbit.com/admin/view/399'
                    },
                    {
                        text: 'Guebbit Intro',
                        link: 'https://guebbit.com/admin/view/442'
                    },
                    {
                        text: 'Manga beats Intro',
                        link: 'https://guebbit.com/admin/view/441'
                    }
                ]
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
                text: 'Workbench',
                link: 'workbench.md'
            },
            {
                text: 'Showcase',
                link: 'showcase.md'
            },
            {
                text: 'Global',
                collapsible: true,
                collapsed: true,
                items: [
                    {
                        text: 'Builders',
                        collapsible: true,
                        collapsed: false,
                        items: [
                            {
                                text: 'Placeholder',
                                link: '/global/builders/placeholder.md',
                            },
                            {
                                text: 'Scrollbar',
                                link: '/global/builders/scrollbar.md',
                            },
                            {
                                text: 'Shadows',
                                link: '/global/builders/shadows.md',
                            }
                        ]
                    },
                    {
                        text: 'Colors (TODO)',
                        collapsible: true,
                        collapsed: false,
                        items: [
                            {
                                text: 'Brands',
                                link: '/global/colors/brands.md',
                            },
                            {
                                text: 'Customs',
                                link: '/global/colors/customs.md',
                            },
                            {
                                text: 'Gradients',
                                link: '/global/colors/gradients.md',
                            },
                            {
                                text: 'materialize',
                                link: '/global/colors/materialize.md',
                            }
                        ]
                    },
                    {
                        text: 'Functions',
                        collapsible: true,
                        collapsed: false,
                        items: [
                            {
                                text: 'Colors',
                                link: '/global/functions/colors.md',
                            },
                            {
                                text: 'Strings',
                                link: '/global/functions/strings.md',
                            }
                        ]
                    },
                    {
                        text: 'Includers',
                        collapsible: true,
                        collapsed: false,
                        items: [
                            {
                                text: 'Compatibility',
                                link: '/global/includers/compatibility.md',
                            },
                            {
                                text: 'Generic',
                                link: '/global/includers/generic.md',
                            },
                            {
                                text: 'Spacers',
                                link: '/global/includers/spacers.md',
                            }
                        ]
                    },
                ]
            },
            {
                text: 'Atoms',
                collapsible: true,
                collapsed: false,
                items: [
                    {
                        text: 'Animations',
                        collapsible: true,
                        collapsed: false,
                        items: [
                            {
                                text: 'Wallpaper',
                                collapsible: true,
                                collapsed: false,
                                items: [
                                    {
                                        text: 'Raindrop Concentric',
                                        link: '/atoms/animations/RaindropConcentric.md',
                                        showcase: true,
                                    },
                                ]
                            },
                            {
                                text: 'Reveal',
                                collapsible: true,
                                collapsed: false,
                                items: [
                                    {
                                        text: 'Advancing Moon',
                                        link: '/atoms/animations/AdvancingMoon.md',
                                        showcase: true,
                                    },
                                ]
                            },
                            {
                                text: 'Pages scroll',
                                collapsible: true,
                                collapsed: false,
                                items: [
                                    {
                                        text: 'Scroll Down Arrow',
                                        link: '/atoms/animations/ScrollDownArrow.md',
                                        showcase: true,
                                    },
                                    {
                                        text: 'Scroll Down Mouse (TODO)',
                                        link: '/atoms/animations/ScrollDownMouse.md',
                                        showcase: true,
                                    }
                                ]
                            },
                            {
                                text: 'Map Pins',
                                collapsible: true,
                                collapsed: false,
                                items: [
                                    {
                                        text: 'Pin pulse',
                                        link: '/atoms/animations/MapPinPulse.md',
                                        showcase: true,
                                    }
                                ]
                            },
                            {
                                text: 'Progression',
                                collapsible: true,
                                collapsed: false,
                                items: [
                                    {
                                        text: 'Progression Alex Warnes',
                                        collapsible: true,
                                        collapsed: true,
                                        items: [
                                            {
                                                text: 'Gradient Circles',
                                                link: '/atoms/animations/AlexWarnesGradientCircles.md',
                                                showcase: true,
                                            },
                                            {
                                                text: 'Gradient Spinners',
                                                link: '/atoms/animations/AlexWarnesGradientSpinners.md',
                                                showcase: true,
                                            },
                                            {
                                                text: 'Rotating Squares',
                                                link: '/atoms/animations/AlexWarnesRotatingSquares.md',
                                                showcase: true,
                                            },
                                            {
                                                text: 'Solar System',
                                                link: '/atoms/animations/AlexWarnesSolarSystem.md',
                                                showcase: true,
                                            },
                                        ]
                                    },
                                    {
                                        text: 'Book Front Load',
                                        link: '/atoms/animations/BookFrontLoad.md',
                                        showcase: true,
                                    },
                                    {
                                        text: 'Book Side Load',
                                        link: '/atoms/animations/BookSideLoad.md',
                                        showcase: true,
                                    },
                                    {
                                        text: 'Gear Load',
                                        link: '/atoms/animations/GearLoad.md',
                                        showcase: true,
                                    },
                                    {
                                        text: 'Icon Showcase Load',
                                        link: '/atoms/animations/IconShowcaseLoad.md',
                                        showcase: true,
                                    },
                                    {
                                        text: 'Solar System Load',
                                        link: '/atoms/animations/SolarSystemLoad.md',
                                        showcase: true,
                                    },
                                    {
                                        text: 'Progression Vineeth.TR',
                                        collapsible: true,
                                        collapsed: true,
                                        items: [
                                            {
                                                text: '(TODO) VineethTR',
                                                link: '/atoms/animations/VineethTRTODO.md',
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                text: 'Panel Askew Doors',
                                link: '/atoms/animations/PanelAskewDoors.md',
                                showcase: true,
                            },
                            {
                                text: 'Status Circle',
                                link: '/atoms/animations/StatusCircle.md',
                                showcase: true,
                            },
                        ],
                    },
                    {
                        text: 'Buttons',
                        collapsible: true,
                        collapsed: false,
                        items: [
                            {
                                text: 'Button Brand Icon',
                                link: '/atoms/buttons/ButtonBrandIcon.md',
                                showcase: true,
                            },
                            {
                                text: 'Button Parallelogram',
                                link: '/atoms/buttons/ButtonParallelogram.md',
                                showcase: true,
                            },
                        ]
                    },
                    {
                        text: 'Highlights',
                        collapsible: true,
                        collapsed: false,
                        items: [
                            {
                                text: 'Corner Ribbon',
                                link: '/atoms/highlights/CornerRibbon.md',
                                showcase: true,
                            },
                            {
                                text: 'Highlight Belt',
                                link: '/atoms/highlights/HighlightBelt.md',
                                showcase: true,
                            },
                            {
                                text: 'Highlight Border',
                                link: '/atoms/highlights/HighlightBorder.md',
                                showcase: true,
                            },
                            {
                                text: 'Highlight Line',
                                link: '/atoms/highlights/HighlightLine.md',
                                showcase: true,
                            },
                            {
                                text: 'Highlight Rollup',
                                link: '/atoms/highlights/HighlightRollup.md',
                                showcase: true,
                            },
                        ]
                    },
                    {
                        text: 'Typography',
                        collapsible: true,
                        collapsed: false,
                        items: [
                            {
                                text: 'Simple Icon Text',
                                link: '/atoms/typography/SimpleTextIcon.md',
                                showcase: true,
                            },
                        ]
                    },
                ]
            },
            {
                text: 'Molecules',
                collapsible: true,
                collapsed: false,
                items: [
                    {
                        text: 'Cards',
                        collapsible: true,
                        collapsed: false,
                        items: [
                            {
                                text: 'Great Blockquote',
                                link: '/molecules/cards/BlockquoteGreat.md',
                                showcase: true,
                            },
                            {
                                text: 'Simple Blockquote',
                                link: '/molecules/cards/BlockquoteSimple.md',
                                showcase: true,
                            },
                            {
                                text: 'Book Card',
                                link: '/molecules/cards/BookCard.md',
                                showcase: true,
                            },
                            {
                                text: 'Credit Card',
                                link: '/molecules/cards/CreditCard.md',
                                showcase: true,
                            },
                            {
                                text: 'Simple Card',
                                link: '/molecules/cards/SimpleCard.md',
                                showcase: true,
                            },
                        ]
                    },
                    {
                        text: 'Lists',
                        collapsible: true,
                        collapsed: false,
                        items: [
                            {
                                text: 'Simple List',
                                link: '/molecules/lists/SimpleList.md',
                                showcase: true,
                            },
                        ]
                    },
                    {
                        text: 'Panels',
                        collapsible: true,
                        collapsed: false,
                        items: [
                            {
                                text: 'Typography Panel',
                                link: '/molecules/panels/TypographyPanel.md',
                                showcase: true,
                            },
                            {
                                text: 'HeroPanel',
                                link: '/molecules/panels/HeroPanel.md',
                                showcase: true,
                            },
                            {
                                text: 'ActionPanel',
                                link: '/molecules/panels/ActionPanel.md',
                                showcase: true,
                            },
                        ]
                    },
                ]
            },
            {
                text: 'Organisms',
                collapsible: true,
                collapsed: false,
                items: [
                    {
                        text: 'Cards',
                        collapsible: true,
                        collapsed: false,
                        items: [
                            {
                                text: 'Hover Info Card',
                                link: '/organisms/cards/HoverInfoCard.md',
                                showcase: true,
                            },
                            {
                                text: 'Stats Team Card',
                                link: '/organisms/cards/StatsTeamCard.md',
                                showcase: true,
                            },
                        ]
                    }
                ]
            }
        ]
    }
})
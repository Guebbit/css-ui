import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'en-US',
    title: 'Guebbit Vue Library',
    description: "Guebbit's personal SCSS Library (MIT license, free to use)",
    themeConfig: {
        logo: "/logotype.svg",
        siteTitle: "SCSS Library",
        nav: [
            {
                text: 'Github',
                link: 'https://github.com/Guebbit/scss-library',
            },
            {
                text: 'TODO absorb',
                items: [
                    {
                        text: 'Eclipse',
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
                text: 'Showcase',
                link: 'showcase.md'
            },
            {
                text: 'Global',
                collapsible: true,
                collapsed: false,
                items: [
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
                        text: 'Badges',
                        collapsible: true,
                        collapsed: false,
                        items: []
                    },
                    {
                        text: 'Buttons',
                        collapsible: true,
                        collapsed: false,
                        items: [
                            {
                                text: 'Button Brand Icon',
                                link: '/atoms/buttons/ButtonBrandIcon.md',
                            },
                            {
                                text: 'Button Parallelogram',
                                link: '/atoms/buttons/ButtonParallelogram.md',
                            },
                        ]
                    },
                    {
                        text: 'Cards',
                        collapsible: true,
                        collapsed: false,
                        items: [
                            {
                                text: 'Great Blockquote',
                                link: '/atoms/cards/BlockquoteGreat.md',
                            },
                            {
                                text: 'Simple Blockquote',
                                link: '/atoms/cards/BlockquoteSimple.md',
                            },
                        ]
                    },
                    {
                        text: 'Drawings',
                        collapsible: true,
                        collapsed: false,
                        items: [
                            {
                                text: 'Status Circle',
                                link: '/atoms/drawings/StatusCircle.md',
                            },
                        ]
                    },
                    {
                        text: 'Highlights',
                        collapsible: true,
                        collapsed: false,
                        items: [
                            {
                                text: 'Hover Line Highlight',
                                link: '/atoms/highlights/HoverLineHighlight.md',
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
                                link: '/atoms/lists/SimpleList.md',
                            },
                        ]
                    },
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
                                    },
                                    {
                                        text: 'Scroll Down Mouse (TODO)',
                                        link: '/atoms/animations/ScrollDownMouse.md',
                                    }
                                ]
                            },
                            {
                                text: 'Map Pins',
                                collapsible: true,
                                collapsed: false,
                                items: [
                                    {
                                        text: 'Pun pulse',
                                        link: '/atoms/animations/map-pin-pulse.md',
                                    }
                                ]
                            },
                            {
                                text: 'Progression',
                                collapsible: true,
                                collapsed: false,
                                items: [
                                    {
                                        text: 'Solar System Load',
                                        link: '/atoms/animations/SolarSystemLoad.md',
                                    },
                                    {
                                        text: 'Gear Load',
                                        link: '/atoms/animations/GearLoad.md',
                                    },
                                    {
                                        text: 'Icon Showcase Load',
                                        link: '/atoms/animations/IconShowcaseLoad.md',
                                    },
                                    {
                                        text: 'Progression Alex Warnes',
                                        collapsible: true,
                                        collapsed: false,
                                        items: [
                                            {
                                                text: 'Gradient Circles',
                                                link: '/atoms/animations/ProgressionAlexWarnesGradientCircles.md',
                                            },
                                            {
                                                text: 'Gradient Circles',
                                                link: '/atoms/animations/ProgressionAlexWarnesGradientCircles.md',
                                            },
                                            {
                                                text: 'Gradient Spinners',
                                                link: '/atoms/animations/ProgressionAlexWarnesGradientSpinners.md',
                                            },
                                            {
                                                text: 'Rotating Squares',
                                                link: '/atoms/animations/ProgressionAlexWarnesRotatingSquares.md',
                                            },
                                            {
                                                text: 'Solar System',
                                                link: '/atoms/animations/ProgressionAlexWarnesSolarSystem.md',
                                            },
                                        ]
                                    },
                                    {
                                        text: 'Progression Vineeth.TR',
                                        collapsible: true,
                                        collapsed: false,
                                        items: [
                                            {
                                                text: '(TODO) VineethTR',
                                                link: '/atoms/animations/VineethTRTODO.md',
                                            },
                                        ]
                                    },
                                ]
                            }
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
                                text: 'Book Card',
                                link: '/molecules/cards/BookCard.md',
                            },
                            {
                                text: 'Credit Card',
                                link: '/molecules/cards/CreditCard.md',
                            },
                            {
                                text: 'Simple Card',
                                link: '/molecules/cards/SimpleCard.md',
                            },
                            {
                                text: 'Simple User Card',
                                link: '/molecules/cards/SimpleUserCard.md',
                            }
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
                            },
                            {
                                text: 'HeroPanel',
                                link: '/molecules/panels/HeroPanel.md',
                            },
                            {
                                text: 'ActionPanel',
                                link: '/molecules/panels/ActionPanel.md',
                            },
                        ]
                    },
                ]
            }
        ]
    }
})
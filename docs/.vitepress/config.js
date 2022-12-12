export default {
    title: "VitePress",
    description: "Guebbit's personal SCSS Library (MIT license, free to use)",
    themeConfig: {
        logo: "/logotype.svg",
        siteTitle: "SCSS Library",
        nav: [
            {
                text: 'Guide',
                link: '/guide'
                // activeMatch: '/config/'
            },
            {
                text: 'Dropdown Menu',
                items: [
                    { text: 'Item A', link: '/item-1' },
                    { text: 'Item B', link: '/item-2' },
                    { text: 'Item C', link: '/item-3' }
                ]
            }
        ],
        sidebar: [
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
                        items: [
                            {
                                text: 'Icon Text Resources',
                                link: '/atoms/badges/IconTextResources.md',
                            },
                        ]
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
                                text: 'Progression Alex Warnes',
                                collapsible: true,
                                collapsed: false,
                                items: [
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
                        text: 'Panels',
                        collapsible: true,
                        collapsed: false,
                        items: [
                            {
                                text: 'Typography Panel',
                                link: '/molecules/panels/TypographyPanel.md',
                            }
                        ]
                    },
                ]
            }
        ]
    }
}
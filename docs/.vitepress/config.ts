import { defineConfig } from 'vitepress';

export default defineConfig({
    lang: "en-US",
    title: "Guebbit SCSS Library",
    titleTemplate: ":title - base SCSS plus components",
    description: "Guebbit's personal SCSS Library (MIT license, free to use).",
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
                text: 'Complex',
                items: [
                    {
                        text: 'Heropanel3 (JS)',
                        link: 'https://guebbit.com/admin/view/244'
                    },
                    {
                        text: 'pricing card 2 or remove?',
                        link: 'https://guebbit.com/admin/view/382'
                    },
                    {
                        text: 'hover buttons',
                        link: 'https://guebbit.com/admin/view/409'
                    },
                    {
                        text: 'hover effect ideas (check vrmetagames)',
                        link: 'https://guebbit.com/admin/view/368'
                    },
                ]
            },
            {
                text: 'Vue Only',
                items: [
                    {
                        text: 'Panel - simple card (icon)',
                        link: 'https://guebbit.com/admin/view/239'
                    },
                    {
                        text: 'Panel - hover info card',
                        link: 'https://guebbit.com/admin/view/264'
                    },
                    {
                        text: 'Panel - video collection',
                        link: 'https://guebbit.com/admin/view/358'
                    },
                ]
            },
            {
                text: 'Vuetify Only',
                items: [
                    {
                        text: 'contact form',
                        link: 'https://guebbit.com/admin/view/235'
                    },
                    {
                        text: 'info panel',
                        link: 'https://guebbit.com/admin/view/302'
                    },
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
                link: 'workbench.md',
            },
            {
                text: 'Global',
                collapsed: true,
                items: [
                    {
                        text: 'Builders',
                        collapsed: false,
                        items: [
                            {
                                text: 'Scrollbar',
                                link: '/global/builders/scrollbar.md',
                            },
                            {
                                text: 'Sizes',
                                link: '/global/builders/sizes.md',
                            },
                        ]
                    },
                    {
                        text: 'Colors (TODO)',
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
                                        link: '/atoms/animations/RaindropConcentric.md',
                                    },
                                ]
                            },
                            {
                                text: 'Reveal',
                                collapsed: true,
                                items: [
                                    {
                                        text: 'Advancing Moon',
                                        link: '/atoms/animations/AdvancingMoon.md',
                                    },
                                ]
                            },
                            {
                                text: 'Pages scroll',
                                collapsed: true,
                                items: [
                                    {
                                        text: 'Scroll Down Arrow',
                                        link: '/atoms/animations/ScrollDownArrow.md',
                                    },
                                    {
                                        text: 'Scroll Down Mouse',
                                        link: '/atoms/animations/ScrollDownMouse.md',
                                    }
                                ]
                            },
                            {
                                text: 'Map Pins',
                                collapsed: true,
                                items: [
                                    {
                                        text: 'Pin pulse',
                                        link: '/atoms/animations/MapPinPulse.md',
                                    }
                                ]
                            },
                            {
                                text: 'Progression',
                                collapsed: true,
                                items: [
                                    {
                                        text: 'Progression Vineeth.TR',
                                        collapsed: true,
                                        items: [
                                            {
                                                text: '(TODO) VineethTR',
                                                link: '/atoms/animations/VineethTRTODO.md',
                                            },
                                        ]
                                    },
                                    {
                                        text: 'Alex Warnes Progressions',
                                        link: '/atoms/animations/AlexWarnesProgressions.md',
                                    },
                                    {
                                        text: 'Book Front Load',
                                        link: '/atoms/animations/BookFrontLoad.md',
                                    },
                                    {
                                        text: 'Book Side Load',
                                        link: '/atoms/animations/BookSideLoad.md',
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
                                        text: 'Solar System Load',
                                        link: '/atoms/animations/SolarSystemLoad.md',
                                    },
                                ]
                            },
                            {
                                text: 'Effects and forms',
                                collapsed: true,
                                items: [
                                    {
                                        text: 'Effect Mirror Reflection',
                                        link: '/atoms/animations/EffectMirrorReflection.md',
                                    },
                                    {
                                        text: 'Status Circle',
                                        link: '/atoms/animations/StatusCircle.md',
                                    },
                                    {
                                        text: 'Shape Slash Container',
                                        link: '/atoms/animations/ShapeSlashContainer.md',
                                    },
                                    {
                                        text: 'Trapezoid Form',
                                        link: '/atoms/animations/TrapezoidForm.md',
                                    },
                                ],
                            },
                            {
                                text: 'Panel Askew Doors',
                                link: '/atoms/animations/PanelAskewDoors.md',
                            },
                        ],
                    },
                    {
                        text: 'Buttons',
                        collapsed: false,
                        items: [
                            {
                                text: 'Cyberpunk Button',
                                link: '/atoms/buttons/CyberpunkButton.md',
                            },
                            {
                                text: 'Button Brand Icon',
                                link: '/atoms/buttons/ButtonBrandIcon.md',
                            },
                            {
                                text: 'Button Parallelogram',
                                link: '/atoms/buttons/ButtonParallelogram.md',
                            },
                            {
                                text: 'Simple Button',
                                link: '/atoms/buttons/SimpleButton.md',
                            },
                        ]
                    },
                    {
                        text: 'Cards',
                        collapsed: false,
                        items: [
                            {
                                text: 'Calendar Card',
                                link: '/atoms/cards/CalendarCard.md',
                            },
                            {
                                text: 'Countdown Card',
                                link: '/atoms/cards/CountdownCard.md',
                            },
                        ]
                    },
                    {
                        text: 'Highlights',
                        collapsed: false,
                        items: [
                            {
                                text: 'Corner Ribbon',
                                link: '/atoms/highlights/CornerRibbon.md',
                            },
                            {
                                text: 'Highlight Belt',
                                link: '/atoms/highlights/HighlightBelt.md',
                            },
                            {
                                text: 'Highlight Border',
                                link: '/atoms/highlights/HighlightBorder.md',
                            },
                            {
                                text: 'Highlight Line',
                                link: '/atoms/highlights/HighlightLine.md',
                            },
                            {
                                text: 'Highlight Popup',
                                link: '/atoms/highlights/HighlightPopup.md',
                            },
                            {
                                text: 'Highlight Rollup',
                                link: '/atoms/highlights/HighlightRollup.md',
                            },
                        ]
                    },
                    {
                        text: 'Typography',
                        collapsed: false,
                        items: [
                            {
                                text: 'Simple Icon Text',
                                link: '/atoms/typography/SimpleTextIcon.md',
                            },
                            {
                                text: 'Special Title',
                                link: '/atoms/typography/SpecialTitle.md',
                            },
                            {
                                text: 'Svg Title',
                                link: '/atoms/typography/SvgTitle.md',
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
                                link: '/molecules/buttons/ExpressiveButton.md',
                            },
                            {
                                text: 'Icon Focus Button',
                                link: '/molecules/buttons/IconFocusButton.md',
                            },
                            {
                                text: 'Neon Button',
                                link: '/molecules/buttons/NeonButton.md',
                            },
                            {
                                text: 'Social Button',
                                link: '/molecules/buttons/SocialButton.md',
                            },
                        ]
                    },
                    {
                        text: 'Cards',
                        collapsed: false,
                        items: [
                            {
                                text: 'Blockquote Simple',
                                link: '/molecules/cards/BlockquoteSimple.md',
                            },
                            {
                                text: 'Book Card',
                                link: '/molecules/cards/BookCard.md',
                            },
                            {
                                text: 'Credit Card',
                                link: '/molecules/cards/CreditCard.md',
                            },
                            {
                                text: 'Image Hover Card',
                                link: '/molecules/cards/ImageHoverCard.md',
                            },
                            {
                                text: 'Simple Card',
                                link: '/molecules/cards/SimpleCard.md',
                            },
                        ]
                    },
                    {
                        text: 'Lists',
                        collapsed: false,
                        items: [
                            {
                                text: 'Simple List',
                                link: '/molecules/lists/SimpleList.md',
                            },
                            {
                                text: 'Opening Hours List',
                                link: '/molecules/lists/OpeningHoursList.md',
                            },
                        ]
                    },
                    {
                        text: 'Panels',
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
                    {
                        text: 'Lists',
                        collapsed: false,
                        items: [
                            {
                                text: 'Circular Progress Bar CSS',
                                link: '/molecules/progress/CircularProgressBarCss.md',
                            },
                            {
                                text: 'Circular Progress Bar SVG',
                                link: '/molecules/progress/CircularProgressBarSvg.md',
                            },
                        ]
                    },
                    {
                        text: 'Typography',
                        collapsed: false,
                        items: [
                            {
                                text: 'Trapezoid Text',
                                link: '/molecules/typography/TrapezoidText.md',
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
                                link: '/organisms/cards/ChooseOptionCard.md',
                            },
                            {
                                text: 'Event Lite Card',
                                link: '/organisms/cards/EventLiteCard.md',
                            },
                            {
                                text: 'Event Long Card',
                                link: '/organisms/cards/EventLongCard.md',
                            },
                            {
                                text: 'Event Minimal Card',
                                link: '/organisms/cards/EventMinimalCard.md',
                            },
                            {
                                text: 'Info Hover Card',
                                link: '/organisms/cards/InfoHoverCard.md',
                            },
                            {
                                text: 'Image Slash Card',
                                link: '/organisms/cards/ImageSlashCard.md',
                            },
                            {
                                text: 'Overflow Card',
                                link: '/organisms/cards/OverflowCard.md',
                            },
                            {
                                text: 'Pricing Card',
                                link: '/organisms/cards/PricingCard.md',
                            },
                            {
                                text: 'Stats Team Card',
                                link: '/organisms/cards/StatsTeamCard.md',
                            },
                        ]
                    },
                    {
                        text: 'Panels',
                        collapsed: false,
                        items: [
                            {
                                text: 'Timeline Tree',
                                link: '/organisms/panels/TimelineTree.md',
                            },
                        ]
                    }
                ]
            }
        ]
    }
})
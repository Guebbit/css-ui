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
                text: 'Showcase',
                link: 'showcase.md'
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
                                        showcase: true,
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
                                        showcase: true,
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
                                collapsed: true,
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
                                collapsed: true,
                                items: [
                                    {
                                        text: 'Progression Alex Warnes',
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
                                ]
                            },
                            {
                                text: 'Effects and forms',
                                collapsed: true,
                                items: [
                                    {
                                        text: 'Effect Mirror Reflection',
                                        link: '/atoms/animations/EffectMirrorReflection.html',
                                        showcase: true,
                                    },
                                    {
                                        text: 'Status Circle',
                                        link: '/atoms/animations/StatusCircle.md',
                                        showcase: true,
                                    },
                                    {
                                        text: 'Trapezoid Form',
                                        link: '/atoms/animations/TrapezoidForm.md',
                                        showcase: true,
                                    },
                                ],
                            },
                            {
                                text: 'Panel Askew Doors',
                                link: '/atoms/animations/PanelAskewDoors.md',
                                showcase: true,
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
                                showcase: true,
                            },
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
                            {
                                text: 'Simple Button',
                                link: '/atoms/buttons/SimpleButton.md',
                                showcase: true,
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
                                text: 'Highlight Popup',
                                link: '/atoms/highlights/HighlightPopup.md',
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
                collapsed: true,
                items: [
                    {
                        text: 'Buttons',
                        collapsed: false,
                        items: [
                            {
                                text: 'Expressive Button',
                                link: '/molecules/buttons/ExpressiveButton.md',
                                showcase: true,
                            },
                            {
                                text: 'Icon Focus Button',
                                link: '/molecules/buttons/IconFocusButton.md',
                                showcase: true,
                            },
                            {
                                text: 'Neon Button',
                                link: '/molecules/buttons/NeonButton.md',
                                showcase: true,
                            },
                            {
                                text: 'Social Button',
                                link: '/molecules/buttons/SocialButton.md',
                                showcase: true,
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
                                showcase: true,
                            },
                            {
                                text: 'Blockquote Great',
                                link: '/molecules/cards/BlockquoteGreat.md',
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
                                text: 'Image Hover Card',
                                link: '/molecules/cards/ImageHoverCard.md',
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
                        collapsed: false,
                        items: [
                            {
                                text: 'Simple List',
                                link: '/molecules/lists/SimpleList.md',
                                showcase: true,
                            },
                            {
                                text: 'Opening Hours List',
                                link: '/molecules/lists/OpeningHoursList.md',
                                showcase: true,
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
                    {
                        text: 'Lists',
                        collapsed: false,
                        items: [
                            {
                                text: 'Circular Progress Bar CSS',
                                link: '/molecules/progress/CircularProgressBarCss.md',
                                showcase: true,
                            },
                            {
                                text: 'Circular Progress Bar SVG',
                                link: '/molecules/progress/CircularProgressBarSvg.md',
                                showcase: true,
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
                                showcase: true,
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
                                showcase: true,
                            },
                            {
                                text: 'Event Long Card',
                                link: '/organisms/cards/EventLongCard.md',
                                showcase: true,
                            },
                            {
                                text: 'Info Hover Card',
                                link: '/organisms/cards/InfoHoverCard.md',
                                showcase: true,
                            },
                            {
                                text: 'Image Slash Card',
                                link: '/organisms/cards/ImageSlashCard.md',
                                showcase: true,
                            },
                            {
                                text: 'Overflow Card',
                                link: '/organisms/cards/OverflowCard.md',
                                showcase: true,
                            },
                            {
                                text: 'Pricing Card',
                                link: '/organisms/cards/PricingCard.md',
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
import { describe, it } from 'mocha';
import { expect } from 'chai';
import path from 'path';
import { fileURLToPath } from 'url';
import * as sass from 'sass';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function compileScss(source) {
    return sass.compileString(source, {
        loadPaths: [path.resolve(__dirname, '..'), path.resolve(__dirname, '../node_modules')],
        style: 'expanded',
        url: new URL(`file://${__filename}`)
    }).css;
}

describe('Base Parameters', function () {
    it('keeps background mixin fallback semantics', function () {
        const css = compileScss(`
            @use "../src/_generics" as generics;
            .sample {
                @include generics.base-parameters-background('card-', 'ui-');
            }
        `);

        expect(css).to.contain(
            'background-color: rgba(var(--ui-card-main-color, var(--ui-main-color, var(--ui-surface)))/var(--ui-card-main-color-opacity, var(--ui-main-color-opacity, 1)));'
        );
        expect(css).to.contain(
            'background-color: rgba(var(--ui-card-active-main-color, var(--ui-active-main-color, var(--ui-card-main-color, var(--ui-main-color, var(--ui-surface)))))/var(--ui-card-active-main-color-opacity, var(--ui-active-main-color-opacity, var(--ui-card-main-color-opacity, var(--ui-main-color-opacity, 1)))));'
        );
    });

    it('keeps border mixin active fallback semantics', function () {
        const css = compileScss(`
            @use "../src/_generics" as generics;
            .sample {
                @include generics.base-parameters-borders('card-', 'ui-');
            }
        `);

        expect(css).to.contain(
            'border-color: rgba(var(--ui-card-main-color, var(--ui-main-color))/var(--ui-card-main-color-opacity, var(--ui-main-color-opacity, 1)));'
        );
        expect(css).to.contain(
            'border-color: rgba(var(--ui-card-active-main-color, var(--ui-active-main-color))/var(--ui-card-active-main-color-opacity, var(--ui-active-main-color-opacity, 1)));'
        );
    });

    it('allows applying a token family to a custom property', function () {
        const css = compileScss(`
            @use "../src/_generics" as generics;
            .sample {
                @include generics.base-parameters-property(
                    color,
                    main-color,
                    'badge-',
                    'ui-',
                    var(--ui-surface)
                );
            }
        `);

        expect(css).to.contain(
            'color: rgba(var(--ui-badge-main-color, var(--ui-main-color, var(--ui-surface)))/var(--ui-badge-main-color-opacity, var(--ui-main-color-opacity, 1)));'
        );
        expect(css).to.contain(
            'color: rgba(var(--ui-badge-active-main-color, var(--ui-active-main-color, var(--ui-badge-main-color, var(--ui-main-color, var(--ui-surface)))))/var(--ui-badge-active-main-color-opacity, var(--ui-active-main-color-opacity, var(--ui-badge-main-color-opacity, var(--ui-main-color-opacity, 1)))));'
        );
    });

    it('uses explicit active and opacity overrides when provided', function () {
        const css = compileScss(`
            @use "../src/_generics" as generics;
            .sample {
                @include generics.base-parameters-property(
                    color,
                    main-color,
                    'badge-',
                    'ui-',
                    var(--ui-surface),
                    custom-opacity,
                    .7,
                    var(--ui-manual-active-color),
                    .4,
                    false,
                    false
                );
            }
        `);

        expect(css).to.contain(
            'color: rgba(var(--ui-badge-main-color, var(--ui-main-color, var(--ui-surface)))/var(--ui-badge-custom-opacity, var(--ui-custom-opacity, 0.7)));'
        );
        expect(css).to.contain(
            'color: rgba(var(--ui-badge-active-main-color, var(--ui-active-main-color, var(--ui-manual-active-color)))/var(--ui-badge-active-custom-opacity, var(--ui-active-custom-opacity, 0.4)));'
        );
    });
});

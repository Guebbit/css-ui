import eslint from '@eslint/js';
import globals from 'globals';
import pluginUnicorn from 'eslint-plugin-unicorn';

export default [
    {
        ignores: [
            'dist/**',
            'dist-ssr/**',
            'coverage/**',
            'docs/**',
            'docs/.vitepress/dist/**',
            'docs/.vitepress/cache/**',
            'node_modules/**',
            'old-src/**',
            'playwright-report/**',
            'test-results/**'
        ]
    },
    eslint.configs.recommended,
    {
        files: ['**/*.{js,mjs}'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node
            },
            ecmaVersion: 'latest',
            sourceType: 'module'
        },
        plugins: {
            unicorn: pluginUnicorn
        },
        rules: {
            'no-console': 'warn',
            'no-debugger': 'warn',
            'no-unused-vars': 'warn',
            'no-nested-ternary': 'off',
            'unicorn/no-nested-ternary': 'off',
            'unicorn/prefer-top-level-await': 'off',
            'unicorn/better-regex': 'warn',
            'unicorn/consistent-destructuring': 'warn',
            'unicorn/catch-error-name': [
                'warn',
                {
                    name: 'error'
                }
            ],
            'unicorn/prevent-abbreviations': [
                'warn',
                {
                    replacements: {
                        i: false,
                        e: false,
                        len: false,
                        prop: false,
                        props: false,
                        prev: false,
                        opts: {
                            options: true
                        },
                        ref: {
                            reference: false
                        }
                    }
                }
            ]
        }
    },
    {
        files: ['**/*.cjs'],
        languageOptions: {
            globals: {
                ...globals.node
            },
            sourceType: 'commonjs'
        }
    },
    {
        files: ['test/**/*', '**/*.spec.js', '**/*.test.js', 'visual-fixtures/**/*'],
        rules: {
            'unicorn/prevent-abbreviations': 'off',
            'unicorn/catch-error-name': 'off'
        }
    }
];

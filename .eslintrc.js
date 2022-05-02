module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: ['standard', 'plugin:react/recommended', 'plugin:prettier/recommended'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', 'prettier', 'react-hooks', 'unused-imports'],
    // parser: '@babel/eslint-parser',
    settings: {
        react: {
            version: 'detect',
        },
    },
    overrides: [
        {
            files: ['**/*.spec.js'],
            env: {
                jest: true,
            },
        },
    ],
    rules: {
        'prettier/prettier': [
            'error',
            {
                printWidth: 160,
                singleQuote: true,
                semi: true,
                tabWidth: 4,
                trailingComma: 'all',
                arrowParens: 'avoid',
            },
        ],
        camelcase: 'warn',
        eqeqeq: 'warn',
        'handle-callback-err': 'warn',
        'import/order': [
            'warn',
            {
                groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
                'newlines-between': 'always',
                alphabetize: { order: 'asc', caseInsensitive: true },
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'external',
                        position: 'before',
                    },
                ],
                pathGroupsExcludedImportTypes: ['react'],
            },
        ],
        'no-case-declarations': 'warn',
        'no-console': 'off',
        'no-dupe-keys': 'warn',
        'no-negated-in-lhs': 'warn',
        'no-irregular-whitespace': 'warn',
        'no-redeclare': 'warn',
        'no-return-await': 'warn',
        'no-unsafe-negation': 'warn',
        'no-undef': 'warn',
        'no-unused-expressions': 'warn',
        'no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
        'no-use-before-define': 'warn',
        'no-useless-constructor': 'warn',
        'no-useless-escape': 'warn',
        'no-var': 'warn',
        'object-shorthand': 'error',
        'prefer-const': 'warn',
        'promise/param-names': 'warn',
        'prefer-arrow-callback': 'error',
        'react/display-name': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-no-target-blank': 'warn',
        'react/jsx-key': 'warn',
        'react/no-string-refs': 'warn',
        'react/no-direct-mutation-state': 'warn',
        'react/no-deprecated': 'warn',
        'react/prop-types': 'warn',
        'unused-imports/no-unused-imports': 'warn',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
    },
};

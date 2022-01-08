'use strict';

module.exports = {
    extends: [
        'react-app',
        'react-app/jest'
    ],
    // Stop ESLint from looking for a configuration file in parent folders.
    root: true,
    rules: {
        'indent': ['error', 'tab'],
        'brace-style': ['error', '1tbs'],
        'consistent-return': 'off',
        'eqeqeq': ['error', 'always'],
        'jsx-quotes': ['error', 'prefer-single'],
        'keyword-spacing': ['error', {'after': true, 'before': true}],
        'semi': ['error', 'always'],
        'yoda': ['error', 'always'],
        'eol-last': ['error', 'always'],
        'prefer-const': 'error',
        'no-console': 'warn',
        'no-var': 'error',
        'no-inner-declarations': ['error', 'functions'],
        'no-multi-spaces': ['error'],
        'no-unused-expressions': ['error'],
        'prefer-arrow-callback': 'error',
        'quotes': ['error', 'single', {'avoidEscape': true, 'allowTemplateLiterals': true}],
        'space-before-blocks': 'error',
        'space-before-function-paren': ['error', {
            'anonymous': 'always',
            'named': 'always',
            'asyncArrow': 'always'
        }],
        'valid-typeof': ['error', { 'requireStringLiterals': true }],
        'space-in-parens': ['error', 'always'],
        'comma-dangle': ['error', {
            'arrays': 'always',
            'objects': 'never',
        }],
        'comma-spacing': ['error', { 'before': false, 'after': true }],
        'no-trailing-spaces': 'error'
    }
};
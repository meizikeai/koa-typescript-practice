import globals from 'globals'
import eslint from '@eslint/js'
import react from 'eslint-plugin-react'
import tseslint from 'typescript-eslint'
import tsEslintParser from '@typescript-eslint/parser'
import tsEslintPlugin from '@typescript-eslint/eslint-plugin'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  eslint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    files: ['client/**/*.js'],
    ...react.configs.flat.recommended,
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      react,
    },
  },
  ...[...tseslint.configs.recommended].map((conf) => ({
    ...conf,
    files: ['server/**/*.ts'],
    languageOptions: {
      parser: tsEslintParser,
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': tsEslintPlugin,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 0,
    },
  })),
  {
    ignores: ['node_modules/', 'app/', 'app/**/*.js', 'public/', 'public/**/*.js'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
  },

  eslintConfigPrettier,
]

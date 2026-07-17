import globals from 'globals'
import eslint from '@eslint/js'
import react from 'eslint-plugin-react'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  {
    ignores: ['node_modules/', 'app/', 'app/**/*.js', 'public/', 'public/**/*.js', 'ecosystem.config.cjs'],
  },
  {
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
  },

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

  ...tseslint.configs.recommended.map((conf) => ({
    ...conf,
    files: ['server/**/*.ts'],
    languageOptions: {
      ...conf.languageOptions,
      parser: tseslint.parser,
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      ...conf.plugins,
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      ...conf.rules,
      '@typescript-eslint/no-explicit-any': 0,
    },
  })),

  eslintConfigPrettier,
]

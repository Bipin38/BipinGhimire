import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import astro from 'eslint-plugin-astro';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig(
  { ignores: ['dist/', '.astro/', 'docs/'] },
  js.configs.recommended,
  tseslint.configs.strict,
  astro.configs['jsx-a11y-recommended'],
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
);

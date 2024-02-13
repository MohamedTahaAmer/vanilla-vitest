import { defineConfig } from 'vitest/config'
import eslint from 'vite-plugin-eslint'
export default defineConfig({
	// not include the testing code when running 'npm run build'
	define: {
		'import.meta.vitest': 'undefined',
	},
	test: {
		// test along Code
		includeSource: ['src/**/*.ts'],

		// coverage output format
		coverage: {
			reporter: ['text', 'json', 'html'],
		},
	},
	plugins: [eslint()],
})

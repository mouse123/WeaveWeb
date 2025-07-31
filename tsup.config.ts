import { defineConfig } from 'tsup'

export default defineConfig((options) => {
	return {
		entry: ['src/index.ts'],
		minify: !options.watch,
		sourcemap: options.sourcemap,
		splitting: true,
		clean: true,
		dts: true,
		platform: 'browser',
		format: ['esm', 'cjs', 'iife'],
		legacyOutput: true,
		// 最低支持到 es2018（safari 12.1）
		target: 'es2018',
	}
})

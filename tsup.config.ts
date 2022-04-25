import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: true,
  sourcemap: true,
  clean: true,
  format: ['cjs', 'esm'],
  legacyOutput: true,
  external: ['react', 'react-dom', '@emotion/react'],
  plugins: [],
  dts: true,
  target: 'esnext',
})

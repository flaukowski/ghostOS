import { defineConfig } from 'tsup'

// One entry per public export in package.json, so every subpath resolves.
export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'signal/index': 'src/signal/index.ts',
    'resonance/index': 'src/resonance/index.ts',
    'emergence/index': 'src/emergence/index.ts',
    'safety/index': 'src/safety/index.ts',
    'chiral/index': 'src/chiral/index.ts',
  },
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
})

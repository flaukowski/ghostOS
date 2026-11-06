// Every public export resolves for both ESM import and CJS require, by the
// package's own name (Node self-reference), against the built dist/.
// Run: npm test   (builds first)
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { createRequire } from 'node:module'
import { readFileSync, existsSync } from 'node:fs'

const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'))
const require = createRequire(import.meta.url)
const subpaths = Object.keys(pkg.exports).filter((k) => k !== './package.json')

for (const sub of subpaths) {
  const spec = sub === '.' ? pkg.name : `${pkg.name}/${sub.slice(2)}`
  test(`${spec}: import and require both load, with the same export names`, async () => {
    const esm = await import(spec)
    const cjs = require(spec)
    const names = Object.keys(esm).filter((k) => k !== 'default').sort()
    assert.ok(names.length > 0, 'exports something')
    assert.deepEqual(Object.keys(cjs).filter((k) => k !== 'default').sort(), names)
  })
  test(`${spec}: declared type files exist`, () => {
    for (const cond of ['import', 'require']) {
      const t = pkg.exports[sub][cond].types
      assert.ok(existsSync(new URL('../' + t, import.meta.url)), t)
    }
  })
}

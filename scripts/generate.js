const fs = require('fs')

const V = require('partial.lenses.validation')

const liftExplicitly = Object.assign(Object.create(null), {
  accept: 0,
  reject: 0,
  remove: 0
})

const doLift = name => liftExplicitly[name] === 1
const dontLift = name => liftExplicitly[name] === 0

fs.writeFileSync(
  'src/kefir.partial.lenses.validation.js',
  `// THIS FILE IS GENERATED

import * as V from 'partial.lenses.validation'
import * as K from 'karet.lift'

${Object.entries(V)
    .sort()
    .map(([name, value]) => {
      if (doLift(name) || (typeof value === 'function' && value.length < 4)) {
        return `export const ${name} = K.lift(V.${name})`
      } else if (dontLift(name) || typeof value !== 'function') {
        return `export {${name}} from 'partial.lenses.validation'`
      } else {
        throw Error(`Lifting of '${name}' must be specified explicitly.`)
      }
    })
    .join('\n')}
`
)

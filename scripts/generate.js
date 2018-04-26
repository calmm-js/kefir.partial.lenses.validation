const fs = require('fs')

const V = require('partial.lenses.validation')

fs.writeFileSync(
  'src/kefir.partial.lenses.validation.js',
  `// THIS FILE IS GENERATED

import * as V from 'partial.lenses.validation'
import * as K from 'karet.lift'

${Object.keys(V)
    .sort()
    .map(name => `export const ${name} = K.lift(V.${name})`)
    .join('\n')}
`
)

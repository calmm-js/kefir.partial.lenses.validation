const fs = require('fs')

const V = require('partial.lenses.validation')

fs.writeFileSync(
  'src/kefir.partial.lenses.validation.js',
  `// THIS FILE IS GENERATED

import * as V from 'partial.lenses.validation'
import {liftFOF} from 'kefir.combines'

${Object.keys(V)
    .sort()
    .map(name => `export const ${name} = liftFOF(V.${name})`)
    .join('\n')}
`
)

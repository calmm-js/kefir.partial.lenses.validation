const fs = require('fs')

const V = require('partial.lenses.validation')

fs.writeFileSync(
  'src/kefir.partial.lenses.validation.js',
  `// THIS FILE IS GENERATED

import * as V from 'partial.lenses.validation'
import {liftRec} from 'kefir.combines'

${Object.keys(V)
    .sort()
    .map(name => `export const ${name} = liftRec(V.${name})`)
    .join('\n')}
`
)

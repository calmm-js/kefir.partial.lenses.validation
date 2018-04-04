import babel from 'rollup-plugin-babel'
import nodeResolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import uglify from 'rollup-plugin-uglify'

export default {
  external: [
    'infestines',
    'kefir',
    'kefir.combines',
    'partial.lenses',
    'partial.lenses.validation'
  ],
  output: {
    globals: {
      infestines: 'I',
      kefir: 'Kefir',
      'kefir.combines': 'kefir.combines',
      'partial.lenses': 'partial.lenses',
      'partial.lenses.validation': 'partial.lenses.validation'
    }
  },
  plugins: [
    process.env.NODE_ENV &&
      replace({'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)}),
    nodeResolve(),
    babel(),
    process.env.NODE_ENV === 'production' &&
      uglify({
        compress: {
          hoist_funs: true,
          passes: 3,
          pure_getters: true,
          pure_funcs: ['require']
        }
      })
  ].filter(x => x)
}

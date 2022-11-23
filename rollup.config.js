import terser from '@rollup/plugin-terser'
import copy from 'rollup-plugin-copy'

export default {
  input: 'js/main.js',
  output: {
    file: 'dist/js/main.js',
    format: 'es'
  },
  plugins: [
    terser({
      keep_classnames: true,
      output: {
        comments: false
      }
    }),
    copy({
      targets: [
        { src: ['index.html', 'favicon.ico'], dest: 'dist/' },
        { src: 'assets/**/*', dest: 'dist/assets/' },
        { src: 'css/**/*', dest: 'dist/css/' },
        { src: 'fonts/**/*', dest: 'dist/fonts/' },
        { src: 'js/minze.js', dest: 'dist/js/' }
      ]
    })
  ]
}
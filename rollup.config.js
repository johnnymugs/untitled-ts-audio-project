import typescript from '@rollup/plugin-typescript'
import copy from 'rollup-plugin-copy'
import nodeResolve from 'rollup-plugin-node-resolve'

module.exports = {
    input: 'src/index.ts',
    output: {
      file: 'build/js/bundle.js',
      format: 'iife',
      sourcemap: true
    },
    plugins: [
        typescript(),
        nodeResolve(),
        copy({
            targets: [
                { src: 'src/www/index.html', dest: 'build/' },
                { src: 'src/www/style.css', dest: 'build/' }
            ]
        })
    ]
};

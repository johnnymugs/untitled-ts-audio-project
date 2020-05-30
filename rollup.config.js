import typescript from '@rollup/plugin-typescript'
import copy from 'rollup-plugin-copy'

module.exports = {
    input: 'src/index.ts',
    output: {
      file: 'build/js/bundle.js',
      format: 'umd',
      name: 'projectbundle',
      sourcemap: true
    },
    plugins: [
        typescript() ,
        copy({
            targets: [
                { src: 'src/www/index.html', dest: 'build/' },
                { src: 'src/www/style.css', dest: 'build/' }
            ]
        })
    ]
};

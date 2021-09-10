import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import copy from 'rollup-plugin-copy';
import pkg from './package.json';

const config = {
  input: pkg.source,
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'esm' }
  ],
  plugins: [
    external(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    }),
    del({ targets: ['dist/*'] }),
    copy({
      targets: [
        { src: ['src/styles', 'src/fonts'], dest: 'dist' },
        {
          src: 'package.json',
          dest: 'dist',
          transform: (contents) => contents.toString()
            .replace(/dist\//g, '')
        }
      ]
    })
  ],
  external: Object.keys(pkg.peerDependencies || [])
};

export default config;

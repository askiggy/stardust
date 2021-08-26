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
        { src: 'package.json', dest: 'dist' },
        { src: 'fonts', dest: 'dist' },
        { src: 'components/**/*.scss', dest: 'styles/components' },
        { src: 'styles', dest: 'dist' }
      ]
    })
  ],
  external: Object.keys(pkg.peerDependencies || [])
};

export default config;

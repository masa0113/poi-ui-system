import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    babel({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      babelHelpers: 'bundled',
      exclude: 'node_modules/**'
    }),
    postcss({
      extensions: ['.css'],
      extract: 'styles.css', // CSSを別ファイルとして出力する場合
    }),
  ],
  external: ['react', 'react-dom']
};
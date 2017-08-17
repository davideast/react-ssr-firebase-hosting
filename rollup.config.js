import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'es2015/index.server.js',
  format: 'cjs',
  external: [
    'react',
    'react-dom',
    'react-dom/server',
    'express',
    'firebase-functions',
    'isomorphic-fetch'
  ],
  plugins: [ 
    resolve(),
    commonjs({
      include: [
        'node_modules/**'
      ],
      namedExports: {
        'node_modules/react/react.js': ['Children', 'Component', 'PropTypes', 'createElement'],
        'node_modules/react-dom/index.js': ['render'],
        'node_modules/react-dom/server.js': ['renderToString']
      }
    })
  ],
  dest: __dirname + '/functions/index.js'
};

const path = require('path');

module.exports = {
  entry: './src/index.js', // Cambia la ruta según tu estructura de carpetas
  output: {
    path: path.resolve(__dirname, 'dist'), // Carpeta de salida
    filename: 'bundle.js', // Nombre del archivo de salida
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]', // Nombre original de la imagen
              outputPath: 'images', // Carpeta de salida para las imágenes
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: './dist', // Carpeta donde se sirve el contenido en desarrollo
  },
};
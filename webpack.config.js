const path = require('path');

module.exports = {
  entry: './src/index.js',  // Ваш входной файл
  output: {
    path: path.resolve(__dirname, 'dist'),  // Директория для сборки файлов
    filename: 'bundle.js'  // Имя собранного файла
  },
  // Другие настройки и загрузчики
};

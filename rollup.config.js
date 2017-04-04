export default {
  dest: 'dist/bundles/file-picker.umd.js',
  entry: 'dist/index.js',
  format: 'umd',
  globals: {
    '@angular/core': 'ng.core',
  },
  moduleName: 'ng.filePicker',
  sourceMap: false
}

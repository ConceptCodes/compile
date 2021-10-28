const path = require('path')

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  outputDir: path.resolve(__dirname, "../compile-server/views")
}

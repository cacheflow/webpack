const webpack = require('../lib/webpack')
const opts = require('./webpack.config.js')

webpack(opts, () => {
  return false
})
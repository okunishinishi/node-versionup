/**
 * @function _resolveJson
 * @private
 */
'use strict'

const path = require('path')

/** @lends _resolveJson */
function _resolveJson (pathname) {
  let patterns = [
    path.resolve(pathname),
    path.resolve(pathname, 'package.json'),
    path.resolve(pathname, 'bower.json')
  ]
  return patterns.filter((filename) => {
    try {
      return /\.json$/.test(require.resolve(filename))
    } catch (e) {
      return false
    }
  })
}

module.exports = _resolveJson

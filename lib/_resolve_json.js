/**
 * @function _resolveJson
 * @private
 */
'use strict'

const path = require('path')

/** @lends _resolveJson */
function _resolveJson (pathname) {
  const patterns = [
    path.resolve(pathname, 'package.json'),
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

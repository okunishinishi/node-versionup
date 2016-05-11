/**
 * @function _logVersionup
 * @private
 */

'use strict'

const path = require('path')
const pkg = require('../package.json')

/** @lends _logVersionup */
function _logVersionup (from, to, filepath) {
  console.log(
    '[%s] Version incremented: "%s" -> "%s" (in %s)\n',
    pkg.name,
    from, to,
    path.relative(process.cwd(), filepath))
}

module.exports = _logVersionup
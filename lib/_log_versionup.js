/**
 * @function _logVersionup
 * @private
 */

'use strict'

const path = require('path')

/** @lends _logVersionup */
function _logVersionup (from, to, filepath) {
  console.log(
    '[versionup] Version incremented: "%s" -> "%s" (in %s)\n',
    from, to,
    path.relative(process.cwd(), filepath))
}

module.exports = _logVersionup

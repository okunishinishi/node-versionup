/**
 * @function _logVersionup
 * @private
 */

"use strict";

var path = require('path');

/** @lends _logVersionup */
function _logVersionup(from, to, filepath) {
    console.log(
        '[%s] Version incremented: "%s" -> "%s" (in %s)\n',
        path.basename(__filename),
        from, to,
        path.relative(process.cwd(), filepath));
}

module.exports = _logVersionup;
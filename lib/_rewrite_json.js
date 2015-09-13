/**
 * @function _rewriteJson
 * @private
 */

"use strict";

var async = require('async'),
    fs = require('fs');

/** @lends _rewriteJson */
function _rewriteJson(filename, data, callback) {
    var indent = 2;
    async.series([
        function (callback) {
            fs.exists(filename, function (exists) {
                if (exists) {
                    fs.chmod(filename, '644', callback);
                } else {
                    callback();
                }
            });
        },
        function (callback) {
            fs.writeFile(filename, JSON.stringify(data, null, indent), callback);
        }
    ], callback);
}

module.exports = _rewriteJson;

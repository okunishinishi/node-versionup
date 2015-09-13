/**
 * @function _resolveJson
 * @private
 */
"use strict";

var path = require('path'),
    async = require('async');

/** @lends _resolveJson */
function _resolveJson(pathname, callback) {
    var patterns = [
        path.resolve(pathname),
        path.resolve(pathname, 'package.json'),
        path.resolve(pathname, 'bower.json')
    ];
    async.filter(patterns, function (filename, callback) {
        var valid;
        try {
            valid = /\.json$/.test(require.resolve(filename));
        } catch (e) {
            valid = false;
        }
        callback(valid);
    }, callback);
}

module.exports = _resolveJson;
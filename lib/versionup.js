/**
 * Increment version number in package.json (or bower.json)
 * @function versionup
 * @param {object} [options] - Optional settings.
 * @param {string} [options.path=process.cwd()] - Project root path or json file path to work with.
 * @param {string} [options.level="micro"] - Level to change. "major", "minor", or "micro".
 * @param {number} [options.amount=1] - Amount to increment.
 * @param {function} callback - Callback when done.
 */

"use strict";

var argx = require('argx'),
    async = require('async'),
    _logVersionup = require('./_log_versionup'),
    _nextVersion = require('./_next_version'),
    _resolveJson = require('./_resolve_json'),
    _rewriteJson = require('./_rewrite_json');



/** @lends versionup */
function versionup(options, callback) {
    var args = argx(arguments);
    callback = args.pop('function') || argx.noop;
    options = args.pop('object') || {};

    var path = options.path || process.cwd(),
        level = String(options.level || 'micro').trim().toLowerCase(),
        amount = Number(options.amount || 1);

    _resolveJson(path, function (filepaths) {
        var empty = filepaths.length === 0;
        if (empty) {
            callback(new Error('Package file not found with options.path:' + options.path));
            return;
        }
        async.eachSeries(filepaths, function (filepath, callback) {
            var data = require(filepath),
                from = data.version,
                to = _nextVersion(data.version, level, amount);
            data.version = to;
            _rewriteJson(filepath, data, function (err) {
                if (!err) {
                    _logVersionup(from, to, filepath);
                }
                callback(err);
            });
        }, callback);
    });
}

module.exports = versionup;
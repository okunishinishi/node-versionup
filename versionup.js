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

var fs = require('fs'),
    path = require('path'),
    async = require('async');

function _resolveFilepaths(pathname, callback) {
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

function _nextVersion(current, level, amount) {
    var components = String(current).split(/\./);
    var major = Number(components[0] || 0),
        minor = Number(components[1] || 0),
        micro = Number(components[2] || 0);
    switch (level) {
        case 'major':
            return [major + amount, 0, 0].join('.');
        case 'minor':
            return [major, minor + amount, 0].join('.');
        case 'micro':
        default:
            return [major, minor, micro + amount].join('.');
    }
}

function _rewrite(filename, data, callback) {
    fs.writeFile(filename, JSON.stringify(data, null, 4), callback);
}

function _logVersionup(from, to, filepath) {
    console.log(
        '[%s] Version incremented: "%s" -> "%s" (in %s)\n',
        path.basename(__filename),
        from, to,
        path.relative(process.cwd(), filepath));
}

/** @lends versionup */
function versionup(options, callback) {
    options = options || {};

    var path = options.path || process.cwd(),
        level = String(options.level || 'micro').trim().toLowerCase(),
        amount = Number(options.amount || 1);

    _resolveFilepaths(path, function (filepaths) {
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
            _rewrite(filepath, data, function (err) {
                if (!err) {
                    _logVersionup(from, to, filepath);
                }
                callback(err);
            });
        }, callback);
    });
}

module.exports = versionup;
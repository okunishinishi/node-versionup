/**
 * Increment version number in package.json (or bower.json)
 * @module versionup
 * @version 1.2.0
 */

"use strict";

var versionup = require('./versionup.js'),
    pkg = require('../package.json');

var lib = versionup.bind(versionup);
lib.versionup = versionup;
lib.version = pkg.version;
module.exports = lib;
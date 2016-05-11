/**
 * Increment version number in package.json (or bower.json)
 * @module versionup
 * @version 2.0.0
 */

'use strict'

const versionup = require('./versionup.js')
const pkg = require('../package.json')

const lib = versionup.bind(versionup)

Object.assign(lib, versionup, {
  versionup,
  version: pkg.version,
})

module.exports = lib

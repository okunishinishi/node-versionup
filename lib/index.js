/**
 * Increment version number in package.json (or bower.json)
 * @module versionup
 * @version 3.0.3
 */

'use strict'

const versionup = require('./versionup.js')
const lib = versionup.bind(versionup)

Object.assign(lib, versionup, {
  versionup
})

module.exports = lib

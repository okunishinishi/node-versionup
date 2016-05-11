/**
 * Increment version number in package.json (or bower.json)
 * @function versionup
 * @param {object} [options] - Optional settings.
 * @param {string} [options.path=process.cwd()] - Project root path or json file path to work with.
 * @param {string} [options.level="patch"] - Level to change. "major", "minor", or "patch".
 * @param {number} [options.amount=1] - Amount to increment.
 * @returns {Promise}
 */

'use strict'

const argx = require('argx')
const co = require('co')
const _logVersionup = require('./_log_versionup')
const _nextVersion = require('./_next_version')
const _resolveJson = require('./_resolve_json')
const _rewriteJson = require('./_rewrite_json')

/** @lends versionup */
function versionup (options) {
  let args = argx(arguments)
  if (args.pop('function')) {
    throw new Error('Callback is no')
  }
  options = args.pop('object') || {}

  const path = options.path || process.cwd()
  const level = String(options.level || 'patch').trim().toLowerCase()
  const amount = Number(options.amount || 1)

  return co(function * () {
    let filenames = _resolveJson(path)
    let empty = filenames.length === 0
    if (empty) {
      throw new Error('Package file not found with options.path:' + options.path)
    }
    for (let filename of filenames) {
      let data = require(filename)
      let from = data.version
      let to = _nextVersion(data.version, level, amount)
      data.version = to
      yield _rewriteJson(filename, data)
      _logVersionup(from, to, filename)
    }
  })
}

module.exports = versionup

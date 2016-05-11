/**
 * @function _rewriteJson
 * @private
 */

'use strict'

const fs = require('fs')
const co = require('co')

/** @lends _rewriteJson */
function _rewriteJson (filename, data) {
  let indent = 2
  return co(function * () {
    let exists = yield new Promise((resolve) =>
      fs.exists(filename, (exists) => resolve(exists))
    )
    if (exists) {
      yield new Promise((resolve, reject) =>
        fs.chmod(filename, '644', (err) =>
          err ? reject(err) : resolve()
        )
      )
    }
    yield new Promise((resolve, reject) =>
      fs.writeFile(filename, JSON.stringify(data, null, indent), (err) =>
        err ? reject(err) : resolve()
      )
    )
  })
}

module.exports = _rewriteJson

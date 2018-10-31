/**
 * @function _rewriteJson
 * @private
 */

'use strict'

const fs = require('fs')


/** @lends _rewriteJson */
async function _rewriteJson (filename, data) {
  let indent = 2
  let exists = await new Promise((resolve) =>
    fs.exists(filename, (exists) => resolve(exists))
  )
  if (exists) {
    await new Promise((resolve, reject) =>
      fs.chmod(filename, '644', (err) =>
        err ? reject(err) : resolve()
      )
    )
  }
  await new Promise((resolve, reject) =>
    fs.writeFile(filename, JSON.stringify(data, null, indent), (err) =>
      err ? reject(err) : resolve()
    )
  )
}

module.exports = _rewriteJson

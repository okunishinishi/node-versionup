/**
 * Test for versionup.js bin.
 * Runs with mocha
 */

'use strict'

const bin = require.resolve('../bin/versionup')
const cp = require('child_process')

const path = require('path')
const fs = require('fs')

const tmpPackageJson = path.resolve(__dirname, '../tmp/tmp-package-json-' + new Date().getTime() + '.json')

describe('bin', function () {
  before(async () => {
    let tmpDir = path.dirname(tmpPackageJson)
    if (!fs.existsSync(tmpDir)) {
      fs.mkdirSync(tmpDir)
    }
    fs.writeFileSync(tmpPackageJson, JSON.stringify({
      version: '4.0.1'
    }))
  })

  after(async () => {
    fs.unlinkSync(tmpPackageJson)
  })

  it('Do major versionup.', async () => {
    let stdout = await new Promise((resolve, reject) =>
      cp.exec(bin + ' -l "major" -p ' + tmpPackageJson, (err, stdout, stderr) =>
        err ? reject(err) : resolve(stdout)
      )
    )
    if (stdout) {
      console.log(stdout)
    }
  })
})

/* global describe, before, after, it */

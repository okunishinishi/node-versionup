/**
 * Test for versionup.js
 * Runs with mocha
 */

'use strict'

const versionup = require('../lib/versionup')
const path = require('path')
const fs = require('fs')

const assert = require('assert')

const tmpPackageJson = path.resolve(__dirname, '../tmp/tmp-package-json-' + new Date().getTime() + '.json')

describe('versionup', function () {
  before(async () => {
    let tmpDir = path.dirname(tmpPackageJson)
    if (!fs.existsSync(tmpDir)) {
      fs.mkdirSync(tmpDir)
    }
    fs.writeFileSync(tmpPackageJson, JSON.stringify({
      version: '1.0.1'
    }))
  })

  after(async () => {
    fs.unlinkSync(tmpPackageJson)
  })

  it('Do major versionup.', async () => {
    await versionup({
      path: tmpPackageJson,
      level: 'major'
    })
  })

  it('Do minor versionup.', async () => {
    await versionup({
      path: tmpPackageJson,
      level: 'minor',
      amount: 2
    })
  })

  it('Do micro versionup.', async () => {
    await versionup({
      path: tmpPackageJson,
      level: 'micro',
      amount: 4
    })
  })

  it('Do version up with invalid path.', async () => {
    try {

      await versionup({
        path: '__invalid_path__'
      })
    } catch (e) {
      assert.ok(!!e)
    }
  })
})

/* global describe, before, after, it */

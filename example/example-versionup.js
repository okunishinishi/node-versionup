#!/usr/bin/env node

/**
 * This is an example to use versionup.
 */

'use strict'

const versionup = require('versionup')

// Increment version number in package.json (or bower.json).
versionup({
  // Options
}).then(() => {
  /* ... */
})

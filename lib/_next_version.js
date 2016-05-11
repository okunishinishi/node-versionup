/**
 * @function _nextVersion
 * @prviate
 */
'use strict'

/** @lends _nextVersion */
function _nextVersion (current, level, amount) {
  const components = String(current).split(/\./)
  let major = Number(components[ 0 ] || 0)
  let minor = Number(components[ 1 ] || 0)
  let patch = Number(components[ 2 ] || 0)
  switch (level) {
    case 'major':
      return [ major + amount, 0, 0 ].join('.')
    case 'minor':
      return [ major, minor + amount, 0 ].join('.')
    case 'micro':
    case 'patch':
    default:
      return [ major, minor, patch + amount ].join('.')
  }
}

module.exports = _nextVersion

/**
 * Increment version number in package.json (or bower.json)
 * @module versionup
 * @version 2.0.3
 */

'use strict';

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var versionup = require('./versionup.js');
var pkg = require('../package.json');

var lib = versionup.bind(versionup);

(0, _assign2.default)(lib, versionup, {
  versionup: versionup,
  version: pkg.version
});

module.exports = lib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInZlcnNpb251cCIsInJlcXVpcmUiLCJwa2ciLCJsaWIiLCJiaW5kIiwidmVyc2lvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFNQTs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGdCQUFSLENBQWxCO0FBQ0EsSUFBTUMsTUFBTUQsUUFBUSxpQkFBUixDQUFaOztBQUVBLElBQU1FLE1BQU1ILFVBQVVJLElBQVYsQ0FBZUosU0FBZixDQUFaOztBQUVBLHNCQUFjRyxHQUFkLEVBQW1CSCxTQUFuQixFQUE4QjtBQUM1QkEsc0JBRDRCO0FBRTVCSyxXQUFTSCxJQUFJRztBQUZlLENBQTlCOztBQUtBQyxPQUFPQyxPQUFQLEdBQWlCSixHQUFqQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiJsaWIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEluY3JlbWVudCB2ZXJzaW9uIG51bWJlciBpbiBwYWNrYWdlLmpzb24gKG9yIGJvd2VyLmpzb24pXG4gKiBAbW9kdWxlIHZlcnNpb251cFxuICogQHZlcnNpb24gMi4wLjNcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuY29uc3QgdmVyc2lvbnVwID0gcmVxdWlyZSgnLi92ZXJzaW9udXAuanMnKVxuY29uc3QgcGtnID0gcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJylcblxuY29uc3QgbGliID0gdmVyc2lvbnVwLmJpbmQodmVyc2lvbnVwKVxuXG5PYmplY3QuYXNzaWduKGxpYiwgdmVyc2lvbnVwLCB7XG4gIHZlcnNpb251cCxcbiAgdmVyc2lvbjogcGtnLnZlcnNpb24sXG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpYlxuIl19
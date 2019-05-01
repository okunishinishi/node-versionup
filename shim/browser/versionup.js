/**
 * Increment version number in package.json (or bower.json)
 * @function versionup
 * @param {object} [options] - Optional settings.
 * @param {string} [options.path=process.cwd()] - Project root path or json file path to work with.
 * @param {string} [options.level="patch"] - Level to change. "major", "minor", or "patch".
 * @param {number} [options.amount=1] - Amount to increment.
 * @returns {Promise}
 */
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var argx = require('argx');

var _logVersionup = require('./_log_versionup');

var _nextVersion = require('./_next_version');

var _resolveJson = require('./_resolve_json');

var _rewriteJson = require('./_rewrite_json');
/** @lends versionup */


function versionup(_x) {
  return _versionup.apply(this, arguments);
}

function _versionup() {
  _versionup = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(options) {
    var args,
        path,
        level,
        amount,
        filenames,
        empty,
        _iteratorNormalCompletion,
        _didIteratorError,
        _iteratorError,
        _iterator,
        _step,
        filename,
        data,
        from,
        to,
        _args = arguments;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            args = argx(_args);

            if (!args.pop('function')) {
              _context.next = 3;
              break;
            }

            throw new Error('Callback is no');

          case 3:
            options = args.pop('object') || {};
            path = options.path || process.cwd();
            level = String(options.level || 'patch').trim().toLowerCase();
            amount = Number(options.amount || 1);
            filenames = _resolveJson(path);
            empty = filenames.length === 0;

            if (!empty) {
              _context.next = 11;
              break;
            }

            throw new Error('Package file not found with options.path:' + options.path);

          case 11:
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 14;
            _iterator = filenames[Symbol.iterator]();

          case 16:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 28;
              break;
            }

            filename = _step.value;
            data = require(filename);
            from = data.version;
            to = _nextVersion(data.version, level, amount);
            data.version = to;
            _context.next = 24;
            return _rewriteJson(filename, data);

          case 24:
            _logVersionup(from, to, filename);

          case 25:
            _iteratorNormalCompletion = true;
            _context.next = 16;
            break;

          case 28:
            _context.next = 34;
            break;

          case 30:
            _context.prev = 30;
            _context.t0 = _context["catch"](14);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 34:
            _context.prev = 34;
            _context.prev = 35;

            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }

          case 37:
            _context.prev = 37;

            if (!_didIteratorError) {
              _context.next = 40;
              break;
            }

            throw _iteratorError;

          case 40:
            return _context.finish(37);

          case 41:
            return _context.finish(34);

          case 42:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[14, 30, 34, 42], [35,, 37, 41]]);
  }));
  return _versionup.apply(this, arguments);
}

module.exports = versionup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnNpb251cC5qcyJdLCJuYW1lcyI6WyJhcmd4IiwicmVxdWlyZSIsIl9sb2dWZXJzaW9udXAiLCJfbmV4dFZlcnNpb24iLCJfcmVzb2x2ZUpzb24iLCJfcmV3cml0ZUpzb24iLCJ2ZXJzaW9udXAiLCJvcHRpb25zIiwiYXJncyIsInBvcCIsIkVycm9yIiwicGF0aCIsInByb2Nlc3MiLCJjd2QiLCJsZXZlbCIsIlN0cmluZyIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsImFtb3VudCIsIk51bWJlciIsImZpbGVuYW1lcyIsImVtcHR5IiwibGVuZ3RoIiwiZmlsZW5hbWUiLCJkYXRhIiwiZnJvbSIsInZlcnNpb24iLCJ0byIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXBCOztBQUVBLElBQU1DLGFBQWEsR0FBR0QsT0FBTyxDQUFDLGtCQUFELENBQTdCOztBQUNBLElBQU1FLFlBQVksR0FBR0YsT0FBTyxDQUFDLGlCQUFELENBQTVCOztBQUNBLElBQU1HLFlBQVksR0FBR0gsT0FBTyxDQUFDLGlCQUFELENBQTVCOztBQUNBLElBQU1JLFlBQVksR0FBR0osT0FBTyxDQUFDLGlCQUFELENBQTVCO0FBRUE7OztTQUNlSyxTOzs7Ozs7OytCQUFmLGlCQUEwQkMsT0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNNQyxZQUFBQSxJQUROLEdBQ2FSLElBQUksT0FEakI7O0FBQUEsaUJBRU1RLElBQUksQ0FBQ0MsR0FBTCxDQUFTLFVBQVQsQ0FGTjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkFHVSxJQUFJQyxLQUFKLENBQVUsZ0JBQVYsQ0FIVjs7QUFBQTtBQUtFSCxZQUFBQSxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLFFBQVQsS0FBc0IsRUFBaEM7QUFFTUUsWUFBQUEsSUFQUixHQU9lSixPQUFPLENBQUNJLElBQVIsSUFBZ0JDLE9BQU8sQ0FBQ0MsR0FBUixFQVAvQjtBQVFRQyxZQUFBQSxLQVJSLEdBUWdCQyxNQUFNLENBQUNSLE9BQU8sQ0FBQ08sS0FBUixJQUFpQixPQUFsQixDQUFOLENBQWlDRSxJQUFqQyxHQUF3Q0MsV0FBeEMsRUFSaEI7QUFTUUMsWUFBQUEsTUFUUixHQVNpQkMsTUFBTSxDQUFDWixPQUFPLENBQUNXLE1BQVIsSUFBa0IsQ0FBbkIsQ0FUdkI7QUFXTUUsWUFBQUEsU0FYTixHQVdrQmhCLFlBQVksQ0FBQ08sSUFBRCxDQVg5QjtBQVlNVSxZQUFBQSxLQVpOLEdBWWNELFNBQVMsQ0FBQ0UsTUFBVixLQUFxQixDQVpuQzs7QUFBQSxpQkFhTUQsS0FiTjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkFjVSxJQUFJWCxLQUFKLENBQVUsOENBQThDSCxPQUFPLENBQUNJLElBQWhFLENBZFY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQWdCdUJTLFNBaEJ2Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWdCV0csWUFBQUEsUUFoQlg7QUFpQlFDLFlBQUFBLElBakJSLEdBaUJldkIsT0FBTyxDQUFDc0IsUUFBRCxDQWpCdEI7QUFrQlFFLFlBQUFBLElBbEJSLEdBa0JlRCxJQUFJLENBQUNFLE9BbEJwQjtBQW1CUUMsWUFBQUEsRUFuQlIsR0FtQmF4QixZQUFZLENBQUNxQixJQUFJLENBQUNFLE9BQU4sRUFBZVosS0FBZixFQUFzQkksTUFBdEIsQ0FuQnpCO0FBb0JJTSxZQUFBQSxJQUFJLENBQUNFLE9BQUwsR0FBZUMsRUFBZjtBQXBCSjtBQUFBLG1CQXFCVXRCLFlBQVksQ0FBQ2tCLFFBQUQsRUFBV0MsSUFBWCxDQXJCdEI7O0FBQUE7QUFzQkl0QixZQUFBQSxhQUFhLENBQUN1QixJQUFELEVBQU9FLEVBQVAsRUFBV0osUUFBWCxDQUFiOztBQXRCSjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUEwQkFLLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnZCLFNBQWpCIiwic291cmNlUm9vdCI6Ii4uLy4uL2xpYiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogSW5jcmVtZW50IHZlcnNpb24gbnVtYmVyIGluIHBhY2thZ2UuanNvbiAob3IgYm93ZXIuanNvbilcbiAqIEBmdW5jdGlvbiB2ZXJzaW9udXBcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gLSBPcHRpb25hbCBzZXR0aW5ncy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5wYXRoPXByb2Nlc3MuY3dkKCldIC0gUHJvamVjdCByb290IHBhdGggb3IganNvbiBmaWxlIHBhdGggdG8gd29yayB3aXRoLlxuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmxldmVsPVwicGF0Y2hcIl0gLSBMZXZlbCB0byBjaGFuZ2UuIFwibWFqb3JcIiwgXCJtaW5vclwiLCBvciBcInBhdGNoXCIuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMuYW1vdW50PTFdIC0gQW1vdW50IHRvIGluY3JlbWVudC5cbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG5jb25zdCBhcmd4ID0gcmVxdWlyZSgnYXJneCcpXG5cbmNvbnN0IF9sb2dWZXJzaW9udXAgPSByZXF1aXJlKCcuL19sb2dfdmVyc2lvbnVwJylcbmNvbnN0IF9uZXh0VmVyc2lvbiA9IHJlcXVpcmUoJy4vX25leHRfdmVyc2lvbicpXG5jb25zdCBfcmVzb2x2ZUpzb24gPSByZXF1aXJlKCcuL19yZXNvbHZlX2pzb24nKVxuY29uc3QgX3Jld3JpdGVKc29uID0gcmVxdWlyZSgnLi9fcmV3cml0ZV9qc29uJylcblxuLyoqIEBsZW5kcyB2ZXJzaW9udXAgKi9cbmFzeW5jIGZ1bmN0aW9uIHZlcnNpb251cCAob3B0aW9ucykge1xuICBsZXQgYXJncyA9IGFyZ3goYXJndW1lbnRzKVxuICBpZiAoYXJncy5wb3AoJ2Z1bmN0aW9uJykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbGxiYWNrIGlzIG5vJylcbiAgfVxuICBvcHRpb25zID0gYXJncy5wb3AoJ29iamVjdCcpIHx8IHt9XG5cbiAgY29uc3QgcGF0aCA9IG9wdGlvbnMucGF0aCB8fCBwcm9jZXNzLmN3ZCgpXG4gIGNvbnN0IGxldmVsID0gU3RyaW5nKG9wdGlvbnMubGV2ZWwgfHwgJ3BhdGNoJykudHJpbSgpLnRvTG93ZXJDYXNlKClcbiAgY29uc3QgYW1vdW50ID0gTnVtYmVyKG9wdGlvbnMuYW1vdW50IHx8IDEpXG5cbiAgbGV0IGZpbGVuYW1lcyA9IF9yZXNvbHZlSnNvbihwYXRoKVxuICBsZXQgZW1wdHkgPSBmaWxlbmFtZXMubGVuZ3RoID09PSAwXG4gIGlmIChlbXB0eSkge1xuICAgIHRocm93IG5ldyBFcnJvcignUGFja2FnZSBmaWxlIG5vdCBmb3VuZCB3aXRoIG9wdGlvbnMucGF0aDonICsgb3B0aW9ucy5wYXRoKVxuICB9XG4gIGZvciAobGV0IGZpbGVuYW1lIG9mIGZpbGVuYW1lcykge1xuICAgIGxldCBkYXRhID0gcmVxdWlyZShmaWxlbmFtZSlcbiAgICBsZXQgZnJvbSA9IGRhdGEudmVyc2lvblxuICAgIGxldCB0byA9IF9uZXh0VmVyc2lvbihkYXRhLnZlcnNpb24sIGxldmVsLCBhbW91bnQpXG4gICAgZGF0YS52ZXJzaW9uID0gdG9cbiAgICBhd2FpdCBfcmV3cml0ZUpzb24oZmlsZW5hbWUsIGRhdGEpXG4gICAgX2xvZ1ZlcnNpb251cChmcm9tLCB0bywgZmlsZW5hbWUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9udXBcbiJdfQ==
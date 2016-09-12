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

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var argx = require('argx');
var co = require('co');
var _logVersionup = require('./_log_versionup');
var _nextVersion = require('./_next_version');
var _resolveJson = require('./_resolve_json');
var _rewriteJson = require('./_rewrite_json');

/** @lends versionup */
function versionup(options) {
  var args = argx(arguments);
  if (args.pop('function')) {
    throw new Error('Callback is no');
  }
  options = args.pop('object') || {};

  var path = options.path || process.cwd();
  var level = String(options.level || 'patch').trim().toLowerCase();
  var amount = Number(options.amount || 1);

  return co(_regenerator2.default.mark(function _callee() {
    var filenames, empty, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, filename, data, from, to;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            filenames = _resolveJson(path);
            empty = filenames.length === 0;

            if (!empty) {
              _context.next = 4;
              break;
            }

            throw new Error('Package file not found with options.path:' + options.path);

          case 4:
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 7;
            _iterator = (0, _getIterator3.default)(filenames);

          case 9:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 21;
              break;
            }

            filename = _step.value;
            data = require(filename);
            from = data.version;
            to = _nextVersion(data.version, level, amount);

            data.version = to;
            _context.next = 17;
            return _rewriteJson(filename, data);

          case 17:
            _logVersionup(from, to, filename);

          case 18:
            _iteratorNormalCompletion = true;
            _context.next = 9;
            break;

          case 21:
            _context.next = 27;
            break;

          case 23:
            _context.prev = 23;
            _context.t0 = _context['catch'](7);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 27:
            _context.prev = 27;
            _context.prev = 28;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 30:
            _context.prev = 30;

            if (!_didIteratorError) {
              _context.next = 33;
              break;
            }

            throw _iteratorError;

          case 33:
            return _context.finish(30);

          case 34:
            return _context.finish(27);

          case 35:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[7, 23, 27, 35], [28,, 30, 34]]);
  }));
}

module.exports = versionup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnNpb251cC5qcyJdLCJuYW1lcyI6WyJhcmd4IiwicmVxdWlyZSIsImNvIiwiX2xvZ1ZlcnNpb251cCIsIl9uZXh0VmVyc2lvbiIsIl9yZXNvbHZlSnNvbiIsIl9yZXdyaXRlSnNvbiIsInZlcnNpb251cCIsIm9wdGlvbnMiLCJhcmdzIiwiYXJndW1lbnRzIiwicG9wIiwiRXJyb3IiLCJwYXRoIiwicHJvY2VzcyIsImN3ZCIsImxldmVsIiwiU3RyaW5nIiwidHJpbSIsInRvTG93ZXJDYXNlIiwiYW1vdW50IiwiTnVtYmVyIiwiZmlsZW5hbWVzIiwiZW1wdHkiLCJsZW5ndGgiLCJmaWxlbmFtZSIsImRhdGEiLCJmcm9tIiwidmVyc2lvbiIsInRvIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7QUFDQSxJQUFNQyxLQUFLRCxRQUFRLElBQVIsQ0FBWDtBQUNBLElBQU1FLGdCQUFnQkYsUUFBUSxrQkFBUixDQUF0QjtBQUNBLElBQU1HLGVBQWVILFFBQVEsaUJBQVIsQ0FBckI7QUFDQSxJQUFNSSxlQUFlSixRQUFRLGlCQUFSLENBQXJCO0FBQ0EsSUFBTUssZUFBZUwsUUFBUSxpQkFBUixDQUFyQjs7QUFFQTtBQUNBLFNBQVNNLFNBQVQsQ0FBb0JDLE9BQXBCLEVBQTZCO0FBQzNCLE1BQUlDLE9BQU9ULEtBQUtVLFNBQUwsQ0FBWDtBQUNBLE1BQUlELEtBQUtFLEdBQUwsQ0FBUyxVQUFULENBQUosRUFBMEI7QUFDeEIsVUFBTSxJQUFJQyxLQUFKLENBQVUsZ0JBQVYsQ0FBTjtBQUNEO0FBQ0RKLFlBQVVDLEtBQUtFLEdBQUwsQ0FBUyxRQUFULEtBQXNCLEVBQWhDOztBQUVBLE1BQU1FLE9BQU9MLFFBQVFLLElBQVIsSUFBZ0JDLFFBQVFDLEdBQVIsRUFBN0I7QUFDQSxNQUFNQyxRQUFRQyxPQUFPVCxRQUFRUSxLQUFSLElBQWlCLE9BQXhCLEVBQWlDRSxJQUFqQyxHQUF3Q0MsV0FBeEMsRUFBZDtBQUNBLE1BQU1DLFNBQVNDLE9BQU9iLFFBQVFZLE1BQVIsSUFBa0IsQ0FBekIsQ0FBZjs7QUFFQSxTQUFPbEIsOEJBQUc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNKb0IscUJBREksR0FDUWpCLGFBQWFRLElBQWIsQ0FEUjtBQUVKVSxpQkFGSSxHQUVJRCxVQUFVRSxNQUFWLEtBQXFCLENBRnpCOztBQUFBLGlCQUdKRCxLQUhJO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQUlBLElBQUlYLEtBQUosQ0FBVSw4Q0FBOENKLFFBQVFLLElBQWhFLENBSkE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1EQU1hUyxTQU5iOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTUNHLG9CQU5EO0FBT0ZDLGdCQVBFLEdBT0t6QixRQUFRd0IsUUFBUixDQVBMO0FBUUZFLGdCQVJFLEdBUUtELEtBQUtFLE9BUlY7QUFTRkMsY0FURSxHQVNHekIsYUFBYXNCLEtBQUtFLE9BQWxCLEVBQTJCWixLQUEzQixFQUFrQ0ksTUFBbEMsQ0FUSDs7QUFVTk0saUJBQUtFLE9BQUwsR0FBZUMsRUFBZjtBQVZNO0FBQUEsbUJBV0F2QixhQUFhbUIsUUFBYixFQUF1QkMsSUFBdkIsQ0FYQTs7QUFBQTtBQVlOdkIsMEJBQWN3QixJQUFkLEVBQW9CRSxFQUFwQixFQUF3QkosUUFBeEI7O0FBWk07QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFILEVBQVA7QUFlRDs7QUFFREssT0FBT0MsT0FBUCxHQUFpQnhCLFNBQWpCIiwiZmlsZSI6InZlcnNpb251cC5qcyIsInNvdXJjZVJvb3QiOiJsaWIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEluY3JlbWVudCB2ZXJzaW9uIG51bWJlciBpbiBwYWNrYWdlLmpzb24gKG9yIGJvd2VyLmpzb24pXG4gKiBAZnVuY3Rpb24gdmVyc2lvbnVwXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIC0gT3B0aW9uYWwgc2V0dGluZ3MuXG4gKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMucGF0aD1wcm9jZXNzLmN3ZCgpXSAtIFByb2plY3Qgcm9vdCBwYXRoIG9yIGpzb24gZmlsZSBwYXRoIHRvIHdvcmsgd2l0aC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5sZXZlbD1cInBhdGNoXCJdIC0gTGV2ZWwgdG8gY2hhbmdlLiBcIm1ham9yXCIsIFwibWlub3JcIiwgb3IgXCJwYXRjaFwiLlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLmFtb3VudD0xXSAtIEFtb3VudCB0byBpbmNyZW1lbnQuXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuY29uc3QgYXJneCA9IHJlcXVpcmUoJ2FyZ3gnKVxuY29uc3QgY28gPSByZXF1aXJlKCdjbycpXG5jb25zdCBfbG9nVmVyc2lvbnVwID0gcmVxdWlyZSgnLi9fbG9nX3ZlcnNpb251cCcpXG5jb25zdCBfbmV4dFZlcnNpb24gPSByZXF1aXJlKCcuL19uZXh0X3ZlcnNpb24nKVxuY29uc3QgX3Jlc29sdmVKc29uID0gcmVxdWlyZSgnLi9fcmVzb2x2ZV9qc29uJylcbmNvbnN0IF9yZXdyaXRlSnNvbiA9IHJlcXVpcmUoJy4vX3Jld3JpdGVfanNvbicpXG5cbi8qKiBAbGVuZHMgdmVyc2lvbnVwICovXG5mdW5jdGlvbiB2ZXJzaW9udXAgKG9wdGlvbnMpIHtcbiAgbGV0IGFyZ3MgPSBhcmd4KGFyZ3VtZW50cylcbiAgaWYgKGFyZ3MucG9wKCdmdW5jdGlvbicpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYWxsYmFjayBpcyBubycpXG4gIH1cbiAgb3B0aW9ucyA9IGFyZ3MucG9wKCdvYmplY3QnKSB8fCB7fVxuXG4gIGNvbnN0IHBhdGggPSBvcHRpb25zLnBhdGggfHwgcHJvY2Vzcy5jd2QoKVxuICBjb25zdCBsZXZlbCA9IFN0cmluZyhvcHRpb25zLmxldmVsIHx8ICdwYXRjaCcpLnRyaW0oKS50b0xvd2VyQ2FzZSgpXG4gIGNvbnN0IGFtb3VudCA9IE51bWJlcihvcHRpb25zLmFtb3VudCB8fCAxKVxuXG4gIHJldHVybiBjbyhmdW5jdGlvbiAqICgpIHtcbiAgICBsZXQgZmlsZW5hbWVzID0gX3Jlc29sdmVKc29uKHBhdGgpXG4gICAgbGV0IGVtcHR5ID0gZmlsZW5hbWVzLmxlbmd0aCA9PT0gMFxuICAgIGlmIChlbXB0eSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQYWNrYWdlIGZpbGUgbm90IGZvdW5kIHdpdGggb3B0aW9ucy5wYXRoOicgKyBvcHRpb25zLnBhdGgpXG4gICAgfVxuICAgIGZvciAobGV0IGZpbGVuYW1lIG9mIGZpbGVuYW1lcykge1xuICAgICAgbGV0IGRhdGEgPSByZXF1aXJlKGZpbGVuYW1lKVxuICAgICAgbGV0IGZyb20gPSBkYXRhLnZlcnNpb25cbiAgICAgIGxldCB0byA9IF9uZXh0VmVyc2lvbihkYXRhLnZlcnNpb24sIGxldmVsLCBhbW91bnQpXG4gICAgICBkYXRhLnZlcnNpb24gPSB0b1xuICAgICAgeWllbGQgX3Jld3JpdGVKc29uKGZpbGVuYW1lLCBkYXRhKVxuICAgICAgX2xvZ1ZlcnNpb251cChmcm9tLCB0bywgZmlsZW5hbWUpXG4gICAgfVxuICB9KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZlcnNpb251cFxuIl19
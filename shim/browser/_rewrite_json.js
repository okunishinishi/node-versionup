/**
 * @function _rewriteJson
 * @private
 */

'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require('fs');
var co = require('co');

/** @lends _rewriteJson */
function _rewriteJson(filename, data) {
  var indent = 2;
  return co(_regenerator2.default.mark(function _callee() {
    var exists;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new _promise2.default(function (resolve) {
              return fs.exists(filename, function (exists) {
                return resolve(exists);
              });
            });

          case 2:
            exists = _context.sent;

            if (!exists) {
              _context.next = 6;
              break;
            }

            _context.next = 6;
            return new _promise2.default(function (resolve, reject) {
              return fs.chmod(filename, '644', function (err) {
                return err ? reject(err) : resolve();
              });
            });

          case 6:
            _context.next = 8;
            return new _promise2.default(function (resolve, reject) {
              return fs.writeFile(filename, (0, _stringify2.default)(data, null, indent), function (err) {
                return err ? reject(err) : resolve();
              });
            });

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
}

module.exports = _rewriteJson;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9yZXdyaXRlX2pzb24uanMiXSwibmFtZXMiOlsiZnMiLCJyZXF1aXJlIiwiY28iLCJfcmV3cml0ZUpzb24iLCJmaWxlbmFtZSIsImRhdGEiLCJpbmRlbnQiLCJyZXNvbHZlIiwiZXhpc3RzIiwicmVqZWN0IiwiY2htb2QiLCJlcnIiLCJ3cml0ZUZpbGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLEtBQUtDLFFBQVEsSUFBUixDQUFYO0FBQ0EsSUFBTUMsS0FBS0QsUUFBUSxJQUFSLENBQVg7O0FBRUE7QUFDQSxTQUFTRSxZQUFULENBQXVCQyxRQUF2QixFQUFpQ0MsSUFBakMsRUFBdUM7QUFDckMsTUFBSUMsU0FBUyxDQUFiO0FBQ0EsU0FBT0osOEJBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDVyxzQkFBWSxVQUFDSyxPQUFEO0FBQUEscUJBQzdCUCxHQUFHUSxNQUFILENBQVVKLFFBQVYsRUFBb0IsVUFBQ0ksTUFBRDtBQUFBLHVCQUFZRCxRQUFRQyxNQUFSLENBQVo7QUFBQSxlQUFwQixDQUQ2QjtBQUFBLGFBQVosQ0FEWDs7QUFBQTtBQUNKQSxrQkFESTs7QUFBQSxpQkFJSkEsTUFKSTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQUtBLHNCQUFZLFVBQUNELE9BQUQsRUFBVUUsTUFBVjtBQUFBLHFCQUNoQlQsR0FBR1UsS0FBSCxDQUFTTixRQUFULEVBQW1CLEtBQW5CLEVBQTBCLFVBQUNPLEdBQUQ7QUFBQSx1QkFDeEJBLE1BQU1GLE9BQU9FLEdBQVAsQ0FBTixHQUFvQkosU0FESTtBQUFBLGVBQTFCLENBRGdCO0FBQUEsYUFBWixDQUxBOztBQUFBO0FBQUE7QUFBQSxtQkFXRixzQkFBWSxVQUFDQSxPQUFELEVBQVVFLE1BQVY7QUFBQSxxQkFDaEJULEdBQUdZLFNBQUgsQ0FBYVIsUUFBYixFQUF1Qix5QkFBZUMsSUFBZixFQUFxQixJQUFyQixFQUEyQkMsTUFBM0IsQ0FBdkIsRUFBMkQsVUFBQ0ssR0FBRDtBQUFBLHVCQUN6REEsTUFBTUYsT0FBT0UsR0FBUCxDQUFOLEdBQW9CSixTQURxQztBQUFBLGVBQTNELENBRGdCO0FBQUEsYUFBWixDQVhFOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUgsRUFBUDtBQWlCRDs7QUFFRE0sT0FBT0MsT0FBUCxHQUFpQlgsWUFBakIiLCJmaWxlIjoiX3Jld3JpdGVfanNvbi5qcyIsInNvdXJjZVJvb3QiOiJsaWIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmdW5jdGlvbiBfcmV3cml0ZUpzb25cbiAqIEBwcml2YXRlXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuY29uc3QgY28gPSByZXF1aXJlKCdjbycpXG5cbi8qKiBAbGVuZHMgX3Jld3JpdGVKc29uICovXG5mdW5jdGlvbiBfcmV3cml0ZUpzb24gKGZpbGVuYW1lLCBkYXRhKSB7XG4gIGxldCBpbmRlbnQgPSAyXG4gIHJldHVybiBjbyhmdW5jdGlvbiAqICgpIHtcbiAgICBsZXQgZXhpc3RzID0geWllbGQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+XG4gICAgICBmcy5leGlzdHMoZmlsZW5hbWUsIChleGlzdHMpID0+IHJlc29sdmUoZXhpc3RzKSlcbiAgICApXG4gICAgaWYgKGV4aXN0cykge1xuICAgICAgeWllbGQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT5cbiAgICAgICAgZnMuY2htb2QoZmlsZW5hbWUsICc2NDQnLCAoZXJyKSA9PlxuICAgICAgICAgIGVyciA/IHJlamVjdChlcnIpIDogcmVzb2x2ZSgpXG4gICAgICAgIClcbiAgICAgIClcbiAgICB9XG4gICAgeWllbGQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT5cbiAgICAgIGZzLndyaXRlRmlsZShmaWxlbmFtZSwgSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgaW5kZW50KSwgKGVycikgPT5cbiAgICAgICAgZXJyID8gcmVqZWN0KGVycikgOiByZXNvbHZlKClcbiAgICAgIClcbiAgICApXG4gIH0pXG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Jld3JpdGVKc29uXG4iXX0=
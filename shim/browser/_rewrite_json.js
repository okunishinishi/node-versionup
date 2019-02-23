/**
 * @function _rewriteJson
 * @private
 */
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var fs = require('fs');
/** @lends _rewriteJson */


function _rewriteJson(_x, _x2) {
  return _rewriteJson2.apply(this, arguments);
}

function _rewriteJson2() {
  _rewriteJson2 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(filename, data) {
    var indent, exists;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            indent = 2;
            _context.next = 3;
            return new Promise(function (resolve) {
              return fs.exists(filename, function (exists) {
                return resolve(exists);
              });
            });

          case 3:
            exists = _context.sent;

            if (!exists) {
              _context.next = 7;
              break;
            }

            _context.next = 7;
            return new Promise(function (resolve, reject) {
              return fs.chmod(filename, '644', function (err) {
                return err ? reject(err) : resolve();
              });
            });

          case 7:
            _context.next = 9;
            return new Promise(function (resolve, reject) {
              return fs.writeFile(filename, JSON.stringify(data, null, indent), function (err) {
                return err ? reject(err) : resolve();
              });
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _rewriteJson2.apply(this, arguments);
}

module.exports = _rewriteJson;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9yZXdyaXRlX2pzb24uanMiXSwibmFtZXMiOlsiZnMiLCJyZXF1aXJlIiwiX3Jld3JpdGVKc29uIiwiZmlsZW5hbWUiLCJkYXRhIiwiaW5kZW50IiwiUHJvbWlzZSIsInJlc29sdmUiLCJleGlzdHMiLCJyZWplY3QiLCJjaG1vZCIsImVyciIsIndyaXRlRmlsZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUtBOzs7Ozs7OztBQUVBLElBQU1BLEVBQUUsR0FBR0MsT0FBTyxDQUFDLElBQUQsQ0FBbEI7QUFHQTs7O1NBQ2VDLFk7Ozs7Ozs7NEJBQWYsaUJBQTZCQyxRQUE3QixFQUF1Q0MsSUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ01DLFlBQUFBLE1BRE4sR0FDZSxDQURmO0FBQUE7QUFBQSxtQkFFcUIsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQ7QUFBQSxxQkFDN0JQLEVBQUUsQ0FBQ1EsTUFBSCxDQUFVTCxRQUFWLEVBQW9CLFVBQUNLLE1BQUQ7QUFBQSx1QkFBWUQsT0FBTyxDQUFDQyxNQUFELENBQW5CO0FBQUEsZUFBcEIsQ0FENkI7QUFBQSxhQUFaLENBRnJCOztBQUFBO0FBRU1BLFlBQUFBLE1BRk47O0FBQUEsaUJBS01BLE1BTE47QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFNVSxJQUFJRixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVRSxNQUFWO0FBQUEscUJBQ2hCVCxFQUFFLENBQUNVLEtBQUgsQ0FBU1AsUUFBVCxFQUFtQixLQUFuQixFQUEwQixVQUFDUSxHQUFEO0FBQUEsdUJBQ3hCQSxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0UsR0FBRCxDQUFULEdBQWlCSixPQUFPLEVBREg7QUFBQSxlQUExQixDQURnQjtBQUFBLGFBQVosQ0FOVjs7QUFBQTtBQUFBO0FBQUEsbUJBWVEsSUFBSUQsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUUsTUFBVjtBQUFBLHFCQUNoQlQsRUFBRSxDQUFDWSxTQUFILENBQWFULFFBQWIsRUFBdUJVLElBQUksQ0FBQ0MsU0FBTCxDQUFlVixJQUFmLEVBQXFCLElBQXJCLEVBQTJCQyxNQUEzQixDQUF2QixFQUEyRCxVQUFDTSxHQUFEO0FBQUEsdUJBQ3pEQSxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0UsR0FBRCxDQUFULEdBQWlCSixPQUFPLEVBRDhCO0FBQUEsZUFBM0QsQ0FEZ0I7QUFBQSxhQUFaLENBWlI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQW1CQVEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCZCxZQUFqQiIsInNvdXJjZVJvb3QiOiIuLi8uLi9saWIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmdW5jdGlvbiBfcmV3cml0ZUpzb25cbiAqIEBwcml2YXRlXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuXG5cbi8qKiBAbGVuZHMgX3Jld3JpdGVKc29uICovXG5hc3luYyBmdW5jdGlvbiBfcmV3cml0ZUpzb24gKGZpbGVuYW1lLCBkYXRhKSB7XG4gIGxldCBpbmRlbnQgPSAyXG4gIGxldCBleGlzdHMgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT5cbiAgICBmcy5leGlzdHMoZmlsZW5hbWUsIChleGlzdHMpID0+IHJlc29sdmUoZXhpc3RzKSlcbiAgKVxuICBpZiAoZXhpc3RzKSB7XG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT5cbiAgICAgIGZzLmNobW9kKGZpbGVuYW1lLCAnNjQ0JywgKGVycikgPT5cbiAgICAgICAgZXJyID8gcmVqZWN0KGVycikgOiByZXNvbHZlKClcbiAgICAgIClcbiAgICApXG4gIH1cbiAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT5cbiAgICBmcy53cml0ZUZpbGUoZmlsZW5hbWUsIEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIGluZGVudCksIChlcnIpID0+XG4gICAgICBlcnIgPyByZWplY3QoZXJyKSA6IHJlc29sdmUoKVxuICAgIClcbiAgKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9yZXdyaXRlSnNvblxuIl19
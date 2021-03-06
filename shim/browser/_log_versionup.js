/**
 * @function _logVersionup
 * @private
 */
'use strict';

var path = require('path');
/** @lends _logVersionup */


function _logVersionup(from, to, filepath) {
  console.log('[versionup] Version incremented: "%s" -> "%s" (in %s)\n', from, to, path.relative(process.cwd(), filepath));
}

module.exports = _logVersionup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9sb2dfdmVyc2lvbnVwLmpzIl0sIm5hbWVzIjpbInBhdGgiLCJyZXF1aXJlIiwiX2xvZ1ZlcnNpb251cCIsImZyb20iLCJ0byIsImZpbGVwYXRoIiwiY29uc29sZSIsImxvZyIsInJlbGF0aXZlIiwicHJvY2VzcyIsImN3ZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBS0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFwQjtBQUVBOzs7QUFDQSxTQUFTQyxhQUFULENBQXdCQyxJQUF4QixFQUE4QkMsRUFBOUIsRUFBa0NDLFFBQWxDLEVBQTRDO0FBQzFDQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FDRSx5REFERixFQUVFSixJQUZGLEVBRVFDLEVBRlIsRUFHRUosSUFBSSxDQUFDUSxRQUFMLENBQWNDLE9BQU8sQ0FBQ0MsR0FBUixFQUFkLEVBQTZCTCxRQUE3QixDQUhGO0FBSUQ7O0FBRURNLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlYsYUFBakIiLCJzb3VyY2VSb290IjoiLi4vLi4vbGliIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZnVuY3Rpb24gX2xvZ1ZlcnNpb251cFxuICogQHByaXZhdGVcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuXG4vKiogQGxlbmRzIF9sb2dWZXJzaW9udXAgKi9cbmZ1bmN0aW9uIF9sb2dWZXJzaW9udXAgKGZyb20sIHRvLCBmaWxlcGF0aCkge1xuICBjb25zb2xlLmxvZyhcbiAgICAnW3ZlcnNpb251cF0gVmVyc2lvbiBpbmNyZW1lbnRlZDogXCIlc1wiIC0+IFwiJXNcIiAoaW4gJXMpXFxuJyxcbiAgICBmcm9tLCB0byxcbiAgICBwYXRoLnJlbGF0aXZlKHByb2Nlc3MuY3dkKCksIGZpbGVwYXRoKSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbG9nVmVyc2lvbnVwXG4iXX0=
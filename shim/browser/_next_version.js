/**
 * @function _nextVersion
 * @prviate
 */
'use strict';
/** @lends _nextVersion */

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

function _nextVersion(current, level, amount) {
  var _String$split = String(current).split('-'),
      _String$split2 = (0, _slicedToArray2.default)(_String$split, 2),
      value = _String$split2[0],
      preRelease = _String$split2[1];

  var components = value.split(/\./);
  var major = Number(components[0] || 0);
  var minor = Number(components[1] || 0);
  var patch = Number(components[2] || 0);

  switch (level) {
    case 'major':
      return [major + amount, 0, 0].join('.');

    case 'minor':
      return [major, minor + amount, 0].join('.');

    case 'micro':
    case 'patch':
    default:
      return [major, minor, patch + amount].join('.');
  }
}

module.exports = _nextVersion;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9uZXh0X3ZlcnNpb24uanMiXSwibmFtZXMiOlsiX25leHRWZXJzaW9uIiwiY3VycmVudCIsImxldmVsIiwiYW1vdW50IiwiU3RyaW5nIiwic3BsaXQiLCJ2YWx1ZSIsInByZVJlbGVhc2UiLCJjb21wb25lbnRzIiwibWFqb3IiLCJOdW1iZXIiLCJtaW5vciIsInBhdGNoIiwiam9pbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBSUE7QUFFQTs7Ozs7O0FBQ0EsU0FBU0EsWUFBVCxDQUF1QkMsT0FBdkIsRUFBZ0NDLEtBQWhDLEVBQXVDQyxNQUF2QyxFQUErQztBQUFBLHNCQUNqQkMsTUFBTSxDQUFDSCxPQUFELENBQU4sQ0FBZ0JJLEtBQWhCLENBQXNCLEdBQXRCLENBRGlCO0FBQUE7QUFBQSxNQUN0Q0MsS0FEc0M7QUFBQSxNQUMvQkMsVUFEK0I7O0FBRTdDLE1BQU1DLFVBQVUsR0FBR0YsS0FBSyxDQUFDRCxLQUFOLENBQVksSUFBWixDQUFuQjtBQUNBLE1BQU1JLEtBQUssR0FBR0MsTUFBTSxDQUFDRixVQUFVLENBQUMsQ0FBRCxDQUFWLElBQWlCLENBQWxCLENBQXBCO0FBQ0EsTUFBTUcsS0FBSyxHQUFHRCxNQUFNLENBQUNGLFVBQVUsQ0FBQyxDQUFELENBQVYsSUFBaUIsQ0FBbEIsQ0FBcEI7QUFDQSxNQUFNSSxLQUFLLEdBQUdGLE1BQU0sQ0FBQ0YsVUFBVSxDQUFDLENBQUQsQ0FBVixJQUFpQixDQUFsQixDQUFwQjs7QUFDQSxVQUFRTixLQUFSO0FBQ0UsU0FBSyxPQUFMO0FBQ0UsYUFBTyxDQUFDTyxLQUFLLEdBQUdOLE1BQVQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUJVLElBQXZCLENBQTRCLEdBQTVCLENBQVA7O0FBQ0YsU0FBSyxPQUFMO0FBQ0UsYUFBTyxDQUFDSixLQUFELEVBQVFFLEtBQUssR0FBR1IsTUFBaEIsRUFBd0IsQ0FBeEIsRUFBMkJVLElBQTNCLENBQWdDLEdBQWhDLENBQVA7O0FBQ0YsU0FBSyxPQUFMO0FBQ0EsU0FBSyxPQUFMO0FBQ0E7QUFDRSxhQUFPLENBQUNKLEtBQUQsRUFBUUUsS0FBUixFQUFlQyxLQUFLLEdBQUdULE1BQXZCLEVBQStCVSxJQUEvQixDQUFvQyxHQUFwQyxDQUFQO0FBUko7QUFVRDs7QUFFREMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCZixZQUFqQiIsInNvdXJjZVJvb3QiOiIuLi8uLi9saWIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmdW5jdGlvbiBfbmV4dFZlcnNpb25cbiAqIEBwcnZpYXRlXG4gKi9cbid1c2Ugc3RyaWN0J1xuXG4vKiogQGxlbmRzIF9uZXh0VmVyc2lvbiAqL1xuZnVuY3Rpb24gX25leHRWZXJzaW9uIChjdXJyZW50LCBsZXZlbCwgYW1vdW50KSB7XG4gIGNvbnN0IFt2YWx1ZSwgcHJlUmVsZWFzZV0gPSBTdHJpbmcoY3VycmVudCkuc3BsaXQoJy0nKVxuICBjb25zdCBjb21wb25lbnRzID0gdmFsdWUuc3BsaXQoL1xcLi8pXG4gIGNvbnN0IG1ham9yID0gTnVtYmVyKGNvbXBvbmVudHNbMF0gfHwgMClcbiAgY29uc3QgbWlub3IgPSBOdW1iZXIoY29tcG9uZW50c1sxXSB8fCAwKVxuICBjb25zdCBwYXRjaCA9IE51bWJlcihjb21wb25lbnRzWzJdIHx8IDApXG4gIHN3aXRjaCAobGV2ZWwpIHtcbiAgICBjYXNlICdtYWpvcic6XG4gICAgICByZXR1cm4gW21ham9yICsgYW1vdW50LCAwLCAwXS5qb2luKCcuJylcbiAgICBjYXNlICdtaW5vcic6XG4gICAgICByZXR1cm4gW21ham9yLCBtaW5vciArIGFtb3VudCwgMF0uam9pbignLicpXG4gICAgY2FzZSAnbWljcm8nOlxuICAgIGNhc2UgJ3BhdGNoJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFttYWpvciwgbWlub3IsIHBhdGNoICsgYW1vdW50XS5qb2luKCcuJylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9uZXh0VmVyc2lvblxuIl19
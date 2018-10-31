/**
 * Increment version number in package.json (or bower.json)
 * @module versionup
 * @version 3.0.2
 */
'use strict';

var versionup = require('./versionup.js');

var lib = versionup.bind(versionup);
Object.assign(lib, versionup, {
  versionup: versionup
});
module.exports = lib;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInZlcnNpb251cCIsInJlcXVpcmUiLCJsaWIiLCJiaW5kIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBTUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsZ0JBQUQsQ0FBekI7O0FBQ0EsSUFBTUMsR0FBRyxHQUFHRixTQUFTLENBQUNHLElBQVYsQ0FBZUgsU0FBZixDQUFaO0FBRUFJLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSCxHQUFkLEVBQW1CRixTQUFuQixFQUE4QjtBQUM1QkEsRUFBQUEsU0FBUyxFQUFUQTtBQUQ0QixDQUE5QjtBQUlBTSxNQUFNLENBQUNDLE9BQVAsR0FBaUJMLEdBQWpCIiwic291cmNlUm9vdCI6Ii4uLy4uL2xpYiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogSW5jcmVtZW50IHZlcnNpb24gbnVtYmVyIGluIHBhY2thZ2UuanNvbiAob3IgYm93ZXIuanNvbilcbiAqIEBtb2R1bGUgdmVyc2lvbnVwXG4gKiBAdmVyc2lvbiAzLjAuMlxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG5jb25zdCB2ZXJzaW9udXAgPSByZXF1aXJlKCcuL3ZlcnNpb251cC5qcycpXG5jb25zdCBsaWIgPSB2ZXJzaW9udXAuYmluZCh2ZXJzaW9udXApXG5cbk9iamVjdC5hc3NpZ24obGliLCB2ZXJzaW9udXAsIHtcbiAgdmVyc2lvbnVwXG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpYlxuIl19
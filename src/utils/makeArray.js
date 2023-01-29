"use strict";
exports.__esModule = true;
exports.makeArray = void 0;
function makeArray(num) {
    return Array.from({ length: num }, function (_, i) { return i + 1; });
}
exports.makeArray = makeArray;

'use strict'
exports.__esModule = true
var sort = function(arr) {
  var _a
  for (var i = 0; i < arr.length; ++i) {
    var minIndex = i
    for (var j = i + 1; j < arr.length; ++j) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }
    if (minIndex === i) continue
    ;(_a = [arr[minIndex], arr[i]]), (arr[i] = _a[0]), (arr[minIndex] = _a[1])
  }
  return arr
}
exports['default'] = sort

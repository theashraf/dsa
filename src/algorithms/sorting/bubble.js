'use strict'
exports.__esModule = true
var sort = function(arr) {
  var temp, flag
  for (var i = 0; i < arr.length; ++i) {
    flag = false
    for (var j = 1; j < arr.length; ++j) {
      if (arr[j] < arr[j - 1]) {
        temp = arr[j]
        arr[j] = arr[j - 1]
        arr[j - 1] = temp
        flag = true
      }
    }
    if (!flag) break
  }
  return arr
}
exports['default'] = sort

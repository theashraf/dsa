'use strict'
exports.__esModule = true
var MaxHeapTree_1 = require('../../data-structures/Tree/BinaryTree/HeapTree/MaxHeapTree')
var compareTo = function(num1, num2) {
  if (num1 > num2) return 1
  else if (num1 === num2) return 0
  else {
    return -1
  }
}
var sort = function(arr) {
  var heap = new MaxHeapTree_1['default'](compareTo)
  var output = []
  for (var i = 0; i < arr.length; ++i) {
    heap.add(arr[i])
  }
  while (!heap.isEmpty()) {
    output.push(heap.remove())
  }
  return output
}
exports['default'] = sort

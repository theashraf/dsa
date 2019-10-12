'use strict'
exports.__esModule = true
var MaxHeapTree_1 = require('../Tree/BinaryTree/HeapTree/MaxHeapTree')
var PriorityQueue = /** @class */ (function() {
  function PriorityQueue(compareTo) {
    this.tree = new MaxHeapTree_1['default'](compareTo)
  }
  PriorityQueue.prototype.enqueue = function(data) {
    this.tree.add(data)
  }
  PriorityQueue.prototype.dequeue = function() {
    return this.tree.remove()
  }
  PriorityQueue.prototype.first = function() {
    return this.tree.root()
  }
  PriorityQueue.prototype.size = function() {
    return this.tree.size()
  }
  PriorityQueue.prototype.isEmpty = function() {
    return this.tree.isEmpty()
  }
  return PriorityQueue
})()
exports['default'] = PriorityQueue
var compareTo = function(num1, num2) {
  if (num1 > num2) return 1
  else if (num1 === num2) return 0
  else {
    return -1
  }
}
var queue = new PriorityQueue(compareTo)
queue.enqueue(10)
queue.enqueue(15)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(100)
while (!queue.isEmpty()) {
  console.log(queue.dequeue())
}

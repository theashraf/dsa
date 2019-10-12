'use strict'
exports.__esModule = true
var SinglyLinkedList_1 = require('../LinkedList/SinglyLinkedList')
var LinkedListQueue = /** @class */ (function() {
  function LinkedListQueue() {
    this.list = new SinglyLinkedList_1['default']()
  }
  LinkedListQueue.prototype.enqueue = function(data) {
    this.list.addLast(data)
  }
  LinkedListQueue.prototype.dequeue = function() {
    return this.list.removeFirst()
  }
  LinkedListQueue.prototype.first = function() {
    return this.list.first()
  }
  LinkedListQueue.prototype.isEmpty = function() {
    return this.list.isEmpty()
  }
  LinkedListQueue.prototype.size = function() {
    return this.list.size()
  }
  return LinkedListQueue
})()
exports['default'] = LinkedListQueue

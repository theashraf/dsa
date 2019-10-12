'use strict'
exports.__esModule = true
var SinglyLinkedList_1 = require('data-structures/LinkedList/SinglyLinkedList')
var LinkedListStack = /** @class */ (function() {
  function LinkedListStack() {
    this._linkedList = new SinglyLinkedList_1['default']()
  }
  // O(1)
  LinkedListStack.prototype.push = function(data) {
    this._linkedList.addFirst(data)
  }
  // O(1)
  LinkedListStack.prototype.pop = function() {
    return this._linkedList.removeFirst()
  }
  // O(1)
  LinkedListStack.prototype.top = function() {
    return this._linkedList.first()
  }
  // O(1)
  LinkedListStack.prototype.size = function() {
    return this._linkedList.size()
  }
  // O(1)
  LinkedListStack.prototype.isEmpty = function() {
    return this._linkedList.isEmpty()
  }
  return LinkedListStack
})()
exports['default'] = LinkedListStack

'use strict'
exports.__esModule = true
var DoublyLinkedList_1 = require('../LinkedList/DoublyLinkedList')
var LinkedListDeque = /** @class */ (function() {
  function LinkedListDeque() {
    this.list = new DoublyLinkedList_1['default']()
  }
  // O(1)
  LinkedListDeque.prototype.addFirst = function(data) {
    this.list.addFirst(data)
  }
  // O(1)
  LinkedListDeque.prototype.addLast = function(data) {
    this.list.addLast(data)
  }
  // O(1)
  LinkedListDeque.prototype.removeFirst = function() {
    return this.list.removeFirst()
  }
  // O(1)
  LinkedListDeque.prototype.removeLast = function() {
    return this.list.removeLast()
  }
  // O(1)
  LinkedListDeque.prototype.first = function() {
    return this.list.first()
  }
  // O(1)
  LinkedListDeque.prototype.last = function() {
    return this.list.last()
  }
  // O(1)
  LinkedListDeque.prototype.size = function() {
    return this.list.size()
  }
  // O(1)
  LinkedListDeque.prototype.isEmpty = function() {
    return this.list.isEmpty()
  }
  return LinkedListDeque
})()
exports['default'] = LinkedListDeque

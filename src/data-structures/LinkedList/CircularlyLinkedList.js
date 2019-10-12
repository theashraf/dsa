'use strict'
exports.__esModule = true
var Node = /** @class */ (function() {
  function Node(data, next) {
    this.data = data
    this.next = next
  }
  Node.prototype.getData = function() {
    return this.data
  }
  Node.prototype.setData = function(data) {
    this.data = data
  }
  Node.prototype.getNext = function() {
    return this.next
  }
  Node.prototype.setNext = function(next) {
    this.next = next
  }
  return Node
})()
var CircularlyLinkedList = /** @class */ (function() {
  function CircularlyLinkedList() {
    this.s = 0
    this.tail = null
  }
  // O(1)
  CircularlyLinkedList.prototype.addFirst = function(data) {
    if (this.isEmpty()) {
      this.tail = new Node(data, null)
      this.tail.setNext(this.tail)
    } else {
      var newNode = new Node(data, this.tail.getNext())
      this.tail.setNext(newNode)
    }
    ++this.s
  }
  // O(1)
  CircularlyLinkedList.prototype.addLast = function(data) {
    this.addFirst(data)
    this.tail = this.tail.getNext()
  }
  // O(1)
  CircularlyLinkedList.prototype.removeFirst = function() {
    if (this.isEmpty()) return null
    else if (this.size() === 1) {
      var temp = this.tail.getData()
      this.tail = null
      --this.s
      return temp
    } else {
      var temp = this.tail.getNext().getData()
      this.tail.setNext(this.tail.getNext().getNext())
      --this.s
      return temp
    }
  }
  // O(n)
  // TODO: removeLast implementation
  CircularlyLinkedList.prototype.removeLast = function() {
    var temp = this.tail.getData()
    return temp
  }
  // O(1)
  CircularlyLinkedList.prototype.first = function() {
    if (this.isEmpty()) return null
    return this.tail.getNext().getData()
  }
  // O(1)
  CircularlyLinkedList.prototype.last = function() {
    if (this.isEmpty()) return null
    return this.tail.getData()
  }
  // O(n)
  CircularlyLinkedList.prototype.add = function(index, data) {
    if (index < 0 || index > this.size()) throw 'Invalid Index'
    else if (index === 0) this.addFirst(data)
    else if (index === this.size()) this.addLast(data)
    else {
      var current = this.tail.getNext()
      for (var i = 0; i < index - 1; ++i) {
        current = current.getNext()
      }
      var newNode = new Node(data, current.getNext())
      current.setNext(newNode)
      ++this.s
    }
  }
  // O(n)
  CircularlyLinkedList.prototype.remove = function(index) {
    if (index < 0 || index >= this.size()) throw 'Invalid Index'
    else if (index === 0) return this.removeFirst()
    else if (index === this.size() - 1) return this.removeLast()
    else {
      var current = this.tail.getNext()
      for (var i = 0; i < index - 1; ++i) {
        current = current.getNext()
      }
      var temp = current.getNext().getData()
      current.setNext(current.getNext())
      return temp
      --this.s
    }
  }
  // O(n)
  CircularlyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.size()) throw 'Invalid Index'
    else if (index === 0) return this.first()
    else if (index === this.size() - 1) return this.last()
    else {
      var current = this.tail.getNext()
      for (var i = 0; i < index; ++i) {
        current = current.getNext()
      }
      return current.getData()
    }
  }
  // O(1)
  CircularlyLinkedList.prototype.isEmpty = function() {
    return this.s === 0
  }
  // O(1)
  CircularlyLinkedList.prototype.size = function() {
    return this.s
  }
  // O(1)
  CircularlyLinkedList.prototype.rotate = function() {
    if (!this.isEmpty()) {
      this.tail = this.tail.getNext()
    }
  }
  return CircularlyLinkedList
})()
exports['default'] = CircularlyLinkedList

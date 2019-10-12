'use strict'
exports.__esModule = true
var Node = /** @class */ (function() {
  function Node(data, next, prev) {
    this.data = data
    this.next = next
    this.prev = prev
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
  Node.prototype.getPrev = function() {
    return this.prev
  }
  Node.prototype.setPrev = function(prev) {
    this.prev = prev
  }
  return Node
})()
var DoublyLinkedList = /** @class */ (function() {
  function DoublyLinkedList() {
    this.head = this.tail = null
    this.s = 0
  }
  // O(1)
  DoublyLinkedList.prototype.first = function() {
    if (this.isEmpty()) return null
    else return this.head.getData()
  }
  // O(1)
  DoublyLinkedList.prototype.last = function() {
    if (this.isEmpty()) return null
    else return this.tail.getData()
  }
  // O(1)
  DoublyLinkedList.prototype.addFirst = function(data) {
    var newNode = new Node(data, null, null)
    if (this.isEmpty()) this.head = this.tail = newNode
    else {
      newNode.setNext(this.head)
      this.head.setPrev(newNode)
      this.head = newNode
    }
    ++this.s
  }
  // O(1)
  DoublyLinkedList.prototype.addLast = function(data) {
    var newNode = new Node(data, null, null)
    if (this.isEmpty()) this.head = this.tail = newNode
    else {
      this.tail.setNext(newNode)
      newNode.setPrev(this.tail)
      this.tail = newNode
    }
    ++this.s
  }
  // O(1)
  DoublyLinkedList.prototype.removeFirst = function() {
    if (this.isEmpty()) return null
    else if (this.s === 1) {
      var data = this.head.getData()
      this.head = this.tail = null
      --this.s
      return data
    } else {
      var data = this.head.getData()
      this.head = this.head.getNext()
      this.head.setPrev(null)
      --this.s
      return data
    }
  }
  // O(1)
  DoublyLinkedList.prototype.removeLast = function() {
    if (this.isEmpty()) return null
    else if (this.s === 1) {
      var data = this.tail.getData()
      this.head = this.tail = null
      --this.s
      return data
    } else {
      var data = this.tail.getData()
      this.tail = this.tail.getPrev()
      this.tail.setNext(null)
      --this.s
      return data
    }
  }
  // O(n)
  DoublyLinkedList.prototype.add = function(index, data) {
    if (index < 0 || index > this.size()) throw 'Invalid Index'
    else if (index === 0) this.addFirst(data)
    else if (index === this.size()) this.addLast(data)
    else {
      var current = this.head
      for (var i = 0; i < index - 1; ++i) {
        current = current.getNext()
      }
      var newNode = new Node(data, current.getNext(), current)
      current.getNext().setPrev(newNode)
      current.setNext(newNode)
      ++this.s
    }
  }
  // O(n)
  DoublyLinkedList.prototype.remove = function(index) {
    if (index < 0 || index >= this.size()) throw 'Invalid Index'
    else if (index === 0) return this.removeFirst()
    else if (index === this.size() - 1) return this.removeLast()
    else {
      var current = this.head
      for (var i = 0; i < index; ++i) {
        current = current.getNext()
      }
      var data = current.getData()
      current.getNext().setPrev(current.getPrev())
      current.getPrev().setNext(current.getNext())
      --this.s
      return data
    }
  }
  // O(n)
  DoublyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.size()) throw 'Invalid Index'
    else if (index === 0) return this.first()
    else if (index === this.size() - 1) return this.last()
    else {
      var current = this.head
      for (var i = 0; i < index; ++i) {
        current = current.getNext()
      }
      return current.getData()
    }
  }
  DoublyLinkedList.prototype.isEmpty = function() {
    return this.s === 0
  }
  DoublyLinkedList.prototype.size = function() {
    return this.s
  }
  return DoublyLinkedList
})()
exports['default'] = DoublyLinkedList

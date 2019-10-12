'use strict'
exports.__esModule = true
var Node = /** @class */ (function() {
  function Node(data, next) {
    this.data = data
    this.next = next || null
  }
  return Node
})()
var SinglyLinkedList = /** @class */ (function() {
  function SinglyLinkedList() {
    this.head = null
    this.tail = null
    this.s = 0
  }
  // O(1)
  SinglyLinkedList.prototype.first = function() {
    if (this.isEmpty()) throw new Error('LinkedList is empty')
    return this.head.data
  }
  // O(1)
  SinglyLinkedList.prototype.last = function() {
    if (this.isEmpty()) throw new Error('LinkedList is empty')
    return this.tail.data
  }
  // O(1)
  SinglyLinkedList.prototype.addFirst = function(data) {
    if (this.isEmpty()) this.head = this.tail = new Node(data, null)
    else this.head = new Node(data, this.head)
    ++this.s
  }
  // O(1)
  SinglyLinkedList.prototype.addLast = function(data) {
    if (this.isEmpty()) this.head = this.tail = new Node(data, null)
    else {
      var newNode = new Node(data, null)
      this.tail.next = newNode
      this.tail = newNode
    }
    ++this.s
  }
  // O(1)
  SinglyLinkedList.prototype.removeFirst = function() {
    if (this.isEmpty()) return null
    else {
      var data = this.head.data
      this.size() === 1 ? (this.head = this.tail = null) : (this.head = this.head.next)
      --this.s
      return data
    }
  }
  SinglyLinkedList.prototype.add = function(index, data) {
    if (index < 0 || index > this.size()) throw 'Invalid Index'
    else if (index === 0) this.addFirst(data)
    else if (index === this.size()) this.addLast(data)
    else {
      var current = this.head
      for (var i = 0; i < index - 1; ++i) {
        current = current.next
      }
      var newNode = new Node(data, current.next)
      current.next = newNode
    }
  }
  SinglyLinkedList.prototype.remove = function(index) {
    if (index < 0 || index >= this.size()) throw 'Invalid Index'
    else if (index === 0) {
      return this.removeFirst()
    } else {
      var current = this.head
      for (var i = 0; i < index - 1; ++i) {
        current = current.next
      }
      var data = current.next.data
      current.next = current.next.next
      --this.s
      return data
    }
  }
  // O(n)
  SinglyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.size()) throw 'Invalid Index'
    else if (index === 0) {
      return this.first()
    } else if (index === this.size() - 1) {
      return this.last()
    } else {
      var current = this.head
      for (var i = 0; i < index; ++i) {
        current = current.next
      }
      return current.data
    }
  }
  // O(1)
  SinglyLinkedList.prototype.size = function() {
    return this.s
  }
  // O(1)
  SinglyLinkedList.prototype.isEmpty = function() {
    return this.s === 0
  }
  SinglyLinkedList.prototype.printNode = function(node) {
    if (!node) return
    console.log(node.data)
    this.printNode(node.next)
  }
  SinglyLinkedList.prototype.print = function() {
    if (this.isEmpty()) return
    this.printNode(this.head)
  }
  SinglyLinkedList.prototype.printIteratively = function() {
    if (this.isEmpty()) return
    var current = this.head
    while (current) {
      console.log(current.data)
      current = current.next
    }
  }
  SinglyLinkedList.prototype.reversedPrintNode = function(node) {
    if (!node) return
    this.reversedPrintNode(node.next)
    console.log(node.data)
  }
  SinglyLinkedList.prototype.reversedPrint = function() {
    if (this.isEmpty()) return
    this.reversedPrintNode(this.head)
  }
  SinglyLinkedList.prototype.reverseList = function(node) {
    if (!node.next) {
      this.head = node
      return
    }
    this.reverseList(node.next)
    var nxt = node.next
    nxt.next = node
    node.next = null
  }
  SinglyLinkedList.prototype.reverse = function() {
    if (this.isEmpty()) return
    this.reverseList(this.head)
  }
  SinglyLinkedList.prototype.reverseIteratively = function() {
    if (this.isEmpty()) return
    var current = this.head
    var prev = null
    var temp = null
    while (current) {
      temp = current.next
      current.next = prev
      prev = current
      current = temp
    }
    this.head = prev
  }
  return SinglyLinkedList
})()
exports['default'] = SinglyLinkedList

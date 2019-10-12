'use strict'
exports.__esModule = true
var ArrayDeque = /** @class */ (function() {
  function ArrayDeque(capacity) {
    if (capacity <= 0) throw new Error('Invalid Deque capacity')
    this.array = Array(capacity)
    this.s = 0
    this.f = 0
  }
  // O(1)
  ArrayDeque.prototype.first = function() {
    if (this.isEmpty()) return null
    return this.array[this.f]
  }
  // O(1)
  ArrayDeque.prototype.last = function() {
    if (this.isEmpty()) return null
    return this.array[this.f + this.size() - 1]
  }
  // O(1)
  ArrayDeque.prototype.removeFirst = function() {
    if (this.isEmpty()) return null
    var data = this.array[this.f]
    this.f = (this.f + 1) % this.array.length
    --this.s
    return data
  }
  // O(1)
  ArrayDeque.prototype.removeLast = function() {
    if (this.isEmpty()) return null
    var data = this.array[this.f + this.size() - 1]
    --this.s
    return data
  }
  // O(1)
  ArrayDeque.prototype.addFirst = function(data) {
    if (this.isFull()) throw 'Deque is full'
    this.f = (this.f - 1 + this.array.length) % this.array.length
    ++this.s
    this.array[this.f] = data
  }
  // O(1)
  ArrayDeque.prototype.addLast = function(data) {
    if (this.isFull()) throw 'Deque is full'
    this.array[(this.f + this.size()) % this.array.length] = data
    ++this.s
  }
  // O(1)
  ArrayDeque.prototype.size = function() {
    return this.s
  }
  // O(1)
  ArrayDeque.prototype.isEmpty = function() {
    return this.s === 0
  }
  // O(1)
  ArrayDeque.prototype.isFull = function() {
    return this.s === this.array.length
  }
  return ArrayDeque
})()
exports['default'] = ArrayDeque

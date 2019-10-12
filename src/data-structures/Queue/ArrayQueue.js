'use strict'
exports.__esModule = true
var ArrayQueue = /** @class */ (function() {
  function ArrayQueue(size) {
    this.s = 0
    this.f = 0
    this.array = Array(size)
  }
  // O(1)
  ArrayQueue.prototype.enqueue = function(data) {
    if (this.isFull()) throw 'Queue is full'
    this.array[(this.f + this.s++) % this.array.length] = data
  }
  // O(1)
  ArrayQueue.prototype.dequeue = function() {
    if (this.isEmpty()) return null
    var data = this.array[this.f]
    this.f = (this.f + 1) % this.array.length
    --this.s
    return data
  }
  // O(1)
  ArrayQueue.prototype.first = function() {
    if (this.isEmpty()) return null
    return this.array[this.f]
  }
  // O(1)
  ArrayQueue.prototype.isEmpty = function() {
    return this.s === 0
  }
  // O(1)
  ArrayQueue.prototype.size = function() {
    return this.s
  }
  // O(1)
  ArrayQueue.prototype.isFull = function() {
    return this.s === this.array.length
  }
  return ArrayQueue
})()
exports['default'] = ArrayQueue

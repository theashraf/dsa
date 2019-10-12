'use strict'
exports.__esModule = true
var LinkedListQueue_1 = require('./LinkedListQueue')
var LinkedListDeque_1 = require('../Deque/LinkedListDeque')
var MonotonicQueue = /** @class */ (function() {
  function MonotonicQueue() {
    this.maxDeque = new LinkedListDeque_1['default']()
    this.minDeque = new LinkedListDeque_1['default']()
    this.queue = new LinkedListQueue_1['default']()
  }
  MonotonicQueue.prototype.enqueue = function(data) {
    this.queue.enqueue(data)
    while (!this.maxDeque.isEmpty() && this.maxDeque.last() < data) this.maxDeque.removeLast()
    while (!this.minDeque.isEmpty() && this.minDeque.last() > data) this.minDeque.removeLast()
    this.maxDeque.addLast(data)
    this.minDeque.addLast(data)
  }
  MonotonicQueue.prototype.dequeue = function() {
    var data = this.queue.dequeue()
    if (this.maxDeque.first() === data) this.maxDeque.removeFirst()
    if (this.minDeque.first() === data) this.minDeque.removeFirst()
    return data
  }
  MonotonicQueue.prototype.first = function() {
    return this.queue.first()
  }
  MonotonicQueue.prototype.isEmpty = function() {
    return this.queue.isEmpty()
  }
  MonotonicQueue.prototype.size = function() {
    return this.queue.size()
  }
  MonotonicQueue.prototype.min = function() {
    return this.minDeque.first()
  }
  MonotonicQueue.prototype.max = function() {
    return this.maxDeque.first()
  }
  return MonotonicQueue
})()
exports['default'] = MonotonicQueue

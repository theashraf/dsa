'use strict'
exports.__esModule = true
var ArrayList_1 = require('../List/ArrayList')
var ArrayListQueue = /** @class */ (function() {
  function ArrayListQueue(capacity) {
    this.list = new ArrayList_1['default'](capacity)
  }
  // O(1)
  ArrayListQueue.prototype.enqueue = function(data) {
    this.list.add(this.list.size(), data)
  }
  // O(n)
  ArrayListQueue.prototype.dequeue = function() {
    if (this.isEmpty()) return null
    return this.list.remove(0)
  }
  // O(1)
  ArrayListQueue.prototype.first = function() {
    if (this.list.isEmpty()) return null
    return this.list.get(0)
  }
  // O(1)
  ArrayListQueue.prototype.size = function() {
    return this.list.size()
  }
  // O(1)
  ArrayListQueue.prototype.isEmpty = function() {
    return this.list.isEmpty()
  }
  return ArrayListQueue
})()
exports['default'] = ArrayListQueue

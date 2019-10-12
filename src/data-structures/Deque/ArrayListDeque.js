'use strict'
exports.__esModule = true
var ArrayList_1 = require('../List/ArrayList')
var ArrayListDeque = /** @class */ (function() {
  function ArrayListDeque(capacity) {
    this.list = new ArrayList_1['default'](capacity)
  }
  // O(n)
  ArrayListDeque.prototype.removeFirst = function() {
    if (this.list.isEmpty()) return null
    return this.list.remove(0)
  }
  // O(1)
  ArrayListDeque.prototype.removeLast = function() {
    if (this.list.isEmpty()) return null
    return this.list.remove(this.list.size() - 1)
  }
  // O(n)
  ArrayListDeque.prototype.addFirst = function(data) {
    this.list.add(0, data)
  }
  // O(1)
  ArrayListDeque.prototype.addLast = function(data) {
    this.list.add(this.list.size(), data)
  }
  // O(1)
  ArrayListDeque.prototype.first = function() {
    if (this.list.isEmpty()) return null
    return this.list.get(0)
  }
  // O(1)
  ArrayListDeque.prototype.last = function() {
    if (this.list.isEmpty()) return null
    return this.list.get(this.list.size() - 1)
  }
  // O(1)
  ArrayListDeque.prototype.size = function() {
    return this.list.size()
  }
  // O(1)
  ArrayListDeque.prototype.isEmpty = function() {
    return this.list.isEmpty()
  }
  return ArrayListDeque
})()
exports['default'] = ArrayListDeque

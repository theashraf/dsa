'use strict'
exports.__esModule = true
var ArrayList_1 = require('data-structures/List/ArrayList')
var ArrayListStack = /** @class */ (function() {
  function ArrayListStack() {
    this._list = new ArrayList_1['default']()
  }
  // O(1)
  ArrayListStack.prototype.push = function(data) {
    this._list.add(this._list.size(), data)
  }
  // O(1)
  ArrayListStack.prototype.pop = function() {
    return this._list.remove(this.size() - 1)
  }
  // O(1)
  ArrayListStack.prototype.top = function() {
    return this._list.get(this.size() - 1)
  }
  // O(1)
  ArrayListStack.prototype.size = function() {
    return this._list.size()
  }
  // O(1)
  ArrayListStack.prototype.isEmpty = function() {
    return this._list.isEmpty()
  }
  return ArrayListStack
})()
exports['default'] = ArrayListStack

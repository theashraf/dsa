'use strict'
exports.__esModule = true
var ArrayStack = /** @class */ (function() {
  function ArrayStack(size) {
    if (size <= 0) throw new Error('Error: Invalid array size')
    this.array = Array(size)
    this._top = -1
    this._size = 0
  }
  // O(1)
  ArrayStack.prototype.push = function(data) {
    if (this.isFull()) throw new Error('Error: Stack is full')
    this.array[++this._top] = data
    ++this._size
  }
  // O(1)
  ArrayStack.prototype.pop = function() {
    if (this.isEmpty()) throw new Error('Error: Stack is Empty')
    var data = this.array[this._top--]
    --this._size
    return data
  }
  // O(1)
  ArrayStack.prototype.top = function() {
    if (this.isEmpty()) throw new Error('Error: Stack is Empty')
    return this.array[this._top]
  }
  // O(1)
  ArrayStack.prototype.size = function() {
    return this._size
  }
  // O(1)
  ArrayStack.prototype.isEmpty = function() {
    return this._size === 0
  }
  // O(1)
  ArrayStack.prototype.isFull = function() {
    return this._size === this.array.length
  }
  return ArrayStack
})()
exports['default'] = ArrayStack

'use strict'
exports.__esModule = true
var ArrayList = /** @class */ (function() {
  function ArrayList(capacity) {
    if (capacity === void 0) {
      capacity = 1
    }
    if (capacity <= 0) throw 'Invalid ArrayList capacity'
    this.s = 0
    this.array = Array(capacity)
  }
  ArrayList.prototype.capacity = function() {
    return this.array.length
  }
  // O(1)
  ArrayList.prototype.get = function(index) {
    if (index < 0 || index >= this.size()) throw 'Get: Invalid Index'
    return this.array[index]
  }
  // O(1)
  ArrayList.prototype.size = function() {
    return this.s
  }
  // O(1)
  ArrayList.prototype.isEmpty = function() {
    return this.s === 0
  }
  // O(n)
  ArrayList.prototype.add = function(index, data) {
    if (index < 0 || index > this.size()) throw 'Add: Invalid Index'
    if (this.isFull()) this.resize()
    for (var i = this.size() - 1; i >= index; --i) {
      this.array[i + 1] = this.array[i]
    }
    this.array[index] = data
    ++this.s
  }
  // O(n)
  ArrayList.prototype.remove = function(index) {
    if (index < 0 || index >= this.size()) throw 'Remove: Invalid Index'
    var temp = this.array[index]
    for (var i = index; i < this.size() - 1; ++i) {
      this.array[i] = this.array[i + 1]
    }
    // this.array[this.size() - 1] = null;
    --this.s
    return temp
  }
  // O(1)
  ArrayList.prototype.set = function(index, data) {
    if (index < 0 || index >= this.size()) throw 'Set: Invalid Index'
    var temp = this.array[index]
    this.array[index] = data
    return temp
  }
  // O(1)
  ArrayList.prototype.isFull = function() {
    return this.s === this.array.length
  }
  // O(1)
  ArrayList.prototype.resize = function() {
    var newArray = Array(this.array.length * 2)
    for (var i = 0; i < this.array.length; ++i) {
      newArray[i] = this.array[i]
    }
    this.array = newArray
  }
  return ArrayList
})()
exports['default'] = ArrayList

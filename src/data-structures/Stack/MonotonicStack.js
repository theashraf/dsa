'use strict'
exports.__esModule = true
var LinkedListStack_1 = require('data-structures/Stack/LinkedListStack')
/*
this solution uses O(n) extra memory for minimums and maximums values tracking
*/
var MonotonicStack = /** @class */ (function() {
  function MonotonicStack() {
    this.maxStack = new LinkedListStack_1['default']()
    this.minStack = new LinkedListStack_1['default']()
    this.stack = new LinkedListStack_1['default']()
  }
  MonotonicStack.prototype.push = function(data) {
    this.stack.push(data)
    if (this.maxStack.isEmpty()) this.maxStack.push(data)
    else if (data >= this.maxStack.top()) this.maxStack.push(data)
    if (this.minStack.isEmpty()) this.minStack.push(data)
    else if (data <= this.minStack.top()) this.minStack.push(data)
  }
  MonotonicStack.prototype.pop = function() {
    if (this.stack.top() === this.maxStack.top()) this.maxStack.pop()
    if (this.stack.top() === this.minStack.top()) this.minStack.pop()
    return this.stack.pop()
  }
  MonotonicStack.prototype.top = function() {
    return this.stack.top()
  }
  MonotonicStack.prototype.isEmpty = function() {
    return this.stack.isEmpty()
  }
  MonotonicStack.prototype.size = function() {
    return this.stack.size()
  }
  MonotonicStack.prototype.max = function() {
    return this.maxStack.top()
  }
  MonotonicStack.prototype.min = function() {
    return this.minStack.top()
  }
  return MonotonicStack
})()
exports['default'] = MonotonicStack
// this solution uses O(1) memory for tracking min and max in stack
var MonotonicStack1 = /** @class */ (function() {
  function MonotonicStack1() {
    this.min = null
    this.max = null
    this.stack = new LinkedListStack_1['default']()
  }
  MonotonicStack1.prototype.push = function(data) {
    if (this.isEmpty()) {
      this.min = data
      this.max = data
      this.stack.push(data)
      return
    }
    if (data < this.min) {
      this.stack.push(2 * data - this.min)
      this.min = data
      return
    }
    if (data > this.max) {
      this.stack.push(2 * data - this.max)
      this.max = data
      return
    }
    this.stack.push(data)
  }
  MonotonicStack1.prototype.pop = function() {
    if (this.isEmpty()) return null
    var top = this.stack.pop()
    var ret = top
    if (top < this.min) {
      ret = this.min
      this.min = 2 * this.min - top
    }
    if (top > this.max) {
      ret = this.max
      this.max = 2 * this.max - top
    }
    return ret
  }
  MonotonicStack1.prototype.top = function() {
    if (this.isEmpty()) return null
    var top = this.stack.top()
    if (top < this.min) {
      return this.min
    }
    if (top > this.max) {
      return this.max
    }
    return top
  }
  MonotonicStack1.prototype.isEmpty = function() {
    return this.stack.isEmpty()
  }
  MonotonicStack1.prototype.size = function() {
    return this.stack.size()
  }
  MonotonicStack1.prototype.getMin = function() {
    return this.isEmpty() ? null : this.min
  }
  MonotonicStack1.prototype.getMax = function() {
    return this.isEmpty() ? null : this.max
  }
  return MonotonicStack1
})()

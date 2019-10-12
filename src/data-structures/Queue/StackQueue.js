'use strict'
exports.__esModule = true
var LinkedListStack_1 = require('../Stack/LinkedListStack')
var StackQueue = /** @class */ (function() {
  function StackQueue() {
    this.stack1 = new LinkedListStack_1['default']()
    this.stack2 = new LinkedListStack_1['default']()
  }
  // O(1)
  StackQueue.prototype.enqueue = function(data) {
    this.stack1.push(data)
  }
  // O(??)
  StackQueue.prototype.dequeue = function() {
    if (this.stack2.isEmpty()) this.swapStacks()
    return this.stack2.pop()
  }
  // O(??)
  StackQueue.prototype.first = function() {
    if (this.stack2.isEmpty()) this.swapStacks()
    return this.stack2.top()
  }
  // O(1)
  StackQueue.prototype.size = function() {
    return this.stack1.size() + this.stack2.size()
  }
  // O(1)
  StackQueue.prototype.isEmpty = function() {
    return this.stack1.isEmpty() && this.stack2.isEmpty()
  }
  // O(n)
  StackQueue.prototype.swapStacks = function() {
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop())
    }
  }
  return StackQueue
})()
exports['default'] = StackQueue

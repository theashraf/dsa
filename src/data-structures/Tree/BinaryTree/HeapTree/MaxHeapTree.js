'use strict'
exports.__esModule = true
var ArrayList_1 = require('../../../List/ArrayList')
var MaxHeapTree = /** @class */ (function() {
  function MaxHeapTree(compareTo) {
    this.tree = new ArrayList_1['default']()
    this.compareTo = compareTo
  }
  MaxHeapTree.prototype.getParentIndex = function(i) {
    return Math.floor((i - 1) / 2)
  }
  MaxHeapTree.prototype.getLeftChildIndex = function(i) {
    return 2 * i + 1
  }
  MaxHeapTree.prototype.getRightChildIndex = function(i) {
    return 2 * i + 2
  }
  MaxHeapTree.prototype.hasRightChild = function(i) {
    if (this.getRightChildIndex(i) >= this.tree.size()) return false
    return true
  }
  MaxHeapTree.prototype.hasLeftChild = function(i) {
    if (this.getLeftChildIndex(i) >= this.tree.size()) return false
    return true
  }
  MaxHeapTree.prototype.hasChildren = function(i) {
    return this.hasLeftChild(i) || this.hasRightChild(i)
  }
  MaxHeapTree.prototype.getMaxChildIndex = function(i) {
    if (!this.hasChildren(i)) throw new Error("This Node doesn't have any Children")
    if (this.hasLeftChild(i) && this.hasRightChild(i)) {
      // return the max child index
      var leftChildIndex = this.getLeftChildIndex(i)
      var rightChildIndex = this.getRightChildIndex(i)
      return this.tree.get(rightChildIndex) > this.tree.get(leftChildIndex) ? rightChildIndex : leftChildIndex
    } else if (this.hasLeftChild(i) && !this.hasRightChild(i)) {
      return this.getLeftChildIndex(i)
    } else {
      return this.getRightChildIndex(i)
    }
  }
  MaxHeapTree.prototype.swap = function(i1, i2) {
    var temp = this.tree.get(i1)
    this.tree.set(i1, this.tree.get(i2))
    this.tree.set(i2, temp)
  }
  MaxHeapTree.prototype.isRoot = function(i) {
    return i === 0
  }
  MaxHeapTree.prototype.heapifyUp = function() {
    if (this.tree.size() === 1) return
    var i = this.tree.size() - 1
    var parentIndex = this.getParentIndex(i)
    while (
      !this.isRoot(i) &&
      this.compareTo(this.tree.get(i), this.tree.get(parentIndex)) === 1 // i > parentIndex -> for max heap tree
    ) {
      this.swap(i, parentIndex)
      i = parentIndex
      parentIndex = this.getParentIndex(i)
    }
  }
  MaxHeapTree.prototype.heapifyDown = function() {
    if (this.tree.size() === 1) return
    var i = 0
    while (
      this.hasChildren(i) &&
      this.compareTo(this.tree.get(i), this.tree.get(this.getMaxChildIndex(i))) === -1 //  child index > i -> for max heap tree
    ) {
      var currentIndex = this.getMaxChildIndex(i)
      this.swap(i, currentIndex)
      i = currentIndex
    }
  }
  // O(log N)
  MaxHeapTree.prototype.add = function(data) {
    this.tree.add(this.tree.size(), data)
    this.heapifyUp()
  }
  // O(log N)
  MaxHeapTree.prototype.remove = function() {
    // if tree is empty throw error
    if (this.tree.isEmpty()) throw new Error("Can't remove from an empty Tree")
    // if there is only one element in tree / remove it
    if (this.tree.size() === 1) return this.tree.remove(0)
    // remove last element in tree
    var last = this.tree.remove(this.tree.size() - 1)
    // replace last element with the root
    var ret = this.tree.set(0, last)
    this.heapifyDown()
    return ret
  }
  MaxHeapTree.prototype.root = function() {
    if (this.tree.size() === 0) throw new Error('Tree is Empty')
    return this.tree.get(0)
  }
  MaxHeapTree.prototype.size = function() {
    return this.tree.size()
  }
  MaxHeapTree.prototype.isEmpty = function() {
    return this.tree.isEmpty()
  }
  return MaxHeapTree
})()
exports['default'] = MaxHeapTree
// const compareTo = (num1: number, num2: number): number => {
//   if (num1 > num2) return 1;
//   else if (num1 === num2) return 0;
//   else {
//     return -1;
//   }
// };
// const tree: HeapTree<number> = new MaxHeapTree<number>(compareTo);
// tree.add(10);
// tree.add(20);
// tree.add(1);
// tree.add(2);
// tree.add(200);
// tree.add(10);
// tree.add(20);
// tree.add(1);
// tree.add(2);
// tree.add(200);
// console.log(tree.root()); // 200
// console.log(tree.remove()); // 200
// console.log("------------------------");
// console.log(tree.root()); // 200
// console.log(tree.remove()); // 200
// console.log("------------------------");
// console.log(tree.root()); // 20
// console.log(tree.remove()); // 20
// console.log("------------------------");
// console.log(tree.root()); // 20
// console.log(tree.remove()); // 20
// console.log("------------------------");
// console.log(tree.root()); // 10
// console.log(tree.remove()); // 10
// console.log("------------------------");
// console.log(tree.root()); // 10
// console.log(tree.remove()); // 10
// while (!tree.isEmpty()) {
//   console.log(tree.remove());
// }

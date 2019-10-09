import HeapTree from './HeapTree'
import ArrayList from '../../../List/ArrayList'

/*
item1 > item2 return 1;
item1 == item2 return 0;
item1 < item2 return -1;
*/

type CompareFunction<T> = (item1: T, item2: T) => number

export default class MaxHeapTree<T> implements HeapTree<T> {
  private tree: ArrayList<T>
  private compareTo: CompareFunction<T>

  constructor(compareTo: CompareFunction<T>) {
    this.tree = new ArrayList()
    this.compareTo = compareTo
  }

  private getParentIndex(i: number): number {
    return Math.floor((i - 1) / 2)
  }

  private getLeftChildIndex(i: number): number {
    return 2 * i + 1
  }

  private getRightChildIndex(i: number): number {
    return 2 * i + 2
  }

  private hasRightChild(i: number): boolean {
    if (this.getRightChildIndex(i) >= this.tree.size()) return false
    return true
  }

  private hasLeftChild(i: number): boolean {
    if (this.getLeftChildIndex(i) >= this.tree.size()) return false
    return true
  }

  private hasChildren(i: number): boolean {
    return this.hasLeftChild(i) || this.hasRightChild(i)
  }

  private getMaxChildIndex(i: number): number {
    if (!this.hasChildren(i)) throw new Error("This Node doesn't have any Children")

    if (this.hasLeftChild(i) && this.hasRightChild(i)) {
      // return the max child index
      const leftChildIndex = this.getLeftChildIndex(i)
      const rightChildIndex = this.getRightChildIndex(i)

      return this.tree.get(rightChildIndex) > this.tree.get(leftChildIndex) ? rightChildIndex : leftChildIndex
    } else if (this.hasLeftChild(i) && !this.hasRightChild(i)) {
      return this.getLeftChildIndex(i)
    } else {
      return this.getRightChildIndex(i)
    }
  }

  private swap(i1: number, i2: number): void {
    const temp = this.tree.get(i1)

    this.tree.set(i1, this.tree.get(i2))

    this.tree.set(i2, temp)
  }

  private isRoot(i: number): boolean {
    return i === 0
  }

  private heapifyUp() {
    if (this.tree.size() === 1) return

    let i = this.tree.size() - 1
    let parentIndex = this.getParentIndex(i)

    while (
      !this.isRoot(i) &&
      this.compareTo(this.tree.get(i), this.tree.get(parentIndex)) === 1 // i > parentIndex -> for max heap tree
    ) {
      this.swap(i, parentIndex)

      i = parentIndex
      parentIndex = this.getParentIndex(i)
    }
  }

  private heapifyDown() {
    if (this.tree.size() === 1) return

    let i = 0

    while (
      this.hasChildren(i) &&
      this.compareTo(this.tree.get(i), this.tree.get(this.getMaxChildIndex(i))) === -1 //  child index > i -> for max heap tree
    ) {
      const currentIndex = this.getMaxChildIndex(i)
      this.swap(i, currentIndex)
      i = currentIndex
    }
  }

  // O(log N)
  add(data: T) {
    this.tree.add(this.tree.size(), data)
    this.heapifyUp()
  }

  // O(log N)
  remove(): T {
    // if tree is empty throw error
    if (this.tree.isEmpty()) throw new Error("Can't remove from an empty Tree")

    // if there is only one element in tree / remove it
    if (this.tree.size() === 1) return this.tree.remove(0)

    // remove last element in tree
    const last = this.tree.remove(this.tree.size() - 1)
    // replace last element with the root
    const ret = this.tree.set(0, last)

    this.heapifyDown()

    return ret
  }

  root(): T {
    if (this.tree.size() === 0) throw new Error('Tree is Empty')

    return this.tree.get(0)
  }

  size(): number {
    return this.tree.size()
  }

  isEmpty(): boolean {
    return this.tree.isEmpty()
  }
}

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

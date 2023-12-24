import MaxHeapTree from '../Tree/BinaryTree/HeapTree/MaxHeapTree'

type CompareFunction<T> = (item1: T, item2: T) => number

export default class PriorityQueue<T> implements Queue<T> {
  private tree: HeapTree<T>

  constructor(compareTo: CompareFunction<T>) {
    this.tree = new MaxHeapTree(compareTo)
  }

  enqueue(data: T): void {
    this.tree.add(data)
  }

  dequeue(): T {
    return this.tree.remove()
  }

  first(): T {
    return this.tree.root()
  }

  size(): number {
    return this.tree.size()
  }

  isEmpty(): boolean {
    return this.tree.isEmpty()
  }
}

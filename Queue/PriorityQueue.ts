import Queue from "./Queue";
import HeapTree from "../Tree/BinaryTree/HeapTree/HeapTree";
import MaxHeapTree from "../Tree/BinaryTree/HeapTree/MaxHeapTree";

type CompareFunction<T> = (item1: T, item2: T) => number;

export default class PriorityQueue<T> implements Queue<T> {
  private tree: HeapTree<T>;

  constructor(compareTo: CompareFunction<T>) {
    this.tree = new MaxHeapTree(compareTo);
  }

  enqueue(data: T) {
    this.tree.add(data);
  }

  dequeue() {
    return this.tree.remove();
  }

  first() {
    return this.tree.root();
  }

  size() {
    return this.tree.size();
  }

  isEmpty() {
    return this.tree.isEmpty();
  }
}

const compareTo: CompareFunction<number> = (
  num1: number,
  num2: number
): number => {
  if (num1 > num2) return 1;
  else if (num1 === num2) return 0;
  else {
    return -1;
  }
};

const queue = new PriorityQueue<number>(compareTo);

queue.enqueue(10);
queue.enqueue(15);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(100);

while (!queue.isEmpty()) {
  console.log(queue.dequeue());
}

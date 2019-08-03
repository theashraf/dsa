interface HeapTree<T> {
  add(data: T): void;
  remove(): T;
  size(): number;
  isEmpty(): boolean;
  root(): T;
}

export default HeapTree;

export default interface LinkedList<T> {
  first(): T;
  last(): T;
  addFirst(data: T): void;
  addLast(data: T): void;
  removeFirst(): T;
  removeLast?(): T;
  isEmpty(): boolean;
  size(): number;

  // extra
  add(index: number, data: T): void;
  remove(index: number): T;
  get(index: number): T;
}

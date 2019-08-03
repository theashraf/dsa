export default interface LinkedList<T> {
  first(): T | null;
  last(): T | null;
  addFirst(data: T): void;
  addLast(data: T): void;
  removeFirst(): T;
  removeLast?(): T | null;
  isEmpty(): boolean;
  size(): number;

  // extra
  add(index: number, data: T): void;
  remove(index: number): T | null;
  get(index: number): T | null;
}

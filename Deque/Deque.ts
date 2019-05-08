export default interface Deque<T> {
  first(): T;
  last(): T;
  removeFirst(): T;
  removeLast(): T;
  addFirst(data: T): void;
  addLast(data: T): void;
  size(): number;
  isEmpty(): boolean;
}

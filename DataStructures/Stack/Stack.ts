export default interface Stack<T> {
  push(data: T): void;
  pop(): T;
  top(): T;
  size(): number;
  isEmpty(): boolean;
}

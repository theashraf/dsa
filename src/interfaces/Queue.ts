export default interface Queue<T> {
  enqueue(data: T): void;
  dequeue(): T;
  first(): T;
  size(): number;
  isEmpty(): boolean;
}

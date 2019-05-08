export default interface LinkedList<E> {
  first(): E | null;
  last(): E | null;
  addFirst(data: E): void;
  addLast(data: E): void;
  removeFirst(): E;
  removeLast(): E | null;
  isEmpty(): boolean;
  size(): number;

  // extra
  add(index: number, data: E): void;
  remove(index: number): E | null;
  get(index: number): E | null;
}

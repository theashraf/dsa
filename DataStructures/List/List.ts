export default interface List<T> {
  get(index: number): T;
  set(index: number, data: T): T;
  add(index: number, data: T): void;
  remove(index: number): T;
  size(): number;
  isEmpty(): boolean;
}

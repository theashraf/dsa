import Deque from "../../interfaces/Deque";
import ArrayList from "../List/ArrayList";

export default class ArrayListDeque<T> implements Deque<T> {
  private list: ArrayList<T>;

  constructor(capacity?: number) {
    this.list = new ArrayList(capacity);
  }

  // O(n)
  removeFirst(): T {
    if (this.list.isEmpty()) return null;
    return this.list.remove(0);
  }

  // O(1)
  removeLast(): T {
    if (this.list.isEmpty()) return null;
    return this.list.remove(this.list.size() - 1);
  }

  // O(n)
  addFirst(data: T): void {
    this.list.add(0, data);
  }

  // O(1)
  addLast(data: T): void {
    this.list.add(this.list.size(), data);
  }

  // O(1)
  first(): T {
    if (this.list.isEmpty()) return null;
    return this.list.get(0);
  }

  // O(1)
  last(): T {
    if (this.list.isEmpty()) return null;
    return this.list.get(this.list.size() - 1);
  }

  // O(1)
  size(): number {
    return this.list.size();
  }

  // O(1)
  isEmpty(): boolean {
    return this.list.isEmpty();
  }
}

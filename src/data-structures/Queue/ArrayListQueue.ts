import Queue from "../../interfaces/Queue";
import ArrayList from "../List/ArrayList";

export default class ArrayListQueue<T> implements Queue<T> {
  private list: ArrayList<T>;

  constructor(capacity?: number) {
    this.list = new ArrayList(capacity);
  }

  // O(1)
  enqueue(data: T): void {
    this.list.add(this.list.size(), data);
  }

  // O(n)
  dequeue(): T {
    if (this.isEmpty()) return null;
    return this.list.remove(0);
  }

  // O(1)
  first(): T {
    if (this.list.isEmpty()) return null;
    return this.list.get(0);
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

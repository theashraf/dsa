import { DynamicArrayList as ArrayList } from "../List/ArrayList";
import Stack from "./Stack";

export default class ArrayListStack<T> implements Stack<T> {
  private list: ArrayList<T>;

  constructor(capcity?: number) {
    this.list = new ArrayList(capcity || 1);
  }

  push(data: T): void {
    this.list.add(this.list.size(), data);
  }
  pop(): T {
    return this.list.remove(this.size() - 1);
  }
  top(): T {
    return this.list.get(this.size() - 1);
  }
  size(): number {
    return this.list.size();
  }
  isEmpty(): boolean {
    return this.list.isEmpty();
  }
}

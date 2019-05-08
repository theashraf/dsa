import Queue from "./Queue";

export default class ArrayQueue<T> implements Queue<T> {
  private s: number; // size
  private array: Array<T>;
  private f: number; // first

  constructor(size: number) {
    this.s = 0;
    this.f = 0;
    this.array = Array(size);
  }

  // O(1)
  enqueue(data: T) {
    if (this.isFull()) throw "Queue is full";
    this.array[(this.f + this.s++) % this.array.length] = data;
  }

  // O(1)
  dequeue(): T {
    if (this.isEmpty()) return null;
    let data: T = this.array[this.f];
    this.f = (this.f + 1) % this.array.length;
    --this.s;
    return data;
  }

  // O(1)
  first(): T {
    if (this.isEmpty()) return null;
    return this.array[this.f];
  }

  // O(1)
  isEmpty(): boolean {
    return this.s === 0;
  }

  // O(1)
  size(): number {
    return this.s;
  }

  // O(1)
  private isFull(): boolean {
    return this.s === this.array.length;
  }
}

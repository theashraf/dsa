import Stack from "./Stack";
export default class ArrayStack<T> implements Stack<T> {
  private t: number;
  private s: number;
  private array: Array<T>;

  constructor(size: number) {
    this.array = Array(size);
    this.t = -1;
    this.s = 0;
  }
  // O(1)
  push(data: T) {
    if (this.isFull()) throw "Stack is full";
    else {
      this.array[++this.t] = data;
      ++this.s;
    }
  }
  // O(1)
  pop(): T {
    if (this.isEmpty()) return null;
    else {
      let data: T = this.array[this.t--];
      --this.s;
      return data;
    }
  }
  // O(1)
  top(): T {
    if (this.isEmpty()) return null;
    else {
      let data: T = this.array[this.t];
      return data;
    }
  }
  // O(1)
  size(): number {
    return this.s;
  }
  // O(1)
  isEmpty(): boolean {
    return this.s === 0;
  }
  // O(1)
  private isFull(): boolean {
    return this.s === this.array.length;
  }
}

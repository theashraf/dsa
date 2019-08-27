import Stack from "./Stack";
import LinkedListStack from "./LinkedListStack";

/*
this solution uses O(n) extra memory for minimums and maximums values tracking
*/
export default class MonotonicStack implements Stack<number> {
  private maxStack: Stack<number>;
  private minStack: Stack<number>;
  private stack: Stack<number>;

  constructor() {
    this.maxStack = new LinkedListStack();
    this.minStack = new LinkedListStack();
    this.stack = new LinkedListStack();
  }

  push(data: number) {
    this.stack.push(data);
    if (this.maxStack.isEmpty()) this.maxStack.push(data);
    else if (data >= this.maxStack.top()) this.maxStack.push(data);
    if (this.minStack.isEmpty()) this.minStack.push(data);
    else if (data <= this.minStack.top()) this.minStack.push(data);
  }
  pop(): number {
    if (this.stack.top() === this.maxStack.top()) this.maxStack.pop();
    if (this.stack.top() === this.minStack.top()) this.minStack.pop();
    return this.stack.pop();
  }
  top(): number {
    return this.stack.top();
  }
  isEmpty(): boolean {
    return this.stack.isEmpty();
  }
  size(): number {
    return this.stack.size();
  }
  max(): number {
    return this.maxStack.top();
  }
  min(): number {
    return this.minStack.top();
  }
}

// this solution uses O(1) memory for tracking min and max in stack
class MonotonicStack1 implements Stack<number> {
  private min: number;
  private max: number;
  private stack: Stack<number>;

  constructor() {
    this.min = null;
    this.max = null;
    this.stack = new LinkedListStack();
  }

  push(data: number) {
    if (this.isEmpty()) {
      this.min = data;
      this.max = data;
      this.stack.push(data);
      return;
    }

    if (data < this.min) {
      this.stack.push(2 * data - this.min);
      this.min = data;
      return;
    }

    if (data > this.max) {
      this.stack.push(2 * data - this.max);
      this.max = data;
      return;
    }

    this.stack.push(data);
  }

  pop(): number {
    if (this.isEmpty()) return null;

    let top = this.stack.pop();

    let ret = top;

    if (top < this.min) {
      ret = this.min;
      this.min = 2 * this.min - top;
    }

    if (top > this.max) {
      ret = this.max;
      this.max = 2 * this.max - top;
    }

    return ret;
  }

  top(): number {
    if (this.isEmpty()) return null;

    let top = this.stack.top();

    if (top < this.min) {
      return this.min;
    }

    if (top > this.max) {
      return this.max;
    }

    return top;
  }

  isEmpty(): boolean {
    return this.stack.isEmpty();
  }

  size(): number {
    return this.stack.size();
  }

  getMin(): number {
    return this.isEmpty() ? null : this.min;
  }

  getMax(): number {
    return this.isEmpty() ? null : this.max;
  }
}

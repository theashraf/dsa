import LinkedListStack from '../Stack/LinkedListStack'

export default class StackQueue<T> implements Queue<T> {
  private stack1: Stack<T>
  private stack2: Stack<T>

  constructor() {
    this.stack1 = new LinkedListStack()
    this.stack2 = new LinkedListStack()
  }
  // O(1)
  enqueue(data: T) {
    this.stack1.push(data)
  }
  // O(??)
  dequeue(): T {
    if (this.stack2.isEmpty()) this.swapStacks()
    return this.stack2.pop()
  }
  // O(??)
  first(): T {
    if (this.stack2.isEmpty()) this.swapStacks()
    return this.stack2.top()
  }
  // O(1)
  size(): number {
    return this.stack1.size() + this.stack2.size()
  }
  // O(1)
  isEmpty(): boolean {
    return this.stack1.isEmpty() && this.stack2.isEmpty()
  }
  // O(n)
  private swapStacks(): void {
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop())
    }
  }
}

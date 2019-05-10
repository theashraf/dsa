import Queue from "./Queue";
import LinkedListQueue from "./LinkedListQueue";
import Deque from "../Deque/Deque";
import LinkedListDeque from "../Deque/LinkedListDeque";

export default class MonotonicQueue implements Queue<number> {
  private maxDeque: Deque<number>;
  private minDeque: Deque<number>;
  private queue: Queue<number>;

  constructor() {
    this.maxDeque = new LinkedListDeque();
    this.minDeque = new LinkedListDeque();
    this.queue = new LinkedListQueue();
  }

  enqueue(data: number): void {
    this.queue.enqueue(data);
    while (!this.maxDeque.isEmpty() && this.maxDeque.last() < data)
      this.maxDeque.removeLast();

    while (!this.minDeque.isEmpty() && this.minDeque.last() > data)
      this.minDeque.removeLast();

    this.maxDeque.addLast(data);
    this.minDeque.addLast(data);
  }

  dequeue(): number {
    let data: number = this.queue.dequeue();
    if (this.maxDeque.first() === data) this.maxDeque.removeFirst();
    if (this.minDeque.first() === data) this.minDeque.removeFirst();
    return data;
  }

  first(): number {
    return this.queue.first();
  }

  isEmpty(): boolean {
    return this.queue.isEmpty();
  }

  size(): number {
    return this.queue.size();
  }

  min(): number {
    return this.minDeque.first();
  }

  max(): number {
    return this.maxDeque.first();
  }
}

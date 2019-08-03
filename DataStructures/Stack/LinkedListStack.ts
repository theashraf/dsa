import Stack from "./Stack";
import SinglyLinkedList from "../LinkedList/SinglyLinkedList";
import LinkedList from "../LinkedList/LinkedList";

export default class LinkedListStack<T> implements Stack<T> {
  private list: LinkedList<T>;

  constructor() {
    this.list = new SinglyLinkedList();
  }

  // O(1)
  push(data: T) {
    this.list.addFirst(data);
  }

  // O(1)
  pop(): T {
    return this.list.removeFirst();
  }

  // O(1)
  top(): T {
    return this.list.first();
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

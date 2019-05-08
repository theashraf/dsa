import Deque from "./Deque";
import LinkedList from "../LinkedList/LinkedList";
import DoublyLinkedList from "../LinkedList/DoublyLinkedList";

export default class LinkedListDeque<T> implements Deque<T> {
  private list: LinkedList<T>;

  constructor() {
    this.list = new DoublyLinkedList();
  }

  // O(1)
  addFirst(data: T) {
    this.list.addFirst(data);
  }

  // O(1)
  addLast(data: T) {
    this.list.addLast(data);
  }

  // O(1)
  removeFirst() {
    return this.list.removeFirst();
  }

  // O(1)
  removeLast() {
    return this.list.removeLast();
  }

  // O(1)
  first() {
    return this.list.first();
  }

  // O(1)
  last() {
    return this.list.last();
  }

  // O(1)
  size() {
    return this.list.size();
  }

  // O(1)
  isEmpty() {
    return this.list.isEmpty();
  }
}

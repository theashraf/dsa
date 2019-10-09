import Deque from '../../interfaces/Deque'
import LinkedList from '../../interfaces/LinkedList'
import DoublyLinkedList from '../LinkedList/DoublyLinkedList'

export default class LinkedListDeque<T> implements Deque<T> {
  private list: LinkedList<T>

  constructor() {
    this.list = new DoublyLinkedList()
  }

  // O(1)
  addFirst(data: T): void {
    this.list.addFirst(data)
  }

  // O(1)
  addLast(data: T): void {
    this.list.addLast(data)
  }

  // O(1)
  removeFirst(): T {
    return this.list.removeFirst()
  }

  // O(1)
  removeLast(): T {
    return this.list.removeLast()
  }

  // O(1)
  first(): T {
    return this.list.first()
  }

  // O(1)
  last(): T {
    return this.list.last()
  }

  // O(1)
  size(): number {
    return this.list.size()
  }

  // O(1)
  isEmpty(): boolean {
    return this.list.isEmpty()
  }
}

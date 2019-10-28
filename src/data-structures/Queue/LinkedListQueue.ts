import SinglyLinkedList from '../LinkedList/SinglyLinkedList'

export default class LinkedListQueue<T> implements Queue<T> {
  private list: LinkedList<T>

  constructor() {
    this.list = new SinglyLinkedList()
  }

  enqueue(data: T): void {
    this.list.addLast(data)
  }

  dequeue(): T {
    return this.list.removeFirst()
  }

  first(): T {
    return this.list.first()
  }

  isEmpty(): boolean {
    return this.list.isEmpty()
  }

  size(): number {
    return this.list.size()
  }
}

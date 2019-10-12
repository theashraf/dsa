import SinglyLinkedList from '../LinkedList/SinglyLinkedList'

export default class LinkedListQueue<T> implements Queue<T> {
  private list: LinkedList<T>
  constructor() {
    this.list = new SinglyLinkedList()
  }
  enqueue(data: T) {
    this.list.addLast(data)
  }
  dequeue() {
    return this.list.removeFirst()
  }
  first() {
    return this.list.first()
  }
  isEmpty() {
    return this.list.isEmpty()
  }
  size() {
    return this.list.size()
  }
}

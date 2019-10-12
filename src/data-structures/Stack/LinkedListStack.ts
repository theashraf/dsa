import SinglyLinkedList from 'data-structures/LinkedList/SinglyLinkedList'

export default class LinkedListStack<T> implements Stack<T> {
  private _linkedList: LinkedList<T>

  constructor() {
    this._linkedList = new SinglyLinkedList()
  }

  // O(1)
  push(data: T) {
    this._linkedList.addFirst(data)
  }

  // O(1)
  pop(): T {
    return this._linkedList.removeFirst()
  }

  // O(1)
  top(): T {
    return this._linkedList.first()
  }

  // O(1)
  size(): number {
    return this._linkedList.size()
  }

  // O(1)
  isEmpty(): boolean {
    return this._linkedList.isEmpty()
  }
}

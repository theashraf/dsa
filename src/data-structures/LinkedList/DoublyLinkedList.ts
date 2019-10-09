import LinkedList from './LinkedList'
class Node<T> {
  private data: T
  private next: Node<T>
  private prev: Node<T>

  constructor(data: T, next: Node<T> | null, prev: Node<T> | null) {
    this.data = data
    this.next = next
    this.prev = prev
  }
  public getData(): T {
    return this.data
  }
  setData(data: T) {
    this.data = data
  }
  getNext(): Node<T> {
    return this.next
  }
  setNext(next: Node<T>) {
    this.next = next
  }
  getPrev(): Node<T> {
    return this.prev
  }
  setPrev(prev: Node<T>) {
    this.prev = prev
  }
}

export default class DoublyLinkedList<T> implements LinkedList<T> {
  private head: Node<T>
  private tail: Node<T>
  private s: number
  constructor() {
    this.head = this.tail = null
    this.s = 0
  }
  // O(1)
  first(): T {
    if (this.isEmpty()) return null
    else return this.head.getData()
  }
  // O(1)
  last(): T {
    if (this.isEmpty()) return null
    else return this.tail.getData()
  }
  // O(1)
  addFirst(data: T): void {
    const newNode: Node<T> = new Node(data, null, null)
    if (this.isEmpty()) this.head = this.tail = newNode
    else {
      newNode.setNext(this.head)
      this.head.setPrev(newNode)
      this.head = newNode
    }
    ++this.s
  }
  // O(1)
  addLast(data: T): void {
    const newNode: Node<T> = new Node(data, null, null)
    if (this.isEmpty()) this.head = this.tail = newNode
    else {
      this.tail.setNext(newNode)
      newNode.setPrev(this.tail)
      this.tail = newNode
    }
    ++this.s
  }
  // O(1)
  removeFirst(): T {
    if (this.isEmpty()) return null
    else if (this.s === 1) {
      const data = this.head.getData()
      this.head = this.tail = null
      --this.s
      return data
    } else {
      const data = this.head.getData()
      this.head = this.head.getNext()
      this.head.setPrev(null)
      --this.s
      return data
    }
  }
  // O(1)
  removeLast(): T {
    if (this.isEmpty()) return null
    else if (this.s === 1) {
      const data: T = this.tail.getData()
      this.head = this.tail = null
      --this.s
      return data
    } else {
      const data = this.tail.getData()
      this.tail = this.tail.getPrev()
      this.tail.setNext(null)
      --this.s
      return data
    }
  }
  // O(n)
  add(index: number, data: T) {
    if (index < 0 || index > this.size()) throw 'Invalid Index'
    else if (index === 0) this.addFirst(data)
    else if (index === this.size()) this.addLast(data)
    else {
      let current = this.head
      for (let i = 0; i < index - 1; ++i) {
        current = current.getNext()
      }
      const newNode: Node<T> = new Node(data, current.getNext(), current)
      current.getNext().setPrev(newNode)
      current.setNext(newNode)
      ++this.s
    }
  }
  // O(n)
  remove(index): T {
    if (index < 0 || index >= this.size()) throw 'Invalid Index'
    else if (index === 0) return this.removeFirst()
    else if (index === this.size() - 1) return this.removeLast()
    else {
      let current: Node<T> = this.head
      for (let i = 0; i < index; ++i) {
        current = current.getNext()
      }
      const data: T = current.getData()
      current.getNext().setPrev(current.getPrev())
      current.getPrev().setNext(current.getNext())
      --this.s
      return data
    }
  }
  // O(n)
  get(index: number): T {
    if (index < 0 || index >= this.size()) throw 'Invalid Index'
    else if (index === 0) return this.first()
    else if (index === this.size() - 1) return this.last()
    else {
      let current: Node<T> = this.head
      for (let i = 0; i < index; ++i) {
        current = current.getNext()
      }
      return current.getData()
    }
  }
  isEmpty(): boolean {
    return this.s === 0
  }
  size(): number {
    return this.s
  }
}

class Node<T> {
  data: T
  next: Node<T>

  constructor(data: T, next: Node<T>) {
    this.data = data
    this.next = next || null
  }
}

export default class SinglyLinkedList<E> implements LinkedList<E> {
  private s: number
  private head: Node<E>
  private tail: Node<E>

  constructor() {
    this.head = null
    this.tail = null
    this.s = 0
  }

  // O(1)
  first(): E {
    if (this.isEmpty()) throw new Error('LinkedList is empty')
    return this.head.data
  }

  // O(1)
  last(): E {
    if (this.isEmpty()) throw new Error('LinkedList is empty')
    return this.tail.data
  }

  // O(1)
  addFirst(data: E): void {
    if (this.isEmpty()) this.head = this.tail = new Node(data, null)
    else this.head = new Node(data, this.head)
    ++this.s
  }

  // O(1)
  addLast(data: E): void {
    if (this.isEmpty()) this.head = this.tail = new Node(data, null)
    else {
      const newNode = new Node(data, null)
      this.tail.next = newNode
      this.tail = newNode
    }
    ++this.s
  }

  // O(1)
  removeFirst(): E {
    if (this.isEmpty()) return null
    else {
      const data = this.head.data
      this.size() === 1 ? (this.head = this.tail = null) : (this.head = this.head.next)
      --this.s
      return data
    }
  }

  add(index: number, data: E): void {
    if (index < 0 || index > this.size()) throw 'Invalid Index'
    else if (index === 0) this.addFirst(data)
    else if (index === this.size()) this.addLast(data)
    else {
      let current: Node<E> = this.head
      for (let i = 0; i < index - 1; ++i) {
        current = current.next
      }
      const newNode: Node<E> = new Node(data, current.next)
      current.next = newNode
    }
  }

  remove(index: number): E {
    if (index < 0 || index >= this.size()) throw 'Invalid Index'
    else if (index === 0) {
      return this.removeFirst()
    } else {
      let current: Node<E> = this.head
      for (let i = 0; i < index - 1; ++i) {
        current = current.next
      }
      const data: E = current.next.data
      current.next = current.next.next
      --this.s
      return data
    }
  }

  // O(n)
  get(index: number): E {
    if (index < 0 || index >= this.size()) throw 'Invalid Index'
    else if (index === 0) {
      return this.first()
    } else if (index === this.size() - 1) {
      return this.last()
    } else {
      let current: Node<E> = this.head
      for (let i = 0; i < index; ++i) {
        current = current.next
      }
      return current.data
    }
  }

  // O(1)
  size(): number {
    return this.s
  }

  // O(1)
  isEmpty(): boolean {
    return this.s === 0
  }

  private printNode(node: Node<E>): void {
    if (!node) return

    console.log(node.data)

    this.printNode(node.next)
  }
  print(): void {
    if (this.isEmpty()) return

    this.printNode(this.head)
  }

  printIteratively(): void {
    if (this.isEmpty()) return

    let current: Node<E> = this.head
    while (current) {
      console.log(current.data)
      current = current.next
    }
  }

  private reversedPrintNode(node: Node<E>): void {
    if (!node) return

    this.reversedPrintNode(node.next)

    console.log(node.data)
  }
  reversedPrint(): void {
    if (this.isEmpty()) return

    this.reversedPrintNode(this.head)
  }

  private reverseList(node: Node<E>): void {
    if (!node.next) {
      this.head = node
      return
    }

    this.reverseList(node.next)

    const nxt: Node<E> = node.next
    nxt.next = node
    node.next = null
  }
  reverse(): void {
    if (this.isEmpty()) return

    this.reverseList(this.head)
  }

  reverseIteratively(): void {
    if (this.isEmpty()) return

    let current: Node<E> = this.head
    let prev = null
    let temp = null

    while (current) {
      temp = current.next
      current.next = prev
      prev = current
      current = temp
    }

    this.head = prev
  }
}

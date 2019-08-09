import LinkedList from "./LinkedList";
class Node<E> {
  constructor(private data: E, private next: Node<E> | null) {
    this.data = data;
    this.next = next;
  }
  getData(): E {
    return this.data;
  }
  setData(data: E) {
    this.data = data;
  }
  getNext(): Node<E> {
    return this.next;
  }
  setNext(next: Node<E>) {
    this.next = next;
  }
}

export default class SinglyLinkedList<E> implements LinkedList<E> {
  private s: number;
  private head: Node<E>;
  private tail: Node<E>;

  constructor() {
    this.head = null;
    this.tail = null;
    this.s = 0;
  }

  // O(1)
  first() {
    if (this.isEmpty()) return null;
    return this.head.getData();
  }

  // O(1)
  last() {
    if (this.isEmpty()) return null;
    return this.tail.getData();
  }

  // O(1)
  addFirst(data: E) {
    if (this.isEmpty()) this.head = this.tail = new Node(data, null);
    else this.head = new Node(data, this.head);
    ++this.s;
  }

  // O(1)
  addLast(data: E) {
    if (this.isEmpty()) this.head = this.tail = new Node(data, null);
    else {
      let newNode = new Node(data, null);
      this.tail.setNext(newNode);
      this.tail = newNode;
    }
    ++this.s;
  }

  // O(1)
  removeFirst() {
    if (this.isEmpty()) return null;
    else {
      let data = this.head.getData();
      this.size() === 1
        ? (this.head = this.tail = null)
        : (this.head = this.head.getNext());
      --this.s;
      return data;
    }
  }

  add(index: number, data: E) {
    if (index < 0 || index > this.size()) throw "Invalid Index";
    else if (index === 0) this.addFirst(data);
    else if (index === this.size()) this.addLast(data);
    else {
      let current: Node<E> = this.head;
      for (let i = 0; i < index - 1; ++i) {
        current = current.getNext();
      }
      let newNode: Node<E> = new Node(data, current.getNext());
      current.setNext(newNode);
    }
  }

  remove(index: number) {
    if (index < 0 || index >= this.size()) throw "Invalid Index";
    else if (index === 0) {
      return this.removeFirst();
    } else {
      let current: Node<E> = this.head;
      for (let i = 0; i < index - 1; ++i) {
        current = current.getNext();
      }
      let data: E = current.getNext().getData();
      current.setNext(current.getNext().getNext());
      --this.s;
      return data;
    }
  }

  // O(n)
  get(index: number) {
    if (index < 0 || index >= this.size()) throw "Invalid Index";
    else if (index === 0) {
      return this.first();
    } else if (index === this.size() - 1) {
      return this.last();
    } else {
      let current: Node<E> = this.head;
      for (let i = 0; i < index; ++i) {
        current = current.getNext();
      }
      return current.getData();
    }
  }

  // O(1)
  size() {
    return this.s;
  }

  // O(1)
  isEmpty() {
    return this.s === 0;
  }

  private printNode(node: Node<E>) {
    if (!node) return;

    console.log(node.getData());

    this.printNode(node.getNext());
  }
  print() {
    if (this.isEmpty()) return;

    this.printNode(this.head);
  }

  printIteratively() {
    if (this.isEmpty()) return;

    let current: Node<E> = this.head;
    while (current) {
      console.log(current.getData());
      current = current.getNext();
    }
  }

  private reversedPrintNode(node: Node<E>) {
    if (!node) return;

    this.reversedPrintNode(node.getNext());

    console.log(node.getData());
  }
  reversedPrint() {
    if (this.isEmpty()) return;

    this.reversedPrintNode(this.head);
  }

  private reverseList(node: Node<E>) {
    if (!node.getNext()) {
      this.head = node;
      return;
    }

    this.reverseList(node.getNext());

    let nxt: Node<E> = node.getNext();
    nxt.setNext(node);
    node.setNext(null);
  }
  reverse() {
    if (this.isEmpty()) return;

    this.reverseList(this.head);
  }

  reverseIteratively() {
    if (this.isEmpty()) return;

    let current: Node<E> = this.head;
    let prev = null;
    let temp = null;

    while (current) {
      temp = current.getNext();
      current.setNext(prev);
      prev = current;
      current = temp;
    }

    this.head = prev;
  }
}

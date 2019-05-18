import LinkedList from "./LinkedList";

class Node<E> {
  private data: E;
  private next: Node<E>;
  constructor(data: E, next: Node<E> | null) {
    this.data = data;
    this.next = next;
  }
  public getData(): E {
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
export default class CircularlyLinkedList<T> implements LinkedList<T> {
  private s: number;
  private tail: Node<T>;

  constructor() {
    this.s = 0;
    this.tail = null;
  }

  // O(1)
  addFirst(data: T) {
    if (this.isEmpty()) {
      this.tail = new Node(data, null);
      this.tail.setNext(this.tail);
    } else {
      let newNode: Node<T> = new Node(data, this.tail.getNext());
      this.tail.setNext(newNode);
    }
    ++this.s;
  }
  // O(1)
  addLast(data: T) {
    this.addFirst(data);
    this.tail = this.tail.getNext();
  }
  // O(1)
  removeFirst() {
    if (this.isEmpty()) return null;
    else if (this.size() === 1) {
      let temp: T = this.tail.getData();
      this.tail = null;
      --this.s;
      return temp;
    } else {
      let temp: T = this.tail.getNext().getData();
      this.tail.setNext(this.tail.getNext().getNext());
      --this.s;
      return temp;
    }
  }

  // O(n)
  // TODO: removeLast implementation
  removeLast() {
    let temp: T = this.tail.getData();
    return temp;
  }

  // O(1)
  first() {
    if (this.isEmpty()) return null;
    return this.tail.getNext().getData();
  }

  // O(1)
  last() {
    if (this.isEmpty()) return null;
    return this.tail.getData();
  }

  // O(n)
  add(index: number, data: T): void {
    if (index < 0 || index > this.size()) throw "Invalid Index";
    else if (index === 0) this.addFirst(data);
    else if (index === this.size()) this.addLast(data);
    else {
      let current: Node<T> = this.tail.getNext();
      for (let i = 0; i < index - 1; ++i) {
        current = current.getNext();
      }
      let newNode: Node<T> = new Node(data, current.getNext());
      current.setNext(newNode);
      ++this.s;
    }
  }

  // O(n)
  remove(index: number): T {
    if (index < 0 || index >= this.size()) throw "Invalid Index";
    else if (index === 0) return this.removeFirst();
    else if (index === this.size() - 1) return this.removeLast();
    else {
      let current: Node<T> = this.tail.getNext();
      for (let i = 0; i < index - 1; ++i) {
        current = current.getNext();
      }
      let temp: T = current.getNext().getData();
      current.setNext(current.getNext());
      return temp;
      --this.s;
    }
  }

  // O(n)
  get(index: number): T {
    if (index < 0 || index >= this.size()) throw "Invalid Index";
    else if (index === 0) return this.first();
    else if (index === this.size() - 1) return this.last();
    else {
      let current: Node<T> = this.tail.getNext();
      for (let i = 0; i < index; ++i) {
        current = current.getNext();
      }
      return current.getData();
    }
  }

  // O(1)
  isEmpty() {
    return this.s === 0;
  }

  // O(1)
  size() {
    return this.s;
  }

  // O(1)
  rotate() {
    if (!this.isEmpty()) {
      this.tail = this.tail.getNext();
    }
  }
}

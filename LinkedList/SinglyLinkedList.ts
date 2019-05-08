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

  // O(n)
  removeLast() {
    if (this.isEmpty()) return null;
    else {
      let data: E = this.tail.getData();
      if (this.size() === 1) this.tail = this.head = null;
      else {
        let current: Node<E> = this.head;
        for (let i = 0; i < this.size() - 2; ++i) {
          current = current.getNext();
        }
        data = current.getNext().getData();
        current.setNext(null);
        this.tail = current;
      }
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
    } else if (index === this.size() - 1) {
      return this.removeLast();
    } else {
      let current: Node<E> = this.head;
      for (let i = 0; i < index - 1; ++i) {
        current = current.getNext();
      }
      let data: E = current.getNext().getData();
      current.setNext(current.getNext().getNext());
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
}

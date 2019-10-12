declare interface Stack<T> {
  push(data: T): void
  pop(): T
  top(): T
  size(): number
  isEmpty(): boolean
}

declare interface Queue<T> {
  enqueue(data: T): void
  dequeue(): T
  first(): T
  size(): number
  isEmpty(): boolean
}

declare interface Deque<T> {
  first(): T
  last(): T
  removeFirst(): T
  removeLast(): T
  addFirst(data: T): void
  addLast(data: T): void
  size(): number
  isEmpty(): boolean
}

declare interface List<T> {
  get(index: number): T
  set(index: number, data: T): T
  add(index: number, data: T): void
  remove(index: number): T
  size(): number
  isEmpty(): boolean
}

declare interface LinkedList<T> {
  first(): T
  last(): T
  addFirst(data: T): void
  addLast(data: T): void
  removeFirst(): T
  removeLast?(): T
  isEmpty(): boolean
  size(): number

  // extra
  add(index: number, data: T): void
  remove(index: number): T
  get(index: number): T
}

declare interface HeapTree<T> {
  add(data: T): void
  remove(): T
  size(): number
  isEmpty(): boolean
  root(): T
}

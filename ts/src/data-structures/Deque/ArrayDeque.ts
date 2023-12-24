class ArrayDeque<T> implements Deque<T> {
  private array: Array<T>
  private s: number
  private f: number

  constructor(capacity: number) {
    if (capacity <= 0) throw new Error('Invalid Deque capacity')
    this.array = Array(capacity)
    this.s = 0
    this.f = 0
  }

  // O(1)
  first(): T {
    if (this.isEmpty()) return null
    return this.array[this.f]
  }

  // O(1)
  last(): T {
    if (this.isEmpty()) return null
    return this.array[this.f + this.size() - 1]
  }

  // O(1)
  removeFirst(): T {
    if (this.isEmpty()) return null
    const data: T = this.array[this.f]
    this.f = (this.f + 1) % this.array.length
    --this.s
    return data
  }

  // O(1)
  removeLast(): T {
    if (this.isEmpty()) return null
    const data: T = this.array[this.f + this.size() - 1]
    --this.s
    return data
  }

  // O(1)
  addFirst(data: T): void {
    if (this.isFull()) throw 'Deque is full'
    this.f = (this.f - 1 + this.array.length) % this.array.length
    ++this.s
    this.array[this.f] = data
  }

  // O(1)
  addLast(data: T): void {
    if (this.isFull()) throw 'Deque is full'
    this.array[(this.f + this.size()) % this.array.length] = data
    ++this.s
  }

  // O(1)
  size(): number {
    return this.s
  }

  // O(1)
  isEmpty(): boolean {
    return this.s === 0
  }

  // O(1)
  private isFull(): boolean {
    return this.s === this.array.length
  }
}

export default ArrayDeque

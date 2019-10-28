class ArrayStack<T> implements Stack<T> {
  private _top: number
  private _size: number
  private array: Array<T>

  constructor(size: number) {
    if (size <= 0) throw new Error('Error: Invalid array size')

    this.array = Array(size)

    this._top = -1
    this._size = 0
  }

  // O(1)
  push(data: T): void {
    if (this.isFull()) throw new Error('Error: Stack is full')

    this.array[++this._top] = data
    ++this._size
  }

  // O(1)
  pop(): T {
    if (this.isEmpty()) throw new Error('Error: Stack is Empty')

    const data: T = this.array[this._top--]
    --this._size
    return data
  }

  // O(1)
  top(): T {
    if (this.isEmpty()) throw new Error('Error: Stack is Empty')

    return this.array[this._top]
  }

  // O(1)
  size(): number {
    return this._size
  }

  // O(1)
  isEmpty(): boolean {
    return this._size === 0
  }

  // O(1)
  private isFull(): boolean {
    return this._size === this.array.length
  }
}

export default ArrayStack

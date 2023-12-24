export default class ArrayList<T> implements List<T> {
  protected s: number
  protected array: Array<T>

  constructor(capacity = 1) {
    if (capacity <= 0) throw 'Invalid ArrayList capacity'
    this.s = 0
    this.array = Array(capacity)
  }

  capacity(): number {
    return this.array.length
  }
  // O(1)
  get(index: number): T {
    if (index < 0 || index >= this.size()) throw 'Get: Invalid Index'
    return this.array[index]
  }
  // O(1)
  size(): number {
    return this.s
  }
  // O(1)
  isEmpty(): boolean {
    return this.s === 0
  }

  // O(n)
  add(index: number, data: T): void {
    if (index < 0 || index > this.size()) throw 'Add: Invalid Index'
    if (this.isFull()) this.resize()
    for (let i = this.size() - 1; i >= index; --i) {
      this.array[i + 1] = this.array[i]
    }
    this.array[index] = data
    ++this.s
  }

  // O(n)
  remove(index: number): T {
    if (index < 0 || index >= this.size()) throw 'Remove: Invalid Index'
    const temp: T = this.array[index]

    for (let i = index; i < this.size() - 1; ++i) {
      this.array[i] = this.array[i + 1]
    }

    // this.array[this.size() - 1] = null;
    --this.s

    return temp
  }

  // O(1)
  set(index: number, data: T): T {
    if (index < 0 || index >= this.size()) throw 'Set: Invalid Index'
    const temp: T = this.array[index]
    this.array[index] = data
    return temp
  }

  // O(1)
  private isFull(): boolean {
    return this.s === this.array.length
  }

  // O(1)
  private resize(): void {
    const newArray = Array(this.array.length * 2)
    for (let i = 0; i < this.array.length; ++i) {
      newArray[i] = this.array[i]
    }
    this.array = newArray
  }
}

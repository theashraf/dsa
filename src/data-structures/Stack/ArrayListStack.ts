import ArrayList from '../List/ArrayList'

class ArrayListStack<T> implements Stack<T> {
  private _list: ArrayList<T>

  constructor() {
    this._list = new ArrayList()
  }

  // O(1)
  push(data: T): void {
    this._list.add(this._list.size(), data)
  }

  // O(1)
  pop(): T {
    return this._list.remove(this.size() - 1)
  }

  // O(1)
  top(): T {
    return this._list.get(this.size() - 1)
  }

  // O(1)
  size(): number {
    return this._list.size()
  }

  // O(1)
  isEmpty(): boolean {
    return this._list.isEmpty()
  }
}

export default ArrayListStack

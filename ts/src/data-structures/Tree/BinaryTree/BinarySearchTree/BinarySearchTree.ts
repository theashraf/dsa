import ArrayListQueue from '../../../Queue/ArrayListQueue'

class Node<T> {
  private d: T
  private r: Node<T>
  private l: Node<T>

  constructor(data: T) {
    this.d = data
    this.r = null
    this.l = null
  }

  get data(): T {
    return this.d
  }

  set data(data: T) {
    this.d = data
  }

  set right(r: Node<T>) {
    this.r = r
  }

  get right(): Node<T> {
    return this.r
  }

  get left(): Node<T> {
    return this.l
  }

  set left(l: Node<T>) {
    this.l = l
  }
}

export default class BST<T> implements BinarySearchTree<T> {
  private root: Node<T>
  private s: number

  constructor() {
    this.root = null
    this.s = 0
  }

  /*
  // iterative insertion of a node in the tree
  insert(data: T) {
    // create new Node
    const newNode = new Node(data);

    // if Tree is Empty
    if (this.isEmpty()) {
      // make the new Node the root
      this.root = newNode;
    } else {
      // create a temp and parent Node
      let temp: Node<T> = this.root;
      let parent: Node<T> = null;

      // traverse the tree searching for the right place to add New Node
      while (temp) {
        // set parent of the next node
        parent = temp;

        // if temp data is less than the data
        if (temp.data <= data) {
          // traverse to left sub tree
          temp = temp.left;
        } else {
          // traverse to right sub tree
          temp = temp.right;
        }
      }

      // if parent data is less than data
      if (data <= parent.data) {
        // add node to the left of the parent
        parent.left = newNode;
      } else {
        // add node to the right of the parent
        parent.right = newNode;
      }
    }
    ++this.s;
  }
  */

  // insert new node recursively
  private insertNode(temp: Node<T>, data: T): void {
    if (data < temp.data) {
      // if has left sub tree
      if (temp.left) {
        // recurse
        this.insertNode(temp.left, data)
      } else {
        // add node to left
        const newNode = new Node(data)
        temp.left = newNode
      }
    } else {
      // if has right sub tree
      if (temp.right) {
        // recurse
        this.insertNode(temp.right, data)
      } else {
        // add node to left
        const newNode = new Node(data)
        temp.right = newNode
      }
    }
  }

  insert(data: T): void {
    if (this.isEmpty()) {
      const newNode = new Node(data)
      this.root = newNode
    } else {
      this.insertNode(this.root, data)
    }
    ++this.s
  }

  /*
  iterative approach
  min(): T {
    if (this.isEmpty()) {
      return null;
    } else {
      let current = this.root;

      while (current.left) {
        current = current.left;
      }

      return current.data;
    }
  }

  max(): T {
    if (this.isEmpty()) {
      return null;
    } else {
      let current = this.root;

      while (current.right) {
        current = current.right;
      }

      return current.data;
    }
  }
  */

  private getMin(temp: Node<T>): T {
    if (temp.left) {
      return this.getMin(temp.left)
    } else {
      return temp.data
    }
  }

  private getMax(temp: Node<T>): T {
    if (temp.right) {
      return this.getMax(temp.right)
    } else {
      return temp.data
    }
  }

  min(): T {
    if (this.isEmpty()) return null
    else {
      return this.getMin(this.root)
    }
  }

  max(): T {
    if (this.isEmpty()) return null
    else {
      return this.getMax(this.root)
    }
  }

  search(data: T): boolean {
    if (!this.root) {
      return false
    } else {
      let current = this.root
      while (current) {
        if (current.data === data) return true
        else if (current.data > data) {
          current = current.left
        } else {
          current = current.right
        }
      }

      return false
    }
  }

  private hasLeft(node: Node<T>): boolean {
    return !!node.left
  }

  private hasRight(node: Node<T>): boolean {
    return !!node.right
  }

  private findMin(node: Node<T>): Node<T> {
    if (node.left) return this.findMin(node.left)
    return node
  }

  delete(value: T): void {
    // if tree is empty
    if (!this.root) return
    // search for the node which has this value
    let current: Node<T> = this.root
    let parent: Node<T> = null

    while (current && current.data !== value) {
      parent = current

      if (value > current.data) {
        current = current.right
      } else if (value < current.data) {
        current = current.left
      }
    }

    // console.log(current);
    // console.log(parent);

    // not found
    if (!current) return

    // if we found it
    // check if it has no child
    if (!current.left && !current.right) {
      if (parent.data > current.data) {
        parent.left = null
      } else {
        parent.right = null
      }
    }
    // make its parent point to null
    // check if it has one child
    else if (!current.left && current.right) {
      if (parent.data > current.data) {
        parent.left = current.right
      } else {
        parent.right = current.right
      }
    } else if (current.left && !current.right) {
      if (parent.data > current.data) {
        parent.left = current.left
      } else {
        parent.right = current.left
      }
    }
    // make its child the child of its parent
    // check if it has two child
    else {
      // find min value node in the right sub tree
      let minRight: Node<T> = current.right
      let minRightParent: Node<T> = current

      while (this.hasLeft(minRight)) {
        minRightParent = minRight
        minRight = minRight.left
      }

      // console.log(minRight, " min right sub tree");

      // replace it's value with it
      current.data = minRight.data

      // delete min right node
      if (minRightParent === current) {
        current.right = minRight.right
      } else {
        minRightParent.left = minRight.right
      }
    }
  }

  private getHeight(node: Node<T>): number {
    if (!node) return -1
    return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right))
  }

  height(): number {
    if (!this.root) return 0
    return this.getHeight(this.root)
  }

  size(): number {
    return this.s
  }

  isEmpty(): boolean {
    return this.s === 0
  }

  BFT(): void {
    const q: Queue<Node<T>> = new ArrayListQueue<Node<T>>()

    q.enqueue(this.root)

    let current: Node<T> = null

    while (!q.isEmpty()) {
      current = q.dequeue()
      console.log(current.data)

      if (current.left) {
        q.enqueue(current.left)
      }

      if (current.right) {
        q.enqueue(current.right)
      }
    }
  }

  // root,left,right
  private preOrder(node: Node<T>): void {
    if (!node) return
    console.log(node.data)
    this.preOrder(node.left)
    this.preOrder(node.right)
  }

  // left,root,right
  private inOrder(node: Node<T>): void {
    if (!node) return
    this.inOrder(node.left)
    console.log(node.data)
    this.inOrder(node.right)
  }

  // left,right,root
  private postOrder(node: Node<T>): void {
    if (!node) return
    this.postOrder(node.left)
    this.postOrder(node.right)
    console.log(node.data)
  }

  DFT(type: string): void {
    switch (type) {
      case 'preOrder':
        this.preOrder(this.root)
        break
      case 'inOrder':
        this.inOrder(this.root)
        break
      case 'postOrder':
        this.postOrder(this.root)
        break
      default:
        break
    }
  }
}

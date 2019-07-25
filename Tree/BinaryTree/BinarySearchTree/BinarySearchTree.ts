interface BinarySearchTree<T> {
  insert(data: T): void;
  search(value: T): boolean;
  delete(value: T): boolean;
  min(): T;
  max(): T;
  height?(): number;
  size(): number;
  isEmpty(): boolean;
}

class Node<T> {
  private d: T;
  private r: Node<T>;
  private l: Node<T>;

  constructor(data: T) {
    this.d = data;
    this.r = null;
    this.l = null;
  }

  get data(): T {
    return this.d;
  }

  set data(data: T) {
    this.d = data;
  }

  get right(): Node<T> {
    return this.r;
  }

  get left(): Node<T> {
    return this.l;
  }

  set right(r: Node<T>) {
    this.r = r;
  }

  set left(l: Node<T>) {
    this.l = l;
  }
}

export default class BST<T> implements BinarySearchTree<T> {
  private root: Node<T>;
  private s: number;

  constructor() {
    this.root = null;
    this.s = 0;
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
        this.insertNode(temp.left, data);
      } else {
        // add node to left
        const newNode = new Node(data);
        temp.left = newNode;
      }
    } else {
      // if has right sub tree
      if (temp.right) {
        // recurse
        this.insertNode(temp.right, data);
      } else {
        // add node to left
        const newNode = new Node(data);
        temp.right = newNode;
      }
    }
  }

  insert(data: T): void {
    if (this.isEmpty()) {
      const newNode = new Node(data);
      this.root = newNode;
    } else {
      this.insertNode(this.root, data);
    }
    ++this.s;
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
      return this.getMin(temp.left);
    } else {
      return temp.data;
    }
  }

  private getMax(temp: Node<T>): T {
    if (temp.right) {
      return this.getMax(temp.right);
    } else {
      return temp.data;
    }
  }

  min(): T {
    if (this.isEmpty()) return null;
    else {
      return this.getMin(this.root);
    }
  }

  max(): T {
    if (this.isEmpty()) return null;
    else {
      return this.getMax(this.root);
    }
  }

  search(data: T): boolean {
    if (!this.root) {
      return false;
    } else {
      let current = this.root;
      while (current) {
        if (current.data === data) return true;
        else if (current.data > data) {
          current = current.left;
        } else {
          current = current.right;
        }
      }

      return false;
    }
  }

  //TODO:
  delete(value: T): boolean {
    return true;
  }

  size() {
    return this.s;
  }

  isEmpty() {
    return this.s === 0;
  }
}

const t: BinarySearchTree<number> = new BST<number>();

t.insert(1);
t.insert(2);
t.insert(3);
t.insert(4);
t.insert(5);
t.insert(6);
t.insert(7);
t.insert(8);
t.insert(9);
t.insert(10);
t.insert(11);
t.insert(12);
t.insert(13);
t.insert(14);

console.log(t.max());
console.log(t.min());

console.log(t.size());
console.log(t.search(14));

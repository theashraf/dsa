'use strict'
exports.__esModule = true
var ArrayListQueue_1 = require('../../../Queue/ArrayListQueue')
var Node = /** @class */ (function() {
  function Node(data) {
    this.d = data
    this.r = null
    this.l = null
  }
  Object.defineProperty(Node.prototype, 'data', {
    get: function() {
      return this.d
    },
    set: function(data) {
      this.d = data
    },
    enumerable: true,
    configurable: true,
  })
  Object.defineProperty(Node.prototype, 'right', {
    get: function() {
      return this.r
    },
    set: function(r) {
      this.r = r
    },
    enumerable: true,
    configurable: true,
  })
  Object.defineProperty(Node.prototype, 'left', {
    get: function() {
      return this.l
    },
    set: function(l) {
      this.l = l
    },
    enumerable: true,
    configurable: true,
  })
  return Node
})()
var BST = /** @class */ (function() {
  function BST() {
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
  BST.prototype.insertNode = function(temp, data) {
    if (data < temp.data) {
      // if has left sub tree
      if (temp.left) {
        // recurse
        this.insertNode(temp.left, data)
      } else {
        // add node to left
        var newNode = new Node(data)
        temp.left = newNode
      }
    } else {
      // if has right sub tree
      if (temp.right) {
        // recurse
        this.insertNode(temp.right, data)
      } else {
        // add node to left
        var newNode = new Node(data)
        temp.right = newNode
      }
    }
  }
  BST.prototype.insert = function(data) {
    if (this.isEmpty()) {
      var newNode = new Node(data)
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
  BST.prototype.getMin = function(temp) {
    if (temp.left) {
      return this.getMin(temp.left)
    } else {
      return temp.data
    }
  }
  BST.prototype.getMax = function(temp) {
    if (temp.right) {
      return this.getMax(temp.right)
    } else {
      return temp.data
    }
  }
  BST.prototype.min = function() {
    if (this.isEmpty()) return null
    else {
      return this.getMin(this.root)
    }
  }
  BST.prototype.max = function() {
    if (this.isEmpty()) return null
    else {
      return this.getMax(this.root)
    }
  }
  BST.prototype.search = function(data) {
    if (!this.root) {
      return false
    } else {
      var current = this.root
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
  BST.prototype.hasLeft = function(node) {
    return !!node.left
  }
  BST.prototype.hasRight = function(node) {
    return !!node.right
  }
  BST.prototype.findMin = function(node) {
    if (node.left) return this.findMin(node.left)
    return node
  }
  BST.prototype['delete'] = function(value) {
    // if tree is empty
    if (!this.root) return
    // search for the node which has this value
    var current = this.root
    var parent = null
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
      var minRight = current.right
      var minRightParent = current
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
  BST.prototype.getHeight = function(node) {
    if (!node) return -1
    return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right))
  }
  BST.prototype.height = function() {
    if (!this.root) return 0
    return this.getHeight(this.root)
  }
  BST.prototype.size = function() {
    return this.s
  }
  BST.prototype.isEmpty = function() {
    return this.s === 0
  }
  BST.prototype.BFT = function() {
    var q = new ArrayListQueue_1['default']()
    q.enqueue(this.root)
    var current = null
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
  BST.prototype.preOrder = function(node) {
    if (!node) return
    console.log(node.data)
    this.preOrder(node.left)
    this.preOrder(node.right)
  }
  // left,root,right
  BST.prototype.inOrder = function(node) {
    if (!node) return
    this.inOrder(node.left)
    console.log(node.data)
    this.inOrder(node.right)
  }
  // left,right,root
  BST.prototype.postOrder = function(node) {
    if (!node) return
    this.postOrder(node.left)
    this.postOrder(node.right)
    console.log(node.data)
  }
  BST.prototype.DFT = function(type) {
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
  return BST
})()
exports['default'] = BST
var t = new BST()
t.insert(12)
t.insert(5)
t.insert(15)
t.insert(3)
t.insert(7)
t.insert(13)
t.insert(17)
t.insert(1)
t.insert(9)
t.insert(4)
// console.log(t.max());
// console.log(t.min());
// console.log(t.size());
// console.log(t.search(14));
// console.log(t.height());
// t.DFT("inOrder");
t.BFT()
// console.log("-----");
t['delete'](3)
console.log('-----')
t.BFT()
// t.DFT("inOrder");

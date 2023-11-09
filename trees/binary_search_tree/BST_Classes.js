class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new Node(val);

    if (this.root === null) {
      this.root = node;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (val < current.value) {
        if (current.left === null) {
          current.left = node;
          return this;
        } else {
          current = current.left;
        }
      } else if (val > current.value) {
        if (current.right === null) {
          current.right = node;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  find(val) {
    if (val === null || this.root === null) return null;

    let current = this.root;
    let isFound = false;

    while (current && !isFound) {
      if (val < current.value) {
        current = current.left;
      } else if (val > current.value) {
        current = current.right;
      } else {
        isFound = true;
      }
    }
    if (!found) return null;
    return current;
  }
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);

console.log(tree);
